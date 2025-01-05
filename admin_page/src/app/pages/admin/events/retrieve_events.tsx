import { supabase } from '../../../../../lib/supabaseClient';

export default async function retrieveEvents() {
  const { data, error } = await supabase.from('events').select('*');

  if (error) {
    console.error('Error fetching events:', error);
    return null;
  }
    console.log(data);
    

  return data;
}
