import Scanner from '../Scanner';
export const isAtEnd = (scanner :Scanner) => {
  return scanner.source[scanner.current] == '\0';
}