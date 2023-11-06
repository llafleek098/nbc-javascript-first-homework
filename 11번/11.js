const currentTime = new Date(); //new date();로 현재 날짜&시간를 변수에 저장
const Hour = currentTime.getHours(); // 시간 정보만 변수에 ㅈ장

//Hour를 기준으로 현재 시간대를 판단한다.
if (Hour < 10) {
  console.log("good morning");
} else if (Hour >= 10 && Hour < 18) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}
