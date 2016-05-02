"use strict"

$(document).ready(function(){

// jQuery
let listView = $('#list-view');

//jQuery
let moreButton = $('#more')
// let moreButton = $("<input type="button" value="More"></input>")


let songs = [];
let songs2 = [];



function loadSongs () {
  let loader = new XMLHttpRequest();

  loader.addEventListener("load", function () {
    songs = JSON.parse(this.responseText).songs
    printSongs(songs);

  });
    loader.open("GET", "mh5.json");
    loader.send();
  };




function printSongs(songs){
  for (var i = 0; i < songs.length; i++) {
    let currSong = songs[i]
    let bigString = `<div><p>${currSong.name} by ${currSong.artist} on the album ${currSong.album} <input type="button" class="delete" value="Delete"></input></div>`



    listView.append(bigString)
    // listView.append(moreButton)
    deleteSongs(i)
  }
};


function deleteSongs(i){
  let deleteBtn = $('.delete');
  deleteBtn.click(function(){
    event.target.parentElement.remove()
  })
}

loadSongs();


moreButton.click(function loadSongs2 () {
  let loader = new XMLHttpRequest();

  loader.addEventListener("load", function () {
    songs2 = JSON.parse(this.responseText).songs
    printSongs2(songs2);

  });
    loader.open("GET", "moreMusic.json");
    loader.send();
  })

function printSongs2 (songs2){

  for (var i = 0; i < songs2.length; i++) {
    let currSong2 = songs2[i]
    let bigString2 = `<div><p>${currSong2.name} by ${currSong2.artist} on the album ${currSong2.album} <input type="button" class="delete2" value="Delete"></input></div>`

    listView.append(bigString2)
    // listView.append(moreButton)
    deleteSongs2(i)
  }
}

function deleteSongs2(i){
  let deleteBtn2 = $('.delete2');
  deleteBtn2.click(function(){
    event.target.parentElement.remove()
  })
}

});