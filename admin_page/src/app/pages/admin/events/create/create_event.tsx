import { supabase } from '../../../../../../lib/supabaseClient';



interface FormData {
  eventName: string;
  eventDescription: string;
 
  startDate: string | Date;
  endDate: string | Date;
  eventLocation: string;
  eventCategory: string;
  eventStatus: string;
}

export default async function receiveFormData(
  formData: FormData,
  imageFile: File | null
): Promise<void> {

  
  // Ensure startDate and endDate are ISO 8601 strings
  let imageUrl: string | null = null;
  if(imageFile) {

    const safeEventName = formData.eventName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const fileName = `${safeEventName}_${imageFile.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
    .from('event_images') 
    .upload(fileName, imageFile);

  if (uploadError) {
    console.error('Error uploading image:', uploadError);
    return;
  }  else if(uploadData) {

    const {data: publicUrlData} = supabase.storage.from('event_images').getPublicUrl(uploadData.path);
    imageUrl = publicUrlData?.publicUrl ?? null;
  }

  }

  const startDate =
    typeof formData.startDate === 'string'
      ? formData.startDate
      : formData.startDate.toISOString();
  const endDate =
    typeof formData.endDate === 'string'
      ? formData.endDate
      : formData.endDate.toISOString();

  const { error: insertError } = await supabase.from('events').insert([
    {
      title: formData.eventName,
      description: formData.eventDescription,
      start_date: startDate, // ISO string
      end_date: endDate, // ISO string
      location: formData.eventLocation,
      category: formData.eventCategory,
      status: formData.eventStatus,
      image_url: imageUrl , // Can be null

    },
  ]);

  if (insertError) {
    console.error('Error inserting data:', insertError);
  } else {
    console.log('Data inserted successfully');
  }

}
