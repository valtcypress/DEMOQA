export function uniqueEmails(length) {
  let useremail = "@gmail.com";
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return `${result}${useremail}`;
}

export function generateRandomName(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function generateRandomNum(length) {
  const numbers = "0123456789";

  let resultNum = "";

  for (let i = 0; i < length; i++) {
    resultNum += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return resultNum;
}
