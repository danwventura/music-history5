"use strict"

$(document).ready(function(){

// jQuery
let listView = $('#list-view');
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
    deleteSongs()
  }
};


function deleteSongs(){
  let deleteBtn = $('.delete');
  deleteBtn.click(function(e){
    e.target.closest('div').remove()
  })
}



$('#moreButton').click(function loadSongs2 () {
  let loader = new XMLHttpRequest();

  loader.addEventListener("load", function () {
    songs2 = JSON.parse(this.responseText).songs
    printSongs2(songs2);

  });
    loader.open("GET", "moreMusic.json");
    loader.send();
  })

function printSongs2 (songs2){
  
  let secondOutput = $('#secondOutput')
  for (var i = 0; i < songs2.length; i++) {
    let currSong2 = songs2[i]
    let bigString2 = `<div><p>${currSong2.name} by ${currSong2.artist} on the album ${currSong2.album} <input type="button" class="delete2" value="Delete"></input></div>`
console.log("this");
    secondOutput.append(bigString2)
    deleteSongs2()
  }
}

function deleteSongs2(){
  console.log("that");
  let deleteBtn2 = $('.delete2');
  deleteBtn2.click(function(e){
    e.target.closest('div').remove()
  })
}

loadSongs();
});