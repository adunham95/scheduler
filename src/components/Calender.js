import React from 'react';

function generateDataSet(i) {
  return { array: i };
}

export const Calender = () => {
  const rows = 5;
  const columns = 5;
  const arr = [...Array(rows)].map(() => [...Array(columns)].map((_, i) => (generateDataSet(i))));

  function generateTable() {
    console.log(arr);
    arr.forEach((r, i) => {
      r.forEach((c, j) => {
        console.log(c);
      });
    });

    return <div />;
  }

  return (
    <div style={{
      display: 'grid', rowGap: '5px', columnGap: '5px', columnCount: columns, gridRow: rows,
    }}
    >
      <div style={{ backgroundColor: 'purple', height: '10px', width: '10px' }} />
      <div style={{ backgroundColor: 'purple', height: '10px', width: '10px' }} />
      <div style={{ backgroundColor: 'purple', height: '10px', width: '10px' }} />
      <div style={{ backgroundColor: 'purple', height: '10px', width: '10px' }} />
      <div style={{ backgroundColor: 'purple', height: '10px', width: '10px' }} />
      <div style={{ backgroundColor: 'purple', height: '10px', width: '10px' }} />
      <div style={{ backgroundColor: 'purple', height: '10px', width: '10px' }} />
      <div style={{ backgroundColor: 'purple', height: '10px', width: '10px' }} />
    </div>
  );
};
