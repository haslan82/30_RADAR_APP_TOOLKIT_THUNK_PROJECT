export const options = {
    method: "GET",
    url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
    params: {
      bl_lat: "34.668286",
      bl_lng: "24.943013",
      tr_lat: "43.540389",
      tr_lng: "44.827639",
      limit: "300",
    },

    headers: {
      'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
    
  };

  export const dOptions = {
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  }


  // headers: {
    //   "x-rapidapi-key": "17bfa31bbbmsh1355592a7405f9bp1dd229jsnd7e87c1e1260",
    //   "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
    // },


