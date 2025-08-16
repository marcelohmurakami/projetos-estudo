import {useForm} from 'react-hook-form';

import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCabins } from '../../services/apiCabins';
import toast from 'react-hot-toast';

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

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const queryClient = useQueryClient();
  const { errors } = formState;
  console.log(errors)

  const {mutate} = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      toast.success('O quarto foi criado com sucesso')

      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
    },
    onError: (err) => {
      toast.error(err.message)
    }
  })

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">ID do quarto</Label>
        <Input type="text" id="name" {...register('name', {
          required: 'Esse campo precisa ser preenchido',
        })} />
        {errors?.name?.message && <Error>{errors.name.message}</Error> }
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Capacidade</Label>
        <Input type="number" id="maxCapacity" {...register('maxCapacity', {
          required: 'Esse campo precisa ser preenchido',
          min: {
            value: 1,
            message: 'Capacidade precisa ser no mínimo 1'
          }
        })}/>
        {errors?.maxCapacity?.message && <Error>{errors.maxCapacity.message}</Error> }
      </FormRow>

      <FormRow>
        <Label htmlFor="type">Valor</Label>
        <Input type="number" id="type" {...register('regularPrice', {
          required: 'Esse campo precisa ser preenchido',
          min: {
            value: 1,
            message: 'Valor precisa ser no mínimo $1,00',
          }
        })} />
        {errors?.regularPrice?.message && <Error>{errors.regularPrice.message}</Error> }
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Desconto</Label>
        <Input type="number" id="discount" defaultValue={0} {...register('discount', {
          required: 'Esse campo precisa ser preenchido',
          validate: (value) => 
            value <= getValues().regularPrice || 'Desconto precisa ser menor do que o valor do quarto'
        })} />
        {errors?.discount?.message && <Error>{errors.discount.message}</Error> }
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Descrição para o site</Label>
        <Textarea type="number" id="description" defaultValue="" {...register('description')} />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" {...register('image')} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
