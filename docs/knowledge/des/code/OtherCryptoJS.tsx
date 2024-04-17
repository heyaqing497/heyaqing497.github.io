import CryptoJS from 'crypto-js';
import React from 'react';

export type ItemProps = {
  title: string;
  plaintext?: string;
  key?: string;
  iv?: string;
  encrypted?: string;
  decrypted?: string;
};

export type FunProps = () => ItemProps;

const OtherCryptoJS = () => {
  // DES (Data Encryption Standard)
  const DESFunc: FunProps = () => {
    // 密钥与初始向量（IV）
    let key = CryptoJS.enc.Hex.parse('0123456789ABCDEF');
    let iv = CryptoJS.enc.Hex.parse('FEDCBA9876543210');
    // 加密数据
    let plaintext = 'Hello World!';
    let encrypted = CryptoJS.DES.encrypt(plaintext, key, { iv: iv });
    // 解密数据
    let decrypted = CryptoJS.DES.decrypt(encrypted, key, { iv: iv });

    return {
      plaintext,
      key: key.toString(),
      iv: iv.toString(),
      encrypted: encrypted.toString(),
      decrypted: decrypted.toString(CryptoJS.enc.Utf8),
      title: 'DES (Data Encryption Standard)',
    };
  };

  // 哈希函数 SHA-1
  const SHA1Func: FunProps = () => {
    let plaintext = 'Hello World!';
    let hashed = CryptoJS.SHA1(plaintext);

    return {
      plaintext,
      encrypted: hashed.toString(),
      title: '哈希函数 SHA-1',
    };
  };

  // 哈希函数 SHA-256
  const SHA256Func: FunProps = () => {
    // 计算哈希值
    let plaintext = 'Hello World!';
    let sha256Hash = CryptoJS.SHA256(plaintext);
    return {
      plaintext,
      encrypted: sha256Hash.toString(),
      title: '哈希函数 SHA-256',
    };
  };

  // 哈希函数 SHA-512
  const SHA512Func: FunProps = () => {
    // 计算哈希值
    let plaintext = 'Hello World!';
    let sha512Hash = CryptoJS.SHA512(plaintext);
    return {
      plaintext,
      encrypted: sha512Hash.toString(),
      title: '哈希函数 SHA-512',
    };
  };

  // 消息认证码 (MAC)  HMAC
  const HMACFunc: FunProps = () => {
    // 数据与密钥
    let data = 'Hello World!';
    let key = 'my-secret-key';
    // 计算 HMAC-SHA-256
    let mac = CryptoJS.HmacSHA256(CryptoJS.SHA256, data, key);
    return {
      plaintext: data,
      key,
      encrypted: mac.toString(),
      title: '消息认证码 (MAC)  HMAC',
    };
  };

  // 其他功能 随机数生成
  const randomFunc: FunProps = () => {
    // 生成指定长度的随机字节序列
    let randomBytes = CryptoJS.lib.WordArray.random(16);
    return {
      encrypted: randomBytes.toString(),
      title: '其他功能 随机数生成',
    };
  };

  const dataMap = {
    DES: DESFunc(),
    SHA1: SHA1Func(),
    SHA256: SHA256Func(),
    SHA512: SHA512Func(),
    HMAC: HMACFunc(),
    random: randomFunc(),
  };
  const showValueMap = {
    plaintext: '明文',
    key: '密钥',
    iv: '初始向量',
    encrypted: '密文',
    decrypted: '解密',
  };

  return (
    <>
      {Object.values(dataMap).map((data) => (
        <div key={data.title}>
          <h2>{data.title}</h2>
          {Object.entries(showValueMap).map(([key, label]) => {
            return (
              <div key={key} style={{ wordBreak: 'break-all' }}>
                {data?.[key] && (
                  <p>
                    {label}: {data[key]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default OtherCryptoJS;
