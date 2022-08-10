function loadScript(src) {
  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => res("Script is loadded successfully");

    script.onerror = () => rej(new Error("Script loading is failure"));

    document.body.append(script);
  });
}

const prom = new Promise(function (res, rej) {
  setTimeout(() => {
    console.log("setTimeout1");
    res(1000);
  }, 1000);
})
  .then(function (res1) {
    console.log("Value in first .then: ", res1);
    return res1 * 2;
    /**
     * Потребители возвращаю промис.
     */
  })
  .then(function (res2) {
    console.log("Value in second .then: ", res2);
    return new Promise(function (res, rej) {
      // *
      rej(new Error(":CCCC")); // Хотя мы можем и явно вернуть промис

      /**
       * Даже промис завершенный с ошибкой
       */
    });
  })
  .then(function (res3) {
    console.log("Value in third .then: ", res3);
    return res3 * 2;
  })
  .catch(function (error) {
    /**
     * И на промис после строки * уже сработает этот блок!!!
     */
    console.log(error);
    return "Error was"; // тут тоже возвращает промис **
  })
  .then(console.log); // Здесь обрабатывается промис из строки **
