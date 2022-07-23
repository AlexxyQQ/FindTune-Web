$(document).ready(function () {
  $("div.displaylyricsbox").slice(1).addClass("Hidden");
  $("div.displaylyricsboxpartital").first().addClass("Hidden");
});

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

function downloadTxtFile(id, songname) {
  var element = document.createElement("a");
  var elements = document.getElementsByClassName("LyricsLines");
  var text = "";
  for (var i = 0, len = elements.length; i < len; i++) {
    text += elements[i].innerText + "\n";
  }
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", songname);

  element.style.display = "none";

  element.click();

  document.body.removeChild(element);
}
