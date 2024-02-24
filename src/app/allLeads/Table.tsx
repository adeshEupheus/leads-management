"use client";

import { DataGrid } from "@mui/x-data-grid";

const Table: React.FC<TableProps> = ({ rows }) => {
  const columns = [
    { field: "schoolName", headerName: "School Name", width: 250 },
    { field: "city", headerName: "City", width: 130 },
    { field: "numberOfStudents", headerName: "Number of Students", width: 180 },
    {
      field: "areaHead",
      headerName: "Area Head",
      width: 200,
    },
    {
      field: "stateHead",
      headerName: "State Head",
      width: 200,
    },
    {
      field: "zonalHead",
      headerName: "Zonal Head",
      width: 200,
    },
    {
      field: "elSalesPoc",
      headerName: "EL Sales POC",
      width: 200,
    },
    {
      field: "versionProposed",
      headerName: "Version Proposed",
      width: 200,
    },
    {
      field: "pricingProposed",
      headerName: "Pricing Proposed",
      width: 200,
    },
    {
      field: "pricingFinalized",
      headerName: "Pricing Finalized",
      width: 200,
    },
    {
      field: "proposalSent",
      headerName: "Proposal Sent",
      width: 200,
    },
    {
      field: "demoDone",
      headerName: "Demo Done",
      width: 200,
    },
    {
      field: "interestedInSm",
      headerName: "Interested in SM",
      width: 200,
    },
    {
      field: "TidGenerated",
      headerName: "TID Generated",
      width: 200,
    },
    {
      field: "whatsappGroupCreaded",
      headerName: "Whatsapp Group Creaded",
      width: 200,
    },
    {
      field: "accountSetupDone",
      headerName: "Account Setup Done",
      width: 200,
    },
    {
      field: "trainingDone",
      headerName: "Training Done",
      width: 200,
    },
    {
      field: "invRaised",
      headerName: "Invoice Raised",
      width: 200,
    },
    {
      field: "invAmount",
      headerName: "Invoice Amount",
      width: 200,
    },
    {
      field: "paymentRecievedBySm",
      headerName: "Payment Recieved By SM",
      width: 200,
    },
  ];
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10, 25, 50]}
    />
  );
};

export default Table;

interface TableProps {
  rows: Lead[];
}
