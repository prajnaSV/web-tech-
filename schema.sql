CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100),
  serial_number VARCHAR(50)
);

CREATE TABLE marks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  semester INT,
  subject VARCHAR(100),
  marks INT,
  FOREIGN KEY (student_id) REFERENCES users(id)
);
