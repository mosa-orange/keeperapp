import React from 'react';
import ReactDOM from 'react-dom';

const name = "食材";
const num = 7;

ReactDOM.render(
  <div>
    <h1>お気に入りの{name}</h1>
    <ul>
      <li>オレンジ</li>
      <li>いちご</li>
      <li>ぶどう</li>
    </ul>
    <p>あなたのラッキーナンバーは{Math.floor(Math.random()*10)}</p>
  </div>,
  document.getElementById("root")
);