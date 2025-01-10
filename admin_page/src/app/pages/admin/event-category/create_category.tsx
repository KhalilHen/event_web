// import { useState } from 'react';
import { supabase } from '../../../../../lib/supabaseClient';

interface FormData {
  categoryTitle: string;
  categoryDescription: string;
}

export default async function createCategory(formData: FormData): Promise<void> {
  const { error: insertError } = await supabase.from('event_category').insert([
    {
      title: formData.categoryTitle,
      description: formData.categoryDescription,
    },
  ]);

  if (insertError) {
    console.error('Error inserting data:', insertError);
  } else {
    console.log('Data inserted successfully');
  }
}
