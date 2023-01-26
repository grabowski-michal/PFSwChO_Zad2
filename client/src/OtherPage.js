import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <span style={{fontVariant: "small-caps"}}>
        Fibonacci Calculator App <br/>
        Michał Grabowski <br/>
        Gr. 1 <br/>
      </span>
      <Link to="/">Go back home</Link>
    </div>
  );
};
