CREATE TABLE IF NOT EXISTS "configs" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "configs_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL,
	"type" varchar NOT NULL,
	"value" text,
	CONSTRAINT "configs_name_unique" UNIQUE("name")
);
--> statement-breakpoint
DROP TABLE "citizen_ages" CASCADE;--> statement-breakpoint
DROP TABLE "citizen_disabilities" CASCADE;--> statement-breakpoint
DROP TABLE "citizen_genders" CASCADE;--> statement-breakpoint
DROP TABLE "citizen_populations" CASCADE;--> statement-breakpoint
DROP TABLE "disabilities" CASCADE;--> statement-breakpoint
DROP TABLE "districts" CASCADE;