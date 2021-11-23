var titleEl = document.querySelector(".info");
var containerEl = document.querySelector(".container")

var getInfo = function() {
  var queryString = document.location.search;
  var urlParams = new URLSearchParams(queryString);
  var artist= urlParams.get("artist");
  var song = urlParams.get("song");

  //titleEl.innerHTML = (artist+"/"+song).toUpperCase();
  titleEl.innerHTML = (song.toUpperCase() + " by " + artist.toUpperCase());

  if (artist && song) {
    getLyrics(artist, song);
  } else {
    document.location.replace("./index.html");
  }
};

var getLyrics = function(artist, song) {
  
  var url = "https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art="+artist+"&mus="+song;
  fetch (url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      if(data.type == "song_notfound"){
        var lyricsEl = document.createElement("p");
        lyricsEl.innerHTML ="Sorry our database doesn't have this song :(";
        containerEl.appendChild(lyricsEl);
      }else{
        var lyrics = data.mus[0].text;
        var explicit = data.badwords;
        var explicitEl = document.createElement("span")
        if(explicit){
          explicitEl.classList = "explicit"
          explicitEl.innerHTML = "Warning: Explicit Content"
        } else{
          explicitEl.innerHTML = "Safe: No Explicit Content "
          explicitEl.classList = "not-explicit"
        }
        var find = lyrics.replaceAll("\n","<br>");
        var lyricsEl = document.createElement("p");
        lyricsEl.classList ="lyrics";
        lyricsEl.innerHTML = find;
        containerEl.appendChild(explicitEl);
        containerEl.appendChild(lyricsEl);
      }
    })    
}

getInfo();
