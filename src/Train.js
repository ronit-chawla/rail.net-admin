import React, { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Train = () => {
  const [
    trainID,
    setTrainID,
  ] = useState('');
  const [
    requests,
    setRequests,
  ] = useState([]);
  const getRequests = async () => {
    const { data } = await axios.get(
      `https://rail-net.netlify.app/.netlify/functions/api/travel/${trainID}/requests`
    );
    setRequests(data.requests);
  };
  return (
    <div style={{ padding: '50px' }}>
      <div style={{ margin: '5px' }}>
        <input
          placeholder='TRAIN ID'
          value={trainID}
          onChange={e => setTrainID(e.target.value)}
        />
        <button onClick={getRequests}>GET</button>
        <Link to={'/station'}>See Porter Requests</Link>
      </div>
      {requests.length > 0 &&
        requests.map((r, i) => (
          <Card
            variant='outlined'
            sx={{ minWidth: 100, my: 2 }}
          >
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
                Service: {r.type}
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

export default Train;
