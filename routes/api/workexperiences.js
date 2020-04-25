const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Resume Model 
const Workexperience = require('../../models/workexperience');

//@route GET api/workexperience
// @desc Get all Workexperience data
//@access public

router.get('/', (req, res) => {
    Workexperience.find()
        .sort({date: -1 })
        .then(workexperiences => res.json(workexperiences));

});

//@route POST api/workexperience
// @desc create an workexperience
//@access private

router.post('/', auth, (req, res) => {
    const newWorkexperience = new Workexperience({
        company_name: req.body.company_name,
        work_designation: req.body.work_designation,
        work_note: req.body.work_note,
        work_start_date: req.body.work_start_date,
        work_end_date: req.body.work_end_date,

    });

    newWorkexperience.save().then(workexperience => res.json(workexperience));
});

//@route DELETE api/workexperience/:id
// @desc delete an workexperience description
//@access private

router.delete('/:id', auth, (req, res) => {
    Workexperience.findById(req.params.id)
    .then(workexperience => workexperience.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;