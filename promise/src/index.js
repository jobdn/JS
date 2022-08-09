function loadScript(src) {
  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.src = src;

    /**
     * Внутри ИСПОЛНИТЕЛЯ у нас есть код, который как раз и занимает
     * некоторое время, например, загрузку скрипта. Когда это АСИНХРОННОЕ
     * действие завершилось мы говорим,что оно завершилось, используя res
     * или rej, и результат этого АСИНХРОННОГО действия
     * готов для использования.
     */

    script.onload = () => res("Script is loadded successfully");

    script.onerror = () => rej(new Error("Script loading is failure"));

    document.body.append(script);
  });
}

const promise = loadScript("src/test-script.js");
promise
  .then((value) => {
    // А вот тут мы уже используем это результат асинхронного действия.
    console.log(value);
  })
  // Или тут.
  .catch(console.log);
