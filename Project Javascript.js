function encrypt(message = '', key = ''){
    let message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
function decrypt(message = '', key = ''){
    let code = CryptoJS.AES.decrypt(message, key);
    let decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}

function encrypt(message = '', key = ''){
    let message = CryptoJS.DES.encrypt(message, key);
    return message.toString();
}
function decrypt(message = '', key = ''){
    let code = CryptoJS.DES.decrypt(message, key);
    let decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}
