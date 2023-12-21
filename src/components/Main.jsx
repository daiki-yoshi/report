import React, { useState, useEffect } from "react";

async function fetchMatches() {
  const apiToken = '98a87a7b443e41d79117e96b67fd872b'; // ここにFootball Dataから取得したAPIキーを入力
  const response = await fetch("https://api.football-data.org/v4/matches", {
    headers: {
      "X-Auth-Token": apiToken
    }
  });
  const data = await response.json();
  return data.matches; // 試合情報が'matches'プロパティにあると仮定
}

export default function Main() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchMatches();
      setMatches(data)
    })();
  }, []); // コンポーネントがマウントされた際に試合データを取得

  return (
    <main>
      {matches.map((match, index) => (
        <div key={index}>
          {/* 試合データの表示。必要に応じて詳細を追加 */}
          <p>{match.homeTeam.name} vs {match.awayTeam.name}</p>
        </div>
      ))}
    </main>
  );
}
