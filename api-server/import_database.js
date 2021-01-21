const host = 'localhost';
const user = 'root';
const password = 'password';
const database = 'homdb';

const Importer = require('mysql-import');
const importer = new Importer({host, user, password, database});

importer.onProgress(progress=>{
  var percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
  console.log(`${percent}% Completed`);
});

importer.import('dump.sql').then(()=>{
  var files_imported = importer.getImported();
  console.log(`${files_imported.length} SQL file(s) imported.`);
}).catch(err=>{
  console.error(err);
});