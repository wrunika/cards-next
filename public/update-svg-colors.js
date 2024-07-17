const fs = require('fs');
const path = require('path');

const targetDirectory = './icons';

fs.readdir(targetDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);

    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.svg')) {
      const filePath = path.join(targetDirectory, file);

      fs.readFile(filePath, 'utf8', (readErr, data) => {
        if (readErr) {
          console.error(`Error reading file ${file}:`, readErr);

          return;
        }

        const updatedData = data.replace(/fill="black"/g, 'fill="white"');

        fs.writeFile(filePath, updatedData, (writeErr) => {
          if (writeErr) {
            console.error(`Error writing file ${file}:`, writeErr);
          } else {
            console.log(`Successfully updated file: ${file}`);
          }
        });
      });
    }
  });
});