import Logger from '../def';

export function write(this: Logger) {
  let data = this.stream.map(x => x.map(y => y.replace('\r', '')).join(','));
  let header = [this.makeHeader().join(',')];
  let csv = header.concat(data).join('\n');
  let json = this.makeJSON();

  let path = this.genFullPath();

  // System logs
  Logger.writeFile(`${path}.csv`, csv);
  Logger.writeFile(`${path}.log`, this.logstream);

  // Web data
  Logger.writeFile(`./web/public/temp.json`, JSON.stringify(json));
  Logger.writeFile(`./web/public/len.json`, JSON.stringify({
    length: this.stream.length
  }));
}