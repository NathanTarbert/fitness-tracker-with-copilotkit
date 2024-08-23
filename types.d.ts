interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface Todo2 {
  id: number;
  text: string;
  completed: boolean;
}
interface Invoice {
  id: number;
  status: "Paid" | "Pending" | "Overdue";
  amount: number;
  method: "Credit Card" | "Paypal" | "Bank Transfer";
}
interface Chart {
  month: string;
  calories: number;
  steps: number;
}
