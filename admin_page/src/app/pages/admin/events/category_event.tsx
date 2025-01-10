import React, { useEffect, useState } from 'react';
import { supabase } from '../../../../../lib/supabaseClient';

interface Category {
  id: number;
  name: string;
}

const CategoryEvent: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from('event_category')
          .select('*');
        if (error) throw error;
        setCategories(data || []);
      } catch (e) {
        setError('Failed to fetch categories' + e);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Event Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryEvent;
