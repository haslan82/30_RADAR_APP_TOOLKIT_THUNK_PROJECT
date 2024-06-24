import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import "leaflet/dist/leaflet.css";
const MapView = () => {
  // const state = useSelector((store)=> store.flights);
  // console.log(state)
  const { flights } = useSelector((store) => store.flight);
  //! console.log(flights);

  return (
    <MapContainer
      center={[41, 29]}
      zoom={13}
      scrollWheelZoom={true}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapView;
