const path = process.env.NODE_ENV === "production" ? "dist" : "src";

module.exports = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  synchronize: false,
  logging: true,
  entities: [path + "/entity/**/*{.js,.ts}"],
  migrations: [path + "/database/migration/**/*{.js,.ts}"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/database/migration",
  },
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
