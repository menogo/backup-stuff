// useage
// encrpty.RSA('admin')
// encrpty.SM2('admin')

define(function (require, exports, module) {
  require("./union-sm2");

  var crypto = exports;
  var RSAKey = crypto.RSAKey = require("./rsa");
  var SM2Key = crypto.SM2Key = {};

  RSAKey.encrypt = function(text, key){
    var rsa = new RSAKey();
    rsa.setPublic(key, "10001");
    return rsa.encrypt(text);
  };

  SM2Key.encrypt = function(value, key){
    var sm2Key      = key || config.base.sm2_public_key,
        xHex        = sm2Key.xHex,
        yHex        = sm2Key.yHex,
        time        = Date.parse(new Date()) - App.storage.get("difTime") + "";
    var valLength   = utils.string.leftPad(value.length, 2, "0"); // 密码长度，如：“06”，“12”
    var msg         = time.length + time + valLength + value;
    var msgData     = CryptoJS.enc.Utf8.parse(msg);
    var cipherMode  = SM2CipherMode.C1C3C2;
    var cipher      = new SM2Cipher(cipherMode);
    var userKey     = cipher.CreatePoint(xHex, yHex);
      msgData     = cipher.GetWords(msgData.toString());
    var encryptData = cipher.Encrypt(userKey, msgData);
    return encryptData.toUpperCase();
  };
});