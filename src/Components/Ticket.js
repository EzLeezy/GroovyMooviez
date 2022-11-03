import "./Ticket.css";

function Ticket({ onClick }) {
  return (
    <button class="ticket basic" onClick={(e) => onClick(e)}>
      <div class="ticket-content">
        <p class="ticket-content-number">L33-2022</p>
        <h1 class="ticket-content-message">
          Admit
          <br />
          One
        </h1>
        <p class="ticket-content-number">L33-2022</p>
      </div>
    </button>
  );
}

export default Ticket;
