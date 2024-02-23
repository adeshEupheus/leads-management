import { getAreaHead, getLead, getStateHead, getZonalHead } from "@/api/Apis";
import Navbar from "@/components/Navbar";
import returnToken from "@/util/checkToken";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  if (returnToken() === false) {
    redirect("/login");
  }
  const lead: any = await getLead(params.slug);
  const areaHeadsData = await getAreaHead(lead.areaHead.toString());
  const stateHeadsData = await getStateHead(lead.stateHead.toString());
  const zonalHeadsData = await getZonalHead(lead.zonalHead.toString());

  console.log(lead);

  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-wrap gap-6 bg-slate-200 py-10 px-8">
        <p>School Name: {lead?.schoolName ? lead?.schoolName : "N/A"},</p>
        <p>City: {lead?.city ? lead?.city : "N/A"},</p>
        <p>State: {lead?.state ? lead?.state : "N/A"},</p>
        <p>
          Number of Students:{" "}
          {lead?.numberOfStudents ? lead?.numberOfStudents : "N/A"},
        </p>
        <p>Area Head: {areaHeadsData?.name ? areaHeadsData?.name : "N/A"},</p>
        <p>
          State Head: {stateHeadsData?.name ? stateHeadsData?.name : "N/A"},
        </p>
        <p>
          Zonal Head: {zonalHeadsData?.name ? zonalHeadsData?.name : "N/A"},
        </p>
        <p>EL Sales POC: {lead?.elSalesPoc ? lead?.elSalesPoc : "N/A"},</p>
        <p>
          Verion proposed :{" "}
          {lead?.versionProposed ? lead?.versionProposed : "N/A"},
        </p>

        <p>
          Pricing proposed :{" "}
          {lead?.pricingProposed ? lead?.pricingProposed : "N/A"},
        </p>

        <p>
          Pricing Finalized :{" "}
          {lead?.pricingFinalized ? lead?.pricingFinalized : "N/A"},
        </p>
        <p>
          Proposal Sent : {lead?.proposalSent ? lead?.proposalSent : "N/A"},
        </p>
        <p>Demo Done : {lead?.demoDone ? lead?.demoDone : "N/A"},</p>
        <p>
          Interested In Sm :{" "}
          {lead?.interestedInSm ? lead?.interestedInSm : "N/A"},
        </p>
        <p>
          Tid Generated : {lead?.TidGenerated ? lead?.TidGenerated : "N/A"},
        </p>
        <p>
          Whatsapp Group Creaded :{" "}
          {lead?.whatsappGroupCreaded ? lead?.whatsappGroupCreaded : "N/A"},
        </p>

        <p>
          Account Setup Done :{" "}
          {lead?.accountSetupDone ? lead?.accountSetupDone : "N/A"},
        </p>
        <p>
          Training Done : {lead?.trainingDone ? lead?.trainingDone : "N/A"},
        </p>
        <p>Invoice Raised : {lead?.invRaised ? lead?.invRaised : "N/A"},</p>
        <p>
          Payment recieved by Sm :{" "}
          {lead?.paymentRecievedBySm ? lead?.paymentRecievedBySm : "N/A"}
        </p>
      </div>
    </>
  );
}
