import { supabase } from '../../../../../../lib/supabaseClient';


export async function uploadImage(file: File) {
  const filePath = `public/${file.name}`;
  const { data, error } = await supabase.storage
    .from('event_images')
    .upload(filePath, file);

  if (error) {
    throw new Error('Error uploading image: ' + error.message);
  }

//   const { data: insertData, error: insertError } = await supabase
//     .from('event')
//     .insert([{ file_path: filePath }]);

//   if (insertError) {
//     throw new Error('Error inserting file path into table: ' + insertError.message);
//   }

  return data;
}
