var albumEl = document.querySelector(".album");
var bandEl = document.querySelector(".band");
var containerEl = document.querySelector(".container")
var albumHeaderEl = document.querySelector(".album-header");

var getInfo = function() {
  var queryString = document.location.search;
  var urlParams = new URLSearchParams(queryString);
  var artist= urlParams.get("artist");
  var album= urlParams.get("album");
  var albumId = urlParams.get("id");

  albumEl.innerHTML = album.toUpperCase();
  bandEl.innerHTML =  artist.toUpperCase();

  var albumUrl = "https://theaudiodb.com/api/v1/json/1/album.php?m=" + albumId;

  fetch(albumUrl)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      var imageUrl = data.album[0].strAlbumThumb;

      var img = document.createElement("img");
      img.classList = "thumbnail"
      img.setAttribute("src", imageUrl);
      img.setAttribute("alt","album thumbnail", "width", "100", "height","100");
      img.setAttribute("width", "250");
      img.setAttribute("height","250");

      albumHeaderEl.appendChild(img)
      if (artist && album && albumId) {
        getSongs(albumId, artist,);
      } else {
        document.location.replace("./index.html");
      }
    })

};

var getSongs = function(albumId, artist) {
  console.log(albumId)
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
      songList.setAttribute('class', 'button is-success is-size-6-mobile is-size-5-tablet is-size-4-desktop');
      songList.setAttribute('style', 'margin:5px 0')
      songsContainer.appendChild(songList);
    }
    containerEl.appendChild(songsContainer)
  })


};

getInfo()
