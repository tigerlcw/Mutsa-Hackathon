let cheack = true; // 바뀌기 때문에 let으로 선언
function changeLike() {
  document.getElementById('img').src = cheack
    ? 'img/unlike.png' //연산자 이용 체크
    : 'img/like.png';
  cheack = !cheack;
}
