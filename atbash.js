'use strict'

function EncryptAtbash(str) {
    str = prompt('Введите фразу, которую хотите зашифровать/расшифровать:', '');
    let result = [];
    let arrStr = str.split('');
    for (let i = 0; i < str.length; i++) {
        (arrAlphabetUpper.filter(function search(item) {
            if (arrStr[i] == item) {
                result.push(arrAlphabetUpper[(32 - arrAlphabetUpper.indexOf(item))]);
            }
        }));
        (arrAlphabet.filter(function search(item) {
            if (arrStr[i] == item) {
                result.push(arrAlphabet[(32 - arrAlphabet.indexOf(item))]);
            }
        }));
        if (arrStr[i] == ' ') {
            result.push(' ');
        }
        else if (arrStr[i] == ',') {
            result.push(',');
        }
        else if (arrStr[i] == '.') {
            result.push('.');
        }
        else if (arrStr[i] == '?') {
            result.push('?');
        }
    }
    return result.join('');
}
function getResult() {
    prompt('Ваш результат:', `${(EncryptAtbash())}`);
}

let alphabet = 'а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,э,ю,я';
let alphabetUpper = 'А,Б,В,Г,Д,Е,Ё,Ж,З,И,Й,К,Л,М,Н,О,П,Р,С,Т,У,Ф,Х,Ц,Ч,Ш,Щ,Ъ,Ы,Ь,Э,Ю,Я';
let arrAlphabet = alphabet.split(',');
let arrAlphabetUpper = alphabetUpper.split(',');

while (!getResult()) {
    getResult();
}