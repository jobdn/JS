function loadScript(src) {
  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => res("Script is loadded successfully");

    script.onerror = () => rej(new Error("Script loading is failure"));

    document.body.append(script);
  });
}

function loadGithubUserImage() {
  const githubUser = prompt("Enter github user name: ", "jobdn");

  fetch(`https://api.github.com/users/${githubUser}`)
  .then(gitHubResponse => gitHubResponse.json())
  .then(createAndAppendImg)
}

function createAndAppendImg(gitHubUser) {
  const imgEl = document.createElement("img");
  imgEl.src = gitHubUser.avatar_url;
  document.body.append(imgEl);
  imgEl.style.borderRadius = "50%";
  imgEl.style.border = "3px solid orange"
}

loadGithubUserImage()