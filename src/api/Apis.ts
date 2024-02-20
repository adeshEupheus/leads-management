"use server";
import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
const cookieStore = cookies();

export async function AuthenticateMiddleware(token: string) {
  if (!token) {
    return { status: 401, message: "Unauthorized" };
  } else {
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return { status: 200, message: "success" };
    } catch (error) {
      console.log(error);

      return { status: 401, message: "Unauthorized" };
    }
  }
}

export async function AddLead(
  schoolName: string,
  city: string,
  state: string,
  numberOfStudents: number,
  areaHead: string,
  stateHead: string,
  zonalHead: string,
  elSalesPoc: string,
  versionProposed: string,
  pricingProposed: string,
  proposalSent: boolean,
  demoDone: boolean,
  interestedInSm: boolean,
  TidGenerated: boolean,
  whatsappGroupCreaded: boolean,
  trainingDone: boolean,
  invRaised: boolean,
  invAmount: string,
  accountSetupDone: boolean,
  paymentRecievedBySm: boolean,
  token: string
) {
  // Check token
  const res = await AuthenticateMiddleware(token);
  if (res.status === 401) {
    redirect("/login");
  } else {
    const newLead = await prisma.leads.create({
      data: {
        schoolName,
        city,
        state,
        numberOfStudents,
        areaHead,
        stateHead,
        zonalHead,
        elSalesPoc,
        versionProposed,
        pricingProposed,
        proposalSent,
        demoDone,
        interestedInSm,
        TidGenerated,
        whatsappGroupCreaded,
        trainingDone,
        invRaised,
        invAmount,
        accountSetupDone,
        paymentRecievedBySm,
      },
    });
    if (newLead) {
      return { status: 200, message: "success", data: newLead };
    } else {
      return { status: 500, message: "server errror" };
    }
  }
}

export async function logIn(email: string, password: string) {
  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return { status: 404, message: "user not found" };
  }

  if (!bcryptjs.compareSync(password, user.password)) {
    return { status: 401, message: "wrong password" };
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET!);

  return { status: 200, message: "success", token };
}

export async function SignUp() {
  const hash = bcryptjs.hashSync("sales@1234", 10);
  const newUser = await prisma.users.create({
    data: {
      email: "sales@eupheus.in",
      password: hash,
    },
  });
  console.log(newUser);
}
