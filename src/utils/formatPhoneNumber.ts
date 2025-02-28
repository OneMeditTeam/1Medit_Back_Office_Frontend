const formatPhoneNumber = (phone: string | number): string => {
  // 숫자만 추출
  const cleaned = phone.toString().replace(/\D/g, '');

  // 대한민국 (010-1234-5678) 형식
  if (/^01[0-9]{8,9}$/.test(cleaned)) {
    return cleaned.length === 10
      ? cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      : cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }

  // 미국 (123-456-7890) 형식
  if (/^\d{10}$/.test(cleaned)) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }

  // 국제전화 (+82-10-1234-5678)
  if (/^\d{11,15}$/.test(cleaned)) {
    return cleaned.replace(/(\d{1,4})(\d{3,4})(\d{4})/, '+$1-$2-$3');
  }

  return cleaned; // 포맷에 맞지 않으면 숫자만 반환
};

export default formatPhoneNumber;
