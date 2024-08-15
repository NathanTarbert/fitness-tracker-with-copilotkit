import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const handleSignOut = (event: MouseEvent<HTMLButtonElement>) => {
    // Clear user data from storage
    localStorage.removeItem("userToken");
    sessionStorage.removeItem("userSession");

    // Redirect to the login page
    router.push("/login");
  };

  return (
    <nav className="px-4 py-3 bg-blue-50 h-[10vh] flex items-center justify-between">
      <h3 className="font-bold text-xl">Hi-Fi Inc.</h3>
      <button
        className="px-4 py-2 bg-red-500 text-red-50 rounded-md"
        onClick={handleSignOut}>
        Sign Out
      </button>
    </nav>
  );
}
