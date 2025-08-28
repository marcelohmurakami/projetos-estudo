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
          {value: "name-asc", label: "Nome (A-Z)"},
          {value: "name-desc", label: "Nome (Z-A)"},
          {value: "capacity-asc", label: "Capacidade (menor para maior)"},
          {value: "capacity-desc", label: "Capacidade (maior para menor)"},
          {value: "price-asc", label: "Valor (menor para maior)"},
          {value: "price-desc", label: "Valor (maior para menor)"},
        ]}
      />
    </>
  );
}

export default CabinTableOperations;
