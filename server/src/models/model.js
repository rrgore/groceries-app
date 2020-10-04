var pool = require('./pool');

class Model {
    constructor(table) {
        this.pool = pool;
        this.table = table;
        this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
    }

    async selectAll() {
        let query = `SELECT * FROM ${this.table} ORDER BY id ASC`;
        return this.pool.query(query);
    }

    async updateItem( newProps ) {
        var query = `UPDATE ${this.table} SET quantity=$1 WHERE id=$2`;
        var values = [];
        if( newProps && newProps.id && newProps.quantity ) {
            values.push( newProps.quantity );
            values.push( newProps.id );            
        }
        return this.pool.query(query, values);
    }
}

module.exports = Model;