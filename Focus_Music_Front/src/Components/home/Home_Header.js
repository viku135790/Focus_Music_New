import React, { useState } from 'react'
import "./Home_Header.css"
import You_LatestVid from "../home/You_LatestVid"
import AllSongs from '../sidebar/AllSongs';

const Home_Header = () => {
  const [differentItem, setDifferentItem] = useState("");

  const handliClickItem = (item) => {
    setDifferentItem(item)
  }

  const renderComponent = () => {
    if (differentItem === 'New Releases') {
      return <AllSongs />;
    }
    // else if (selectedItem === 'Top Charts') {
    //   return <TopCharts />;
    // } 

    else {
      return <You_LatestVid />;
    }
  }

  return (
    <div className='header-home-cotain'>
      <div className='header-sidebar'>
        <div className='sidebar-content-main'>
          <ul>
            <li className="sidebar-head">BROWSE</li>
            <li className='other-option' onClick={() => handliClickItem("New Releases")}>New Releases</li>
            <li className='other-option' onClick={() => handliClickItem("Top Charts")}>Top Charts</li>
            <li className='other-option' onClick={() => handliClickItem("Top Playlists")}>Top Playlists</li>
            <li className='other-option' onClick={() => handliClickItem("Podcasts")}>Podcasts</li>
            <li className='other-option' onClick={() => handliClickItem("Top Artists")}>Top Artists</li>
            <li className='other-option' onClick={() => handliClickItem("Radio")}>Radio</li>
          </ul>
        </div>
        <div className='sidebar-content-main'>
          <ul>
            <li className="sidebar-head" onClick={() => handliClickItem("LIBRARY")}>LIBRARY</li>
            <li className='other-option' onClick={() => handliClickItem("History")}> History</li>
            <li className='other-option' onClick={() => handliClickItem("Songs")}> Songs</li>
            <li className='other-option' onClick={() => handliClickItem("Albums")}> Albums</li>
            <li className='other-option' onClick={() => handliClickItem("Podcasts")}> Podcasts</li>
            <li className='other-option' onClick={() => handliClickItem("Artists")}> Artists</li>
          </ul>
        </div>
        <div className='playlist-btn'>
          <button className=''>+ Add Item</button>
        </div>
      </div>
      <div className='header-landing'>
          {renderComponent()}
      </div>
    </div>
  )
}

export default Home_Header



