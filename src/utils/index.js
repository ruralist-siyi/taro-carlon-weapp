export function getRandomStr() {
  return (new Date()).valueOf() + Math.random().toString(36).substr(2);
}
