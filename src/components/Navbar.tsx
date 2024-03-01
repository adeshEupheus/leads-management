"use client";

import { logout } from "@/lib/logout";
import { useUserStore } from "@/store/store";
import { Logout } from "@mui/icons-material";
import Link from "next/link";

export default function Navbar() {
  const userEmail = useUserStore((state: any) => state.userEmail);

  const result = () => {
    if (userEmail === "hdfcHead@eupheus.in") {
      return null;
    } else {
      return (
        <Link href="/leads">
          <button className="px-4 py-2 bg-white rounded-md font-semibold">
            Submit Leads
          </button>
        </Link>
      );
    }
  };

  return (
    <div className="w-full py-8 px-8 bg-blue-400 flex justify-between gap-2">
      <div className="flex gap-2">
        <Link href="/allLeads">
          <button className="px-4 py-2 bg-white rounded-md font-semibold">
            All Leads
          </button>
        </Link>

        {result()}
      </div>
      <button
        className="px-4 py-2 bg-white rounded-md font-semibold"
        onClick={logout}
      >
        Logout <Logout />
      </button>
    </div>
  );
}
