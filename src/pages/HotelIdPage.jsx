import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import 'boxicons'
import OtherHotels from "../components/HotelIdPage/OtherHotels"
import '../components/styles/HotelIdPage.css'
import MapHotel from "../components/HotelIdPage/MapHotel"
import FormReservation from "../components/HotelIdPage/FormReservation"


const HotelIdPage = () => {

    const {id} = useParams()

    const [hotel, getHotel  ] = useFetch()

    useEffect( () => {
      const url = `https://hotels-api.academlo.tech/hotels/${id}`  
      getHotel(url)

    },[id])

  return (
    <article className="hpage_container">
        <h2 className="hpage_title">{hotel?.name}</h2>
        <div className="aquí van las estrellas, con box icon">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star-half"></i>
            <i className="bx bx-star"></i>
           <span>{hotel?.rating}</span>
        </div>

        <div className="hpage_img_map_container">
            
            
            <img className="hpage_img" src={hotel?.images[0].url} alt="" />
           <div className="hpage_div_map">
            {
                hotel && (
                    
                    <MapHotel
                    lat = {Number(hotel?.lat)}
                    lon = {Number(hotel?.lon)}
                    />

                )
            }
            </div>
        </div>

        <div className="hpage_information">

            <div className="hpage_city">{hotel?.city.name}, {hotel?.city.country}</div>
            <div className="hpage_div_address">
                <i className='bx bx-map hpage_addressl'></i>
                <address className="hpage_addressl">{hotel?.address} </address>
            </div>
            <br />
            <p className="hpage_description">{hotel?.description}</p>

        </div>

        <div className="hpage_otherHotels">
            <section>
                <FormReservation 
                hotelId = {id}
                />
            </section>

            <OtherHotels 
            city={hotel?.city}
            id = {id}
            />
        </div>

    </article>
  )
}

export default HotelIdPage