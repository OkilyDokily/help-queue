import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';


let array = [<NewTicketForm />, "Have you gone through all the steps on the Learn How to Program debugging lesson?", "Have you asked another pair for help?", "Have you spent 15 minutes going through through the problem documenting every step?", <TicketList />];

class TicketControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: 0
    }
  }

  handleClick = () => {

    this.setState(prevState => {
      const next = prevState.steps >= 4 ? 0 : ++prevState.steps;
      return ({
        steps: next
      })
    }
    );
  };

  render() {
    const currentlyVisibleState = array[this.state.steps];

    return (
      <React.Fragment>
        <div>{currentlyVisibleState}</div>
        <button onClick={this.handleClick}>{(this.state.steps > 0 && this.state.steps != 4) ? "Yes" : "Add ticket"}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;