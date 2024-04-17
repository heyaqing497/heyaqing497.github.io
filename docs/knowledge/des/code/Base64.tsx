import { Divider } from 'antd';
import React from 'react';

const Base64 = () => {
  /**
    window.btoa：把数据转成base64加密格式
    window.encodeURIComponent：把字符串转译成对应的ASCII码，支持中文
    window.atob：base64解密
	  window.decodeURIComponent：解码
  */
  const message = 'Hello World!';
  const encoded = btoa(message);
  const decoded = atob(encoded);

  const messageHant = '你好世界！';
  const encodedHant = btoa(encodeURIComponent(messageHant));
  const decodedHant = decodeURIComponent(atob(encodedHant));

  return (
    <>
      <div>文案：{message}</div>
      <div>加密后：{encoded}</div>
      <div>解密后：{decoded}</div>
      <Divider />
      <div>中文文案：{messageHant}</div>
      <div>加密后：{encodedHant}</div>
      <div>解密后：{decodedHant}</div>
    </>
  );
};

export default Base64;
