

// 글자 자르기
export const truncate = (str, n) => {
  return str?.length > n ? str.substring(0, n) + '...' : str;
}

