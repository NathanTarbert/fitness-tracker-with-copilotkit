import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("username");
    if (storedUserName) {
      setUserName(storedUserName);
      console.log({ localStorage });
    }
  }, []);

  const handleSignOut = (event: MouseEvent<HTMLButtonElement>) => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
    router.push("/login");
  };

  return (
    <nav className="flex justify-around px-20 py-5 border-b-2 bg-slate-50">
      <Link className="hover:underline" href="/">
        Fitness Tracker
      </Link>
      <Link className="hover:underline" href="/create">
        Custom Fitness
      </Link>
      <Link className="hover:underline" href="/reports">
        Reports
      </Link>

      <button
        className="px-4 py-2 bg-red-500 text-red-50 rounded-md"
        onClick={handleSignOut}>
        Sign Out
      </button>
    </nav>
  );
}
