function showPrice() {
  // 유저 입력 값을 두 변수에 저장
  var oPrice = document.querySelector("#originalPrice").value;
  var rate = document.querySelector("#rate").value;

  // 두 값이 음수 아닐 시 실행
  if (oPrice > 0 && rate > 0) {
    var savedPrice = oPrice * (rate / 100);
    var resultPrice = oPrice - savedPrice;
  } else {
    alert("0보다 큰 수를 입력해주세요.");
  }
  document.querySelector(
    "#showResult"
  ).innerHTML = `상품 기존 가격은 ${oPrice} 원, 할인율은 ${rate}% 입니다.<br>
  ${savedPrice} 원을 절약한 ${resultPrice} 원에 구매하실 수 있습니다!`;
}
