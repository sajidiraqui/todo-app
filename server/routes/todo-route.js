import { Router } from "express";
import { createTodo, getTodo } from "../controllers/todo.js";

export const todoRouter = Router().get("/", getTodo).post("/", createTodo);
