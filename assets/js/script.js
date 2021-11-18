// Global Variables for submit button element/song title container element/input element
var submitBtn = document.querySelector('#submitBtn');
var container = document.querySelector('#container');
var input = document.querySelector('#input');
// Global Variables for each individual song element
var Song1El = document.querySelector('#song1');
var Song2El = document.querySelector('#song2');
var Song3El = document.querySelector('#song3');
var Song4El = document.querySelector('#song4');
var Song5El = document.querySelector('#song5');
var Song6El = document.querySelector('#song6');
var Song7El = document.querySelector('#song7');
var Song8El = document.querySelector('#song8');
var Song9El = document.querySelector('#song9');
var Song10El = document.querySelector('#song10');

// This function fetches data from API and prints it to screen through changing each song elements text content 
var getArtistSongs = function(firstName) {
  console.log(firstName)
    var apiUrl = 'https://theaudiodb.p.rapidapi.com/track-top10.php?s=' + firstName
    fetch(apiUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "theaudiodb.p.rapidapi.com",
		"x-rapidapi-key": "ef46e6a41amshf3c1a1224464392p1c3b64jsnd05e7e63b5ee"
	}
})
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data)
                // console.log(data.track.length)
                var song1 = data.track[0].strTrack
                Song1El.textContent = song1
                Song1El.setAttribute("href", "./single.html?artist="+data.track[0].strArtist+"&song="+data.track[0].strTrack);
                var song2 = data.track[1].strTrack
                Song2El.textContent = song2
                Song2El.setAttribute("href", "./single.html?artist="+data.track[1].strArtist+"&song="+data.track[1].strTrack);
                var song3 = data.track[2].strTrack
                Song3El.textContent = song3
                Song3El.setAttribute("href", "./single.html?artist="+data.track[2].strArtist+"&song="+data.track[2].strTrack);
                var song4 = data.track[3].strTrack
                Song4El.textContent = song4
                Song4El.setAttribute("href", "./single.html?artist="+data.track[3].strArtist+"&song="+data.track[3].strTrack);
                var song5 = data.track[4].strTrack
                Song5El.textContent = song5
                Song5El.setAttribute("href", "./single.html?artist="+data.track[4].strArtist+"&song="+data.track[4].strTrack);
                var song6 = data.track[5].strTrack
                Song6El.textContent = song6
                Song6El.setAttribute("href", "./single.html?artist="+data.track[5].strArtist+"&song="+data.track[5].strTrack);
                var song7 = data.track[6].strTrack
                Song7El.textContent = song7
                Song7El.setAttribute("href", "./single.html?artist="+data.track[6].strArtist+"&song="+data.track[6].strTrack);
                var song8 = data.track[7].strTrack
                Song8El.textContent = song8
                Song8El.setAttribute("href", "./single.html?artist="+data.track[7].strArtist+"&song="+data.track[7].strTrack);
                var song9 = data.track[8].strTrack
                Song9El.textContent = song9
                Song9El.setAttribute("href", "./single.html?artist="+data.track[8].strArtist+"&song="+data.track[8].strTrack);
                var song10 = data.track[9].strTrack
                Song10El.textContent = song10
                Song10El.setAttribute("href", "./single.html?artist="+data.track[9].strArtist+"&song="+data.track[9].strTrack);
    })
        }
    }) 
}

// This functiion gives the button element functionality to run the getArtistSongs with the input.value parameter. It also clears the previous inputs song names
var inputArtistName = function() {
    submitBtn.addEventListener('click', function() {
        Song1El.textContent = 'Song Title 1'
        Song2El.textContent = 'Song Title 2'
        Song3El.textContent = 'Song Title 3'
        Song4El.textContent = 'Song Title 4'
        Song5El.textContent = 'Song Title 5'
        Song6El.textContent = 'Song Title 6'
        Song7El.textContent = 'Song Title 7'
        Song8El.textContent = 'Song Title 8'
        Song9El.textContent = 'Song Title 9'
        Song10El.textContent = 'Song Title 10'
        getArtistSongs(input.value);
    })

}

inputArtistName();



