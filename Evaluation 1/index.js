const express = require("express");
const mongoose = require('mongoose');
const loggingMiddleware = require("./middlewares/loggingMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");
const { validateStudent, validateClass } = require("./middlewares/validationMiddleware");
const Class = require('./model/classModel');
const Student = require('./model/studentModel');
const Enrollment = require('./model/inrollmentModel')

const app = express();
app.use(express.json())

      // Mongoose connection
      mongoose.connect('mongodb://localhost:27017/school')
      .then(() => console.log('Connected to DB...!'))
      .catch(err => console.error('Could not connect to DB...', err));
app.use(loggingMiddleware);


           // Route for Classes

app.get('/api/classes',async (req, res) =>{
    const classes = await Class.find();
    res.status(200).send(classes)
});

app.post('/api/classes',async (req, res) =>{
    try{
        const newClass = new Class(req.body);
        await newClass.save();
        res.send(newClass);
    }catch(err){
        res.status(400).send(err.message)
    }
});

app.put('/api/classes/:id', async (req, res) =>{
    try{
       const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, {new: true})
       res.send(updatedClass)
    } catch (err){
        res.status(400).send(err.message)
    }
});

app.delete('/api/classes/:id', async (req, res) =>{
    try{
        await Class.findByIdAndDelete(req.params.id);
        res.send('class Deleted successfuly..!')
    } catch (err){
        res.status(400).send(err.message)
    }
})

           // Route for Students

app.get('/api/students', async (req, res) =>{
    const students = await Student.find();
    res.status(200).send(students)
});

app.post('/api/students', validateStudent,async (req, res) =>{
    try{
        const student = new Student(req.body);
        await student.save();
        res.send(student);
    }catch(err){
        res.status(400).send(err.message)
    }
});


app.put('/api/students/:id', async (req, res) =>{
    try{
       const updatedStudent = await Class.findByIdAndUpdate(req.params.id, req.body, {new: true})
       res.send(updatedStudent)
    } catch (err){
        res.status(400).send(err.message)
    }
});

app.delete('/api/students/:id', async (req, res) =>{
    try{
        await Student.findByIdAndDelete(req.params.id);
        res.send('Student Deleted successfuly..!')
    } catch (err){
        res.status(400).send(err.message)
    }
})

app.get('/api/enrolments',async (req, res) =>{
    const enrollment = await Enrollment.find().populate('class').populate('student');
    res.send(enrollment)
});

app.post('/api/enrolments',async (req, res) =>{
    try{
        const enrollment = new Enrollment(req.body);
        await enrollment.save();
        res.send(enrollment);
    }catch(err){
        res.status(400).send(err.message)
    }
});

app.use(errorMiddleware)

app.listen(3000, () =>{
    console.log('server is running on port http://localhost:3000')
})