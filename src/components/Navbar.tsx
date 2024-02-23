import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full py-8 pl-8 bg-blue-400 flex justify-start gap-2">
      <Link href="/allLeads">
        <button className="px-4 py-2 bg-white rounded-md font-semibold">
          All Leads
        </button>
      </Link>
      <Link href="/leads">
        <button className="px-4 py-2 bg-white rounded-md font-semibold">
          Submit Leads
        </button>
      </Link>
    </div>
  );
}
