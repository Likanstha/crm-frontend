
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';
import {Dashboard} from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    
    <div className='App'>
      <Router>
        <Switch>

          <Route exact path="/">
          <Entry />
          </Route>
          <DefaultLayout>
          <Route path="/dashboard">
          <Dashboard />
          </Route>

          <Route path="/add-ticket">
          <AddTicket />
          </Route>

          <Route path="/tickets">
          <TicketLists />
          </Route>
          <Route path="/ticket/:tid">
          <Ticket />
          </Route>
        
          </DefaultLayout>
          {/* <Route path="/">
          <Entry />
          </Route> */}
         
      </Switch>
      </Router>
      </div>
  );
}
export default App;
