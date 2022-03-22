import React from 'react';
import './App.css';


const song = {
  album: {
    album_type: "album",
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"
        },
        href: "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
        id: "1dfeR4HaWDbWqFHLkxsg1d",
        name: "Queen",
        type: "artist",
        uri: "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
      }
    ],
    external_urls: {
      spotify: "https://open.spotify.com/album/6i6folBtxKV28WX3msQ4FE"
    },
    href: "https://api.spotify.com/v1/albums/6i6folBtxKV28WX3msQ4FE",
    id: "6i6folBtxKV28WX3msQ4FE",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b",
        width: 640
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b",
        width: 300
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e8b066f70c206551210d902b",
        width: 64
      }
    ],
    name: "Bohemian Rhapsody (The Original Soundtrack)",
    release_date: "2018-10-19",
    release_date_precision: "day",
    total_tracks: 22,
    type: "album",
    uri: "spotify:album:6i6folBtxKV28WX3msQ4FE"
  },
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"
      },
      href: "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
      id: "1dfeR4HaWDbWqFHLkxsg1d",
      name: "Queen",
      type: "artist",
      uri: "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
    }
  ],
  disc_number: 1,
  duration_ms: 354947,
  explicit: false,
  external_ids: {
    isrc: "GBUM71029604"
  },
  external_urls: {
    spotify: "https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb"
  },
  href: "https://api.spotify.com/v1/tracks/3z8h0TU7ReDPLIbEnYhWZb",
  id: "3z8h0TU7ReDPLIbEnYhWZb",
  is_local: false,
  is_playable: true,
  name: "Bohemian Rhapsody",
  popularity: 72,
  preview_url: null,
  track_number: 7,
  type: "track",
  uri: "spotify:track:3z8h0TU7ReDPLIbEnYhWZb"
};
const songsWrapper = document.getElementById("songs-wrapper");
const thumbnailUrl = song.album.images


const songItem = document.createElement("div");
const thumbnailsongs = document.createElement("div");
const thumbnail = document.createElement("img");
const bodysongs= document.createElement("div");
const detailsongs = document.createElement("div");
const songTitle = document.createElement("h1");
const artistsongs = document.createElement("div");
const artist = document.createElement("span");
const separator = document.createElement("span");
const album = document.createElement("span");
const button = document.createElement("button");
songItem.setAttribute("class", "song-item");
thumbnail.setAttribute("src", thumbnailUrl);
thumbnail.setAttribute("class", "thumbnail");
bodysongs.setAttribute("class", "body-wrapper");
songTitle.setAttribute("class", "song-title");
button.setAttribute("class", "btn-small btn-primary");

songTitle.innerHTML = song.name;
artist.innerHTML = song.album.artists.name;
album.innerHTML = song.album.name;
separator.innerHTML = " - ";
button.innerHTML = "Select";

songItem.appendChild(thumbnailsongs);
songItem.appendChild(bodysongs);
thumbnailsongs.appendChild(thumbnail);
bodysongs.appendChild(detailsongs);
bodysongs.appendChild(button);
detailsongs.appendChild(songTitle);
detailsongs.appendChild(artistsongs);
artistsongs.appendChild(artist);
artistsongs.appendChild(separator);
artistsongs.appendChild(album);
songsWrapper.appendChild(songItem);

class Songtitle extends React.Component{
  render(){
    return(
      <div className='song-wrapper'>
      </div>
    )
  }
}

export default Songtitle;
