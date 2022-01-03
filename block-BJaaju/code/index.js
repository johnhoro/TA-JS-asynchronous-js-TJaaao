let display = document.querySelector(`.display`);
let input = document.querySelector(`input`);

const GetSearchUrl = (query) => {
  return `https://api.unsplash.com/search/photos/?query=${query}&client_id=TRknOe7JsSZQml_wEYpM-Yuvw_bFmDMGBqn_nW_-0KU`;
};

function fetchData(successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    `GET`,
    `https://api.unsplash.com/photos/?client_id=TRknOe7JsSZQml_wEYpM-Yuvw_bFmDMGBqn_nW_-0KU`
  );
  xhr.onload = () => successHandler(JSON.parse(xhr.response));
  xhr.onerror = function () {
    console.error(`Something went wrong!`);
  };
  xhr.send();
}

function displayImages(images) {
  display.innerHTML = ``;
  images.forEach((img) => {
    let li = document.createElement(`li`);
    let imgs = document.createElement(`img`);
    imgs.src = img.urls.small;
    li.append(imgs);
    display.append(li);
  });
}
fetchData(displayImages);

function handleSearch(event) {
  if (event.keyCode === 13 && input.value) {
    console.log(event.target.value);
    fetchData(GetSearchUrl(input.value), (searchResult) => {
      displayImages(searchResult.results);
    });
    input.value = ``;
  }
}

input.addEventListener(`keyup`, handleSearch);
