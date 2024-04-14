'use server'
import CryptoJS from 'crypto-js';


const AES_SECRET_KEY = 'somerandomsecret';
const AES_IV = 'whsbdhgntkgngmhk';

const decryptAes = (ciphertextBase64) => {
    const ciphertext = CryptoJS.enc.Base64.parse(ciphertextBase64);
    const key = CryptoJS.enc.Utf8.parse(AES_SECRET_KEY);
    const iv = CryptoJS.enc.Utf8.parse(AES_IV);

    const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: ciphertext },
        key,
        { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
    );

    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
    return decryptedText;
};


export default async function fetchApi(reqApiUrl) {
    const res = await fetch(reqApiUrl, { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    let data = []
    const response = await res.json()
    if (response.datas) {
        const decryptedData = decryptAes(response.datas);
        console.log(decryptedData);
        data = JSON.parse(decryptedData)
        console.log('Successfully decrypted');
        console.log('Successfully ', data);
    } else {
        console.log('Failed to decrypt')
    }
    return data
}