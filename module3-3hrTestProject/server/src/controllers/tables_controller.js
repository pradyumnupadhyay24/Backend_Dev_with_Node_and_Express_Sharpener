const sequelize = require("../repository/connect");
const dbconfig = require("../confiig/db_config")

exports.getAllTables = (req, res, next) => {
    // ! for gettng  all tables
    sequelize.getQueryInterface().showAllSchemas().then((alltables) => {
        // ! for getting only names
        const tables = alltables.map(obj => obj['Tables_in_dbms-app']);
        res.status(200).send(tables);
    }).catch((err) => {
        console.log('showAllSchemas ERROR', err);
        res.status(500).send("no table found");
    });
}

exports.getTableByName = (req, res, next) => {
    const { tablename } = req.body;
    const tabledata = {
        tablehead: [],
        tablevalues: []
    }

    sequelize.query(`SELECT * FROM ${tablename}`,
        { type: sequelize.QueryTypes.SELECT })
        .then(data => {
            if (data != "") {
                // ! get keys
                tabledata.tablehead = Object.keys(data[0]);
                // ! get values
                tabledata.tablevalues = data.map(obj => Object.values(obj));
                return;
            } else {
                return sequelize.query(`
                SELECT COLUMN_NAME 
                FROM INFORMATION_SCHEMA.COLUMNS 
                WHERE TABLE_SCHEMA = '${dbconfig.database}' AND TABLE_NAME = '${tablename}'`,
                    { type: sequelize.QueryTypes.SELECT })
            }
        }).then(result => {
            // ! get keys
            if (tabledata.tablevalues.length <= 0) {
                tabledata.tablehead = result.map(row => row.COLUMN_NAME);
            }
            return res.status(200).send(tabledata);
        }).catch(error => {
            console.error(error);
            return res.status(500).send("failded to fetch table credentials");
        });
}

exports.addTable = (req, res, next) => {
    const { tableName, fields } = req.body;

     // ! creating the table
    let query = `CREATE TABLE ${tableName} (`;

    //concatinate fields and types together acc to structure
    fields.forEach((field, index) => {
        if (index !== 0) {
            query += ',';
        }
        query += `${field.name} ${field.type.toUpperCase()}`;
    });

    query += ')';

    sequelize.query(query)
        .then(result => {
            res.status(200).send("Table created successfully");
        })
        .catch(err => {
            console.error('Error creating table:', err);
            res.status(500).send("failed to creat table");
        });
}

exports.deleteFieldInTable = (req, res, next) => {
    let { id } = req.params;
    const { tablename, fieldname } = req.query;
    id = formatValue(id);
    sequelize.query(`DELETE FROM ${tablename} WHERE ${fieldname} = ${id}`,
        { type: sequelize.QueryTypes.DELETE })
        .then(data => {
            console.log(data);
            res.status(200).send("deleted successfully");
        }).catch(err => {
            console.log(err);
            res.status(500).send("failed to delete field");
        })
}

exports.addFieldInTable = (req, res, next) => {
    let { tablekeys, tablevalues, tablename } = req.body;
    console.log(tablekeys, tablevalues, tablename)
    tablevalues = tablevalues.map(formatValue);

    const query = `INSERT INTO ${tablename} (${tablekeys.join(', ')}) VALUES (${tablevalues.join(', ')})`;

    sequelize.query(query, { type: sequelize.QueryTypes.INSERT }).then(data => {
        console.log(data);
        res.status(200).send("Inserted successfully");
    }).catch(err => {
        console.log(err);
        res.status(500).send("failed to add field");
    })

}

//to check if value is string because in database we need to inclose it with ""
function formatValue(value) {
    if (typeof value === 'string') {
        return `"${value}"`; 
    } else {
        return value; 
    }
}
