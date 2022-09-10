import { useForm } from "react-hook-form";
import { checkUserEmail, loginUser } from "@/api/auth/services";
import { Link } from "react-router-dom";
import { AuthRoutes } from "@/shared/constants/routes";
import SexyInput from "@/shared/components/sexy-input";
import TextButton from "@/shared/components/text-button";
import { useSetRecoilState } from "recoil";
import { meAtom } from "@/stores/auth";
import { useRef, useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginForm() {
  // Init login form.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const setMe = useSetRecoilState(meAtom);

  /**
   * Login form handler when the form is valid.
   */
  const onFormValid = async ({ email, password }: LoginForm) => {
    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      // Check the email is valid.
      const {
        code: checkCode,
        data: checkData,
        message: checkMessage,
      } = await checkUserEmail({ email: trimmedEmail });

      if (checkCode !== 200 || !checkData) {
        alert(checkMessage);
        return;
      }

      // call login api.
      const {
        code: loginCode,
        data: loginData,
        message: loginMessage,
      } = await loginUser({ email: trimmedEmail, password: trimmedPassword });

      alert(checkMessage);
      if (loginCode !== 200 || !loginData) return;

      setMe({ isLoggedIn: true, accessToken: loginData ?? "testKey" });
    } catch (err) {
      console.error("[onFormValid]", err);
    }
  };

  // For test.
  const titleClickedCount = useRef(0);
  const onTitleClick = () => {
    if (titleClickedCount.current >= 10) {
      setMe({
        isLoggedIn: true,
        accessToken: "testKey",
      });
    } else {
      titleClickedCount.current += 1;
    }
  };

  return (
    <>
      {/* Title */}
      <div className="flex justify-center mb-10">
        <h1 onClick={onTitleClick} className="text-2xl tracking-wider">
          Daybook에 로그인하세요.
        </h1>
      </div>

      {/* Form */}
      <form
        className="flex flex-col gap-3 text-sm"
        onSubmit={handleSubmit(onFormValid)}
      >
        <SexyInput
          register={register("email", {
            required: "Email is required.",
          })}
          type="email"
          placeholder="Email"
          error={errors.email?.message}
        />

        <SexyInput
          register={register("password", {
            required: "Password is required.",
          })}
          type="password"
          placeholder="Password"
          error={errors.password?.message}
        />

        <TextButton text="Login" />
      </form>

      {/* Others */}
      <div className="flex flex-col justify-center items-center text-sm">
        <p className="flex gap-1">
          <span className="opacity-50">Don't have a Daybook ID?</span>
          <Link to={AuthRoutes.Join}>
            <span className="text-indigo-400 cursor-pointer">Make it now.</span>
          </Link>
        </p>
      </div>
    </>
  );
}
