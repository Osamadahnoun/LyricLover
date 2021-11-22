// Global Variables for submit button element/song title container element/input element
var submitBtn = document.querySelector('#submitBtn');
var container = document.querySelector('#container');
var input = document.querySelector('#input');
var albums = document.querySelector('#album');
var trendingEl = document.querySelector('#trend');
var lovedEl = document.querySelector('#loved');
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

var topAlbums = function() {
    fetch("https://theaudiodb.p.rapidapi.com/mostloved.php?format=album", {
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
            var album1 = data.loved[0].strAlbum
            var artist1 = data.loved[0].strArtist
            var album2 = data.loved[1].strAlbum
            var artist2 = data.loved[1].strArtist
            var album3 = data.loved[2].strAlbum
            var artist3 = data.loved[2].strArtist
            var album4 = data.loved[3].strAlbum
            var artist4 = data.loved[3].strArtist
            var album5 = data.loved[4].strAlbum
            var artist5 = data.loved[4].strArtist
            var album6 = data.loved[5].strAlbum
            var artist6 = data.loved[5].strArtist
            var album7 = data.loved[6].strAlbum
            var artist7 = data.loved[6].strArtist
            var album8 = data.loved[7].strAlbum
            var artist8 = data.loved[7].strArtist
            var album9 = data.loved[8].strAlbum
            var artist9 = data.loved[8].strArtist
            var album10 = data.loved[9].strAlbum
            var artist10 = data.loved[9].strArtist
            
            Song1El.textContent = "1. Artist: " + artist1 + ", Album: " + album1;
            Song1El.setAttribute("href", "./album.html?artist="+data.loved[0].strArtist+"&album="+data.loved[0].strAlbum+"&id="+data.loved[0].idAlbum);
            Song2El.textContent = "2. Artist: " + artist2 + ", Album: " + album2;
            Song2El.setAttribute("href", "./album.html?artist="+data.loved[1].strArtist+"&album="+data.loved[1].strAlbum+"&id="+data.loved[1].idAlbum);
            Song3El.textContent = "3. Artist: " + artist3 + ", Album: " + album3;
            Song3El.setAttribute("href", "./album.html?artist="+data.loved[2].strArtist+"&album="+data.loved[2].strAlbum+"&id="+data.loved[2].idAlbum);
            Song4El.textContent = "4. Artist: " + artist4 + ", Album: " + album4;
            Song4El.setAttribute("href", "./album.html?artist="+data.loved[3].strArtist+"&album="+data.loved[3].strAlbum+"&id="+data.loved[3].idAlbum);
            Song5El.textContent = "5. Artist: " + artist5 + ", Album: " + album5;
            Song5El.setAttribute("href", "./album.html?artist="+data.loved[4].strArtist+"&album="+data.loved[4].strAlbum+"&id="+data.loved[4].idAlbum);
            Song6El.textContent = "6. Artist: " + artist6 + ", Album: " + album6;
            Song6El.setAttribute("href", "./album.html?artist="+data.loved[5].strArtist+"&album="+data.loved[5].strAlbum+"&id="+data.loved[5].idAlbum);
            Song7El.textContent = "7. Artist: " + artist7 + ", Album: " + album7;
            Song7El.setAttribute("href", "./album.html?artist="+data.loved[6].strArtist+"&album="+data.loved[6].strAlbum+"&id="+data.loved[6].idAlbum);
            Song8El.textContent = "8. Artist: " + artist8 + ", Album: " + album8;
            Song8El.setAttribute("href", "./album.html?artist="+data.loved[7].strArtist+"&album="+data.loved[7].strAlbum+"&id="+data.loved[7].idAlbum);
            Song9El.textContent = "9. Artist: " + artist9 + ", Album: " + album9;
            Song9El.setAttribute("href", "./album.html?artist="+data.loved[8].strArtist+"&album="+data.loved[8].strAlbum+"&id="+data.loved[8].idAlbum);
            Song10El.textContent = "10. Artist: " + artist10 + ", Album: " + album10;
            Song10El.setAttribute("href", "./album.html?artist="+data.loved[9].strArtist+"&album="+data.loved[9].strAlbum+"&id="+data.loved[9].idAlbum);
           
})
    }
}) 
}

var trending = function() {
    fetch("https://theaudiodb.p.rapidapi.com/trending.php?country=us&type=itunes&format=singles", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "theaudiodb.p.rapidapi.com",
		"x-rapidapi-key": "ef46e6a41amshf3c1a1224464392p1c3b64jsnd05e7e63b5ee"
	}
})     .then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                var track1 = data.trending[0].strTrack
                var artist1 = data.trending[0].strArtist
                var track2 = data.trending[1].strTrack
                var artist2 = data.trending[1].strArtist
                var track3 = data.trending[2].strTrack
                var artist3 = data.trending[2].strArtist
                var track4 = data.trending[3].strTrack
                var artist4 = data.trending[3].strArtist
                var track5 = data.trending[4].strTrack
                var artist5 = data.trending[4].strArtist
                var track6 = data.trending[5].strTrack
                var artist6 = data.trending[5].strArtist


            Song1El.textContent = "1. Artist: " + artist1 + ", Track: " + track1;
            Song1El.setAttribute("href", "./single.html?artist="+artist1+"&song="+track1);
            Song2El.textContent = "2. Artist: " + artist2 + ", Track: " + track2;
            Song2El.setAttribute("href", "./single.html?artist="+artist2+"&song="+track2);
            Song3El.textContent = "3. Artist: " + artist3 + ", Track: " + track3;
            Song3El.setAttribute("href", "./single.html?artist="+artist3+"&song="+track3);
            Song4El.textContent = "4. Artist: " + artist4 + ", Track: " + track4;
            Song4El.setAttribute("href", "./single.html?artist="+artist4+"&song="+track4);
            Song5El.textContent = "5. Artist: " + artist5 + ", Track: " + track5;
            Song5El.setAttribute("href", "./single.html?artist="+artist5+"&song="+track5);
            Song6El.textContent = "6. Artist: " + artist6 + ", Track: " + track6;
            Song6El.setAttribute("href", "./single.html?artist="+artist6+"&song="+track6);
            
    })
        }
    }) 
}

var toptracks = function() {
    fetch("https://theaudiodb.p.rapidapi.com/mostloved.php?format=track", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "theaudiodb.p.rapidapi.com",
		"x-rapidapi-key": "ef46e6a41amshf3c1a1224464392p1c3b64jsnd05e7e63b5ee"
	}
})    .then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data)
            var artist1 = data.loved[0].strArtist;
            var track1 = data.loved[0].strAlbum;
            var artist2 = data.loved[1].strArtist;
            var track2 = data.loved[1].strAlbum;
            var artist3 = data.loved[2].strArtist;
            var track3 = data.loved[2].strAlbum;
            var artist4 = data.loved[3].strArtist;
            var track4 = data.loved[3].strAlbum;
            var artist5 = data.loved[4].strArtist;
            var track5 = data.loved[4].strAlbum;
            var artist6 = data.loved[5].strArtist;
            var track6 = data.loved[5].strAlbum;
            var artist7 = data.loved[6].strArtist;
            var track7 = data.loved[6].strAlbum;
            var artist8 = data.loved[7].strArtist;
            var track8 = data.loved[7].strAlbum;
            var artist9 = data.loved[8].strArtist;
            var track9 = data.loved[8].strAlbum;
            var artist10 = data.loved[9].strArtist;
            var track10 = data.loved[9].strAlbum;

            Song1El.textContent = "1. Artist: " + artist1 + ", Track: " + track1;
            Song1El.setAttribute("href", "./single.html?artist="+artist1+"&song="+track1);

            Song2El.textContent = "2. Artist: " + artist2 + ", Track: " + track2;
            Song2El.setAttribute("href", "./single.html?artist="+artist2+"&song="+track2);

            Song3El.textContent = "3. Artist: " + artist3 + ", Track: " + track3;
            Song3El.setAttribute("href", "./single.html?artist="+artist3+"&song="+track3);

            Song4El.textContent = "4. Artist: " + artist4 + ", Track: " + track4;
            Song4El.setAttribute("href", "./single.html?artist="+artist4+"&song="+track4);

            Song5El.textContent = "5. Artist: " + artist5 + ", Track: " + track5;
            Song5El.setAttribute("href", "./single.html?artist="+artist5+"&song="+track5);

            Song6El.textContent = "6. Artist: " + artist6 + ", Track: " + track6;
            Song6El.setAttribute("href", "./single.html?artist="+artist6+"&song="+track6);

            Song7El.textContent = "7. Artist: " + artist7 + ", Track: " + track7;
            Song7El.setAttribute("href", "./single.html?artist="+artist7+"&song="+track7);

            Song8El.textContent = "8. Artist: " + artist8 + ", Track: " + track8;
            Song8El.setAttribute("href", "./single.html?artist="+artist8+"&song="+track8);

            Song9El.textContent = "9. Artist: " + artist9 + ", Track: " + track9;
            Song9El.setAttribute("href", "./single.html?artist="+artist9+"&song="+track9);

            Song10El.textContent = "10. Artist: " + artist10 + ", Track: " + track10;
            Song10El.setAttribute("href", "./single.html?artist="+artist10+"&song="+track10);
            
    })
        }
    }) 

}


var topAlbumsButton = function() {
    albums.addEventListener('click', function() {
        Song1El.textContent = ''
        Song2El.textContent = ''
        Song3El.textContent = ''
        Song4El.textContent = ''
        Song5El.textContent = ''
        Song6El.textContent = ''
        Song7El.textContent = ''
        Song8El.textContent = ''
        Song9El.textContent = ''
        Song10El.textContent = ''
        topAlbums();
    })
}

var trendingButton = function() {
    trendingEl.addEventListener('click', function() {
        Song1El.textContent = ''
        Song2El.textContent = ''
        Song3El.textContent = ''
        Song4El.textContent = ''
        Song5El.textContent = ''
        Song6El.textContent = ''
        Song7El.textContent = ''
        Song8El.textContent = ''
        Song9El.textContent = ''
        Song10El.textContent = ''
        trending();
    })
}




// This functiion gives the button element functionality to run the getArtistSongs with the input.value parameter. It also clears the previous inputs song names
var inputArtistNameButton = function() {
    submitBtn.addEventListener('click', function() {
        Song1El.textContent = ''
        Song2El.textContent = ''
        Song3El.textContent = ''
        Song4El.textContent = ''
        Song5El.textContent = ''
        Song6El.textContent = ''
        Song7El.textContent = ''
        Song8El.textContent = ''
        Song9El.textContent = ''
        Song10El.textContent = ''
        getArtistSongs(input.value);
    })

}

var topTracksButton = function() {
    lovedEl.addEventListener('click', function() {
        toptracks();
    })
}


inputArtistNameButton();

topAlbumsButton();

trendingButton();

topTracksButton();


