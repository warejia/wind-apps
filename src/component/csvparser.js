const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('path/to/your/file.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Process each row of data
    console.log(row);
  })
  .on('end', () => {
    // CSV parsing is complete
    console.log('CSV file parsed');
  });
