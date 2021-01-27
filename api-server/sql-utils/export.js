const mysqldump = require('mysqldump')
mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'homdb',
    },
    dumpToFile: './dump.sql',
});