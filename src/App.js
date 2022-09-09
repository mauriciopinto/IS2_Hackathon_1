import './App.css';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Login from './pages/login'
import Store from './pages/store'
import Register from './pages/register';
import ProfilePage from './pages/profile';
import TicketPage from './pages/ticket';
import PurchasePage from './pages/purchase';
import ProductPage from './pages/product';
import CartPage from './pages/cart';
import PurchaseListPage from './pages/purchaselist';
import TicketListPage from './pages/ticketlist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/checkout" element={<CartPage />} />
          <Route path="/profile/:userId" element={<CustomProfile/>} />
          <Route path="/purchase_list" element={<PurchaseListPage />} />
          <Route path="/purchase/:purchaseId" element={<CustomPurchase />} />
          <Route path="/ticket_list" element={<TicketListPage />} />
          <Route path="/ticket/:ticketId" element={<CustomTicket />} />
          <Route path="/product/:productId" element={<CustomProduct />} />
          <Route path="/logout" element={<Logout />} />
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

function Logout () {
  localStorage.removeItem ('token')
  localStorage.removeItem ('user')
  window.location.href = '/login'
}

function CustomProduct () {
  let params = useParams();
  return <ProductPage id={params.productId}/>
}

function CustomPurchaseList () {
  let params = useParams();
  return <PurchaseListPage id={params.userId}/>
}

function CustomTicketList () {
  let params = useParams();
  return <TicketListPage id={params.userId}/>
}

export default App;