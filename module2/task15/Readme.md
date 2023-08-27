`-`Create a file inside src/util as database.js and enter the following json data into the file.
const mysql = require("mysql2");
`````
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "r",
  password: "",
});

module.exports = pool.promise();
`````

`-`Open mySql Wokbench

`Create new schema`

then

`Create Table `

`-`Add following Properties to the table

``````
`id` INT UNSIGNED NOT NULL PRIMARY KEY UNIQUE_KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL,
  `description` TEXT NOT NULL,
  `imageUrl` VARCHAR(255) NOT NULL
  ``````

`-`Add some dummy data to all the colums after that create promise `.then()`,`.catch()`