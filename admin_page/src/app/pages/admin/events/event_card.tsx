'use client';

import React from 'react';
import retrieveEvents, { Event } from './retrieve_events';
import deleteEvent from './delete_event';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

export function EventsCard() {
  const [events, setEvents] = React.useState<Event[]>([]);

  React.useEffect(() => {
    async function fetchEvents() {
      const data = await retrieveEvents();
      if (data) {
        setEvents(data);
      }
    }
    fetchEvents();
  }, []);

  const handleDelete = async (eventId: string) => {
    const success = await deleteEvent(eventId);
    if (success) {
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== eventId)
      );
    } else {
      alert('Failed to delete the event. Please try again.');
    }
  };

  return (
    <div className='flex flex-col gap-4 p-4'>
      {events.map((event) => (
        <Card
          key={event.id}
          sx={{
            maxWidth: 345,
            boxShadow: 3,
            borderRadius: 2,
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          {/* Image Section */}
          <CardMedia
            component='img'
            height='140'
            image={
              'https://t3.ftcdn.net/jpg/00/72/98/56/360_F_72985661_LU1Xk0YQiPBwOuesuuJgwTn0NPlwP8ob.jpg'
            }
            alt={event.title}
          />
          {/* Content Section */}
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {event.title}

            </Typography>
           
            <Typography variant='body2' color='text.secondary'>
              {event.description}
            </Typography>
            <Typography
              variant='caption'
              color='text.secondary'
              display='block'
              sx={{ mt: 1 }}
            >
              {new Date(event.date).toLocaleDateString()}
            </Typography>
          </CardContent>
          {/* Actions Section */}
          <CardActions className='flex justify-between w-full'>
            <Button size='small' color='primary'>
              Update
            </Button>
            <Button
              size='small'
              color='secondary'
              onClick={() => handleDelete(event.id)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
