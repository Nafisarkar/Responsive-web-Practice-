const fs = require('fs');
const ytdl = require('ytdl-core');

function dowloade() {
  var x = document.createElement("text_form");
  ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  .pipe(fs.createWriteStream('video.mp4',{quality: '1080p'}));
}