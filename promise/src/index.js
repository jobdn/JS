function loadScript(src) {
  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => res("Script is loadded successfully");

    script.onerror = () => rej(new Error("Script loading is failure"));

    document.body.append(script);
  });
}

loadScript("./src/one.js")
  .then(() => {
    return loadScript("./src/two.js");
  })
  .then(() => {
    return loadScript("./src/three.js");
  }).then(() => {
    one("Вот тут мы уже можем вызывать функции из скриптов,");
    two("потому что этот код выполняется последовательно");
    three("вот эти потребители будут выполняться, когда разрешиться промис, но на первые проход скрипта");
    three("они попадают в очередь.");
    /**
     * Код линейный и растет вниз. Пока нет адской пирамиды колбэков. Мы делаем цепочку промисов
     * чтобы сделать выполнение асинхронных действий последовательно.
     */
  })
  
  console.log("Команда, которая выполняется первой!!!"); // **
  
loadScript("./src/one.js")
.then(() => {
  loadScript("./src/two.js")
  .then(() => {
    loadScript("./src/three.js")
    .then(() => {
        three("================================================");
        one("А вот тут уже появляется адская пирамида колбэков, код растет вниз и вправо");
        two("здесь уже не возвращается промис");
      })
  })
})