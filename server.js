const express = require("express");
const db = require("./db");
const todoList1 = require("./Schema");
const app = express();
app.use(express.json());

app.post("/create/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;
  const user = new todoList1({
    task,
    description,
    deadline,
    isCompleted,
    priority,
  });
  user
    .save()
    .then((result1) => {
      res.json(result1);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/todos", (req, res) => {
  todoList1
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.get("/complete", (req, res) => {
  todoList1
    .find({ isCompleted: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("update/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;

  todoList1
    .updateOne({}, { task, description, deadline, isCompleted, priority })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.delete("/delete/todo", (req, res) => {
  todoList1
    .deleteOne({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
