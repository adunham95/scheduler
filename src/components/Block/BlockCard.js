import React from 'react';
import { pickTextColorBasedOnBgColorSimple } from '../../utils/utils';

export const BlockCard = ({
  block: {
    color, name, days = [], scheduled = false,
  },
}) => (
  <div className="block align-bottom text-left overflow-hidden w-1/2 md:w-1/3 lg:w-1/4  py-2 pr-2">
    <div
      className="p-4  rounded-lg shadow-sm"
      style={{ backgroundColor: color }}
    >
      <div className="sm:flex sm:items-start">
        <div className="text-left">
          <h3
            className={`text-lg leading-6 font-medium ${pickTextColorBasedOnBgColorSimple(color)}`}
            id="modal-title"
          >
            {name}
          </h3>
          <div className={`mt-2 text-sm ${pickTextColorBasedOnBgColorSimple(color)}`}>
            <div className="mt-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`flex-shrink-0 mr-1.5 h-5 w-5 ${pickTextColorBasedOnBgColorSimple(color)}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <p>{scheduled ? 'Scheduled' : 'Not Scheduled'}</p>
            </div>
            <div className="mt-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`flex-shrink-0 mr-1.5 h-5 w-5 ${pickTextColorBasedOnBgColorSimple(color)}`}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <p>1:30 - 2:30</p>
            </div>
            <div className="mt-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`flex-shrink-0 mr-1.5 h-5 w-5 ${pickTextColorBasedOnBgColorSimple(color)}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {' '}
              <p>{days.map((d) => d).join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);
