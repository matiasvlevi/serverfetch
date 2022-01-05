export function removeColors(msg: string) {
  let matches: string[] = msg.match(/\x1b\[[0-9].?m/gm) || [];
  let colorLess: string = msg;
  for (let i = 0; i < matches.length; i++) {
    colorLess = colorLess.replace(matches[i], '');
  }
  return colorLess;
}