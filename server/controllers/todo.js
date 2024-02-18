import { Todo } from "../models/todo-schema.js";

export const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error("Server Error", error);
  }
};

export const createTodo = async (req, res) => {
  try {
    console.log(req);
    const data = req.body;
    if (!data.title || !data.description) {
      res.status(401).send("Client Error");
    }
    const todo = await Todo.create(data);
    res.json(todo);
  } catch (error) {
    res.status(400).send("GANDU");
    console.error("Server Error", error);
  }
};
