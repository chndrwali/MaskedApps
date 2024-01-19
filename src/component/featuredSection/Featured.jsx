/* eslint-disable react/no-array-index-key */
import React from 'react';
import { featured } from '../../data/homeData';
import FeaturedBody from './FeaturedBody';

function Featured() {
  return (
    <section
      id="featured"
      className="py-20 border-t-4 border-black/50"
    >
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <h2 className="text-2xl text-black/75 font-bold text-center w-full mb-6 md:text-3xl lg:text-5xl">
            {featured.title}
          </h2>
        </div>
        <div className="flex flex-wrap gap-y-10 lg:gap-y-2">
          {
            featured.features.map((feature, index) => (
              <FeaturedBody key={index} feature={feature} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Featured;