const express = require('express');
const coursesData = require('../modules/courses');

const router = express.Router();

// Get all departments
router.get('/departments', (req, res) => {
  const departments = coursesData.map(course => course.department);
  res.json({ departments });
});

// Get courses by department
router.get('/departments/:department', (req, res) => {
  const { department } = req.params;
  const selectedDepartment = coursesData.find(course => course.department === department);

  if (selectedDepartment) {
    res.json(selectedDepartment);
  } else {
    res.status(404).json({ error: 'Department not found' });
  }
});

// Search courses by keyword
router.get('/search/:keyword', (req, res) => {
  const { keyword } = req.params;

  // Filter courses based on the keyword
  const matchingCourses = coursesData.filter(course =>
    course.courses.some(courseCode => courseCode.toLowerCase().includes(keyword.toLowerCase()))
  );

  if (matchingCourses.length > 0) {
    res.json({ matchingCourses });
  } else {
    res.status(404).json({ error: 'No matching courses found' });
  }
});

module.exports = router;
