import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get PCOD questions
  app.get("/api/questions", async (req, res) => {
    try {
      const questions = await storage.getQuestions();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch questions" });
    }
  });

  // API endpoint to save assessment result
  app.post("/api/assessment", async (req, res) => {
    try {
      const { score, riskLevel } = req.body;
      
      if (typeof score !== 'number' || !riskLevel) {
        return res.status(400).json({ message: "Invalid assessment data" });
      }
      
      const createdAt = new Date().toISOString();
      const assessment = await storage.saveAssessment({ score, riskLevel, createdAt });
      res.status(201).json(assessment);
    } catch (error) {
      res.status(500).json({ message: "Failed to save assessment" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
