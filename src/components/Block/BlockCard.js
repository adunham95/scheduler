import React from 'react';
import { pickTextColorBasedOnBgColorSimple } from '../../utils/utils';

export const BlockCard = ({ block: { color, name } }) => (
  <div className="block align-bottom text-left overflow-hidden w-1/4 py-2 pr-2">
    <div
      className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg shadow-sm"
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
              <p>Monday</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);
