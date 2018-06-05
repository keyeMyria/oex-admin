const APIURL = 'https://admin-test.oex.com';
module.exports = {
  host: '0.0.0.0',
  port: '3003',
  publicPath: 'https://huiyi-edu.oss-cn-beijing.aliyuncs.com/oex-admin/',
  // proxyURL: APIURL,
  app: {
    // ENV: JSON.stringify('production'),
    APIURL: JSON.stringify(APIURL),
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }
};
