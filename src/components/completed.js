import React, { useEffect, useRef, useState } from 'react';

const Completed = () => {
  const circleRef = useRef(null);
  const loadRef = useRef(null);
  const [percentage, setPercentage] = useState('');

  let i = 0;

  const uploadPercentage = [];

  const randomPercentage = Math.floor(Math.random() * 100);

  const getPercentages = (params) => {
    let i = 0;
    while (i < params) {
      if (i % 5 === 0) {
        uploadPercentage.push(i);
      }
      i += 1;
    }
  };

  getPercentages(randomPercentage);

  useEffect(() => {
    const circle = circleRef.current;

    const circumfrence = circle.getTotalLength();

    const interval = setInterval(() => {
      circle.style.strokeDashoffset = circumfrence - (uploadPercentage[i] / 100) * circumfrence;
      setPercentage(`${uploadPercentage[i]}%`);
      i += 1;

      if (i === uploadPercentage.length) {
        clearInterval(interval);
        setPercentage(`${uploadPercentage[uploadPercentage.length - 1]}%`);
      }
    }, 300);
  }, []);

  return (
    <div className="flex">
      <div style={{ margin: '0 1em' }}>
        <svg className="progress" width="100" height="100">
          <circle className="back-circle" cx="50" cy="50" r="30" fill="transparent" stroke="#e8e8e8" strokeWidth="5" />
          <circle className="progress-circle" ref={circleRef} cx="50" cy="50" r="30" fill="transparent" stroke="#307bbe" strokeWidth="5" />
        </svg>
      </div>
      <div className="padding-1" ref={loadRef} fill="blue" x="50" y="55" textAnchor="middle" alignmentBaseline="middle">
        <div style={{ fontSize: '1.5em' }}>{percentage}</div>
        <div style={{ fontSize: '0.9em', opacity: 0.4 }}>Completed</div>
      </div>
    </div>
  );
};

export default Completed;
