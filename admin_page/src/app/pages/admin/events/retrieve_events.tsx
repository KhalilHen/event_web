import { supabase } from '../../../../../lib/supabaseClient';

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  category: string;
  
  date: string;
}
export default async function retrieveEvents() {
  const { data, error } = await supabase.from('events').select('*');

  if (error) {
    console.error('Error fetching events:', error);
    return null;
  }
  console.log(data);

  return data;
}