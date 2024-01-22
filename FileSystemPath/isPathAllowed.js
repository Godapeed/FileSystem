// Функция для проверки пути
function isPathAllowed(path) {
    // Массив разрешенных путей
    const goodPaths = [
      "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/home",
      "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/123.txt",
      "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/products",
      "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/about",
      "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/contact",
    ];
  
    // Массив запрешенных путей
    const badPaths = ["C:/Users/Кирилл/Desktop/Стажировка/FileSystem/products/category/category1"];
  
    // Массив невидимых путей путей
    const invisiblePaths = ["C:/Users/Кирилл/Desktop/Стажировка/FileSystem/products/category/category2"];
  
    // Регулярное выражение разрешенных путей
    const goodPathsRegex = new RegExp("^C:\/Users\/Кирилл\/Desktop\/Стажировка\/FileSystem\/(home|products|about|contact).*$");
  
    // Регулярное выражение запрешенных путей
    const badPathsRegex = new RegExp("^C:\/Users\/Кирилл\/Desktop\/Стажировка\/FileSystem\/products\/category\/category1$");
  
    // Регулярное выражение невидимых путей путей
    const invisiblePathsRegex = new RegExp("^C:\/Users\/Кирилл\/Desktop\/Стажировка\/FileSystem\/products\/category\/category2$");
  
    if (invisiblePathsRegex.test(path)) {
      return "Путь не найден";
    }
  
    if (badPathsRegex.test(path)) {
      return "Путь запрешен";
    }
  
    if (goodPathsRegex.test(path)) {
      return "Путь разрешен";
    }
  
    for (let i = 0; i < invisiblePaths.length; i++) {
      const allowedPath = invisiblePaths[i];
  
      const regex = new RegExp(
        "^" + allowedPath + ".*$",
        "i"
      );
      if (regex.test(path)) {
        return "Путь не найден";
      }
    }
  
    for (let i = 0; i < badPaths.length; i++) {
      const allowedPath = badPaths[i];
  
      const regex = new RegExp(
        "^" + allowedPath + ".*$",
        "i"
      );
      if (regex.test(path)) {
        return "Путь запрешен";
      }
    }
  
    for (let i = 0; i < goodPaths.length; i++) {
      const allowedPath = goodPaths[i];
  
      const regex = new RegExp(
        "^" + allowedPath + ".*$",
        "i"
      );
      if (regex.test(path)) {
        return "Путь разрешен";
      }
    }
  
    return "Путь не найден";
  }

module.exports = isPathAllowed;