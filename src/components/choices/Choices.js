import React from 'react';
import HorizontalCarousel from './DisplayData';
import data from './SampleData'; // Import the data array from your data file


const Choices = () => {
  return (
    <div className='carousel-section' id='residencies'>
      <h2 className='best-choices'>Best Choices</h2>
      <h1 className='popular'>Popular Residencies</h1>
      <HorizontalCarousel data={data} />
    </div>
  );
};

export default Choices;