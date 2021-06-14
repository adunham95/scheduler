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
  const timeIncMins = 15;
  const timeStart = '9:45';
  const timeEnd = '17:00';

  const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];

  const blockStyle = {
    backgroundColor: 'purple', padding: '2px', color: 'white', border: '1px solid green', width: '100%',
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

  function generateCells() {
    const startSplit = timeStart.split(':').map((s) => parseFloat(s));
    const endSplit = timeEnd.split(':').map((s) => parseFloat(s));
    const minData = {
      start: {
        hour: startSplit[0],
        min: startSplit[1],
      },
      end: {
        hour: endSplit[0],
        min: endSplit[1],
      },
    };

    const hourDiff = minData.end.hour - minData.start.hour;
    const minDiff = minData.end.min - minData.start.min;
    const totalMins = (hourDiff * 60) + minDiff;
    const totalCells = totalMins / timeIncMins;

    minData.diff = {
      hours: Math.floor(totalMins / 60),
      min: totalMins % 60,
    };

    minData.totals = {
      mins: totalMins,
      cells: totalCells,
    };

    console.log(minData);

    return (
      <>
        {
            [...Array(rows + 1)].map((_, i) => (
              i === 0
                ? (
                  <div style={rowStyle}>
                    <div style={{
                      minWidth: '3.5em', textAlign: 'left', paddingLeft: '5px', marginRight: '5px', borderRight: '1px solid black',
                    }}
                    />
                    {
                  [...Array(totalCells)].map((c, j) => (
                    <div
                      style={{ ...blockStyle }}
                    >
                      {j}
                    </div>
                  ))
                }
                  </div>
                )
                : (
                  <div style={rowStyle}>
                    <div style={{
                      minWidth: '3.5em', textAlign: 'left', paddingLeft: '5px', marginRight: '5px', borderRight: '1px solid black',
                    }}
                    >
                      {weekdays[i - 1]}
                    </div>
                    {
                  [...Array(totalCells)].map((c, j) => (
                    <div
                      data-index={`x:${j},y:${i}`}
                      style={{ ...blockStyle }}
                    />
                  ))
                }
                  </div>
                )
            ))
        }
      </>
    );
  }

  return (
    <div>
      {/* {generateTable()} */}
      {generateCells()}
    </div>
  );
};
