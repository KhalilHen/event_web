import { supabase } from '../../../../../../lib/supabaseClient';
//TODO 
interface FormData {
  eventName: string;
  eventDescription: string;
  // startDate: Date;
  // endDate: Date;
  // eventTime: string;
  startDate: string | Date;
  endDate: string | Date;
  // eventTime: string;
  eventLocation: string;
  eventCategory: string;
}

export default async function receiveFormData(
  formData: FormData
): Promise<void> {
  // Ensure startDate and endDate are ISO 8601 strings
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
    },
  ]);

  if (insertError) {
    console.error('Error inserting data:', insertError);
  } else {
    console.log('Data inserted successfully');
  }
}
