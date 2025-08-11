import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../ui/Row";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
  <>
  <Row>
    <h1>Todos os quartos</h1>
    <p>filter/sort</p>
  </Row>
  <CabinTable />
  </>
  )
}

export default Cabins;
