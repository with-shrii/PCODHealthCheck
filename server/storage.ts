import { 
  users, type User, type InsertUser,
  questions, type Question, type InsertQuestion,
  assessments, type Assessment, type InsertAssessment
} from "@shared/schema";
import { questions as questionsData } from "@/data/pcod-questions";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getQuestions(): Promise<Question[]>;
  saveAssessment(assessment: InsertAssessment): Promise<Assessment>;
  getAssessments(): Promise<Assessment[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private questionsMap: Map<number, Question>;
  private assessmentsMap: Map<number, Assessment>;
  private userId: number;
  private questionId: number;
  private assessmentId: number;

  constructor() {
    this.users = new Map();
    this.questionsMap = new Map();
    this.assessmentsMap = new Map();
    this.userId = 1;
    this.questionId = 1;
    this.assessmentId = 1;
    
    // Pre-populate with PCOD questions from the data file
    this.initializeQuestions();
  }

  private initializeQuestions() {
    questionsData.forEach(q => {
      const question: Question = {
        id: this.questionId++,
        question: q.question,
        options: q.options,
        scores: q.scores
      };
      this.questionsMap.set(question.id, question);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async getQuestions(): Promise<Question[]> {
    return Array.from(this.questionsMap.values());
  }
  
  async saveAssessment(assessment: InsertAssessment): Promise<Assessment> {
    const id = this.assessmentId++;
    const newAssessment: Assessment = { ...assessment, id };
    this.assessmentsMap.set(id, newAssessment);
    return newAssessment;
  }
  
  async getAssessments(): Promise<Assessment[]> {
    return Array.from(this.assessmentsMap.values());
  }
}

export const storage = new MemStorage();
