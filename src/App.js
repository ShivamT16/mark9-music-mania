import React, { useState } from "react";
import "./styles.css";

const musicPL = {
  Love: [
    { Song: "Zara Sa", Movie: "Jannat" },
    { Song: "Tujhe dekha", Movie: "DDLJ" },
    { Song: "Subhanaalah", Movie: "Yeh Jawani Hai Deewani" },
    { Song: "Ishq wala Love", Movie: "Student Of The Year" },
    { Song: "Humko hum hi se churalo", Movie: "Mohabbatein" }
  ],

  Party: [
    { Song: "Where's the Party tonight", Movie: "Kabhi Alvida Na Kehna" },
    { Song: "Party on my Mind", Movie: "Race 2" },
    { Song: "Badtameez Dil", Movie: "Yeh Jawani Hai Deewani" },
    { Song: "Disco Deewane", Movie: "Student Of The Year" },
    { Song: "Desi boyzz", Movie: "Desi Boys" }
  ],

  Emotional: [
    { Song: "Luka-Chupi", Movie: "Rang de Basanti" },
    { Song: "Kabira", Movie: "Yeh Jawani Hai Deewani" },
    { Song: "Saware", Movie: "Phantom" },
    { Song: "Hmari Adhuri Kahani(TT)", Movie: "Hmari Adhuri Kahani" },
    { Song: "Darkhaast", Movie: "Shivaay" }
  ]
};

export default function App() {
  const genre = Object.keys(musicPL);

  const [selectedMusic, setMusic] = useState("Love");

  function musicClickHandler(music) {
    setMusic(music);
  }

  return (
    <div className="App">
      <h1>Music Mania 🎸🤘🎼🎵 </h1>
      <h2>Here's some music from my playlist</h2>

      <div>
        {genre.map((genre) => (
          <button
            onClick={() => musicClickHandler(genre)}
            style={{
              fontSize: "1rem",
              padding: "0.5rem",
              cursor: "pointer",
              margin: "0.5rem",
              borderRadius: "0.7rem"
            }}
            key={genre}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {musicPL[selectedMusic].map((song) => (
            <div
              className="listItem"
              key={song.Song}
              style={{
                textAlign: "left",
                listStyle: "none",
                padding: "1rem",
                border: "1px solid ",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div className="Song">Song- {song.Song}</div>
              <div className="Movie">Movie- {song.Movie}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
