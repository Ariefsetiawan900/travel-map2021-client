import React, { useState } from "react";
import ReactMapGL,{Marker} from "react-map-gl";
import { Room } from '@material-ui/icons'

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
      </ReactMapGL>
    </div>
  );
};

export default App;
