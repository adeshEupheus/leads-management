import {
  getAllLeads,
  getAreaHead,
  getStateHead,
  getZonalHead,
} from "@/api/Apis";
import Navbar from "@/components/Navbar";
import returnToken from "@/util/checkToken";
import Link from "next/link";
import { redirect } from "next/navigation";
import { DataGrid } from "@mui/x-data-grid";
import Table from "./Table";

// import { useEffect, useState } from "react";

export default async function AllLeads() {
  const allLeads: any[] = await getAllLeads();
  if (returnToken() === false) {
    redirect("/login");
  }

  const rows = allLeads.map((lead) => {
    return {
      ...lead,
      areaHead: lead.fk_areaHead.name,
      stateHead: lead.fk_stateHead.name,
      zonalHead: lead.fk_zonalHead.name,
    };
  });

  return (
    <>
      <Navbar />
      <div className=" flex flex-col gap-4 py-8 px-4 bg-gray-100">
        <Table rows={rows} />
      </div>
    </>
  );
}
