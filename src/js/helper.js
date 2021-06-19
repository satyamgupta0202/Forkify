import { async } from 'regenerator-runtime';
import { TIME_OUT } from './confirg';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJson = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIME_OUT)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}${res.status}`);
    return data;
  } catch (err) {
    throw new Error(`${err} 😍🎶😢`);
  }
};
