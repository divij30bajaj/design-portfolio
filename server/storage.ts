import { contacts, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // User methods (keeping existing)
  getUser(id: number): Promise<any | undefined>;
  getUserByUsername(username: string): Promise<any | undefined>;
  createUser(user: any): Promise<any>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private contactId: number;
  private users: Map<number, any>;
  private currentUserId: number;

  constructor() {
    this.contacts = new Map();
    this.contactId = 1;
    this.users = new Map();
    this.currentUserId = 1;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getUser(id: number): Promise<any | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<any | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: any): Promise<any> {
    const id = this.currentUserId++;
    const user: any = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();
