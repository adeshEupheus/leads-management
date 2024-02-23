"use client";

import { AddLead, returnAreaHeads, returnStateAndZonalHeads } from "@/api/Apis";
import DropDown from "@/components/DropDown";
import TextInput from "@/components/TextInput";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Loader from "@/components/Loader";

export default function Home() {
  const formik = useFormik({
    initialValues: {
      schoolName: "",
      city: "",
      state: "",
      numOfStudent: "",
      areaHead: "",
      stateHead: "",
      zonalHead: "",
      ElSales: "",
      versionProposed: "",
      priceProposed: "",
      proposalSent: "",
      demoDone: "",
      interestedInSM: "",
      pricingFinalized: "",
      TidGenerated: "",
      whatsappGroupCreated: "",
      accSetupDone: "",
      trainingDone: "",
      invRaised: "",
      invAmount: "",
      paymentRecievedBySM: "",
    },
    validate: (values) => {
      const errors: {
        schoolName?: string;
        city?: string;
        state?: string;
        numOfStudent?: string;
        areaHead?: string;
        stateHead?: string;
        zonalHead?: string;
        ElSales?: string;
        versionProposed?: string;
        priceProposed?: string;
        proposalSent?: string;
        demoDone?: string;
        interestedInSM?: string;
        TidGenerated?: string;
        whatsappGroupCreated?: string;
        accSetupDone?: string;
        trainingDone?: string;
        invRaised?: string;
        invAmount?: string;
        paymentRecievedBySM?: string;
      } = {};
      console.log(errors);

      if (values.schoolName === "") {
        errors.schoolName = "Please enter your school name";
      }
      if (values.city === "") {
        errors.city = "Please enter your city";
      }
      if (values.state === "") {
        errors.state = "Please enter your state";
      }
      if (values.numOfStudent === "") {
        errors.numOfStudent = "Please enter number of students";
      }
      if (values.areaHead === "") {
        errors.areaHead = "Please enter your area head";
      }
      if (values.stateHead === "") {
        errors.stateHead = "Please enter your state head";
      }
      if (values.zonalHead === "") {
        errors.zonalHead = "Please enter your zonal head";
      }
      if (values.ElSales === "") {
        errors.ElSales = "Please enter your expected sales";
      }
      // if (values.versionProposed === "") {
      //   errors.versionProposed = "Please enter your version proposed";
      // }
      // if (values.priceProposed === "") {
      //   errors.priceProposed = "Please enter your price proposed";
      // }
      // if (values.proposalSent === "") {
      //   errors.proposalSent = "Please enter your proposal sent";
      // }
      // if (values.demoDone === "") {
      //   errors.demoDone = "Please enter your demo done";
      // }
      // if (values.interestedInSM === "") {
      //   errors.interestedInSM = "Please enter your interested in SM";
      // }
      // if (values.TidGenerated === "") {
      //   errors.TidGenerated = "Please enter your Tid Generated";
      // }
      // if (values.whatsappGroupCreated === "") {
      //   errors.whatsappGroupCreated =
      //     "Please enter your whatsapp group created";
      // }
      // if (values.accSetupDone === "") {
      //   errors.accSetupDone = "Please enter your account setup done";
      // }
      // if (values.trainingDone === "") {
      //   errors.trainingDone = "Please enter your training done";
      // }
      // if (values.invRaised === "") {
      //   errors.invRaised = "Please enter your invoice raised";
      // }
      // if (values.invAmount === "") {
      //   errors.invAmount = "Please enter your invoice amount";
      // }
      // if (values.paymentRecievedBySM === "") {
      //   errors.paymentRecievedBySM = "Please enter your payment recieved by SM";
      // }

      if (
        errors.schoolName ||
        errors.city ||
        errors.state ||
        errors.numOfStudent ||
        errors.areaHead ||
        errors.stateHead ||
        errors.zonalHead ||
        errors.ElSales
      ) {
        return errors;
      }
    },
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      const res = await AddLead(
        values.schoolName,
        values.city,
        values.state,
        Number(values.numOfStudent),
        values.areaHead,
        values.stateHead,
        values.zonalHead,
        values.ElSales,
        values.versionProposed ? values.versionProposed : undefined,
        values.priceProposed ? values.priceProposed : undefined,
        values.proposalSent
          ? values.proposalSent === "Yes"
            ? true
            : false
          : undefined,
        values.demoDone
          ? values.demoDone === "Yes"
            ? true
            : false
          : undefined,
        values.interestedInSM
          ? values.interestedInSM === "Yes"
            ? true
            : false
          : undefined,
        values.TidGenerated
          ? values.TidGenerated === "Yes"
            ? true
            : false
          : undefined,
        values.whatsappGroupCreated
          ? values.whatsappGroupCreated === "Yes"
            ? true
            : false
          : undefined,
        values.trainingDone
          ? values.trainingDone === "Yes"
            ? true
            : false
          : undefined,
        values.invRaised
          ? values.invRaised === "Yes"
            ? true
            : false
          : undefined,
        values.invAmount ? values.invAmount : undefined,
        values.accSetupDone
          ? values.accSetupDone === "Yes"
            ? true
            : false
          : undefined,
        values.paymentRecievedBySM
          ? values.paymentRecievedBySM === "Yes"
            ? true
            : false
          : undefined,
        Cookies.get("token")!
      );
      setLoading(false);
      console.log(res);

      if (res.status === 200) {
        alert("Lead Added Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        alert("Something went wrong");
      }
    },
  });
  const states = [
    { label: "Andhra Pradesh" },
    { label: "Arunachal Pradesh" },
    { label: "Assam" },
    { label: "Bihar" },
    { label: "Chhattisgarh" },
    { label: "Goa" },
    { label: "Gujarat" },
    { label: "Haryana" },
    { label: "Himachal Pradesh" },
    { label: "Jharkhand" },
    { label: "Karnataka" },
    { label: "Kerala" },
    { label: "Madhya Pradesh" },
    { label: "Maharashtra" },
    { label: "Manipur" },
    { label: "Meghalaya" },
    { label: "Mizoram" },
    { label: "Nagaland" },
    { label: "Odisha" },
    { label: "Punjab" },
    { label: "Rajasthan" },
    { label: "Sikkim" },
    { label: "Tamil Nadu" },
    { label: "Telangana" },
    { label: "Tripura" },
    { label: "Uttar Pradesh" },
    { label: "Uttarakhand" },
    { label: "West Bengal" },
  ];
  const data = [{ label: "Yes" }, { label: "No" }];
  const [areaHeads, setAreaHeads] = useState<
    {
      id: string;
      label: string;
      fk_managerId: string;
    }[]
  >([]);
  useEffect(() => {
    const getAreaHeads = async () => {
      const res = await returnAreaHeads();
      const areaHeads = res.map((areaHead) => ({
        id: areaHead.id,
        label: areaHead.name,
        fk_managerId: areaHead.fk_managerId,
      }));
      setAreaHeads(areaHeads);
    };
    getAreaHeads();
  }, []);
  const [managerData, setManagerData] = useState<{
    stateHeadId: string;
    stateHead: string;
    zonalHeadId: string;
    zonalHead: string;
  }>({ stateHeadId: "", stateHead: "", zonalHeadId: "", zonalHead: "" });

  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen py-8 flex flex-col md:items-stretch items-center">
      <span className="text-3xl font-bold mb-4 ml-8">Fill The Details</span>
      <Loader loading={loading} />
      <div className="w-[100w] grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-10 lg:grid-rows-7 grid-cols-1 grid-rows-[21] gap-4 py-8 md:justify-items-start justify-items-center md:ml-8">
        <div className="flex flex-col gap-1">
          <TextInput
            label="Name of School"
            handleChange={(val) => {
              formik.values.schoolName = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.schoolName ? formik.errors.schoolName : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <TextInput
            label="City"
            handleChange={(val) => {
              formik.values.city = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.city ? formik.errors.city : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <DropDown
            label="State"
            handleChange={(val) => {
              formik.values.state = val.label;
            }}
            data={states}
          />
          <p className="text-red-500 italic">
            {formik.errors.state ? formik.errors.state : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <TextInput
            label="Number of Students"
            type="number"
            handleChange={(val) => {
              formik.values.numOfStudent = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.numOfStudent ? formik.errors.numOfStudent : ""}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <DropDown
            label="Area Head"
            handleChange={async (val) => {
              setLoading(true);
              const data = await returnStateAndZonalHeads(val.fk_managerId);
              setLoading(false);
              setManagerData(data);
              formik.values.areaHead = val.id;
              formik.values.stateHead = val.fk_managerId;
              formik.values.zonalHead = data.zonalHeadId;
            }}
            data={areaHeads}
          />
          <p className="text-red-500 italic">
            {formik.errors.areaHead ? formik.errors.areaHead : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <TextInput
            placeholder="State Head"
            value={managerData?.stateHead}
            readOnly={true}
          />
        </div>

        <div className="flex flex-col gap-1">
          <TextInput
            placeholder="Zonal Head"
            value={managerData?.zonalHead}
            readOnly={true}
          />
        </div>
        <div className="flex flex-col gap-1">
          <TextInput
            label="EL Sales POC"
            handleChange={(val) => {
              formik.values.ElSales = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.ElSales ? formik.errors.ElSales : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <TextInput
            label="Version Proposed"
            handleChange={(val) => {
              formik.values.versionProposed = val;
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <TextInput
            label="Pricing Proposed"
            handleChange={(val) => {
              formik.values.priceProposed = val;
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <TextInput
            label="Pricing Finalized ?"
            handleChange={(val) => {
              formik.values.pricingFinalized = val;
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <DropDown
            label="Proposal Sent ?"
            handleChange={(val) => {
              formik.values.proposalSent = val.label;
            }}
            data={data}
          />
        </div>

        <div className="flex flex-col gap-1">
          <DropDown
            label="Demo Done ?"
            handleChange={(val) => {
              formik.values.demoDone = val.label;
            }}
            data={data}
          />
        </div>

        <div className="flex flex-col gap-1">
          <DropDown
            label="Interested in SM ?"
            handleChange={(val) => {
              formik.values.interestedInSM = val.label;
            }}
            data={data}
          />
        </div>
        <div className="flex flex-col gap-1">
          <DropDown
            label="Tid Generated ?"
            handleChange={(val) => {
              formik.values.TidGenerated = val.label;
            }}
            data={data}
          />
        </div>

        <div className="flex flex-col gap-1">
          <DropDown
            label="Whatsapp Group Created ?"
            handleChange={(val) => {
              formik.values.whatsappGroupCreated = val.label;
            }}
            data={data}
          />
        </div>
        <div className="flex flex-col gap-1">
          <DropDown
            label="Account Setup Done ?"
            handleChange={(val) => {
              formik.values.accSetupDone = val.label;
            }}
            data={data}
          />
        </div>
        <div className="flex flex-col gap-1">
          <DropDown
            label="Training Done ?"
            handleChange={(val) => {
              formik.values.trainingDone = val.label;
            }}
            data={data}
          />
        </div>
        <div className="flex flex-col gap-1">
          <DropDown
            label="Invoice Raised ?"
            handleChange={(val) => {
              formik.values.invRaised = val.label;
            }}
            data={data}
          />
        </div>

        <div className="flex flex-col gap-1">
          <TextInput
            label="Invoice Amount ?"
            type="number"
            handleChange={(val) => {
              formik.values.invAmount = val;
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <DropDown
            label="Payment Recieved By SM ?"
            handleChange={(val) => {
              formik.values.paymentRecievedBySM = val.label;
            }}
            data={data}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white px-16 w-fit py-2 hover:shadow-2xl transition-all ease-linear duration-200 rounded-md font-semibold ml-8"
        onClick={() => formik.handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
}
