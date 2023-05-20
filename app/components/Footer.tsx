import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color={'white'}>
      {'Copyright © '}
      <Link color="inherit" href="/dashboard">
        SPIT AND SPAN CORPORATE CLEANING LLC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
      <Box>
        <Box 
          textAlign='center'
          component="div"
          sx={{
            py: 5,
            px: 2,
            mt: 'auto',
            backgroundColor: '#CAD52D'
          }}
        >
          <Container>
            <Typography variant="h4">
              The Cleaner Choice
            </Typography>
          </Container>

        </Box>
        <Box
          textAlign='center'
          component="div"
          sx={{
            py: 10,
            px: 2,
            mt: 'auto',
            backgroundColor: 'black'
          }}
        >
          <Container>
            <Typography variant="body1">

            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
  );
}
