export function splitWord (str :string, delimiter :string) :string[] {
  return str
          .trim()
          .split(delimiter);
}