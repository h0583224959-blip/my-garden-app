import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';

function App() {
  const flowers = [
    { flowerName: 'ורד', petalColor: '#e75b7b', centerColor: '#622d45' },
    { flowerName: 'חמנייה', petalColor: '#f4c542', centerColor: '#725522' },
    { flowerName: 'סחלב', petalColor: '#c4a5df', centerColor: '#563d74' },
    { flowerName: 'כלנית', petalColor: '#e85f64', centerColor: '#603338' },
  ];

  return (
    <div className="App">
      <Header />

      <main className="garden-content">
        <section className="garden-section" aria-labelledby="collection-title">
          <div className="section-heading">
            <p className="section-kicker">האוסף שלי</p>
            <h2 id="collection-title">פרחי הגינה</h2>
          </div>
          <div className="flower-grid">
            {flowers.map(({ flowerName, petalColor, centerColor }) => (
              <Flower
                key={flowerName}
                flowerName={flowerName}
                petalColor={petalColor}
                centerColor={centerColor}
              />
            ))}
          </div>
        </section>

        <section className="garden-section defaults-section" aria-labelledby="defaults-title">
          <div className="section-heading">
            <p className="section-kicker">ניסוי צבעים</p>
            <h2 id="defaults-title">פרחים עם צבעי ברירת מחדל</h2>
          </div>
          <div className="flower-grid">
            <Flower flowerName="מרווה" petalColor="#91b88f" />
            <Flower flowerName="יקינתון" centerColor="#325f9c" />
            <Flower flowerName="לילך" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;