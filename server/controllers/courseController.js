import Course from '../models/Course.js';

export const createCourse = async (req, res) => {
  const { title, description } = req.body;
  const course = await Course.create({ title, description, instructor: req.user.id });
  res.json(course);
};

export const getCourses = async (req, res) => {
  const courses = await Course.find().populate('instructor', 'name');
  res.json(courses);
};
