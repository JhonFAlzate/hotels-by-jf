import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHotelsThunk } from "../store/slices/products.slice"
import HotelCard from "../components/HomePage/HotelCard"
import '../components/styles/HomePage.css'

const HomePage = () => {
   const products = useSelector(states => states.products)
   const dispatch = useDispatch()

   useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
   },[])

  return (
    <div className="hpage_container_card">
        {
        products?.map(hotel => (
            <HotelCard 
            key={hotel.id}
            hotel={hotel}
            />
        ) ) 
        }
    </div>
  )
}

export default HomePage