import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter = !filterValue || filterValue === 'all' ? null : {field: 'status', value: filterValue};

  const sortByRaw = searchParams.get('sortBy') || 'checkInDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = {field, direction};

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))

  const {
    data: {data: bookings, count} = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page], //sempre que filter ou sortBy mudar, a UI vai recarregar
    queryFn: () => getBookings({filter, sortBy, page}),
  })

  if (isLoading) return <Spinner />

  return (
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Quarto</div>
          <div>Cliente</div>
          <div>Datas</div>
          <div>Status</div>
          <div>Valor</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings || []}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          <Pagination count={count}> </Pagination>
        </Table.Footer>
      </Table>
  );
}

export default BookingTable;
