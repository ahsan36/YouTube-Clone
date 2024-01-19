import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'
import { ContextApiProvider } from "./context/ContextApiProvider"
import { Navigate } from "react-router-dom";

function App() {

  return (
    <ContextApiProvider>
        <BrowserRouter>
          <div className="flex flex-col h-full">
              <Header />
              <Routes>
                  <Route path="/" exact element={<Feed />} />
                  <Route
                      path="/searchResult/:searchQuery"
                      element={<SearchResult />}
                  />
                  <Route path="/video/:id" element={<VideoDetails />} />

                  <Route path='*' element={<Navigate to='/' replace />} />
              </Routes>
          </div>
      </BrowserRouter>
    </ContextApiProvider>
  )
}

export default App
