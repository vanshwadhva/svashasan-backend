import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    type: v.string(),
    message: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});