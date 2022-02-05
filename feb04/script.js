apiRequest = () => {

  document.querySelector("#grid").textContent = "";

  const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=perHZcx7uK1d8a5PqSJi-O6KuFD-HNP1TPXFrnsUBTY';

  fetch(url)

  .then(response => {
    if (response)
      return response.json();
   })

   .then(data => {
      loadImages(data);
   })

   .catch(error => console.log(error));   
}

document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key == "Enter")
    apiRequest();
});

document.querySelector("#search").addEventListener("click", () => {
    apiRequest();
});


loadImages = (data) => {
  for(let i = 0;i < data.results.length;i++){
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
    image.addEventListener("click", function(){
      window.open(data.results[i].links.download, '_blank');
    })

    document.querySelector("#grid").appendChild(image);
  }
}
