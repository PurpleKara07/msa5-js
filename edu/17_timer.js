// 타이머함수
// setTimeout(cb,time[,...args]) : number
// 설정한 일정시간 후에 콜백함수 실행
// 콜백 함수에 파라미터가 필요한 경우에만 ...args를 
// return값은 timeoutId 정수값(해당 타이머의 고유한 식별값)
console.log('A');
const timeoutId = setTimeout(() => {
                    console.log('B');
                }, 1000);
console.log('C');

clearTimeout(timeoutId);

// setInterval(cb,time[,...args]) : number
// 설정한 일정시간 마다 콜백함수 실행
// return값은  intervalId 정수값(해당 인터벌의 고유한 식별값)
const intervalId = setInterval(()=>{
    console.log("인터벌");
}, 1000);

setTimeout(()=>{
    clearInterval(intervalId);
}, 5000);
