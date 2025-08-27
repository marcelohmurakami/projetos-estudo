import Filter from "../../ui/Filter";

function CabinTableOperations() {
  return (
    <Filter
      urlBase={"discount"}
      options={[
        { value: "all", label: "Todos os quartos" },
        { value: "no-discount", label: "Sem desconto" },
        { value: "with-discount", label: "Com desconto" },
      ]}
    />
  );
}

export default CabinTableOperations;
