var titleEl = document.querySelector(".info");
var containerEl = document.querySelector(".container")

var getInfo = function() {
  var queryString = document.location.search;
  var urlParams = new URLSearchParams(queryString);
  var artist= urlParams.get("artist");
  var album= urlParams.get("album");
  var albumId = urlParams.get("id");

  titleEl.innerHTML = (artist+"/"+album).toUpperCase();

  if (artist && album && albumId) {
    getSongs(albumId, artist);
  } else {
    document.location.replace("./index.html");
  }
};

var getSongs = function(albumId, artist) {

  var albumUrl = "https://theaudiodb.com/api/v1/json/1/track.php?m=" + albumId
  fetch(albumUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    var songsContainer = document.createElement("div");
    songsContainer.classList = "songsContainer"
    for (let i=0; i < data.track.length; i++){
      var songList = document.createElement("a")
      songList.innerText =(i+1) +". " + data.track[i].strTrack;
      songList.setAttribute("href", "./single.html?artist="+artist+"&song="+data.track[i].strTrack);
      songList.classList = "albumSong"
      console.log(songList)
      songsContainer.appendChild(songList);
    }
    containerEl.appendChild(songsContainer)
  })


};

getInfo()

// https://theaudiodb.com/api/v1/json/1/track.php?m=2109889