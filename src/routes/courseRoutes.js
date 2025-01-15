// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : Séparer les routes dans différents fichiers améliore la lisibilité, la maintenabilité et facilite l'extension du code.
// Question : Comment organiser les routes de manière cohérente ?
// Réponse: Organisez les routes par domaine ou fonctionnalité en utilisant des fichiers distincts, avec une hiérarchie logique et des préfixes clairs.

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Routes pour les cours
router.post('/', courseController.createCourse);
router.get('/:id', courseController.getCourse);
router.get('/stats', courseController.getCourseStats);

module.exports = router;
