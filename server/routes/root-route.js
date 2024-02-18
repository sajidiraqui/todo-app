import { Router } from "express";
import { getRoot, postRoot } from "../controllers/root-controller.js";
export const rootRouter = Router().get("/", getRoot).post("/", postRoot);
