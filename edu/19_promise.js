// 콜백 지옥
// setTimeout(()=>{
//     console.log('A');
//     setTimeout(()=>{        
//         console.log('B');
//         setTimeout(()=>{
//             console.log('C');
//         }, 500);
//     }, 1000);
// }, 1500);

// promise기반으로 변경
const timer = (str) => {
    // resolve : 성공 , reject : 실패 자바스크립트가 자동으로 생성
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(str);
            if(str === 'A' || str === 'B' || str === 'C'){
                resolve({code: "허용", word: str});
            }else{
                reject(new Error("허용하지 않는 문자가 입력"));
            }
        }, 2000);                                                                   
    });
}

// Pending 대기상태
timer('A', 300)      
// resolve()
.then((retult)=>{    
    console.log(retult.code , retult.word);    
    return timer('B', 1000);
})         
.then((result)=>{
    console.log(result.code , result.word);
    return timer('C', 1500);
})
.then((result)=>{
    console.log(result.code , result.word);  
})
// reject()
.catch((error)=>{    
    console.log(error.message);
})        
// 무조건 실행
.finally(()=>{
    console.log('파이널리');
});     
console.log('외부');