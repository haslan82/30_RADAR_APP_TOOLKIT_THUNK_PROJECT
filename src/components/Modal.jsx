import axios from "axios";
import React, { useEffect, useState } from "react";
import { dOptions } from "../constants";
import { useDispatch } from "react-redux";
import { setPath } from "../redux/slices/flightSlice";

const Modal = ({ detailId }) => {
  //! console.log(detailId)

 const dispatch = useDispatch();
// uçuş detay verisini sadece bu modal içerisinde kullanacağımız için store da tutmaya gerek duymadık
  const [d, setDetail] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId} `,
        dOptions
      )
      .then((res) => {
        // state i güncelledik
        setDetail(res.data);
// harita sayfasında kullanabilmek için uçuş yolunu slice a aktar
        dispatch(setPath(res.data.trail));
      });
  }, [detailId]);

  return(
    
   <div className="detail-outer">
<div className="detail-inner">
    <div className="close-wrapper">
        <button>X</button>
    </div>
</div>

  </div>
  
)
};

export default Modal;
