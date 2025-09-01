import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  text-align: right;
`;

function BookingRow({
  booking: {
    id: bookingId,
    checkInDate,
    checkOutDate,
    numNights,
    status,
    totalPrice,
    Guests: { fullName: guestName, country } = {},
    Cabins: { name: cabinName } = {},
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const start = checkInDate ? new Date(checkInDate) : null;
  const end = checkOutDate ? new Date(checkOutDate) : null;

  return (
    <Table.Row>
      {/* 1) Cabin */}
      <Cabin>{cabinName ?? "—"}</Cabin>

      {/* 2) Guest */}
      <Stacked>
        <span>{guestName ?? "—"}</span>
        <span>{country ?? ""}</span>
      </Stacked>

      {/* 3) Dates */}
      <Stacked>
        <span>
          {start
            ? isToday(start)
              ? "Today"
              : formatDistanceFromNow(checkInDate)
            : "—"}{" "}
          &rarr; {numNights ?? "—"} night stay
        </span>
        <span>
          {start ? format(start, "MMM dd yyyy") : "—"} &mdash;{" "}
          {end ? format(end, "MMM dd yyyy") : "—"}
        </span>
      </Stacked>

      {/* 4) Status */}
      <Tag type={statusToTagName[status] ?? "silver"}>
        {(status ?? "").replace("-", " ") || "—"}
      </Tag>

      {/* 5) Amount */}
      <Amount>{totalPrice != null ? formatCurrency(totalPrice) : "—"}</Amount>

      {/* 6) Actions (placeholder) */}
      <div />
    </Table.Row>
  );
}

export default BookingRow;

