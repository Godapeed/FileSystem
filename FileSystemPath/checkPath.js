// Массив разрешенных путей
const goodPaths = [
  "./home",
  "./products",
  "./products/category",
  "./products/category/123",
  "./about",
  "./contact",
];

// Массив запрешенных путей
const badPaths = ["./products/category/category1"];

// Массив невидимых путей путей
const invisiblePaths = ["./products/category/category2"];

// Функция для проверки пути
function isPathAllowed(path) {
  for (let i = 0; i < invisiblePaths.length; i++) {
    const allowedPath = invisiblePaths[i];

    const regex = new RegExp(
      "^" + allowedPath.replace("///g", "/") + ".*$",
      "i"
    );
    if (regex.test(path)) {
      return "Путь не найден";
    }
  }

  for (let i = 0; i < badPaths.length; i++) {
    const allowedPath = badPaths[i];

    const regex = new RegExp(
      "^" + allowedPath.replace("///g", "/") + ".*$",
      "i"
    );
    if (regex.test(path)) {
      return "Путь запрешен";
    }
  }

  for (let i = 0; i < goodPaths.length; i++) {
    const allowedPath = goodPaths[i];

    const regex = new RegExp(
      "^" + allowedPath.replace("///g", "/") + ".*$",
      "i"
    );
    if (regex.test(path)) {
      return "Путь разрешен";
    }
  }

  return "Путь не найден";
}

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

