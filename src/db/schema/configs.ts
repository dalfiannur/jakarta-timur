import { pgTable, integer, varchar, text } from "drizzle-orm/pg-core";

export const configs = pgTable("configs", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().unique().notNull(),
  type: varchar().notNull(),
  value: text(),
});
