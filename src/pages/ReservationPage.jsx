import { useEffect } from "react"
import useCrud from "../hooks/useCrud"
import BookCard from "../components/ReservationsPage/BookCard"
import '../components/styles/ReservationPage.css'



const ReservationPage = () => {

    const [reservations, getRservations, ,deleteReservation] = useCrud()

useEffect( () => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    getRservations(url, true)

}, [])


  return (

  <article className="reservation_container"> 
    <h2 className="reservation_title">Active Reservations</h2>
    <div className="reservation_cards">
        {   
          
            reservations?.map(book => (
             <BookCard  
                key={book.id}
                book = {book}
                deleteReservation = {deleteReservation}
             />   
            ))
        }
    </div>
  </article>
  )
}
 
export default ReservationPage