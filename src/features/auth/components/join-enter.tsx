import { motion, useAnimationControls } from "framer-motion";
import {
  textParentVariants,
  textChildVariants,
  buttonChildVariants,
} from "@/features/auth/variants/join-enter-variants";
import { useForm } from "react-hook-form";
import { useState } from "react";

const containerVariants = {};

export default function JoinEnter() {
  const containerControls = useAnimationControls();

  const onContinueClick = () => {
    containerControls.start({
      x: -window.innerWidth,
      transition: {
        duration: 1,
      },
    });
  };

  return (
    <article className="h-full max-w-lg mx-auto flex flex-col items-center justify-around text-white p-5">
      <motion.section
        className="space-y-5 text-center tracking-widest"
        variants={textParentVariants}
        initial="start"
        animate="end"
      >
        <motion.h1
          className="text-3xl font-semibold"
          variants={textChildVariants}
        >
          Hi there,
          <br />
          I'm Daybook
        </motion.h1>

        <motion.p className="text-2xl opacity-70" variants={textChildVariants}>
          Let's start with Us
        </motion.p>
      </motion.section>

      <section className="flex flex-col w-full gap-5 font-semibold ">
        <motion.button
          variants={buttonChildVariants}
          initial="invisible"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          className="py-3 bg-white text-primary rounded-full tracking-wider"
          onClick={onContinueClick}
        >
          Continue
        </motion.button>
      </section>
    </article>
  );
}
