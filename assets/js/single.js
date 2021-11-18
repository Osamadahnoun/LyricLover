var getInfo = function() {
  var queryString = document.location.search;
  var urlParams = new URLSearchParams(queryString);
  var artist= urlParams.get('artist');
  var song = urlParams.get('song');
  
  if (artist & song) {
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
      console.log(data)
    })
    
}