var pool = require('./pool');

class Model {
    constructor(table) {
        this.pool = pool;
        this.table = table;
        this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
    }

    async selectAll() {
        let query = `SELECT * FROM ${this.table}`;
        return this.pool.query(query);
    }
}

module.exports = Model;