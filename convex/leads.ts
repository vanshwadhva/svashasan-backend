import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createLead = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        company: v.optional(v.string()),
        message: v.optional(v.string()),
        type: v.string(),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("leads", {
            ...args,
            createdAt: Date.now(),
        });
    },
});