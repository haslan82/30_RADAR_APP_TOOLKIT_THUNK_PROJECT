import { useSelector } from "react-redux"


const Header = () => {
const {isLoading, isError, flights} = useSelector((store) =>store.flight)
//! console.log(store)
  return (
    <header>
        <div>
            <img  src="/public/plane-logo.png" alt="" />
            <h3>Uçuş Radarı</h3>
        </div >
        <p className=" bg-info rounded-2  ">
          {
            isLoading ? "Uçuşlar Hesaplanıyor..." : isError ?  " Üzgünüz bir Hata oluştu" : flights.length + "  Uçuş Bulundu"
          }
        </p>
    </header>
  )
}

export default Header
