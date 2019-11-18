import dayjs = require('dayjs');

export interface LogOptions {
  msg: string;
  channel?: string;
  data?: { [attr: string]: any };
}

export function log(opts: LogOptions): void {
  const date = dayjs().format('YYYY-MM-DD HH:mm:ss.SSS');
  let content = `${date}   `;
  if (opts.channel) {
    content += `[${opts.channel}] `;
  }
  content += `${opts.msg}`;

  if (opts.data) {
    content += ` ${JSON.stringify(opts.data)}`;
  }
  cc.log(content);
}
