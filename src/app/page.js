"use client";
import { useState } from 'react';

export default function Home() {
  const [score, setScore] = useState(1);

  console.log(score);

  function addToScore() {
    setScore(score + 1);
    console.log(score);

  }
  return (
    <main>
      <h1>Home</h1>
      <div>
        <button onClick={addToScore}>Add 1</button>
        <p>Score: {score}</p>
      </div>
    </main>
  );
}


