function loadScript(src) {
  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => res("Script is loadded successfully");

    script.onerror = () => rej(new Error("Script loading is failure"));

    document.body.append(script);
  });
}

fetch("./server/users.json")
  .then(response => {
    /**
     * Этот объект возвращается до того, как сервер полностью загружен.
     * 
     * А вот response.json() возвращает промис, который выполняется, 
     * когда данные полностью загружены с сервера.  
     */
    console.log("response: ", response);
    return response.json()
  })
  .then(users => users[0])
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(gitHubResponse => gitHubResponse.json())
  .then(gitHubUser => {
    console.log(gitHubUser);
    const imgEl = document.createElement("img");
    imgEl.src = gitHubUser.avatar_url;
    document.body.append(imgEl);
    imgEl.style.borderRadius = "50%";
    imgEl.style.border = "3px solid orange"
  })