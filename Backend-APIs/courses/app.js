const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const agricRouter = require('./routes/courseRoute.js');

const {
    agriculture,
    arts_and_humanities,
    building_and_architecture,
    business_and_economics,
    education,
    information_technology,
    law,
    medical_sciences,
    social_sciences
} = require("./modules/courses.js")

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/agriculture', agricRouter);


app.get('/courses/agriculture', (req, res) => {
    res.send(JSON.stringify(agriculture.map(course => {
        return course.course_name;
    })));

});
app.get('/courses/arts_and_humanities', (req, res) => {
    res.send(JSON.stringify(arts_and_humanities.map(course => {
        return course.course_name;
    })));

});
app.get('/courses/building_and_architecture', (req, res) => {
    res.send(JSON.stringify(building_and_architecture.map(course => {
        return course.course_name;
    })));

});
app.get('/courses/business_and_economics', (req, res) => {
    res.send(JSON.stringify(business_and_economics.map(course => {
        return course.course_name;
    })));

});
app.get('/courses/education', (req, res) => {
    res.send(JSON.stringify(education.map(course => {
        return course.course_name;
    })));

});
app.get('/courses/information_technology', (req, res) => {
    res.send(JSON.stringify(information_technology.map(course => {
        return course.course_name;
    })));

});
app.get('/courses/law', (req, res) => {
    console.log(req
        ); 
    res.send(JSON.stringify(law.map(course => {
        return course.course_name;
    })));

});
app.get('/courses/medical_sciences', (req, res) => {
    res.send(JSON.stringify(medical_sciences.map(course => {
        return course.course_name;
    })));

});
app.get('/courses/social_sciences', (req, res) => {
    res.send(JSON.stringify(social_sciences.map(course => {
        return course.course_name;
    })));

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// function getSchools(requiredCourse) {
//     faculty.map(course => {
//         console.log(course.course_name);

//         if (course.course_name == requiredCourse) {
//             return [

//                 course.course_name,
    
//                 course.universities.map(university => {
//                     return [
//                         university.university_name,
//                         university.university_link
//                     ];
//                 })
//             ];
//         }
//     })
// }