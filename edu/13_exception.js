// console.log(1);
// console.log(2);
// try{
//     console.log("try문 시작");
//     console.log(test.name);
//     console.log("try문 끝");
// }catch(error){
//     console.log("Error 발생");
//     console.log(error.name);    // 발생한 에러명
//     console.log(error.message); // 발생한 에러의 내용
//     console.log(error.stack);   // 자세한 에러의 내용
// }
// console.log(3);
// console.log(4);
// console.log(5);

// try{
//     console.log(1);
//     // 강제 예외 발생 시키기
//     throw new Error("강제로 예외 발생");
//     console.log(2);
// }catch(error){
//     console.log(error.message);
// }finally{
//     // 예외 여브와 상관없이 무조건 실행    
//     console.log(3);
// }     

// 에러 상세하게 처리하는 방법
// 여러 종류의 예외를 처리하고 싶을때
// instanceof 연산자를 사용해서 예외를 구체적으로 처리
try{
    throw new ReferenceError();
}catch(error){
    if(error instanceof SyntaxError){
        console.log("SyntaxError");
    }else if(error instanceof ReferenceError){
        console.log("ReferenceError");
    }else{
        console.log("에러에러");
    }
}