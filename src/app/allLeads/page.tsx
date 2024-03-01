import {
  getAllLeads,
  getAreaHead,
  getStateHead,
  getZonalHead,
} from "@/api/Apis";
import Navbar from "@/components/Navbar";
import returnToken from "@/util/checkToken";
import { redirect } from "next/navigation";
import Table from "./Table";

// import { useEffect, useState } from "react";

export default async function AllLeads() {
  const allLeads: any[] = await getAllLeads();
  if (returnToken() === false) {
    redirect("/login");
  }

  const convertBool = (val: string | Boolean) => {
    if (val === true) {
      return "Yes";
    } else if (val === false) {
      return "No";
    } else {
      return val;
    }
  };

  const rows = allLeads.map((lead) => {
    return {
      ...lead,
      areaHead: lead.fk_areaHead.name,
      stateHead: lead.fk_stateHead.name,
      zonalHead: lead.fk_zonalHead.name,
      proposalSent: convertBool(lead.proposalSent),
      demoDone: convertBool(lead.demoDone),
      interestedInSm: convertBool(lead.interestedInSm),
      TidGenerated: convertBool(lead.TidGenerated),
      whatsappGroupCreaded: convertBool(lead.whatsappGroupCreaded),
      accountSetupDone: convertBool(lead.accountSetupDone),
      trainingDone: convertBool(lead.trainingDone),
      invRaised: convertBool(lead.invRaised),
      paymentRecievedBySm: convertBool(lead.paymentRecievedBySm),
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
