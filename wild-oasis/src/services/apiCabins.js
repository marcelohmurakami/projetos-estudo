import {supabase, supabaseUrl} from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error('Não foi possível carregar os quartos!')
  }

  return data;
}

// services/apiCabins.js
export async function createCabins(newCabin) {
  const bucket = "cabins"; // use o MESMO bucket da dashboard
  const imageName =
    `${crypto.randomUUID?.() ?? Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

  // 1) Upload primeiro
  const { error: storageError } = await supabase
    .storage
    .from(bucket)
    .upload(imageName, newCabin.image, {
      cacheControl: "3600",
      upsert: false,
      contentType: newCabin.image.type,
    });

  if (storageError) throw new Error("Falha ao fazer upload da imagem");

  // 2) Monte a URL pública para o MESMO bucket
  const imagePath = `${supabaseUrl}/storage/v1/object/public/${bucket}/${imageName}`;

  // (alternativa mais à prova de erro:)
  // const { data: { publicUrl: imagePath } } =
  //   supabase.storage.from(bucket).getPublicUrl(imageName);

  // 3) Agora sim, insira no DB
  const { data, error } = await supabase
    .from("Cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) throw new Error("Não foi possível criar o quarto!");
  return data;
}

export async function deleteCabins(name) {
  const { error } = await supabase
  .from('Cabins')
  .delete()
  .eq('name', name)

  if (error) {
    console.error(error);
    throw new Error('Não foi possível deletar os quartos!')
  }
}
