import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../actions';

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

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

const mapDispatchToProps = (dispatch) => {

  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

  return {
    dec,
    inc,
    rnd: () => {
      const randomValue = Math.floor(Math.random() * 10);
      rnd(randomValue);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
