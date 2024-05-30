import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import BookCard from "../components/ReservationsPage/BookCard"
import '../components/styles/ReservationPage.css'
import FormRating from "../components/ReservationsPage/FormRating"



const ReservationPage = () => {

    const [reservations, getRservations, ,deleteReservation] = useCrud()

    const [bookSelected, setBookSelected] = useState()

useEffect( () => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    getRservations(url, true)

}, [])


  return (

  <article className="reservation_container"> 
    <h2 className="reservation_title">Active Reservations</h2>
 
      <FormRating
      bookSelected = {bookSelected}
      setBookSelected = {setBookSelected}
      />
  


    <div className="reservation_cards">
        {   
          
            reservations?.map(book => (
             <BookCard  
                key={book.id}
                book = {book}
                deleteReservation = {deleteReservation}
                setBookSelected = {setBookSelected}
             />   
            ))
        }
    </div>
  </article>
  )
}
 
export default ReservationPage