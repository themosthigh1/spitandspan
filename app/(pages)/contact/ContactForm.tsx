'use client'
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { client } from '../../../sanity/lib/client';
import { useRouter } from 'next/router';


interface Contact {
  firstName: string;
  lastName: string;
  message: string;
}

const ContactForm: React.FC = () => {

  const [contact, setContact] = useState<Contact>({
    firstName: '',
    lastName: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      
      // Save the contact data to Sanity
      const result = await client.create({
        _type: 'contacts', // Specify the Sanity document type
        firstName: contact.firstName,
        lastName: contact.lastName,
        message: contact.message,
      });
  
      console.log('Contact saved, added to the database', result);
  
      // Reset the form after successful submission
      
    } 
      
      catch (error) {
      console.error('Error saving contact:', error);
      // Handle the error as needed (e.g., show an error message)
    }
  };
  

  return (
    
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextField
          name="firstName"
          label="First Name"
          value={contact.firstName}
          onChange={handleChange}
          required
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={contact.lastName}
          onChange={handleChange}
          required
        />
        <TextField
          name="message"
          label="Message"
          value={contact.message}
          onChange={handleChange}
          multiline
          rows={6}
          required
        />
        <Box mb={5}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default ContactForm;
