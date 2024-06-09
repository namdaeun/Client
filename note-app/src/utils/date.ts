export function timeSince(dateString: string) {
  const date = new Date(dateString);  // 주어진 날짜 문자열로 Date 객체 생성
  const now = new Date();  // 현재 날짜 및 시간
  const seconds = Math.floor((+now - +date) / 1000);  

  let interval = seconds / 31536000;  // 연 단위로 계산

  if (interval > 1) {
      return Math.floor(interval) + "년";
  }
  interval = seconds / 2592000;  // 월 단위로 계산
  if (interval > 1) {
      return Math.floor(interval) + "달";
  }
  interval = seconds / 86400;  // 일 단위로 계산
  if (interval > 1) {
      return Math.floor(interval) + "일";
  }
  interval = seconds / 3600;  // 시간 단위로 계산
  if (interval > 1) {
      return Math.floor(interval) + "시간";
  }
  interval = seconds / 60;  // 분 단위로 계산
  if (interval > 1) {
      return Math.floor(interval) + "분";
  }
  return "방금";
}
