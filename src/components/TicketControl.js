import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formVisibleOnPage: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  };

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />;
    }
    else {
      currentlyVisibleState = <TicketList />;
      
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>Add ticket</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;