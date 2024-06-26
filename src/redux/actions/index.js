import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants/index";

export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  // api isteği at
  const res = await axios.request(options);
  //!console.log(res);

  // dizi içerisinde ki dizileri nesneye çevir
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));

  //!console.log(formatted)
  // aksiyonun payloadı olarak formatlanan veriyi ekle
  return formatted;
});

