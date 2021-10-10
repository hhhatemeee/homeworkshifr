function encryptPerestanovka(str, key) {
    str = prompt('Введите сообщение, которое хотите зашифровать:', '');
    key = prompt('Введите ключ: ', '');

    let arrStr = str.split('');
    let keyArr = key.split('');
    let result = [];
    if (!(str.length % key.length == 0)) {
        while (!(str.length % key.length == 0)) {
            str += '_';
        }
    }
    if (str.length > key.length) {
        keyArr.length = str.length;
        i = 0;
        let lengthKey = key.length;
        while (!keyArr[str.length - 1]) {
            keyArr[lengthKey] = String((lengthKey) + +keyArr[i] - i);
            lengthKey++;
            i++;
        }
    }
    for (let i = 0; i < str.length; i++) {
        arrStr.splice(keyArr[i] - 1, 1, str[i]);
    }
    return arrStr.join('');
}
function decryptPerestanovka(str, key) {
    str = prompt('Введите сообщение, которое хотите расшифровать:', '');
    key = prompt('Введите ключ: ', '');
    let arrStr = str.split('');
    let keyArr = key.split('');
    let keyArrReverse = []; // создаем массив для нового ключа расшифровки
    keyArrReverse.length = keyArr.length;
    // переворачиваем ключ для расшифровки
    for (let j = 0; j < key.length; j++) {
        keyArrReverse[keyArr[j] - 1] = j + 1;
        console.log(keyArr);
    }
    if (str.length > key.length) {
        keyArrReverse.length = str.length;//Увеличиваем массив ключа до длины строки
        i = 0;
        let lengthKey = key.length;
        while (!keyArrReverse[str.length - 1]) {
            keyArrReverse[lengthKey] = String((lengthKey) + +keyArrReverse[i] - i); //С каждой итерацией дополняем ключ, "зацикливая" его
            lengthKey++;
            i++;
        }
    }
    for (let i = 0; i < str.length; i++) {
        arrStr.splice(keyArrReverse[i] - 1, 1, str[i]);
    }
    return arrStr.join('');
}

prompt('', `${encryptPerestanovka()}`);
alert(decryptPerestanovka());
// привет
// 234156
// вприет
// прпвет
// приветик