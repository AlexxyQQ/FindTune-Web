from requests import request


a = {
    "matches": [
        {
            "id": "356756581",
            "offset": 200.6856875,
            "timeskew": -0.001525104,
            "frequencyskew": -0.00020134449,
        }
    ],
    "location": {
        "latitude": 19.36,
        "longitude": -17.73,
        "altitude": 425.62,
        "accuracy": 0.01,
    },
    "timestamp": 1657188859665,
    "timezone": "Europe/Helsinki",
    "track": {
        "layout": "5",
        "type": "MUSIC",
        "key": "349199618",
        "title": "Good Goodbye",
        "subtitle": "Linkin Park Feat. Pusha T & Stormzy",
        "images": {
            "background": "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/15/fd/df/15fddf61-d4d6-4283-63de-b2be6d89a051/mzl.jdhuenng.jpg/800x800cc.jpg",
            "coverart": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/de/b4/76/deb4760b-1733-d09f-8ab5-3da9381d5080/093624913214.jpg/400x400cc.jpg",
            "coverarthq": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/de/b4/76/deb4760b-1733-d09f-8ab5-3da9381d5080/093624913214.jpg/400x400cc.jpg",
            "joecolor": "b:3b2e34p:fcebd9s:f2d5bbt:d5c5b8q:ceb3a0",
        },
        "share": {
            "subject": "Good Goodbye - Linkin Park Feat. Pusha T & Stormzy",
            "text": "J'ai utilisé Shazam pour découvrir Good Goodbye par Linkin Park Feat. Pusha T & Stormzy.",
            "href": "https://www.shazam.com/track/349199618/good-goodbye",
            "image": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/de/b4/76/deb4760b-1733-d09f-8ab5-3da9381d5080/093624913214.jpg/400x400cc.jpg",
            "twitter": "J'ai utilisé @Shazam pour découvrir Good Goodbye par Linkin Park Feat. Pusha T & Stormzy.",
            "html": "https://www.shazam.com/snippets/email-share/349199618?lang=fr&country=FR",
            "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/15/fd/df/15fddf61-d4d6-4283-63de-b2be6d89a051/mzl.jdhuenng.jpg/800x800cc.jpg",
            "snapchat": "https://www.shazam.com/partner/sc/track/349199618",
        },
        "hub": {
            "type": "APPLEMUSIC",
            "image": "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            "actions": [
                {"name": "apple", "type": "applemusicplay", "id": "1204427653"},
                {
                    "name": "apple",
                    "type": "uri",
                    "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/63/a8/8f/63a88f0d-395d-81d0-9c64-8a21895e7bc7/mzaf_2589092328799103763.plus.aac.ep.m4a",
                },
            ],
            "options": [
                {
                    "caption": "OUVRIR",
                    "actions": [
                        {
                            "name": "hub:applemusic:deeplink",
                            "type": "intent",
                            "uri": "intent://music.apple.com/fr/album/good-goodbye-feat-pusha-t-stormzy/1204427627?i=1204427653&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                        },
                        {
                            "name": "hub:applemusic:connect",
                            "type": "applemusicconnect",
                            "id": "1204427653",
                            "uri": "https://unsupported.shazam.com",
                        },
                        {
                            "name": "hub:applemusic:androidstore",
                            "type": "uri",
                            "uri": "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                        },
                    ],
                    "beacondata": {"type": "open", "providername": "applemusic"},
                    "image": "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                    "type": "open",
                    "listcaption": "Ouvrir dans Apple Music",
                    "overflowimage": "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                    "colouroverflowimage": False,
                    "providername": "applemusic",
                }
            ],
            "providers": [
                {
                    "caption": "Ouvrir dans Spotify",
                    "images": {
                        "overflow": "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                        "default": "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                    },
                    "actions": [
                        {
                            "name": "hub:spotify:searchdeeplink",
                            "type": "uri",
                            "uri": "spotify:search:Good%20Goodbye%20LINKIN%20PARK",
                        }
                    ],
                    "type": "SPOTIFY",
                },
                {
                    "caption": "Ouvrir dans YouTube Music",
                    "images": {
                        "overflow": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                        "default": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                    },
                    "actions": [
                        {
                            "name": "hub:youtubemusic:androiddeeplink",
                            "type": "uri",
                            "uri": "https://music.youtube.com/search?q=Good+Goodbye+Linkin+Park&feature=shazam",
                        }
                    ],
                    "type": "YOUTUBEMUSIC",
                },
                {
                    "caption": "Ouvrir dans Deezer",
                    "images": {
                        "overflow": "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                        "default": "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                    },
                    "actions": [
                        {
                            "name": "hub:deezer:searchdeeplink",
                            "type": "uri",
                            "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Good+Goodbye%27%20artist%3A%27Linkin+Park%27%7D",
                        }
                    ],
                    "type": "DEEZER",
                },
            ],
            "explicit": False,
            "displayname": "APPLE MUSIC",
        },
        "sections": [
            {
                "type": "SONG",
                "metapages": [
                    {
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/15/fd/df/15fddf61-d4d6-4283-63de-b2be6d89a051/mzl.jdhuenng.jpg/800x800cc.jpg",
                        "caption": "LINKIN PARK",
                    },
                    {
                        "image": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/de/b4/76/deb4760b-1733-d09f-8ab5-3da9381d5080/093624913214.jpg/400x400cc.jpg",
                        "caption": "Good Goodbye",
                    },
                ],
                "tabname": "Titre",
                "metadata": [
                    {"title": "Album", "text": "One More Light"},
                    {"title": "Label", "text": "Warner Records"},
                    {"title": "Sorti", "text": "2017"},
                ],
            },
            {
                "type": "LYRICS",
                "text": [
                    "So say goodbye and hit the road",
                    "Pack it up and disappear",
                    "You better have some place to go",
                    "'Cause you can't come back around here, good goodbye",
                    "(Don't you come back no more)",
                    "",
                    "Live from the rhythm, it's something wild, venomous",
                    "Enemies trying to read me, you're all looking highly illiterate",
                    "Blindly forgetting if I'm in the mix, you won't find an equivalent",
                    "I've been here killing it longer than you've been alive, you idiot",
                    "And it makes you so mad, somebody else could be stepping in front of you",
                    "And it makes you so mad that you're not the only one, there's more than one of you",
                    "And you can't understand the fact that it's over and done, hope you had fun",
                    "You've got a lot to discuss on the bus headed back where you're from",
                    "",
                    "So say goodbye and hit the road",
                    "Pack it up and disappear",
                    "You better have some place to go",
                    "'Cause you can't come back around here",
                    "Good goodbye, good goodbye, good goodbye, good goodbye",
                    "",
                    "Goodbye, good riddance, a period is after every sentence",
                    "Did my time with my cellmate, maxed out so now we finished",
                    "Every day was like a hail date, every night was like a hailstorm",
                    "Took her back to my tinted windows, showing out, she in rare form",
                    "Wings up, now I'm airborne, King Push, they got a chair for him",
                    "Make way for the new queen, the old lineup where they cheer for 'em",
                    "Consequence when you ain't there for him",
                    "Were you there for him? Did you care for him? You were dead wrong",
                    "(Don't you come back no more)",
                    "",
                    "So say goodbye and hit the road",
                    "Pack it up and disappear",
                    "You better have some place to go",
                    "'Cause you can't come back around here",
                    "Good goodbye, good goodbye, good goodbye, good goodbye",
                    "",
                    "Let me say goodbye to my demons, let me say goodbye to my past life",
                    "Let me say goodbye to the darkness, tell 'em that I'd rather be here in the starlight",
                    "Tell 'em that I'd rather be here where they love me, tell 'em that I'm yours this is our life",
                    "And I still keep raising the bar like never seen a young black brother in the chart twice",
                    "Goodbye to the stereotypes, you can't tell my kings we can't",
                    "Mandem we're linking tings in parks, now I got a tune with Linkin Park",
                    "Like goodbye to my old hoes, goodbye to the cold roads, I can't die for my postcode",
                    "Young little Mike from the Gold Coast, and now I'm inside with my bro-bro's gang",
                    "",
                    "So say goodbye and hit the road",
                    "Pack it up and disappear",
                    "You better have some place to go",
                    "'Cause you can't come back around here",
                    "Good goodbye, good goodbye, good goodbye, good goodbye",
                    "",
                    "(Don't you come back no more)",
                ],
                "url": "https://cdn.shazam.com/lyrics/v1/fr/FR/android/musixmatch/subtitles/71538886/211/1?token=faf3caea8d1d0eafba65130895a4c0e1",
                "footer": "Writer(s): Terrence Le Varr Thornton, Jesse Samuel Shatkin, Chester Bennington, Joseph Hahn, Robert G. Bourdon, Brad Delson, Mike Shinoda, Michael Ebenazer Kwadjo Omari Owuo Junior, Dave Farrell\nLyrics powered by www.musixmatch.com",
                "tabname": "Paroles",
                "beacondata": {
                    "lyricsid": "22589021",
                    "providername": "musixmatch",
                    "commontrackid": "71538886",
                },
            },
            {
                "type": "VIDEO",
                "tabname": "Vidéo",
                "youtubeurl": "https://cdn.shazam.com/video/v3/-/FR/android/349199618/youtube/video?q=Linkin+Park+%22Good+Goodbye%22",
            },
            {
                "type": "RELATED",
                "url": "https://cdn.shazam.com/shazam/v3/fr/FR/android/-/tracks/track-similarities-id-349199618?startFrom=0&pageSize=20&connected=",
                "tabname": "Titres similaires",
            },
        ],
        "url": "https://www.shazam.com/track/349199618/good-goodbye",
        "artists": [{"id": "42", "adamid": "148662"}],
        "isrc": "USWB11700228",
        "genres": {"primary": "Alternative"},
        "urlparams": {"{tracktitle}": "Good+Goodbye", "{trackartist}": "Linkin+Park"},
        "highlightsurls": {
            "artisthighlightsurl": "https://cdn.shazam.com/video/v3/fr/FR/android/148662/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am&videoIdToFilter=1233883940",
            "trackhighlighturl": "https://cdn.shazam.com/video/v3/fr/FR/android/highlights/1233883940?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
        },
        "relatedtracksurl": "https://cdn.shazam.com/shazam/v3/fr/FR/android/-/tracks/track-similarities-id-349199618?startFrom=0&pageSize=20&connected=",
        "albumadamid": "1204427627",
    },
    "tagid": "798cf383-7e45-50dc-8945-64199b1e9731",
}
print(a.get("track").get("sections")[2].get("youtubeurl"))

import urllib3

t = urllib3.PoolManager()
test = t.request(
    "GET",
    a.get("track").get("sections")[2].get("youtubeurl"),
)
bb = {
    "caption": "Good Goodbye [Official Music Video] - Linkin Park (feat. Pusha T and Stormzy)",
    "image": {
        "dimensions": {"width": 1280, "height": 720},
        "url": "https://i.ytimg.com/vi/phVQZrb2AdA/maxresdefault.jpg",
    },
    "actions": [
        {
            "name": "video:youtube",
            "type": "webview",
            "share": {
                "subject": "Good Goodbye - Linkin Park Feat. Pusha T & Stormzy",
                "text": "I used Shazam to discover Good Goodbye by Linkin Park Feat. Pusha T & Stormzy.",
                "href": "https://www.shazam.com/track/349199618/good-goodbye",
                "image": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/de/b4/76/deb4760b-1733-d09f-8ab5-3da9381d5080/093624913214.jpg/400x400cc.jpg",
                "twitter": "I used @Shazam to discover Good Goodbye by Linkin Park Feat. Pusha T & Stormzy.",
                "html": "https://www.shazam.com/snippets/email-share/349199618?lang=-&country=FR",
                "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/15/fd/df/15fddf61-d4d6-4283-63de-b2be6d89a051/mzl.jdhuenng.jpg/800x800cc.jpg",
                "snapchat": "https://www.shazam.com/partner/sc/track/349199618",
            },
            "uri": "https://youtu.be/phVQZrb2AdA?autoplay=1",
        }
    ],
}

import ast

byte_str = test.data
dict_str = byte_str.decode("UTF-8")
xx = ast.literal_eval(dict_str)

print(xx.get("image").get("url"))
print(xx.get("actions")[0].get("uri"))

