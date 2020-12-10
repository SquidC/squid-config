import chalk = require("chalk");
import koa = require("koa")
import { httpLog, system } from "lib/log"

/**
 * 额外输出log
 */
const expansLog = async (ctx: koa.Context, next: koa.Next) => {
  // 记录请求开始的时间
  const startTime = Date.now();
  await next();
  // 记录完成的时间 作差 计算响应时间
  const execTime = Date.now()
  const responseTime = execTime - startTime;
  httpLog.info(`${ctx.url}\t${responseTime}ms`);

  let statusFormat = (val: any) => {return val}
  switch(ctx.status){
    case 200: statusFormat = chalk.green; break;
    case 404: statusFormat = chalk.grey; break;
    case 500: statusFormat = chalk.red; break;
  }

  system.info(
    `${chalk.bgBlueBright(ctx.method)}\t`+
    `${statusFormat(ctx.status)}\t`+
    `${chalk.yellow(ctx.url)}\t`+
    `${chalk.green(`${responseTime}ms`)}`
  );
}

export default expansLog
