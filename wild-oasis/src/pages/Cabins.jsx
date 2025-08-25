import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import AddCabin from "../features/cabins/AddCabin";

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

      <Row>
        <CabinTable />
      </Row>

      <AddCabin />
    </>
  );
}

export default Cabins;
