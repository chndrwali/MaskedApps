/* eslint-disable react/prop-types */
import React from 'react';

function StepsBody({ step }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-9">
      <div className="flex flex-wrap justify-between">
        <div className="w-full mt-2 lg:mt-6">
          <h3 className="text-xl font-bold text-black/75 mb-2 md:text-2xl">
            <span className="font-medium pr-2">
              {step.id + 1}
              .
            </span>
            {step.title}
          </h3>
          <p className="font-medium text-black px-[26px] md:px-7">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepsBody;