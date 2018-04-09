const APIURL = 'https://api.cyixue.com';
module.exports = {
  host: '0.0.0.0',
  port: '3003',
  publicPath: 'https://huiyi-edu.oss-cn-beijing.aliyuncs.com/admin/',
  // proxyURL: APIURL,
  app: {
    // ENV: JSON.stringify('production'),
    APIURL: JSON.stringify(APIURL),
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  },
  // dingtalk: {
  //   webhook: 'https://oapi.dingtalk.com/robot/send?access_token=9c1ad5953b07726890536f36a5243725ba6ddc4b86afd2c99c54c401b81ccb70',
  // }
};
