export const isDigit = (char :unknown) :boolean => {
  if (!Number.isInteger(char)) {
    throw new Error(`"${char}" is not a digit.`);
  }
  return true;
}