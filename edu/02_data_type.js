// 원시형(Primitiv Type)
// 값을 가져옴
let num1 = 1;
let num2 = num1;
num2 = 99;
console.log(num1, num2);

// 참조형(Reference Type)
// 주소를 가져옴
let obj1 = {
        id:1, 
        name:'둘리', 
        etc: {
            addr : '대구',
            test : {
                key1 : 'val1'        
            }
        }
};

// shallow copy(얕은 복사)
// 객체의 최상위 계층만 값을 복사하고, 
// 그 이하 계층은 참조형 데이터일 경우
// 주소만 복사하는 방식
let obj3 = {...obj1};
obj3.name = '또치';
console.log(obj1.name, obj3.name);
obj3.etc.addr = '서울';
console.log(obj1.etc.addr, obj3.etc.addr);

// Deep Copy(깊은 복사)
// 객체의 모든 계층의 값을 복사
let obj4 = JSON.parse(JSON.stringify(obj1));
obj4.name = '또치';
obj4.etc.addr = '부산';
console.log(obj1.name, obj4.name, obj1.etc.addr, obj4.etc.addr);

// const obj5 = {id:2};
// obj5.id = 3;
// const num5 = 1;
// num5 = 2;


