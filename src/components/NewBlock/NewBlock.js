import React, { useState } from 'react';
import { saveBlock } from '../../database/blockDB';
import { colors } from '../../utils/data';
import useModal from '../Modal/useModal';
import { ModalContext } from '../Modal/ModalContext';

export const NewBlock = () => {
  const { handleModal } = React.useContext(ModalContext);
  // const { handleModal } = useModal();
  const [name, setName] = useState('');
  const [timeHours, setTimeHours] = useState(0);
  const [timeMins, setTimeMins] = useState(0);
  const [selectedColor, setSelectedColor] = useState('#58595C');
  const [dayAva, setAvaDays] = useState([]);

  function setAvailableDays(day) {
    const index = dayAva.findIndex((d) => d === day);
    const newDays = [...dayAva];
    console.log(index);
    if (index >= 0) {
      setAvaDays(newDays.filter((d) => d !== day));
    }
    if (index < 0) {
      setAvaDays([...newDays, day]);
    }
  }

  function saveBlockForm(e) {
    e.preventDefault();
    const block = {
      name,
      locked: false,
      color: selectedColor,
      days: dayAva,
      time: {
        hours: timeHours,
        minutes: timeMins,
        totalMins: (timeHours * 60) + timeMins,
      },
    };

    saveBlock(block);
    handleModal();
  }

  return (
    <div>
      <form
        onSubmit={saveBlockForm}
        className="md:grid md:grid-cols-3 md:gap-6 max-w-lgw"
      >
        <h1>Create New Block</h1>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium text-gray-700"
          >
            Block Name
          </label>
          <input
            type="text"
            name="block_name"
            id="block_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />

        </div>
        {/* <label className="block">
          <span className="text-gray-700">Block Name</span>
          <input
            type="text"
            placeholder="Lunch"
            className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Block Name</span>
          <input
            type="text"
            placeholder="Lunch"
            className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label> */}
        <fieldset className="mt-1">
          <legend className="text-base font-medium text-gray-900">Week Availability</legend>
          <div className="mt-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="monday"
                  name="monday"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  onChange={() => setAvailableDays('Monday')}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="monday"
                  className="font-medium text-gray-700"
                >
                  Monday
                </label>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="tues"
                  name="tues"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  onChange={() => setAvailableDays('Tuesday')}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="tues"
                  className="font-medium text-gray-700"
                >
                  Tuesday
                </label>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="wed"
                  name="wed"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  onChange={() => setAvailableDays('Wednesday')}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="wed"
                  className="font-medium text-gray-700"
                >
                  Wednesday
                </label>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="thur"
                  name="thur"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  onChange={() => setAvailableDays('Thursday')}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="thur"
                  className="font-medium text-gray-700"
                >
                  Thursday
                </label>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="fri"
                  name="fri"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  onChange={() => setAvailableDays('Friday')}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="fri"
                  className="font-medium text-gray-700"
                >
                  Friday
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <div>
            {
            colors.map((c) => (
              <ColorBlock
                colorData={c}
                selectedColor={selectedColor}
                setColor={(color) => setSelectedColor(color)}
              />
            ))
        }
          </div>
        </div>
        <div className="px-4 py-3 text-right sm:px-6">
          <button
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mr-2"
            onClick={handleModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

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
