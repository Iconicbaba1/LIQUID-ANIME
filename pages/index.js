import { useEffect, useState } from "react";

export default function Home() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetch("https://api.consumet.org/anime/gogoanime/top-airing")
      .then((res) => res.json())
      .then((data) => setAnimeList(data.results));
  }, []);

  return (
    <div style={{ padding: "30px", background: "#0f0f0f", color: "#fff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>🔥 LiQUiD ANiME 🔥</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {animeList.map((anime) => (
          <div
            key={anime.id}
            style={{
              background: "#1a1a1a",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(255,255,255,0.1)",
            }}
          >
            <img
              src={anime.image}
              alt={anime.title}
              style={{
                width: "100%",
                height: "270px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ marginTop: "10px", fontSize: "16px" }}>{anime.title}</h3>
            <a
              href={`https://aniwatchtv.to/search?keyword=${encodeURIComponent(anime.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "8px",
                padding: "6px 12px",
                background: "#4e4eff",
                borderRadius: "4px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              ▶ Watch / Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
