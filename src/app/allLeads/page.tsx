import {
  getAllLeads,
  getAreaHead,
  getStateHead,
  getZonalHead,
} from "@/api/Apis";
import Link from "next/link";
// import { useEffect, useState } from "react";

export default async function AllLeads() {
  //   const [allLeads, setAllLeads] = useState<any[]>([]);
  //   console.log(allLeads);

  //   useEffect(() => {
  //     const getLeads = async () => {
  //       const allLeads = await getAllLeads();
  //       setAllLeads(allLeads);
  //     };
  //     getLeads();
  //   }, []);

  const allLeads: any[] = await getAllLeads();

  return (
    <div className="min-h-screen flex flex-col gap-4 py-8 px-4 bg-gray-100">
      {allLeads.map((lead) => {
        return <Lead key={lead.id} {...lead} />;
      })}
    </div>
  );
}

const Lead = async (Lead: Lead) => {
  const areaHeadsData = await getAreaHead(Lead.areaHead.toString());
  const stateHeadsData = await getStateHead(Lead.stateHead.toString());
  const zonalHeadsData = await getZonalHead(Lead.zonalHead.toString());

  return (
    <Link href={`/lead/${Lead.id}`}>
      <div className="w-full flex gap-2 font-semibold bg-slate-300 rounded-lg shadow-2xl p-4 cursor-pointer">
        <p>School Name: {Lead.schoolName}</p>,<p>City: {Lead.city}</p>,
        <p>State: {Lead.state}</p>,
        <p>Number of Students: {Lead.numberOfStudents.toString()}</p>,
        <p>Area Head: {areaHeadsData?.name}</p>,
        <p>State Head: {stateHeadsData?.name}</p>,
        <p>Zonal Head: {zonalHeadsData?.name}</p>
        <p>EL Sales POC: {Lead.elSalesPoc}</p>
        <p>...</p>
      </div>
    </Link>
  );
};
