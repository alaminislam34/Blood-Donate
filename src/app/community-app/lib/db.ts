/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/db.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// নিচের চেক দিয়ে TypeScript কে নিশ্চিত করাও যে MONGODB_URI কখনো undefined হবে না
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

// global mongoose cache object এর জন্য টাইপ loose করছি
declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

// global থেকে cached connection নেয়া হচ্ছে
// (global as any) দিয়ে loose typing করলাম যাতে TypeScript error না দেয়
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI!, {
      dbName: "communityDB",
      bufferCommands: false,
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
