"use client";

import { logIn } from "@/api/Apis";
import TextInput from "@/components/TextInput";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: { email?: string; password?: string } = {};
      console.log(errors);

      if (values.email === "") {
        errors.email = "Please enter your email";
      }
      if (values.password === "") {
        errors.password = "Please enter your password";
      }
      console.log(errors);
      console.log(formik.errors.email);

      if (errors.email || errors.password) {
        return errors;
      }
    },
    onSubmit: async (values) => {
      const res = await logIn(formik.values.email, formik.values.password);
      console.log(res);
      if (res.status === 200) {
        Cookies.set("token", res.token!);
        router.push("/leads");
      } else {
        if (res.status === 401) {
          formik.errors.password = "Wrong Password";
        } else if (res.status === 404) {
          formik.errors.email = "We couldn't find an account with this email";
        }
      }
    },
  });
  return (
    <div className="w-[100vw] flex justify-center items-center min-h-screen bg-blue-100">
      <div
        className="p-10 w-fit flex flex-col gap-4 justify-center items-center rounded-2xl "
        style={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          background: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <h1 className="font-semibold text-xl">Welcome back</h1>
        <h1 className="font-semibold text-xl">
          Please enter your details to login
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">E-mail Address</h1>
          <TextInput
            label="E-mail"
            handleChange={(val) => {
              formik.values.email = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.email ? formik.errors.email : ""}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Password</h1>
          <TextInput
            label="Password"
            type="password"
            handleChange={(val) => {
              formik.values.password = val;
            }}
          />
          <p className="text-red-500 italic">
            {formik.errors.password ? formik.errors.password : ""}
          </p>
        </div>
        <button
          className="bg-gray-700 mt-4 text-white px-16 w-fit py-2 hover:shadow-2xl transition-all ease-linear duration-200 rounded-md font-semibold"
          onClick={() => formik.handleSubmit()}
          type="submit"
        >
          Login
        </button>
      </div>
    </div>
  );
}
