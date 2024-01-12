import React from 'react';
import ReactDOM from 'react-dom/client'
import {RouterProvider, BrowserRouter, Route, createRoutesFromElements, Routes} from 'react-router-dom';
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'
import { ContextApiProvider } from "./context/ContextApiProvider"

function App() {

  return (
    <ContextApiProvider>
      <div className='flex flex-col h-full'>
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
              </Routes>
          </div>
      </BrowserRouter>
      </div>
    </ContextApiProvider>
  )
}

export default App
