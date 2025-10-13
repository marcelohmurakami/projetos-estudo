import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row>
        <h1>Todos os quartos</h1>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
      </Row>

      <AddCabin />
    </>
  );
}

export default Cabins;
