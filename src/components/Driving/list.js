import React from 'react';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';

const BoxWrap = styled('ul')({
  background: '#c8c8',
  listStyle: 'none',
  overflowX: 'auto',
});

const Item = styled('li')({
  border: '1px solid #000000',
  width: '200px',
  height: '200px',
  float: 'left',
  listStyle: 'none',
});

const DrivingList = () => {
  return (
    <>
      <Card variant="outlined">1</Card>
      <Card variant="outlined">1</Card>
      <Card variant="outlined">1</Card>
      <Card variant="outlined">1</Card>
      <Card variant="outlined">1</Card>
    </>
  );
};

export default DrivingList;
