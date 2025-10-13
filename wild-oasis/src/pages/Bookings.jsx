import BookingTable from "../features/bookings/BookingTable"
import BookingTableOperations from "../features/bookings/BookingTableOperations"
import Row from "../ui/Row"

function Bookings() {   
    return (
        <>
            <Row>
                <h1>Todas as reservas</h1>
                <BookingTableOperations />
            </Row>

            <Row>
                <BookingTable>
                    
                </BookingTable>
            </Row>
        </>
    )
}

export default Bookings

