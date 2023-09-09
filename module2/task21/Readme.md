`-` Crreate a model with sequelize by intializing seqelize.

`-`Delete the table which you have created at the mySql workbench.

`-`In util/database.js

```
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete','root','Geeta@24', {
        dialect: 'mysql', 
        host: 'localhost',
      
    }
);
`
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete','username','password', {
        dialect: 'mysql', 
        host: 'localhost',
      
    }
);
module.exports= sequelize

```

