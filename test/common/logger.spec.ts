import { log } from '../../assets/script/common/logger';

describe('logger', () => {
  it('should log info', async () => {
    const data = { max: 9, dice: 6 };
    log({
      msg: '注册动作事件',
      channel: '行为控制器',
      data,
    });
  });
});
