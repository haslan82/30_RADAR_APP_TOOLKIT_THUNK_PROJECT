import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal";

function App() {
  // harita görünü mü aktif mi?
  const [isMapView, setIsMapView] = useState(true);

  // detayı gösterilecek elemanın  id si
  const [detailId, setDetailId] = useState(null);
//! console.log(detailId)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <div>
      <Header />
      <div className="view-buttons">
        <button
          onClick={() => setIsMapView(true)}
          className={isMapView ? "active" : ""}
        >
          Harita Görünümü
        </button>
        <button
          onClick={() => setIsMapView(false)}
          className={isMapView ? "" : "active"}
        >
          Liste Görünümü
        </button>
      </div>

      {isMapView ? <MapView /> : <ListView setDetailId={setDetailId} />}
      {detailId && <Modal detailId ={detailId} />}
    </div>
  );
}

export default App;
