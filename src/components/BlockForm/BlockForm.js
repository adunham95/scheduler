import React, { useEffect, useState } from 'react';
import { saveBlock } from '../../database/blockDB';
import { colors } from '../../utils/data';
import useModal from '../Modal/useModal';
import { ModalContext } from '../Modal/ModalContext';

export const BlockForm = () => {
  // const { handleModal } = React.useContext(ModalContext);
  // const { handleModal } = useModal();
  const [name, setName] = useState('');
  const [time, setTime] = useState(0);
  const [timeUnits, setTimeUnits] = useState(1);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [dayAva, setAva] = useState([{}]);

  function addAva() {
    setAva([...dayAva, {}]);
  }

  function setDays(dayData, index) {
    const days = [...dayAva];
    days[index] = dayData;
    // console.log(days);
    setAva(days);
  }

  function saveBlockForm(e) {
    e.preventDefault();
    // console.log(dayAva);
    const block = {
      name,
      locked: false,
      color: selectedColor,
      availability: dayAva.filter((d) => d !== {}).filter((d) => d.start !== ''),
      time: time * timeUnits,
    };

    // console.log('block', block);

    saveBlock(block);
    // handleModal();
  }

  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={saveBlockForm}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

            {/* Block Name */}
            <div className="">
              <div className="col-span-3">
                <label
                  htmlFor="blockname"
                  className="block text-sm font-medium text-gray-700 text-left pl-2"
                >
                  Block Name
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="blockname"
                    id="blockname"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                    placeholder="1st Grade Reading"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Block Color */}
            <div className="">
              <div className="col-span-3">
                <label
                  htmlFor="blockcolor"
                  className="block text-sm font-medium text-gray-700 text-left pl-2"
                >
                  Block Color
                </label>
                <div className="flex flex-wrap">
                  {
                    colors.map((c) => (
                      <ColorBlock
                        colorData={c}
                        selectedColor={selectedColor}
                        setColor={(color) => setSelectedColor(color)}
                        key={`Color-${c.name}`}
                      />
                    ))
                  }
                </div>

              </div>
            </div>

            {/* Block Length */}
            <div>
              <label
                htmlFor="blockLength"
                className="block text-sm font-medium text-gray-700 text-left pl-2"
              >
                Length
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="blockLength"
                  id="blockLength"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                  onChange={(e) => setTime(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label
                    htmlFor="tUnits"
                    className="sr-only"
                  >
                    Time Unites
                  </label>
                  <select
                    id="tUnits"
                    name="tUnits"
                    className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                    onChange={(e) => setTimeUnits(e.target.value)}
                  >
                    <option value={60}>Hours</option>
                    <option value={1}>Mins</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="blockLength"
                className="block text-sm font-medium text-gray-700 text-left pl-2 pb-2"
              >
                Availability
              </label>

              <div className="grid grid-cols-3 gap-6">
                {
                  dayAva.map((a, i) => (
                    <AvailabilityBlock
                      index={i}
                      onChange={(d) => setDays(d, i)}
                      // eslint-disable-next-line react/no-array-index-key
                      key={`AvailabilityBlock-${i}`}
                    />
                  ))
                }
                <div className="col-start-3">
                  <button
                    type="button"
                    className="w-full py-2 px-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    onClick={addAva}
                  >
                    Add
                  </button>
                </div>
              </div>

            </div>

          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

function AvailabilityBlock({ onChange = () => {}, index }) {
  const [weekday, setWeekday] = useState('Monday');
  const [tStart, setTimeStart] = useState('');
  const [tEnd, setTimeEnd] = useState('');

  useEffect(() => {
    const avaObject = {
      weekday,
      start: tStart,
      end: tEnd,
    };
    console.log('avaObject', avaObject);
    onChange(avaObject);
  }, [weekday, tStart, tEnd]);

  return (
    <>
      <div
        className="col-span-1 sm:col-span-1"
      >
        <label
          htmlFor="weekday"
          className="block text-xs font-medium text-gray-700 text-left pl-2"
        >
          Weekday
        </label>
        <select
          id="weekday"
          name="weekday"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => setWeekday(e.target.value)}
        >
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
        </select>
      </div>

      <div className="col-span-1 sm:col-span-1">
        <label
          htmlFor="tStart"
          className="block text-xs font-medium text-gray-700 text-left pl-2"
        >
          Time Start
        </label>
        <input
          type="time"
          name="tStart"
          id="tStart"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          onChange={(e) => setTimeStart(e.target.value)}
        />
      </div>

      <div className="col-span-1 sm:col-span-1">
        <label
          htmlFor="tEnd"
          className="block text-xs font-medium text-gray-700 text-left pl-2"
        >
          Time End
        </label>
        <input
          type="time"
          name="tEnd"
          id="tEnd"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          onChange={(e) => setTimeEnd(e.target.value)}
        />
      </div>

      {/* <div className="col-span-1 sm:col-span-1">
        <button
          type="button"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div> */}
    </>
  );
}

function ColorBlock({ colorData: { name, color }, selectedColor, setColor }) {
  function setStyle() {
    if (color === selectedColor) {
      return {
        padding: '1px', borderColor: color, outlineColor: 'transparent',

      };
    }
    return {
      padding: '1px', borderColor: 'transparent', outlineColor: 'transparent',
    };
  }
  return (
    <button
      type="button"
      aria-label={`Color ${name}`}
      onClick={() => setColor(color)}
      className="rounded-full w-8 h-8 m-1 border-2 border-solid outline-none"
      style={setStyle()}
    >
      <span style={{
        backgroundColor: color, height: '100%', width: '100%', borderRadius: '100%', display: 'block',
      }}
      />
    </button>
  );
}
