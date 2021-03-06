
import Logger from "../def";


/**
 * Log latest fetched data in the console.
 * @method logData
 * @param values Array the array of values to be printed in the console.
 */
export function logData(this: Logger, values: string[]): void {
  this.stream.push(values.map(y => y.replace('\r', '')));
  let ans: string[] = [];
  let j = 0;
  for (let chart in this.config.charts) {
    let len = this.config.charts[chart].data.length;
    for (let i = 0; i < len; i++) {
      let index = j + i;

      ans.push(`${this.config.charts[chart].data[i].name}: ${values[index]} `);
    }
    j += len;
  }
  let completemsg = ans.map(x => x.replace('\r', '')).join('  ');
  this.log(completemsg)
}