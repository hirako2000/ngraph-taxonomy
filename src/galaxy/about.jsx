import React from 'react';
export default require('maco').template(about, React);

function about() {
  return (
  <div  className='label about'>
     <a className='reset-color'
        target='_blank'
        href="https://www.secureworks.com/research/threat-profiles">Data Source</a>
  </div>
  );
}
