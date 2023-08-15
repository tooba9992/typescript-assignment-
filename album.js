"use strict";
function make_album(artist, albumTitle, numTracks) {
    let album = {
        artist,
        albumTitle
    };
    if (numTracks !== undefined) {
        album.numTracks = numTracks;
    }
    return album;
}
// Create album objects using the make_album() function
let album1 = make_album("Artist 1", "Album Title 1");
let album2 = make_album("Artist 2", "Album Title 2", 12);
// Print the album objects
console.log(album1);
console.log(album2);
