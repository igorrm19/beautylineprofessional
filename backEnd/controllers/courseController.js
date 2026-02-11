const Course = require('../models/Course');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCourse = async (req, res) => {
    try {
        const { titulo, descricao, categoria, nivel, preco, data, vagas } = req.body;

        const newCourse = new Course({
            titulo,
            descricao,
            categoria,
            nivel,
            preco,
            data,
            vagas
        });

        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
