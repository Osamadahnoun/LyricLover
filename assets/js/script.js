var submitBtn = document.querySelector('#submitBtn');
var container = document.querySelector('#container');
var input = document.querySelector('#input');

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

var getArtistSongs = function(firstName) {
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
                // console.log(data.track.length)
                var song1 = data.track[0].strTrack
                Song1El.textContent = song1
                var song2 = data.track[1].strTrack
                Song2El.textContent = song2
                var song3 = data.track[2].strTrack
                Song3El.textContent = song3
                var song4 = data.track[3].strTrack
                Song4El.textContent = song4
                var song5 = data.track[4].strTrack
                Song5El.textContent = song5
                var song6 = data.track[5].strTrack
                Song6El.textContent = song6
                var song7 = data.track[6].strTrack
                Song7El.textContent = song7
                var song8 = data.track[7].strTrack
                Song8El.textContent = song8
                var song9 = data.track[8].strTrack
                Song9El.textContent = song9
                var song10 = data.track[9].strTrack
                Song10El.textContent = song10
    })
        }
    }) 
}

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



