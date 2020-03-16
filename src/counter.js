import React from 'react';

const Counter = ({ counter, dec, inc, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
        class="btn btn-primary btn-lg"
        onClick={dec}>DEC</button>
      <button
        class="btn btn-primary btn-lg"
        onClick={inc}>INC</button>
      <button
        class="btn btn-primary btn-lg"
        onClick={rnd}>RND</button>
    </div>
  );
};

export default Counter;
