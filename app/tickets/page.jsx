import TicketList from "../components/TicketList.jsx/component";

export default function Tickets() {
    return (
      <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets.</small></p>
          </div>
        </nav>
        <TicketList />

      </main>
    )
  }