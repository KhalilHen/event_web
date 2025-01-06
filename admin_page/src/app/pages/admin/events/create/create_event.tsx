import { supabase } from '../../../../../../lib/supabaseClient';

interface FormData {
  eventName: string;
  eventDescription: string;
  startDate: Date;
  endDate: Date;
  // eventTime: string;
  eventLocation: string;
}

export default async function receiveFormData(
  formData: FormData
): Promise<void> {
  const { error: insertError } = await supabase.from('events').insert([
    {
      title: formData.eventName,
      description: formData.eventDescription,
      start_date: formData.startDate,
      end_date: formData.endDate,
      // time: formData.eventTime,
      location: formData.eventLocation,
    },
  ]);

  if (insertError) {
    console.error('Error inserting data:', insertError);
  } else {
    console.log('Data inserted successfully');
  }
  // Log the received form data to check
  console.log('Received Form Data:', formData);
}
