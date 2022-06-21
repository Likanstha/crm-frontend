
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';
import {Dashboard} from './pages/dashboard/Dashboard.page';


function App() {
  return (
    
    <div className='App'>
      
      <DefaultLayout>
        <Dashboard />
        </DefaultLayout>
      {/* <Entry /> */}
      </div>




  );
}
export default App;
