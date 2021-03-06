'use strict' 

// 블록 스코프 변수 (ES6)
const users = [{
    no: 0,
    name: '마이콜',
    email: 'michol@gmail.com'
},{
    no: 1,
    name: '둘리',
    email: 'dooly@gmail.com'
}];

// 객체분해 (ES6)
function print({no, name, email}){
    // 객체가 각각 분해 됨
    console.log(`${no} : ${name} : ${email} `)
}

const o = {
    no: 1,
    name: '둘리',
    email: 'dooly@gmail.com'
}
print(o);

// for ..of(ES6)
for(let user of users) {
    print(user);
}