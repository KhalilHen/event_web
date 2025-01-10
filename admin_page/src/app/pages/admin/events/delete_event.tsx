import { supabase } from '../../../../../lib/supabaseClient';

export default async function deleteEvent(eventId: string) {    
  const { error } = await supabase.from('events').delete().eq('id', eventId);
  if (error) {
    console.error('Error deleting event:', error.message);
    return false; 
  }

  return true;
}
