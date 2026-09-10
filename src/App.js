import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';

function App() {
  return (
    <div className="App">
      <Header />

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
        {/* 1. מופע עם כל המאפיינים */}
        <Flower 
          flowerName="ורד" 
          petalColor="#ff69b4" 
          centerColor="#880e4f" 
        />

        {/* 2. מופע עם שם וצבע עלי כותרת בלבד */}
        <Flower 
          flowerName="חמניה" 
          petalColor="#ffd700" 
        />

        {/* 3. מופע עם שם וצבע עלה מרכזי בלבד */}
        <Flower 
          flowerName="סחלב" 
          centerColor="#4a148c" 
        />

        {/* 4. מופע עם שם הפרח בלבד */}
        <Flower 
          flowerName="חרצית" 
        />
      </div>
    </div>
  );
}

export default App;