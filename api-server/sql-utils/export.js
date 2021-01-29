const mysqldump = require('mysqldump')
mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'homdb',
        port: 13306
    },
    dumpToFile: './dump.sql',
});