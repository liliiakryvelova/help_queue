import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";


function TicketList(props){
  return (
    <React.Fragment>
    {/*add a loop to render a Ticket component
    for each entry in mainTicketList */}
    <hr/>
    {props.ticketList.map((ticket, index) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index}/>
    )}
    </React.Fragment>
  );
}

//Add propTypes for ticketList.
TicketList.propTypes = {
  ticketList: PropTypes.array
}

export default TicketList;