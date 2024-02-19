"use client";

import { AddLead } from "@/api/Apis";
import DropDown from "@/components/DropDown";
import TextInput from "@/components/TextInput";
import { useFormik } from "formik";
import React from "react";
import Cookies from "js-cookie";

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
      if (values.versionProposed === "") {
        errors.versionProposed = "Please enter your version proposed";
      }
      if (values.priceProposed === "") {
        errors.priceProposed = "Please enter your price proposed";
      }
      if (values.proposalSent === "") {
        errors.proposalSent = "Please enter your proposal sent";
      }
      if (values.demoDone === "") {
        errors.demoDone = "Please enter your demo done";
      }
      if (values.interestedInSM === "") {
        errors.interestedInSM = "Please enter your interested in SM";
      }
      if (values.TidGenerated === "") {
        errors.TidGenerated = "Please enter your Tid Generated";
      }
      if (values.whatsappGroupCreated === "") {
        errors.whatsappGroupCreated =
          "Please enter your whatsapp group created";
      }
      if (values.accSetupDone === "") {
        errors.accSetupDone = "Please enter your account setup done";
      }
      if (values.trainingDone === "") {
        errors.trainingDone = "Please enter your training done";
      }
      if (values.invRaised === "") {
        errors.invRaised = "Please enter your invoice raised";
      }
      if (values.invAmount === "") {
        errors.invAmount = "Please enter your invoice amount";
      }
      if (values.paymentRecievedBySM === "") {
        errors.paymentRecievedBySM = "Please enter your payment recieved by SM";
      }

      if (
        errors.schoolName ||
        errors.city ||
        errors.state ||
        errors.numOfStudent ||
        errors.areaHead ||
        errors.stateHead ||
        errors.zonalHead ||
        errors.ElSales ||
        errors.versionProposed ||
        errors.priceProposed ||
        errors.proposalSent ||
        errors.demoDone ||
        errors.interestedInSM ||
        errors.TidGenerated ||
        errors.whatsappGroupCreated ||
        errors.accSetupDone ||
        errors.trainingDone ||
        errors.invRaised ||
        errors.invAmount ||
        errors.paymentRecievedBySM
      ) {
        return errors;
      }
    },
    onSubmit: async (values) => {
      const res = await AddLead(
        values.schoolName,
        values.city,
        values.state,
        Number(values.numOfStudent),
        values.areaHead,
        values.stateHead,
        values.zonalHead,
        values.ElSales,
        values.versionProposed,
        values.priceProposed,
        values.proposalSent === "Yes" ? true : false,
        values.demoDone === "Yes" ? true : false,
        values.interestedInSM === "Yes" ? true : false,
        values.TidGenerated,
        values.whatsappGroupCreated === "Yes" ? true : false,
        values.trainingDone === "Yes" ? true : false,
        values.invRaised === "Yes" ? true : false,
        values.invAmount,
        values.accSetupDone === "Yes" ? true : false,
        values.paymentRecievedBySM === "Yes" ? true : false,
        Cookies.get("token")!
      );
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

  return (
    <div className="bg-gray-100 min-h-screen py-8 flex flex-col md:items-stretch items-center">
      <span className="text-3xl font-bold mb-4 ml-8">Fill The Details</span>
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
              formik.values.state = val;
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
          <TextInput
            label="Area Head"
            handleChange={(val) => {
              formik.values.areaHead = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.areaHead ? formik.errors.areaHead : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <TextInput
            label="State Head"
            handleChange={(val) => {
              formik.values.stateHead = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.stateHead ? formik.errors.stateHead : ""}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <TextInput
            label="Zonal Head"
            handleChange={(val) => {
              formik.values.zonalHead = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.zonalHead ? formik.errors.zonalHead : ""}
          </p>
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
          <p className="text-red-500 italic">
            {formik.errors.versionProposed ? formik.errors.versionProposed : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <TextInput
            label="Pricing Proposed"
            handleChange={(val) => {
              formik.values.priceProposed = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.priceProposed ? formik.errors.priceProposed : ""}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <DropDown
            label="Proposal Sent ?"
            handleChange={(val) => {
              formik.values.proposalSent = val;
            }}
            data={data}
          />
          <p className="text-red-500 italic">
            {formik.errors.proposalSent ? formik.errors.proposalSent : ""}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <DropDown
            label="Demo Done ?"
            handleChange={(val) => {
              formik.values.demoDone = val;
            }}
            data={data}
          />
          <p className="text-red-500 italic">
            {formik.errors.demoDone ? formik.errors.demoDone : ""}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <DropDown
            label="Interested in SM ?"
            handleChange={(val) => {
              formik.values.interestedInSM = val;
            }}
            data={data}
          />
          <p className="text-red-500 italic">
            {formik.errors.interestedInSM ? formik.errors.interestedInSM : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <TextInput
            label="TID Generated"
            handleChange={(val) => {
              formik.values.TidGenerated = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.TidGenerated ? formik.errors.TidGenerated : ""}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <DropDown
            label="Whatsapp Group Created ?"
            handleChange={(val) => {
              formik.values.whatsappGroupCreated = val;
            }}
            data={data}
          />
          <p className="text-red-500 italic">
            {formik.errors.whatsappGroupCreated
              ? formik.errors.whatsappGroupCreated
              : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <DropDown
            label="Account Setup Done ?"
            handleChange={(val) => {
              formik.values.accSetupDone = val;
            }}
            data={data}
          />
          <p className="text-red-500 italic">
            {formik.errors.accSetupDone ? formik.errors.accSetupDone : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <DropDown
            label="Training Done ?"
            handleChange={(val) => {
              formik.values.trainingDone = val;
            }}
            data={data}
          />
          <p className="text-red-500 italic">
            {formik.errors.trainingDone ? formik.errors.trainingDone : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <DropDown
            label="Invoice Raised ?"
            handleChange={(val) => {
              formik.values.invRaised = val;
            }}
            data={data}
          />
          <p className="text-red-500 italic">
            {formik.errors.invRaised ? formik.errors.invRaised : ""}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <TextInput
            label="Invoice Amount ?"
            type="number"
            handleChange={(val) => {
              formik.values.invAmount = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.invAmount ? formik.errors.invAmount : ""}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <DropDown
            label="Payment Recieved By SM ?"
            handleChange={(val) => {
              formik.values.paymentRecievedBySM = val;
            }}
            data={data}
          />
          <p className="text-red-500 italic">
            {formik.errors.paymentRecievedBySM
              ? formik.errors.paymentRecievedBySM
              : ""}
          </p>
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
