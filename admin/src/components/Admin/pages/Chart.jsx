import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 22 }}>
          
        </Typography>
        <Typography variant="h5" component="div">
          напиши свою картку
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}></Typography>
        <Typography variant="body2">
          та отримуй 1000 долларів  
          <br />
          {'"це реально"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Додати</Button>
      </CardActions>
    </Card>
  );
}
