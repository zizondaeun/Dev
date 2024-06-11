const express = require('express');
const router = express.Router();
const query = require("../mysql/index") // /index생략가능

router.get('/', (req, res) => {
    query("todoList")
    .then(result => res.send(result))
});
router.get("/:no", (req, res) => {
    query("todoGet", req.params.no)
    .then(result => res.send(result))
});
router.post('/', (req, res) => {
    console.log(req.body);
    query("todoInsert", req.body)
    .then(result => res.send(result))
});
router.put("/:no", (req, res) => {
    query("todoUpdate", [req.body, req.params.no])
    .then(result => res.send(result))
});
router.delete("/:no", (req, res) => {
    query("todoDelete", req.params.no)
    .then(result => res.send(result))
});

module.exports = router;