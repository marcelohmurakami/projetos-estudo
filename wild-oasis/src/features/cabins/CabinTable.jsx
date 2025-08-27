import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from './CabinRow';
import { useSearchParams } from "react-router-dom";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  flex-grow: 1;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable () {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery ({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  const [searchParams] = useSearchParams();
  const filterCabin = searchParams.get('discount')
  
  let filteredCabins;
  if (filterCabin === "no-discount") filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
  else if (filterCabin === "with-discount") filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);
  else filteredCabins = cabins;

  if (isLoading) return <Spinner />

  return (
    <Table>
    <TableHeader>
      <p></p>
      <p>ID do quarto</p>
      <p>Capacidade</p>
      <p>Preço</p>
      <p>Desconto</p>
      <p></p>
    </TableHeader>
    
    {filteredCabins.map((cabin) => <CabinRow cabin={cabin} key={cabin.id} />)}
    </Table>
  )
}

export default CabinTable;