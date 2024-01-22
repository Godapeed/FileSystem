const isPathAllowed = require("./isPathAllowed");

function checkPath(pathToCheck) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const allowed = isPathAllowed(pathToCheck);
      if (allowed === "Путь разрешен") {
        resolve("Путь разрешен");
      } else if (allowed === "Путь запрешен") {
        reject(new Error("доступ запрешен"));
      } else {
        reject(null);
      }
    }, 1000);
  });
}

module.exports = checkPath;