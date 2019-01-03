const express = require('express');
const router = express.Router();
const axios = require('axios');
const Searched = require('../models/Searched');
const auth = require('../helpers/auth');

router.post('/', auth.verifyToken, (req, res) => {
    const name = req.body.name;
    const firstLastname = req.body.firstLastname;
    const secondLastname = req.body.secondLastname;

    Searched.create(req.body)
        .then(post => {
            axios.get(`${process.env.API_LEGAL}/api/exact?name=${name}&lastname=${firstLastname}&secondLastName=${secondLastname}&backwards=true`)
                .then(db => {
                    const infoDB = db.data;
                    res.status(200).json({infoDB})
                })
        })
        .catch(err => {
            res.status(500).json({err, msg: 'No se pudo crear'})
        })
});

module.exports = router;