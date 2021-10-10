'use strict'

function encryptCesar(str, key) {
    str = prompt('Введите фразу, которую хотите зашифровать/расшифровать:', '');
    key = +prompt('Введите ключ: ', '');
    let result = [];
    let arrStr = str.split('');
    for (let i = 0; i < str.length; i++) {
        (arrAlphabetUpper.filter(function search(item) {
            if (arrStr[i] == item) {
                if ((arrAlphabetUpper.indexOf(item) + key) >= arrAlphabetUpper.length) {
                    // alert(arrAlphabetUpper.indexOf(item) + key - 33);
                    result.push(arrAlphabetUpper[arrAlphabetUpper.indexOf(item) + key - 33]);
                }
                else {
                    result.push(arrAlphabetUpper[arrAlphabetUpper.indexOf(item) + key]);

                }

            }
        }));
        (arrAlphabet.filter(function search(item) {
            if (arrStr[i] == item) {
                if ((arrAlphabet.indexOf(item) + key) >= arrAlphabet.length) {
                    result.push(arrAlphabet[arrAlphabet.indexOf(item) + key - 33]);
                }
                else {
                    result.push(arrAlphabet[arrAlphabet.indexOf(item) + key]);
                }
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
function dectyptCesar(str, key) {
    str = prompt('Введите фразу, которую хотите зашифровать/расшифровать:', '');
    key = +prompt('Введите ключ: ', '');
    let result = [];
    let arrStr = str.split('');
    for (let i = 0; i < str.length; i++) {
        (arrAlphabetUpper.filter(function search(item) {
            if (arrStr[i] == item) {
                if ((arrAlphabetUpper.indexOf(item) - key) <= arrAlphabetUpper.length) {
                    result.push(arrAlphabetUpper[arrAlphabetUpper.indexOf(item) - key + 33]);
                }
                if (!(arrAlphabetUpper.indexOf(item) - key) <= arrAlphabetUpper.length) {
                    result.push(arrAlphabetUpper[arrAlphabetUpper.indexOf(item) - key]);

                }

            }
        }));
        (arrAlphabet.filter(function search(item) {
            if (arrStr[i] == item) {
                if ((arrAlphabet.indexOf(item) - key) <= arrAlphabet.length) {
                    result.push(arrAlphabet[arrAlphabet.indexOf(item) - key + 33]);
                }
                if (!(arrAlphabet.indexOf(item) - key) <= arrAlphabet.length) {
                    // alert(arrAlphabet[arrAlphabet.indexOf(item) - key]);
                    result.push(arrAlphabet[arrAlphabet.indexOf(item) - key]);
                }
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

function getResultDecrypt() {
    prompt('Ваш результат:', `${(dectyptCesar())}`);

}

function getResultEcnrypt() {
    prompt('Ваш результат:', `${(encryptCesar())}`);
}

let alphabet = 'а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,э,ю,я';
let alphabetUpper = 'А,Б,В,Г,Д,Е,Ё,Ж,З,И,Й,К,Л,М,Н,О,П,Р,С,Т,У,Ф,Х,Ц,Ч,Ш,Щ,Ъ,Ы,Ь,Э,Ю,Я';
let arrAlphabet = alphabet.split(',');
let arrAlphabetUpper = alphabetUpper.split(',');


getResultEcnrypt();
getResultDecrypt();