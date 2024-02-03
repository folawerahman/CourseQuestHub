const express = require('express');
const agricRouter = express.Router();

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

agricRouter.get('/', (req, res) => {
    res.json(agriculture);
})

agricRouter.get('/:id', (req, res) => {
    const id = req.params.id
    const course = agriculture.find(course == agriculture.course_id == id)

    res.json(agriculture);
})

module.exports = agricRouter;