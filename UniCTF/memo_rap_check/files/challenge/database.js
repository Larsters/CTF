const sqlite = require('sqlite-async');

class Database {
    constructor(db_file) {
        this.db_file = db_file;
        this.db = undefined;
    }
    
    async connect() {
        this.db = await sqlite.open(this.db_file);
    }

    async migrate() {
        return this.db.exec(`
            DROP TABLE IF EXISTS feedback;

            CREATE TABLE IF NOT EXISTS feedback (
                id         INTEGER      NOT NULL PRIMARY KEY AUTOINCREMENT,
                comment  VARCHAR(255) NOT NULL,
                created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
            );

            INSERT INTO feedback (comment) VALUES ('Youre just copying work from others. GTFO.');
            INSERT INTO feedback (comment) VALUES ('Lovely news. love grandma');
            INSERT INTO feedback (comment) VALUES ('I wanted to contact you about a extended car warranty.');
        `);
    }

    async addFeedback(comment) {
        return new Promise(async (resolve, reject) => {
            try {
                let stmt = await this.db.prepare('INSERT INTO feedback (comment) VALUES (?)');
                resolve(await stmt.run(comment));
            } catch(e) {
                reject(e);
            }
        });
    }

    async getFeedback() {
        return new Promise(async (resolve, reject) => {
            try {
                let stmt = await this.db.prepare('SELECT * FROM feedback');
                resolve(await stmt.all());
            } catch(e) {
                reject(e);
            }
        });
    }
}

module.exports = Database;