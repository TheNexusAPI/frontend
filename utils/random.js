function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

const generateRandomURL = () => {
  const randomText = generateRandomString(10); // You can specify the desired length
  return `https://www.nexusapi.com/api/${randomText}`;
};

export default generateRandomURL;
