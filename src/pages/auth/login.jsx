import MainBody from "@/layouts/main-body";
import { useEffect, useState } from "react";

export default function Login() {
  const [value, setValue] = useState();
  // const value = ref()

  // Life cycles
  useEffect(() => {
    setTimeout(() => {
      setValue("world");
    }, 3000);
  });

  return <MainBody>{value}</MainBody>;
}
