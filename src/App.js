import './App.css';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Login from './pages/login'
import Store from './pages/store'
import Register from './pages/register';
import ProfilePage from './pages/profile';
import TicketPage from './pages/ticket';
import PurchasePage from './pages/purchase';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile/:userId" element={<CustomProfile/>} />
          <Route path="/purchase/:purchaseId" element={<CustomPurchase />} />
          <Route path="/ticket/:ticketId" element={<CustomTicket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function CustomProfile () {
  let params = useParams();
  return <ProfilePage id={params.userId} />
}

function CustomPurchase () {
  let params = useParams();
  return <PurchasePage id={params.purchaseId} />
}

function CustomTicket () {
  let params = useParams();
  return <TicketPage id={params.ticketId}/>
}

export default App;