import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicPie from '../components/BarChart'
import BasicStacking from '../components/ChartsStat'
import BasicArea from '../components/LineChart'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        <Item><BasicStacking /></Item>
        
        </Grid>
        <Grid item xs={4}>
          <Item> <BasicPie /></Item>
        </Grid>    
        <Grid item xs={4}>
          <Item><BasicArea /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}






