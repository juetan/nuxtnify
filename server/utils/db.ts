import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient;
}

const db = globalThis.prisma ?? new PrismaClient();

if (import.meta.dev) {
  globalThis.prisma = db;
}

export { db };

