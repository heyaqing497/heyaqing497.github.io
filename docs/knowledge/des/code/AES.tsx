import CryptoJS from 'crypto-js';
import React from 'react';

const AES = () => {
  // 加密
  let message = 'Hello World!';
  let key = 'mySecretKey';
  let encrypted = CryptoJS.AES.encrypt(message, key).toString();
  // 解密
  let decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(
    CryptoJS.enc.Utf8,
  );

  return (
    <>
      <div>
        <span>文案：{message}</span> <span>密钥：{key}</span>
      </div>
      <div>加密后：{encrypted}</div>
      <div>解密後：{decrypted}</div>
    </>
  );
};

export default AES;
