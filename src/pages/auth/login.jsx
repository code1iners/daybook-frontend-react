import MainBody from "@/layouts/main-body";
import { useEffect, useState } from "react";
import login from "@/assets/styles/login.css";
import { useForm } from "react-hook-form";
import SexyButton from "@/components/sexy-horizontal-button";
import { TransitionGroup,CSSTransition } from "react-transition-group";

export default function Login() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let check = null;

  console.log(errors);
  const { 
    email,
    pw,
    pw2,
    name
   } = getValues();

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
                required: "이메일은 필수 입력입니다",
                pattern: {
                  value: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
                  message: "이메일 형식에 맞지 않습니다",
                },
              })}
              type="text"
            />
          </li>
          {errors.email && <small role="alert">{errors.email.message}</small>}
          { (!errors.email && email) &&
          <CSSTransition in={(!errors.email && email)} timeout={1000} className="pw1ani">
            <li>
              <label>패스워드</label>
              <input
                id="pw"
                name="pw"
                {...register("pw", {
                  required: "패스워드는 필수값 입니다",
                  minLength: {
                    value: 8,
                    message: "8자리 이상 비밀번호를 사용하세요.",
                  },
                })}
                type="password"
              />
            </li>
          </CSSTransition>
          }
          {errors.pw && <small role="alert">{errors.pw.message}</small>}
          
          { (!errors.pw && pw) &&
          <CSSTransition in={!errors.pw} timeout={500} className="pw1_ani">
            <li>
              <label>패스워드 확인</label>
              <input
                id="pw2"
                name="pw2"
                {...register("pw2", {
                  required: "패스워드를 입력 바랍니다",
                  validate: {
                    matchPassword: (value) => {
                      return pw === value || "비밀번호가 일치하지 않습니다";
                    },
                  },
                })}
                type="password"
              />
            </li>
          </CSSTransition>
          }
          {errors.pw2 && <small role="alert">{errors.pw2.message}</small>}

          { (!errors.pw2 && pw2) &&
          <CSSTransition in={!errors.pw2} timeout={500} className="pw1_ani">
            <li>
              <label>닉네임</label>
              <input
                {...register("name", {
                  required: "닉네임을 입력 바랍니다",
                  minLength: {
                    value: 2,
                    message: "2자리 이상 비밀번호를 사용하세요.",
                  },
                })}
                type="text"
              />
            </li>
          </CSSTransition>
          }
          {errors.name && <small role="alert">{errors.name.message}</small>}
        </ul>
        <SexyButton />
      </form>
    </MainBody>
  );
}
