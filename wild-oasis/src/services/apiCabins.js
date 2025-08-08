import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error('Não foi possível carregar os quartos!')
  }

  return data;
}
