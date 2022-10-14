import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: []
    }

    this.handleClick = this.handleClick.bind(this); //specific line of code that binds our function
  }
  // handleClick = () => {
  //   this.setState({formVisibleOnPage: true});
  // }
  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList,
                  formVisibleOnPage: false });
  }
  handleClick() {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code

    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>
      buttonText = "Return to Ticket List"; // new code
    }else{
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList}/>
      buttonText = "Add Ticket"; // new code
    }
    return (
      <React.Fragment>
        {/* which component should be rendered */}
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }

}

export default TicketControl;