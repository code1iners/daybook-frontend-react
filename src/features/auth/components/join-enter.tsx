import { motion } from "framer-motion";

const defaultInitial = { y: 30, opacity: 0 };
const defaultAnimate = { y: 0, opacity: 1 };
const curve = {
  type: "spring",
};

const textVariant = {
  initial: { ...defaultInitial },
  "animate-first": {
    ...defaultAnimate,
    transition: {
      duration: 1,
    },
  },
  "animate-second": {
    ...defaultAnimate,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const buttonVariant = {
  initial: { scale: 0 },
  "animate-first": {
    ...defaultAnimate,
    scale: 1,
    transition: {
      ...curve,
      duration: 0.5,
      delay: 2,
    },
  },
  "animate-second": {
    ...defaultAnimate,
    scale: 1,
    transition: {
      ...curve,
      duration: 1,
      delay: 2.2,
    },
  },
  "while-tap": {
    scale: 0.9,
  },
  "while-hover": {
    scale: 1.1,
    transition: {
      delay: 0,
    },
  },
};

export default function JoinEnter() {
  return (
    <article className="h-full flex flex-col items-center justify-around text-white p-5">
      <section className="space-y-5 text-center tracking-widest">
        <motion.h1
          variants={textVariant}
          initial="initial"
          whileInView="animate-first"
          className="text-3xl font-semibold"
        >
          Hi there,
          <br />
          I'm Daybook
        </motion.h1>

        <motion.p
          variants={textVariant}
          initial="initial"
          whileInView="animate-second"
          className="text-2xl opacity-70"
        >
          Let's start with Us
        </motion.p>
      </section>

      <section className="flex flex-col w-full gap-5 font-semibold ">
        <motion.button
          variants={buttonVariant}
          initial="initial"
          whileInView="animate-first"
          className="py-3 bg-white text-primary rounded-full tracking-wider"
        >
          Join
        </motion.button>
        <motion.button
          variants={buttonVariant}
          initial="initial"
          whileInView="animate-second"
          className="py-2 opacity-70 tracking-wider"
        >
          Login
        </motion.button>
      </section>
    </article>
  );
}
