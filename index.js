// 이미지 변경 테스트 코드임 첫 번째 버튼만 적용

let cheack = true; // 바뀌기 때문에 let으로 선언
function changeLike() {
  document.getElementById('img').src = cheack
    ? 'img/unlike.png' //연산자 이용 체크
    : 'img/like.png';
  cheack = !cheack;
}
