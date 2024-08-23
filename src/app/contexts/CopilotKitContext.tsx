'use client'

import React, { createContext, useContext, useState, useEffect, useRef, ReactNode, useCallback, useMemo } from 'react';
import { CopilotKit, CopilotContextParams, DocumentPointer } from "@copilotkit/react-core";
import { generateSummary, SessionNotes, SessionContext, generateActionPlan, SessionData, getRealTimeTips, findResources, trackProgress, Goal, sendMotivationalMessages, GoalProgress, MotivationalMessage } from '@/app/utils/AIhelpers';
// import { ExtendedDocumentPointer } from '@/app/types/DocumentPointer';
// import { useToast } from '@/components/ui/use-toast';
// import { supabase } from '@/app/utils/supabase/client';
// import { useSupabase } from '@/app/contexts/supabaseContext';
// import { useMakeCopilotReadable } from '@/app/hooks/useCopilotReadable';
// import SuggestionComponent from '@/app/hooks/AIChatSuggestions';
// import useResearchAction from '@/app/hooks/useResearchAction';
// import { useAISuggestions } from '@/app/hooks/useAISuggestions';
// import { ExtendedCopilotContextParams, Message } from '@/app/types/copilot';
// import { getCachedContent, setCachedContent } from '@/app/utils/contentCache';
// import { detectContentType } from '@/app/utils/contentTypeDetector';
// import { logger } from '@/app/utils/logger';
// import { useAbortController } from '@/app/hooks/useAbortController';
// import useNavigation from '@/app/hooks/useNavigation';
// import { AuthNavigationProvider, useAuthNavigation, NavigationView } from '@/app/contexts/AuthContext';
// import useFileSavingAction, { FileSavingFunction } from '@/app/hooks/useFileSavingAction';
// import useSaveAttachmentAction from '@/app/hooks/useSaveAttachmentAction';
// import useEnhancedCopilotSuggestions from '@/app/hooks/useCopilotChatSuggestions';
// import { DataFetchError } from '@/app/errors/DataFetchError';
// import { isInteleosCxDocument, isSpreadsheetData } from '@/app/utils/typeGuard';
// import Action, { FrontendAction } from '@copilotkit/react-core/dist/types/frontend-action';
// import { FrontendAction }from '@copilotkit/react-core/src/types/frontend-action';
// import { FcApproval, FcCancel, FcHighPriority } from "react-icons/fc";
// import { research } from '@/app/hooks/tavily';
// import useWebBrowserAction from '@/app/hooks/useWebBrowserAction';
// import { AICoachingDashboard } from '@/app/components/ai/AIDashboard';
// import { SessionSummary } from '@/app/utils/AIhelpers';
// import MyApp from '../pages/_app';
import RootLayout from '../layout';
// import { isValidParsedJSON } from '@/app/utils/typeGuard';

// import { SpreadsheetData } from '@/app/types/types';

type InChatRenderFunction = (args: any) => JSX.Element;

export type { ExtendedCopilotContextParams };

interface CopilotKitContextProviderProps {
    children: ReactNode;
  }

  interface CustomFrontendAction<T> extends FrontendAction<any> {
    execute: (query: string) => Promise<string>;
  }

function returnAndThrowInDebug<T>(value: T): T {
    throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
    return value;
  }

export const CopilotKitContext = createContext<ExtendedCopilotContextParams | undefined>(undefined);

export const useCopilotKit = (): ExtendedCopilotContextParams => {
  const context = useContext(CopilotKitContext);
  if (context === undefined) {
    throw new Error('useCopilotKit must be used within a CopilotKitContextProvider');
  }
  return context;
};

export const CopilotKitContextProvider: React.FC<CopilotKitContextProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatInstructions, setChatInstructions] = useState('');
  const [currentSpreadsheet, setCurrentSpreadsheet] = useState<SpreadsheetData>({
    title: 'Default Spreadsheet',
    rows: [],
    contentType: 'json'
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const { toast } = useToast();
  const { reloadSuggestions } = useAISuggestions();
  const [currentSuggestions, setCurrentSuggestions] = useState<any[]>([]);
  const { getSignal } = useAbortController();
  const [currentView, setCurrentView] = useState<NavigationView>('signin');
  const { navigate } = useNavigation(setCurrentView);
  const fileSavingAction = useFileSavingAction();
  const { saveAttachment, fetchAttachment } = useSaveAttachmentAction();
  const [documentData, setDocumentData] = useState<{ content: string; cx_data: string }>({ content: '', cx_data: '' });
  const chatComponentsCache = useRef<Record<string, string | InChatRenderFunction>>({});
  const { supabase } = useSupabase();
  const researchActionHook = useResearchAction();
  const authContext = useAuthNavigation();
  const { browserUrl } = useWebBrowserAction();

  const handleGenerateSummary = async (sessionNotes: SessionNotes) => {
    try {
      const summary = await generateSummary(sessionNotes);
      // Update your component state or perform other actions with the summary
      logger.info('Generated summary:', summary.summary_content);
    } catch (error) {
      logger.error('Failed to generate summary:', error);