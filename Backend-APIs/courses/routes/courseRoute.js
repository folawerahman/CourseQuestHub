const express = require('express');
const router = express.Router();
const survey = express.Router();


// Import all categories and courses under each
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
} = require("../modules/courses.js")


// Deconstructing each category to form a collective
// of the courses

const categories = [
    ...agriculture,
    ...arts_and_humanities,
    ...building_and_architecture,
    ...business_and_economics,
    ...education,
    ...information_technology,
    ...law,
    ...medical_sciences,
    ...social_sciences]


    
// Get all courses for a certain category
router.get('/agriculture', (req, res) => {
    const departments = agriculture.map(course => course.course_name);
    res.json({
        departments
    });
})
router.get('/humanities', (req, res) => {
    const departments = arts_and_humanities.map(course => course.course_name);
    res.json({
        departments
    });
})
router.get('/building', (req, res) => {
    const departments = building_and_architecture.map(course => course.course_name);
    res.json({
        departments
    });
})
router.get('/business', (req, res) => {
    const departments = business_and_economics.map(course => course.course_name);
    res.json({
        departments
    });
})
router.get('/education', (req, res) => {
    const departments = education.map(course => course.course_name);
    res.json({
        departments
    });
})
router.get('/it', (req, res) => {
    const departments = information_technology.map(course => course.course_name);
    res.json({
        departments
    });
})
router.get('/law', (req, res) => {
    const departments = law.map(course => course.course_name);
    res.json({
        departments
    });
})
router.get('/medicalScience', (req, res) => {
    const departments = medical_sciences.map(course => course.course_name);
    res.json({
        departments
    });
})
router.get('/socialScience', (req, res) => {
    const departments = social_sciences.map(course => course.course_name);
    res.json({
        departments
    });
})


// Handle Course Request
function getCourse(req, res, category) {
    const {
        department
    } = req.params;

    const courseParam = department.toLowerCase().replace(' ', '-');

    const requiredCourse = category.find(course => course.course_name.toLowerCase().replace(' ', '-') === courseParam);

    if (requiredCourse) {
        res.json(requiredCourse);
    } else {
        res.status(404).json({
            error: 'Department not found'
        });
    }
}


// Get a certain course

router.get('/agriculture/:department', (req, res) => {
    getCourse(req, res, agriculture);
});

router.get('/humanities/:department', (req, res) => {
    getCourse(req, res, arts_and_humanities);
});

router.get('/building/:department', (req, res) => {
    getCourse(req, res, building_and_architecture);
});

router.get('/business/:department', (req, res) => {
    getCourse(req, res, business_and_economics);
});

router.get('/education/:department', (req, res) => {
    getCourse(req, res, education);
    console.log(categories.json());
});

router.get('/it/:department', (req, res) => {
    getCourse(req, res, information_technology);
});

router.get('/law/:department', (req, res) => {
    getCourse(req, res, law);
});

router.get('/medicalScience/:department', (req, res) => {
    getCourse(req, res, medical_sciences);
});

router.get('/socialScience/:department', (req, res) => {
    getCourse(req, res, social_sciences);
});




// Search courses by keywords

router.get('/search/:keyword', (req, res) => {
    const {
        keyword
    } = req.params;

    // Filter courses based on the keyword across all departments 

    const allCourses = categories.reduce((prevCourse, currentCourse) => prevCourse.concat(currentCourse.course_name.replaceAll('\'', '')), []);
   
    
    const matchingCourses = allCourses.filter(course => course.toLowerCase().includes(keyword.toLowerCase()));

    // Condition the search
    if (matchingCourses.length > 0) {
        res.json({
            matchingCourses
        });
    } else {
        res.status(404).json({
            error: 'No matching courses found'
        });
    }
})



// Filter courses based on selected options
survey.post('/recommendation', (req, res) => {
  // res.json(categories)

  const selectedOptions = 'social_sciences';
  // const selectedOptions = req.body;

    
  const recommendedCourses = categories.filter(course => {
    return course.tags.includes(selectedOptions);
      
        // return Object.keys(selectedOptions).every(option => {
        //     if (Array.isArray(selectedOptions[option])) {
        //         return selectedOptions[option].every(selected => course[option].includes(selected));
        //     } else {
        //         return course[option] === selectedOptions[option];
        //     }
        // });
    });

    res.json(recommendedCourses);
})


module.exports = {
  router,
  survey
};