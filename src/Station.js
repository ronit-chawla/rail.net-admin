import React, { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Station = () => {
  const [
    station,
    setStation,
  ] = useState('');
  const [
    requests,
    setRequests,
  ] = useState([]);
  const getRequests = async () => {
    const { data } = await axios.get(
      `https://rail-net.netlify.app/.netlify/functions/api/travel/porter/${station}`
    );
    setRequests(data.requests);
  };
  return (
    <div style={{ padding: '50px' }}>
      <input
        placeholder='Station Name'
        value={station}
        onChange={e => setStation(e.target.value)}
      />
      <button onClick={getRequests}>GET</button>
      <Link to={'/'}>See Onboard Service Requests</Link>
      {requests.length > 0 &&
        requests.map((r, i) => (
          <Card sx={{ minWidth: 100 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                {i + 1}
              </Typography>
              <Typography variant='h5' component='div'>
                {r.name}
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color='text.secondary'
              >
                Seat Number: {r.seat}
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color='text.secondary'
              >
                Ticket: {r.ticketID}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default Station;
