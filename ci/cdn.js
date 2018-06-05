var OSS = require('ali-oss').Wrapper;
var fs = require('fs');
var path = require('path');
var ENV = process.env.APPENV;


var client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAI7oITTVewSjme',
  accessKeySecret: '4kbvJRA2r2yKBvdLP7lvBJs4prb3RD',
  bucket: 'huiyi-edu'
});

fs.readdir(path.resolve(__dirname, '..', 'dist'), function(err, files) {
  if (files) {
    files.map(fileName => {
      if (ENV) {
        client.put(`oex-admin/${ENV}/${fileName}`, path.resolve(__dirname, '..', 'dist', fileName)).then(function (val) {
          console.log(val.url);
        }).then(function (val) {
        });
      } else {
        client.put(`oex-admin/${fileName}`, path.resolve(__dirname, '..', 'dist', fileName)).then(function (val) {
          console.log(val.url);
        }).then(function (val) {
        });
      }
    });
  }
});
