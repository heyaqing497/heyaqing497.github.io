import CryptoJS from 'crypto-js';
import React from 'react';

const MD5 = () => {
  // 加密
  let password = 'Hello World!';
  let hashedPassword = CryptoJS.MD5(password).toString();
  // 验证密码
  let password2 = 'Hello World2!';
  let isValid = CryptoJS.MD5(password).toString() === hashedPassword;
  let isValid2 = CryptoJS.MD5(password2).toString() === hashedPassword;

  return (
    <>
      <div>文案：{password}</div>
      <div>加密后：{hashedPassword}</div>
      <div>
        驗證{password}：{isValid.toString()}
      </div>
      <div>
        驗證{password2}：{isValid2.toString()}
      </div>
    </>
  );
};

export default MD5;
