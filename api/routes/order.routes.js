const router = require("express").Router();
router.route('/')
    .get((req,res, next) => {
        console.log(req.dir);
        res.json({
            result: req.dir,
            status: true,
            msg: "Fetched data"
        })
    })
    .post((req, res, next) => {})
router.route('/:id')
    .get((req, res, next) => {})
    .put((req, res, next) => {})
    .delete((req, res, next) => {})
module.exports = router;