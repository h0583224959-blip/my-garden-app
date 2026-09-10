import React from 'react';

function Flower({ flowerName, petalColor, centerColor }) {
  // ערכי ברירת מחדל באמצעות תנאי מקוצר
  const actualPetalColor = petalColor ? petalColor : '#ffb6c1';
  const actualCenterColor = centerColor ? centerColor : '#2e7d32';

  const handleClick = () => {
    alert(`אני פרח מסוג ${flowerName}`);
  };

  const flowerCardStyle = {
    backgroundColor: actualPetalColor,
    color: actualCenterColor,
    border: `3px solid ${actualCenterColor}`,
    borderRadius: '16px',
    padding: '20px',
    margin: '15px',
    width: '220px',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={flowerCardStyle} onClick={handleClick}>
      <h2>{flowerName}</h2>
      <p>צבע עלי כותרת: {actualPetalColor}</p>
      <p>צבע עלה מרכזי: {actualCenterColor}</p>
    </div>
  );
}

export default Flower;