import Filter from "../../ui/Filter";
import Select from "../../ui/Select";

function CabinTableOperations() {
  return (
    <>
      <Filter
        urlBase={"discount"}
        options={[
          { value: "all", label: "Todos os quartos" },
          { value: "no-discount", label: "Sem desconto" },
          { value: "with-discount", label: "Com desconto" },
        ]}
      />

      <Select 
        urlBase={"sort-by"}
        options={[
          {value: "id-asc", label: "Nome (A-Z)"},
          {value: "id-desc", label: "Nome (Z-A)"},
          {value: "maxCapacity-asc", label: "Capacidade (menor para maior)"},
          {value: "maxCapacity-desc", label: "Capacidade (maior para menor)"},
          {value: "regularPrice-asc", label: "Valor (menor para maior)"},
          {value: "regularPrice-desc", label: "Valor (maior para menor)"},
        ]}
      />
    </>
  );
}

export default CabinTableOperations;
