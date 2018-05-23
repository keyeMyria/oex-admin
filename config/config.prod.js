const APIURL = 'http://54.255.206.178:8080';
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
  }
};
