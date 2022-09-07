// 문자열을 입력받는다.
var input = prompt('전체 약관을 입력하세요.');
// document.write(input);

// 문자열 배열로 바꾸기
var splitinput = input.split(' ');
document.write(splitinput);

// 약관의 전체 단어 개수 출력 (배열)
var numinput = splitinput.length;
document.write('<br>', "전체 단어 개수: ", numinput);

// 배열에 필터링할 단어 추가
    // 배열을 사용하지 않고 match 함수 이용 (은미와 동일한 코드)
var myNum = input.match(/광고|광고 노출|서비스|비식별|도메인|수집|검색엔진 변경|시작 페이지 변경|우회|임의의 파일|임의로 변경|강제|스폰서|함께 설치|랜섬웨어|악성코드|동의 없이/g).length;

// test 코드 (개수 세지 않음)
var filtering = input.match(/광고|광고 노출|서비스|비식별|도메인|수집|검색엔진 변경|시작 페이지 변경|우회|임의의 파일|임의로 변경|강제|스폰서|함께 설치|랜섬웨어|악성코드|동의 없이/g);

// 필터링 된 문제 단어 개수 출력 (중복 허용)
document.write('<br>',"문제 단어 개수: ", myNum);

// test 코드 (필터링된 단어 출력)
document.write('<br>',"문제되는 단어: ", filtering);


// //크롬 스토리지에 저장된 값을 가져오세요. 
// chrome.storage.sync.get(function (data) {
//   // #user의 값으로 data의 값을 입력해주세요. 
//   document.querySelector('#user').value = data.userWords;
 
//   //분석해서 그 결과를 #result에 넣어주세요. 
//   matching(data.userWords);
 
// });
 
// //컨텐츠 페이지의 #user 입력된 값이 변경 되었을 '때'
// document.querySelector('#user').addEventListener('change', function () {
//   //컨텐츠 페이지에 몇개의 단어가 등장하는지 계산해주세요. 
//   var user = document.querySelector('#user').value;
 
//   // 크롬 스토리지에 입력값을 저장한다. 
//   chrome.storage.sync.set({
//     userWords: user
//   });
 
//   //컨텐츠 페이지를 대상으로 코드를 실행해주세요. 
//   matching(user);
 
// });