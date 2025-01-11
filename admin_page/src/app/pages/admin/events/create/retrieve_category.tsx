import { supabase } from '../../../../../../lib/supabaseClient';

export interface EventCategory {
  id: number;
  title: string;
  description: string;
}

export default async function retrieveCategories() {
  const { data, error } = await supabase.from('event_category').select('title');

  if (error) {
    console.error('Error fetching categories:', error);
    return null;
  }
  console.log(data);
  return data;
}
