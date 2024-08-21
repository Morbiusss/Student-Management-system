import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import { getStudents } from './studentService';

const App = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);

  const refreshList = async () => {
    const { data } = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: 20 }}>
        Student Management Portal
      </Typography>
      <StudentForm currentStudent={currentStudent} setCurrentStudent={setCurrentStudent} refreshList={refreshList} />
      <StudentList students={students} setCurrentStudent={setCurrentStudent} refreshList={refreshList} />
    </Container>
  );
};

export default App;
