
import './App.css';
import * as React from 'react'
import Home from '../src/components/Home2'
import Crypto from './components/Crypto'
import About from './components/About'
import Detail from './components/Detail'
import Trend from './components/Trend'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { QueryClient, QueryClientProvider } from "react-query";

import Sidebar from './components/Sidebar';
import { WatchListProvider } from './components/watchList';
const queryClient = new QueryClient();



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
        </WatchListProvider>
      </React.Fragment>

    </QueryClientProvider>
  );
}

