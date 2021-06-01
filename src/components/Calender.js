import React from 'react';

const arr = [
  [{ array: 1, width: '20%' }, { array: 2, width: '10%' }, { array: 3, width: '25%' }, { array: 4, width: '15%' }, { array: 5, width: '10%' }, { array: 6, width: '20%' }],
  [{ array: 0, width: '15%' }, { array: 1, width: '10%' }, { array: 2, width: '30%' }, { array: 3, width: '20%' }, { array: 4, width: '10%' }, { array: 5, width: '25%' }],
  [{ array: 0, width: '15%' }, { array: 1, width: '10%' }, { array: 2, width: '30%' }, { array: 3, width: '20%' }, { array: 4, width: '10%' }, { array: 5, width: '25%' }],
  [{ array: 0, width: '15%' }, { array: 1, width: '10%' }, { array: 2, width: '30%' }, { array: 3, width: '20%' }, { array: 4, width: '10%' }, { array: 5, width: '25%' }],
  [{ array: 0, width: '45%' }, { array: 1, width: '25%' }],
];

export const Calender = () => {
  const rows = 5;

  const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];

  const blockStyle = {
    backgroundColor: 'purple', margin: '5px', padding: '2px', borderRadius: '7px', color: 'white',
  };
  const rowStyle = {
    display: 'flex',
    minHeight: '2em',
    backgroundColor: 'grey',
  };

  function hiddenBlock(arrayID) {
    if (arrayID === 0) {
      return { backgroundColor: 'transparent', color: 'transparent' };
    }
    return { backgroundColor: 'purple' };
  }

  function generateTable() {
    return (
      <>
        {
            [...Array(rows)].map((_, i) => (
              <div style={rowStyle}>
                <div style={{
                  minWidth: '3.5em', textAlign: 'left', paddingLeft: '5px', marginRight: '5px', borderRight: '1px solid black',
                }}
                >
                  {weekdays[i]}
                </div>
                {
                    typeof arr[i] !== 'undefined' ? arr[i].map((c, j) => <div style={{ ...blockStyle, width: c.width, ...hiddenBlock(c.array) }}>{c.array}</div>) : <div />
                }
              </div>
            ))
        }
      </>
    );
  }

  return (
    <div>
      {generateTable()}
    </div>
  );
};
