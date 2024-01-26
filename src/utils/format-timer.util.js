export const formatTimer = (timer) => {
  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timer % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};
