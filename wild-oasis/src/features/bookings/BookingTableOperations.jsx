import SortBy from "../../ui/SortBy"
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "checkInDate-desc", label: "Sort by date (recent first)" },
          { value: "checkInDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "numNights-desc",
            label: "Sort by amount (high first)",
          },
          { value: "numNights-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
