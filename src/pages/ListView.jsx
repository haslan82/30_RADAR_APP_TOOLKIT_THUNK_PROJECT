import { useState } from "react";
import { useSelector } from "react-redux"
import ReactPaginate from 'react-paginate';


const ListView = ({setDetailId}) => {

 const {flights} = useSelector((store)=>store.flight)
//! console.log(flights)

// slice methodunda ilk elemanın state i
const [itemOffset, setItemOffset]= useState(0);

// sayfa başına eleman sayısı
const itemsPerPage= 10;

const endOffset = itemOffset + itemsPerPage;
const currentItems = flights.slice(itemOffset, endOffset);
//!console.log(currentItems)


// maximum sayfa sayısı
const pageCount  = Math.ceil( flights.length / itemsPerPage);
//! console.log(pageCount);
// yeni sayfaya tıklanınca state i günceller
const handlePageClick = (event)=> {
  //! console.log(event)

  // yeni sayfadaki elemanın dizideki sırasını belirler
  const newOffset= (event.selected * itemsPerPage) % flights.length;
  setItemOffset(newOffset);
};

  return (
    <div>
     <table className='table table-dark'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Kuyruk Kodu</th>
          <th>Enlem</th>
          <th>Boylam</th>
          <th>İşlem</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>234569</td>
          <td>48a57198</td>
          <td>98.42</td>
          <td>36.87</td>
          <td>
            <button>Detay</button>
          </td>
          
        </tr> */}

{
currentItems.map((flight)=> (
<tr key={flight.id}>
          <td>{flight.id}</td>
          <td>{flight.code}</td>
          <td>{flight.lat}</td>
          <td>{flight.lng}</td>
          <td>
            <button onClick={()=> setDetailId(flight.id)}>Detay</button>
          </td>
          
        </tr>
))

}

      </tbody>
     </table>
     <ReactPaginate className="pagination justify-content-center my-5"
     pageClassName="page-item "
     // önceki butonun bulunduğu liste öğesine uygulanacak sınıf
     previousClassName="page-item"
          // sonraki butonun bulunduğu liste öğesine uygulanacak sınıf
     nextClassName="page-item"
// sayfa numaralarına uygulanacak sınıf
pageLinkClassName="page-link"
// sonraki butonuna uygulanacak sınıf
     nextLinkClassName="page-link"
     // önceki butonuna uygulanacak sınıf
     previousLinkClassName="page-link"
     // sayfa numaraları arasında boşluk bırakmak için kullanılan noktaya uygulanır
     breakClassName="page-link"

     // sayfa numaralrı arsında boşluk bırakmak için kullanılan nokta
        breakLabel="..."
        nextLabel="İleri >"

        // sayfa numaralı değiştiğinde uygulanacak olan fonksiyon
        onPageChange={handlePageClick}
        activeClassName="active"
        pageRangeDisplayed={5}
        // toplam sayfa sayısı
        pageCount={pageCount}
        previousLabel="< Geri"

        // sayfa sayısı sıfır olduğunda ne yapılacağını söyler
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default ListView
