export const slideTransition = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
  },
};
