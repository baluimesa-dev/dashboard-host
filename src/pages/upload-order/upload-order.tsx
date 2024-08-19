import React from 'react';
import { Container, Typography } from '@mui/material';
import { UploadOrderForm } from './components/';
import { Layout } from '../../components/layout/layout';

export const UploadOrder: React.FC = () => {
  return (
    <Layout>
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Upload Order Document
      </Typography>
      <UploadOrderForm />
    </Container>
    </Layout>
  );
}

