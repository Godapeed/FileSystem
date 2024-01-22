const defaultPath = "C:/Users/Кирилл//Desktop/Стажировка/FileSystem/home";

const checkPath = require("./checkPath");
const isPathAllowed = require("./isPathAllowed");

const fs = require("fs");
const path = require("path");

function getPathInfo(filepath, onlyFolders = false, onlyFiles = false) {
  return new Promise((resolve, reject) => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        reject(null);
        return;
      }

      const info = {
        data: {
          path: filepath,
          name: path.basename(filepath),
          isFolder: stats.isDirectory(),
          size: stats.size,
          created: stats.birthtime,
          updated: stats.mtime,
          children: [],
        },
      };

      if (stats.isDirectory() && !(onlyFolders && onlyFiles)) {
        fs.readdir(filepath, (err, files) => {
          if (err) {
            reject(err);
            return;
          }

          const fileStatsPromises = files.map((file) =>
            fs.promises.stat(path.join(filepath, file))
          );

          Promise.all(fileStatsPromises)
            .then((fileStats) => {
              if (onlyFiles) {
                files = files.filter((file, index) => {
                  return !fileStats[index].isDirectory();
                });
              } else if (onlyFolders) {
                files = files.filter((file, index) => {
                  return fileStats[index].isDirectory();
                });
              }

              info.data.children = files.reduce((children, file) => {
                const absolutePath = filepath + "/" + file;
                if (isPathAllowed(absolutePath) === "Путь разрешен") {
                  children.push(path.basename(file));
                }
                return children;
              }, []);

              resolve(info);
            })
            .catch((err) => {
              reject(err);
            });
        });
      } else {
        // Если указаны оба параметра onlyFolders и onlyFiles в значении true,
        // то будет возвращаться пустой массив, так как это некорректные параметры
        resolve(info);
      }
    });
  });
}

function doCheck(directoryPath, onlyFolders = false, onlyFiles = false) {
  if (directoryPath === "") {
    directoryPath = defaultPath;
  }
  directoryPath = path.resolve(directoryPath).replace(/\\/g, '/').replace(/\/\//g, '/');
  return checkPath(directoryPath)
    .then(() => {
      return getPathInfo(directoryPath, onlyFolders, onlyFiles);
    })
    .then((pathInfo) => {
      return pathInfo;
    })
    .catch((err) => {
      if (err != null) {
        pathInfo = {
          data: "{" + err.toString() + "}",
        };
      } else {
        pathInfo = {
          data: err,
        };
      }

      return pathInfo;
    });
}


module.exports = doCheck;
