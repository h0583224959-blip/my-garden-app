import React from 'react';

function Flower({ flowerName, petalColor, centerColor }) {
  const actualPetalColor = petalColor ? petalColor : '#ffb6c1';
  const actualCenterColor = centerColor ? centerColor : '#2e7d32';

  const flowerCardStyle = {
    backgroundColor: actualPetalColor,
    border: `3px solid ${actualCenterColor}`,
    borderRadius: '12px',
    padding: '22px',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(28, 55, 39, 0.12)',
    font: 'inherit',
    width: '100%',
  };

  return (
    <button
      type="button"
      className="flower-card"
      style={flowerCardStyle}
      aria-label={`פרח ${flowerName}`}
      onClick={() => window.alert(`אני פרח מסוג ${flowerName}`)}
    >
      <span className="flower-card-mark" aria-hidden="true">✿</span>
      <h3 style={{ color: actualCenterColor }}>{flowerName}</h3>
      <p>צבע עלי כותרת: <span dir="ltr">{actualPetalColor}</span></p>
      <p>צבע המרכז: <span dir="ltr">{actualCenterColor}</span></p>
    </button>
  );
}

export default Flower;