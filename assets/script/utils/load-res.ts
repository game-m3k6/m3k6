/**
 * 加载资源
 * @param path 资源路径（注意路径在resources下）
 */
import { log } from '../common/logger';

export async function loadRes<T>(path: string, type?: any): Promise<T> {
  return new Promise((resolve, reject) => {
    const handle = (err: Error, data: T) => {
      if (err) {
        log({ msg: `报错: ${err.message}`, channel: '加载资源', data: err });
        reject(err.message);
        return;
      }
      resolve(data);
    };

    type ? cc.loader.loadRes(path, type, handle) : cc.loader.loadRes(path, handle);
  });
}
