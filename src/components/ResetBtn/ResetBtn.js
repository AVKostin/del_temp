import React, { Component } from 'react';
import countTotalFeedback from '../App';

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
