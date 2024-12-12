// 1
function customMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}
console.log(customMap([1, 2, 3], (num) => num * 2)); 

// 2
function findDuplicates(array) {
    return array.filter((num, index) => array.indexOf(num) !== index)
                .filter((value, index, self) => self.indexOf(value) === index);
}

console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5]));

// 3
function queryStringToObject(queryString) {
    const params = new URLSearchParams(queryString);
    const obj = {};
    params.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}

console.log(queryStringToObject('?name=Hasib&age=23')); 

// 4
function reverseWords(str) {
    return str.split(' ').reverse().join(' '); 
}

console.log(reverseWords('Hello World'));

// 5
function findMissingNumber(arr) {
    const n = arr.length;
    const totalSum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((sum, num) => sum + num, 0);  
    return totalSum - arrSum;  
}

console.log(findMissingNumber([0, 1, 2, 3, 5])); 

// 6

function validateForm(form) {
    const { email, password } = form;

    if (!email || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        return false;
    }

    if (!password || password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        return false;
    }

    return true;
}

console.log(validateForm({ email: 'test@example.com', password: 'Password1' })); 

// 7

function greetingMessage(name, timeOfDay, language) {
    if (language === 'English') {
        if (timeOfDay === 'morning') {
            return `Good morning, ${name}!`;
        } else if (timeOfDay === 'afternoon') {
            return `Good afternoon, ${name}!`;
        } else if (timeOfDay === 'evening') {
            return `Good evening, ${name}!`;
        }
    } else if (language === 'Spanish') {
        if (timeOfDay === 'morning') {
            return `¡Buenos días, ${name}!`;
        } else if (timeOfDay === 'afternoon') {
            return `¡Buenas tardes, ${name}!`;
        } else if (timeOfDay === 'evening') {
            return `¡Buenas noches, ${name}!`;
        }
    }

    return `Hello, ${name}!`; 
}

console.log(greetingMessage('Jakiul', 'morning', 'English'));
console.log(greetingMessage('Jakiul', 'evening', 'Spanish')); 
console.log(greetingMessage('Jakiul', 'afternoon', 'English')); 

// 8
function fullName({ firstName, middleName, lastName, title }) {
    let fullName = `${firstName} ${lastName}`;

    if (middleName) {
        fullName = `${firstName} ${middleName} ${lastName}`;
    }

    if (title) {
        fullName = `${title} ${fullName}`;
    }

    return fullName;
}

console.log(fullName({ firstName: 'Zakiul', middleName: 'Rashid', lastName: 'Khan', title: 'Dr.' })); 
console.log(fullName({ firstName: 'Nazrul', lastName: 'Islam' })); 
console.log(fullName({ firstName: 'Alice', middleName: 'Marie', lastName: 'Johnson', title: 'Ms.' })); 

// 9

function mergeAndSortArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];  
    const uniqueArray = [...new Set(mergedArray)]; 
    return uniqueArray.sort((a, b) => a - b); 
}

console.log(mergeAndSortArrays([3, 1, 4], [2, 4, 5])); 

// 10

function mergeObjects(obj1, obj2) {
    let result = {}; 
    for (let i = 0; i < Object.keys(obj1).length; i++) {
        let key = Object.keys(obj1)[i];
        result[key] = obj1[key];
    }

    for (let i = 0; i < Object.keys(obj2).length; i++) {
        let key = Object.keys(obj2)[i];

        if (key in result) {
            if (typeof result[key] === 'object' && typeof obj2[key] === 'object') {
                result[key] = mergeObjects(result[key], obj2[key]);
            } else if (result[key] !== obj2[key]) {
                result[key] = [result[key], obj2[key]];
            }
        } else {
            result[key] = obj2[key];
        }
    }

    return result;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, a: 4 };

console.log(mergeObjects(obj1, obj2));
