
//REACT
import './App.css';
import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// HELPER
import { WatchListProvider } from './components/WatchList';
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
//BOOTSTRAP
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//COMPONENTS
import Home from './components/Page/Home'
import Crypto from './components/Crypto'
import About from './components/Page/About'
import Detail from './components/Page/Detail'
import Trend from './components/Page/Trend'
import Footer from './components/Footer/Footer'
import Sidebar from './components/_Sidebar.js/Sidebar';
import NavigationBar from './components/Navbar.js/NavigationBar';



export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Fragment>

        <WatchListProvider>
          <Router>
            <NavigationBar />
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cryptos" element={<Crypto />} />
              <Route path="/trends/:page" element={<Trend />} />
              <Route path="/cryptos/:id" element={<Detail />} />
            </Routes>
          </Router>
          <Footer />
        </WatchListProvider>
      </React.Fragment>

    </QueryClientProvider>
  );
}

