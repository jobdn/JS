function loadScript(src) {
  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => res("Script is loadded successfully");

    script.onerror = () => rej(new Error("Script loading is failure"));

    document.body.append(script);
  });
}

let promise = Promise.resolve();

/**
 * Колбэк внутри потребителя будет помещен в ОЧЕРЕДЬ МИКРОТАСОК и выполнен после выполнения синхронного кода.
 */
promise.then(() => console.log("Промис обработан"));

console.log("СИНХРОННЫЙ КОД ОТРАБОТАЛ");
