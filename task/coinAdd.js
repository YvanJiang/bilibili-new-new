const base = require('./base');
const qs = require('qs');

/**
 * 漫画签到
 */
class coinAdd extends base {
  constructor(args) {
    super(args);
    // this.coinAddURL = `https://api.live.bilibili.com/pay/v1/Exchange/silver2coin`;
  }

  order() {
    return 5;
  }

  async run() {
    console.info(`----- 跳过投币 -----`)
  }

  getTaskName() {
    return '投币';
  }
}

module.exports = coinAdd;
