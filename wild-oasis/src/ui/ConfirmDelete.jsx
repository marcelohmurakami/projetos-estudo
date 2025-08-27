import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../../src/services/apiCabins";
import toast from "react-hot-toast";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";
import Modal from "./Modal";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, isCanceling, id }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      toast.success("Quarto deletado com sucesso!");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Você tem certeza que deseja excluir esse {resourceName} permanentemente?
        Essa ação não pode ser desfeita.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={false}
          onClick={() => isCanceling(false)}
        >
          Cancelar
        </Button>
        <Button
          variation="danger"
          disabled={false}
          onClick={() => {
            mutate(id);
            isCanceling(false);
          }}
        >
          Excluir
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
