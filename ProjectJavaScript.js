<script>
function update() {
var element = document.getElementById("progress-bar");
var width = 1;
var identity = setInterval(scene, 10);
function scene() {
	if (width >= 100) {
	clearInterval(identity);
	} else {
	width++;
	element.style.width = width + '%';
	}
}
}
</script>

function encrypt(message, key){
    let message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
function decrypt(message, key){
    let code = CryptoJS.AES.decrypt(message, key);
    let decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}

function encrypt(message, key){
    let message = CryptoJS.DES.encrypt(message, key);
    return message.toString();
}
function decrypt(message, key){
    let code = CryptoJS.DES.decrypt(message, key);
    let decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}

var encrypted = CryptoJS.Rabbit.encrypt("Message", "Secret Passphrase");
var decrypted = CryptoJS.Rabbit.decrypt(encrypted, "Secret Passphrase");
}
