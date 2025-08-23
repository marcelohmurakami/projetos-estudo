import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { getSettings, updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

function UpdateSettingsForm() {
  const {
    data: { minNights, maxNights, numGuests, breakfastPrice } = {},
    isLoading,
    error,
  } = useQuery({ queryKey: ["Settings"], queryFn: getSettings });

  const queryClient = useQueryClient();

  const { mutate: editSettings, isLoading: isEditing } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Configurações editadas com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["Settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  function handleSubmit(e, field) {
    const { value } = e.target;

    if (!value) return;
    editSettings({ [field]: value });
  }

  return (
    <>
      <h1>Configurações do hotel</h1>
      <Form>
        <FormRow label="Mínimo de noites">
          <Input
            type="number"
            id="minNights"
            disabled={isLoading || isEditing}
            defaultValue={minNights}
            onBlur={(e) => handleSubmit(e, "minNights")}
          />
        </FormRow>
        <FormRow label="Máximo de noites">
          <Input
            type="number"
            id="maxNights"
            disabled={isLoading || isEditing}
            defaultValue={maxNights}
            onBlur={(e) => handleSubmit(e, "maxNights")}
          />
        </FormRow>
        <FormRow label="Máximo de hóspedes">
          <Input
            type="number"
            id="maxGuests"
            disabled={isLoading || isEditing}
            defaultValue={numGuests}
            onBlur={(e) => handleSubmit(e, "numGuests")}
          />
        </FormRow>
        <FormRow label="Valor do café da manhã">
          <Input
            type="number"
            id="breakfastPrice"
            disabled={isLoading || isEditing}
            defaultValue={breakfastPrice}
            onBlur={(e) => handleSubmit(e, "breakfastPrice")}
          />
        </FormRow>
      </Form>
    </>
  );
}

export default UpdateSettingsForm;
