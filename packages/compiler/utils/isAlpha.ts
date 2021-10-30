export const isAlpha = (char: unknown): boolean => {
  if (!(char as string).match(/[a-z]/i)) {
    throw new Error(`"${char}" is not an alphanumertic character.`);
  } 

  return true;
}