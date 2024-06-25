import { MapContainer, TileLayer, Marker, Popup, Polyline} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import "leaflet/dist/leaflet.css";
import {  icon } from "leaflet";
import { setPath } from "../redux/slices/flightSlice";



const MapView = ({setDetailId}) => {
  // const state = useSelector((store)=> store.flights);
  // console.log(state)
  const { flights, path } = useSelector((store) => store.flight);
    //! console.log(flights);
    const dispatch = useDispatch();
   //! console.log(path);

   const planeIcon = icon({
    iconUrl:"plane-icon.png",
    iconSize:[30,30],
   })

  return (
    <MapContainer
      center={[40, 35]}
      zoom={5}
      scrollWheelZoom={true}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


{
  flights.map((flights)=>(

<Marker icon={planeIcon}  key={flights.id}  position={[flights.lat, flights.lng]}>
      <Popup>
      <div className="d-flex flex-column gap-2">
        <span>Kod :{flights.code} </span>
        <button onClick={()=> setDetailId(flights.id)} >Detay</button>
        <button onClick={()=> dispatch(setPath([]))}>Rotayı Temizle</button>
      </div>
      </Popup>
    </Marker>

  ))}
<Polyline positions={path} />
    </MapContainer>
  );
};

export default MapView;
