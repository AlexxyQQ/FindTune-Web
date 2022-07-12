function DisplayUserLyrics() {
  var lyrics = document.getElementById("LyricsLines");
  var lyricsupdateform = document.getElementById("UpdateLyrics");
  if (lyricsupdateform.className == "LyricsForm Hidden") {
    lyrics.classList.add("Hidden");
    lyricsupdateform.classList.remove("Hidden");
  } else {
    lyrics.classList.remove("Hidden");
    lyricsupdateform.classList.add("Hidden");
  }
}
