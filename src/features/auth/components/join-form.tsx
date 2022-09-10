import { useForm } from "react-hook-form";
import { joinUser } from "@/api/auth/services";
import SexyInput from "@/shared/components/sexy-input";
import TextButton from "@/shared/components/text-button";
import { Link, useNavigate } from "react-router-dom";
import { AuthRoutes } from "@/shared/constants/routes";

interface JoinForm {
  userEmail: string;
  userName: string;
  password: string;
  confirmPassword: string;
  birthday: string;
}

export default function JoinForm() {
  const navigator = useNavigate();

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<JoinForm>();

  /**
   * Join process handler when the form is valid.
   */
  const onFormValid = async ({
    userEmail,
    userName,
    password,
    birthday,
  }: JoinForm) => {
    try {
      const trimmedEmail = userEmail.trim();
      const trimmedName = userName.trim();
      const trimmedPassword = password.trim();

      // Join a new user.
      const { code, message } = await joinUser({
        email: trimmedEmail,
        name: trimmedName,
        password: trimmedPassword,
        birthday,
      });

      alert(message);

      switch (code) {
        case 200:
          navigator(AuthRoutes.Login);
          break;
      }
    } catch (err) {
      console.error("[onFormValid]", err);
    }
  };

  /**
   * Checking password is valid.
   */
  const isPasswordValid = (password: string) => {
    const trimmedPassword = password.trim();

    const hasEnglish = /[a-zA-Z]/g.test(trimmedPassword);
    if (!hasEnglish) return "Password must be contains english.";

    const hasNumbers = /[0-9]/g.test(trimmedPassword);
    if (!hasNumbers) return "Password must be contains numbers.";

    const hasSpecialCharacters = /[^A-z\s\d][\\\^]?/g.test(trimmedPassword);
    if (!hasSpecialCharacters)
      return "Password must be contains special characters.";

    return true;
  };

  /**
   * Checking password & Confirm password is matched.
   */
  const isPasswordMatched = (confirmPassword: string) => {
    const currentPassword = getValues("password").trim();
    const currentConfirmPassword = confirmPassword.trim();
    return (
      currentPassword === currentConfirmPassword ||
      "The password is not matched."
    );
  };

  return (
    <>
      {/* Title */}
      <div className="flex justify-center mb-10">
        <h1 className="text-2xl tracking-wider">Daybook ID 생성.</h1>
      </div>

      {/* Form */}
      <form
        className="flex flex-col gap-3 text-sm"
        onSubmit={handleSubmit(onFormValid)}
      >
        <SexyInput
          register={register("userEmail", {
            required: "Email is required.",
          })}
          error={errors.userEmail?.message}
          placeholder="Email"
          type="email"
        />

        <SexyInput
          register={register("userName", {
            required: "Username is required.",
          })}
          error={errors.userName?.message}
          placeholder="Username"
        />

        <SexyInput
          register={register("birthday", {
            required: "Birthday is required.",
          })}
          error={errors.birthday?.message}
          placeholder="Birthday"
          type="date"
        />

        <SexyInput
          register={register("password", {
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
            maxLength: {
              value: 20,
              message: "Password must be 20 characters or less.",
            },
            validate: isPasswordValid,
          })}
          error={errors.password?.message}
          placeholder="Password"
          type="password"
        />

        <SexyInput
          register={register("confirmPassword", {
            required: "Confirm password is required.",
            validate: isPasswordMatched,
          })}
          error={errors.confirmPassword?.message}
          placeholder="Confirm password"
          type="password"
        />

        <TextButton text="Join" />
      </form>

      {/* Others */}
      <div className="flex flex-col justify-center items-center text-sm">
        <p className="flex gap-1">
          <span className="opacity-50">Already have an Daybook ID?</span>
          <Link to={AuthRoutes.Login}>
            <span className="text-indigo-400 cursor-pointer">Login now.</span>
          </Link>
        </p>
      </div>
    </>
  );
}
