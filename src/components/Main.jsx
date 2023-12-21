import React, { useState, useEffect } from "react";

async function fetchMatches() {
  const apiToken = '98a87a7b443e41d79117e96b67fd872b';
  const proxyUrl = 'https://corsproxy.io/?';
  const targetUrl = 'http://api.football-data.org/v4/competitions/2021/matches?matchday=1';
  
  const response = await fetch(proxyUrl + encodeURIComponent(targetUrl), {
    headers: {
      "X-Auth-Token": apiToken
    }
  });
  const data = await response.json();
  return data.matches;
}

export default function Main() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchMatches();
      setMatches(data)
    })();
  }, []); 

  return (
    <main>
      <h1 class="schedule">Match Schedule</h1>
      <table border={3} align="center">
        <thead>
          <tr>
            <th></th>
            <th>Home Team</th>
            <th></th>
            <th></th>
            <th></th>
            <th>Away Team</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              {/* 試合データの表示。必要に応じて詳細を追加 */}
              <td><img src={match.homeTeam.crest} alt="" width="100"/></td>
              <td>{match.homeTeam.name}</td>
              <td>{match.score.fullTime.home}</td>
              <td>vs</td> 
              <td>{match.score.fullTime.away}</td>
              <td>{match.awayTeam.name}</td>
              <td><img src={match.awayTeam.crest} alt="" width="100"/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
