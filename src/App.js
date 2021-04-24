import React, { useState } from "react";
import ReactMapGL,{Marker,Popup} from "react-map-gl";
import { Room,Star } from '@material-ui/icons'
import "./App.css"

const App = () => {
  const [viewport, setViewport] = useState({
    width: "100wh",
    height: "100vh",
    latitude:  -7.463270,
    longitude: 112.597311,
    zoom: 8,
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
      >
         <Marker latitude={-7.100973} longitude={112.429271} offsetLeft={-20} offsetTop={-10}>
        <Room style={{fontSize:viewport * 7,color:"slateblue"}}/>
      </Marker>
      <Popup
          latitude={-7.100973}
          longitude={112.429271}
          closeButton={true}
          closeOnClick={false}
          anchor="left" >
          <div className="card">
            <label>Place</label>
            <h4 className="place">Beautiful place</h4>
            <label>Review</label>
            <p className="desc">Beautiful place. I like it</p>
            <label>Rating</label>
            <div className="stars">
              <Star className="star"/>
              <Star className="star"/>
              <Star className="star"/>
              <Star className="star"/>
              <Star className="star"/>
            </div>
            <label>Information</label>
            <span className="username">Created by <b>Maz</b></span>
            <span className="date">1 hour go</span>
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
};

export default App;
