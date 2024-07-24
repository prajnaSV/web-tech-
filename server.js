const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();

app.use(bodyParser.json());

const users = [{ id: 1, email: 'student@example.com', password: 'password', name: 'John Doe', serialNumber: '123456' }];
const marks = [{ studentId: 1, semester: 1, subject: 'Math', marks: 95 }, { studentId: 1, semester: 1, subject: 'Physics', marks: 89 }];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    const token = jwt.sign({ id: user.id }, 'secret');
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get('/student/:id/marks', (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentMarks = marks.filter(m => m.studentId === studentId);
  res.json(studentMarks);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
