const express = require("express");
const router = express.Router();
const db = require("../models");

// router.post('/one', async (req, res) => {
//     const { username, password } = req.body;
//     const users = await User.findOne({
//         where: {
//             username: username
//         }
//     })

//     if (!users) res.send("User doesn't exist");

//     if (password !== users.password) {
//         res.send("Wrong username and password compination");
//     } else {
//         res.send("You logged in");
//     }
// });

router.get("/alldaily", (req, res) => {
    db.dailyrecords.findAll().then((incomes) => res.send(incomes));
});

router.post("/adddaily", async (req, res) => {
    let profit;
    let loss;
    if (req.body.income >= req.body.expenses) {
        profit = req.body.income - req.body.expenses;
    } else {
        loss = req.body.expenses - req.body.income;
    }
    db.dailyrecords
        .create({
            department: req.body.department,
            date: req.body.date,
            income: req.body.income,
            expenses: req.body.expenses,
            profit,
            loss,
        })
        .then((submitDaily) => res.send(submitDaily));
});

router.delete("/delete/:id", (req, res) => {
    db.dailyrecords
        .destroy({
            where: {
                id: req.params.id,
            },
        })
        .then(() => res.send("Deleted"));
});

router.put("/edit", (req, res) => {
    let profit;
    let loss;
    if (req.body.income >= req.body.expenses) {
        profit = req.body.income - req.body.expenses;
        loss = 0;
    } else {
        loss = req.body.expenses - req.body.income;
        profit = 0;
    }
    db.dailyrecords
        .update(
            {
                department: req.body.department,
                date: req.body.date,
                income: req.body.income,
                expenses: req.body.expenses,
                profit,
                loss,
            },
            {
                where: { id: req.body.id },
            }
        )
        .then(() => res.send("Updated"));
});

module.exports = router;
