import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

function UpdateSettingsForm() {
  return (
    <>
      <h1>Configurações do hotel</h1>
      <Form>
        <FormRow label='Mínimo de noites'>
          <Input type='number' id='min-nights' />
        </FormRow>
        <FormRow label='Máximo de noites'>
          <Input type='number' id='max-nights' />
        </FormRow>
        <FormRow label='Máximo de hóspedes'>
          <Input type='number' id='max-guests' />
        </FormRow>
        <FormRow label='Valor do café da manhã'>
          <Input type='number' id='breakfast-price' value={3}/>
        </FormRow>
      </Form>
    </>
  );
}

export default UpdateSettingsForm;
