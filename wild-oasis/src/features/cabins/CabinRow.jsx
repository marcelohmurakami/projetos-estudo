import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { deleteCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";
import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { image, id, maxCapacity, regularPrice, discount } = cabin;
  const [edit, setEdit] = useState(false);
  console.log(cabin);

  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <>
      <TableRow>
        <Img src={image} />
        <Cabin>{id}</Cabin>
        <p>{maxCapacity} adultos</p>
        <Price>R${regularPrice}</Price>
        <Discount>R${discount}</Discount>
        <div>
          <button onClick={(isDeleting) => setIsDeleting(true)}>
            {isDeleting ? "" : "Excluir"}
          </button>
          {isDeleting && <ConfirmDelete resourceName={"quarto"} onConfirm={true} isCanceling={setIsDeleting} id={id}/>}
          <Modal>
            <Modal.Open opens="edit-cabin">
              <button>{isDeleting ? "" : "Editar"}</button>
            </Modal.Open>

            <Modal.Window name="edit-cabin">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>
          </Modal>
        </div>
      </TableRow>
      {edit && (
        <>
          <Modal.Open opens="cabin-form">
            <Button>Criar novo quarto</Button>
          </Modal.Open>
          <Modal.Window name="cabin-form">
            <CreateCabinForm />
          </Modal.Window>
        </>
      )}
    </>
  );
}

export default CabinRow;
