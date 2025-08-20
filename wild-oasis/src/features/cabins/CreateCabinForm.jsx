import { useForm } from "react-hook-form";

import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({ cabinToEdit = {} }) {
  const isEdit = Boolean(cabinToEdit);
  const { id: editId, ...editValues } = cabinToEdit;

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEdit
      ? {
          id: cabinToEdit.id,
          maxCapacity: cabinToEdit.maxCapacity,
          regularPrice: cabinToEdit.regularPrice,
          discount: cabinToEdit.discount ?? 0,
          description: cabinToEdit.description ?? "",
          image: editValues.image ?? null,
        }
      : {
          id: "",
          maxCapacity: 1,
          regularPrice: 1,
          discount: 0,
          description: "",
        },
  });

  const queryClient = useQueryClient();
  const { errors } = formState;

  // CREATE
  const { mutate } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("O quarto foi criado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset(); // limpa o form após criar
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  // CreateCabinForm.jsx (trecho)
  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEdit) {
      editCabin({ newCabinData: { ...data, image }, id: editId });
    } else mutate({ ...data, image: image });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">ID do quarto</Label>
        <Input
          type="text"
          id="name"
          {...register("id", {
            required: "Esse campo precisa ser preenchido",
          })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Capacidade</Label>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "Esse campo precisa ser preenchido",
            min: {
              value: 1,
              message: "Capacidade precisa ser no mínimo 1",
            },
          })}
        />
        {errors?.maxCapacity?.message && (
          <Error>{errors.maxCapacity.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="type">Valor</Label>
        <Input
          type="number"
          id="type"
          {...register("regularPrice", {
            required: "Esse campo precisa ser preenchido",
            min: {
              value: 1,
              message: "Valor precisa ser no mínimo $1,00",
            },
          })}
        />
        {errors?.regularPrice?.message && (
          <Error>{errors.regularPrice.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Desconto</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "Esse campo precisa ser preenchido",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Desconto precisa ser menor do que o valor do quarto",
          })}
        />
        {errors?.discount?.message && <Error>{errors.discount.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Descrição para o site</Label>
        <Textarea
          id="description"
          defaultValue=""
          {...register("description", {
            required: "Esse campo precisa ser preenchido",
          })}
        />
        {errors?.description?.message && (
          <Error>{errors.description.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          type="file"
          accept="image/*"
          {...register("image", {
            required: !isEdit && "Esse campo precisa ter um upload de imagem",
          })}
        />
        {errors?.image?.message && <Error>{errors.image.message}</Error>}
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancelar
        </Button>
        <Button>Editar quarto</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
