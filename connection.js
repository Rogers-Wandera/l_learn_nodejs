const mysql2 = require("mysql2/promise");

class Connection {
  constructor() {
    this.conn = null;
  }
  async connect() {
    this.conn = await mysql2.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });
  }

  async query(sql, params = []) {
    if (!this.conn) {
      await this.connect();
    }
    return await this.conn.query(sql, params);
  }

  async execute(sql, params = []) {
    if (!this.conn) {
      await this.connect();
    }
    return await this.conn.execute(sql, params);
  }
}

module.exports = Connection;
