function loadScript(src, cb) {
  const script = document.createElement("script");
  script.src = src;

  script.onload = () => cb(null, script);

  script.onerror = () =>
    cb(new Error(`The loading script ${script.src} failed`));

  document.body.append(script);
}

// PROMISE
const prom1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(new Error(":C"));
  }, 1000);
});

prom1
  .finally(() => {
    console.log("Цепочка выполняется последовательно");
    // finally не принимает никаких аргументов и пропускает через себя промис, который дальше используется либо в then либо в catch
  })
  .then((value) => {
    console.log(value);
    console.log(
      "Но, в зависимости от состояния промиса, срабатывает либо then либо catch"
    );
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("finally выполняется в любом случае");
  });
