import React, { Component } from 'react';
import countTotalFeedback from '../App';
// import './ResetBtn.css';

class ResetBtn extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { state } = this.state;
    this.setState();
    return (
      <div className="ResetBtn">
        <button
          type="button"
          // className="Dropdown__toggle"
          onClick={() => {
            countTotalFeedback(state);
          }}
        >
          {state ? '' : 'Ресет'}
        </button>
      </div>
    );
  }
}

export default ResetBtn;
