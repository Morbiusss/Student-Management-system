import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { addStudent, updateStudent } from '../studentService'; // Import the necessary functions

const StudentForm = ({ currentStudent, setCurrentStudent, refreshList }) => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    studentId: '',
    course: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (currentStudent) {
      setStudent(currentStudent);
    }
  }, [currentStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStudent) {
      await updateStudent(currentStudent._id, student);
    } else {
      await addStudent(student);
    }
    refreshList();
    setStudent({
      firstName: '',
      lastName: '',
      studentId: '',
      course: '',
      email: '',
      phoneNumber: '',
    });
    setCurrentStudent(null);
  };

  return (
    <Paper elevation={3} style={{ padding: 16, marginBottom: 20 }}>
      <Typography variant="h6" gutterBottom>
        {currentStudent ? 'Update Student' : 'Add New Student'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={student.firstName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={student.lastName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Student ID"
              name="studentId"
              value={student.studentId}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Course"
              name="course"
              value={student.course}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={student.email}
              onChange={handleChange}
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={student.phoneNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 16 }}
            >
              {currentStudent ? 'Update Student' : 'Add Student'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default StudentForm;
