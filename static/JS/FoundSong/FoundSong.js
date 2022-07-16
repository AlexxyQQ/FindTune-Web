function DisplayUserLyrics() {
  // var lyrics = document.getElementById("LyricsLines");
  var lyricsupdateform = document.getElementById("UpdateLyrics");
  if (lyricsupdateform.className == "LyricsForm Hidden") {
    // lyrics.classList.add("Hidden");
    lyricsupdateform.classList.remove("Hidden");
  } else {
    // lyrics.classList.remove("Hidden");
    lyricsupdateform.classList.add("Hidden");
  }
}

function HideLyrics(id) {
  fulllyrics = document.getElementById("lyricsbox" + id);
  partiallyrics = document.getElementById("displaylyricsboxpartital" + id);
  if (partiallyrics.className == "displaylyricsboxpartital Hidden") {
    fulllyrics.classList.add("Hidden");
    partiallyrics.classList.remove("Hidden");
  } else {
    partiallyrics.classList.add("Hidden");
    fulllyrics.classList.remove("Hidden");
  }
}
