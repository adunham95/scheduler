import React, { useState } from 'react';

const colors = [
  { name: 'Red', color: '#f44336' },
  { name: 'Pink', color: '#E91E63' },
  { name: 'Purple', color: '#673ab7' },
  { name: 'Blue', color: '#0085ca' },
  { name: 'Teal', color: '#00796B' },
  { name: 'Green', color: '#009688' },
  { name: 'Yellow', color: '#f1dd2f' },
  { name: 'Orange', color: '#FF8201' },
  { name: 'Brown', color: '#5D4037' },
  { name: 'Smokey', color: '#58595C' },
];

export const NewBlock = () => {
  const [name, setName] = useState('');
  const [timeHours, setTimeHours] = useState(0);
  const [timeMins, setTimeMins] = useState(0);
  const [selectedColor, setSelectedColor] = useState('#58595C');

  function saveBlock(e) {
    e.preventDefault();
    console.log('New Block', {
      name,
      locked: false,
      color: selectedColor,
      time: {
        hours: timeHours,
        minutes: timeMins,
        totalMins: (timeHours * 60) + timeMins,
      },
    });
  }

  return (
    <div>
      <div>
        <div style={{
          backgroundColor: selectedColor, padding: '10px', borderRadius: '7px', color: 'white',
        }}
        >
          <p>{name}</p>
        </div>
      </div>
      <form onSubmit={saveBlock}>
        <input
          placeholder="Block Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <fieldset>
          <input
            type="number"
            value={timeHours}
            onChange={(e) => setTimeHours(e.target.value)}
          />
          <input
            type="number"
            value={timeMins}
            onChange={(e) => setTimeMins(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <div>
            {
            colors.map((c) => (
              <button
                type="button"
                aria-label={`Color ${c.name}`}
                onClick={() => setSelectedColor(c.color)}
                style={{
                  backgroundColor: c.color, height: '40px', width: '40px', margin: '5px',
                }}
              />
            ))
        }
          </div>
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  );
};
