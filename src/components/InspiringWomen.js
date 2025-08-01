// src/components/InspiringWomen.js
import React from 'react';
import './InspiringWomen.css';

function InspiringWomen() {
  const women = [
    {
      name: "Malala Yousafzai",
      quote: "One child, one teacher, one book, and one pen can change the world.",
      work: "Advocate for girls' education and the youngest Nobel laureate.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Malala_Yousafzai_2015.jpg/220px-Malala_Yousafzai_2015.jpg"
    },
    {
      name: "Kalpana Chawla",
      quote: "The path from dreams to success does exist.",
      work: "First Indian woman in space, inspiring countless young girls to dream big.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg/220px-Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg"
    },
    {
      name: "Sudha Murty",
      quote: "Vision without action is merely a dream.",
      work: "Philanthropist, author, and social worker who has uplifted thousands through education and health.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Sudha_Murthy_-_NMF_2019.jpg/220px-Sudha_Murthy_-_NMF_2019.jpg"
    }
  ];

  return (
    <div className="women-container">
      <h1>🌟 Inspiring Women 🌟</h1>
      <p className="tagline">Empowered women who changed the world for others.</p>
      <div className="women-grid">
        {women.map((woman, index) => (
          <div className="woman-card glow" key={index}>
            <h2>{woman.name}</h2>
            <p className="quote">“{woman.quote}”</p>
            <p className="work">{woman.work}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InspiringWomen;
