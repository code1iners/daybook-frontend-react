import MainBody from "@/layouts/main-body";
import { useEffect, useState } from "react";
import login from "@/assets/styles/login.css";
import { useForm } from "react-hook-form";
import SexyButton from "@/components/sexy-horizontal-button";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let check = null;

  console.log(errors);

  const onSubmit = async (value) => {
    console.log(value);
    // if (!check || check == null) {
    //   if (!isValidEmail(data.id)) {
    //   } else {
    //     if (!isValidpassword) {
    //     }
    //   }
    // }
  };

  return (
    <MainBody>
      <form onSubmit={handleSubmit(onSubmit)} className="form-box">
        <ul className="row">
          <li>
            <label>아이디</label>
            <input
              id="email"
              name="email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
                  message: "email address",
                },
              })}
              type="text"
            />
          </li>
          <li>
            <label>패스워드</label>
            <input
              {...register("pw", {
                required: "Required",
                pattern: {
                  message: "pw2 address",
                },
              })}
              type="password"
            />
          </li>
          <li>
            <label>패스워드 확인</label>
            <input {...register("pw2")} type="password" />
          </li>
          <li>
            <label>닉네임</label>
            <input {...register("name")} type="text" />
          </li>
        </ul>
        {/* <p>{errors.email.message}</p> */}
        <SexyButton />
      </form>
    </MainBody>
  );
}
