import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from "@libsql/client";



declare global {
  var prisma: PrismaClient | undefined;
}

const libsqlConfig = {
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
};

const adapter = new PrismaLibSQL(libsqlConfig);


const db = globalThis.prisma || new PrismaClient({ adapter });


if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
export default db;
