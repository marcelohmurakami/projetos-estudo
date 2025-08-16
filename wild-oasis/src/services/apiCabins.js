import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error('Não foi possível carregar os quartos!')
  }

  return data;
}

export async function createCabins(newCabin) {
  
const { data, error } = await supabase
  .from('Cabins')
  .insert([newCabin])
  .select()

  if (error) {
    console.error(error);
    throw new Error('Não foi possível criar o quarto!')
  }
}

export async function deleteCabins(id) {
  const { error } = await supabase
  .from('Cabins')
  .delete()
  .eq('id', id)

  if (error) {
    console.error(error);
    throw new Error('Não foi possível deletar os quartos!')
  }
}
