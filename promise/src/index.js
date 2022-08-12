function loadScript(src) {
  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => res("Script is loadded successfully");

    script.onerror = () => rej(new Error("Script loading is failure"));

    document.body.append(script);
  });
}

fetch("https://error_url.com")
  .then((res) => res.json())
  .then(() => {
    console.log("Этот then выполняться не будет")
  })
  .then(() => {
    console.log("Этот then выполняться не будет")
  })
  .then(() => {
    console.log("Этот then выполняться не будет")
  })
  .catch((error) => {
    console.log("Обработчик")
    console.log("будет выполнен, ")
    console.log("потому что fetch вернет промис с ошибкой!")
    console.log("ERROR: ", error); 
  })
