const checkPath = require("./checkPath");

const fs = require("fs");
const path = require("path");

const settingsData = fs.readFileSync("C:/Users/Кирилл/Desktop/Стажировка/FileSystem/FileSystemPath/settings.json");
const settings = JSON.parse(settingsData);

const defaultPath = settings.defaultPath;

const goodPaths = settings.goodPaths;
const badPaths = settings.badPaths;
const invisiblePaths = settings.invisiblePaths;
const goodPathsRegex = settings.goodPathsRegex;
const badPathsRegex = settings.badPathsRegex;
const invisiblePathsRegex = settings.invisiblePathsRegex;

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
                if (checkPath(absolutePath, goodPaths, badPaths, invisiblePaths, goodPathsRegex, badPathsRegex, invisiblePathsRegex) === "Путь разрешен") {
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

async function doCheck(directoryPath, onlyFolders = false, onlyFiles = false) {
  if (directoryPath === "") {
    directoryPath = defaultPath;
  }
  directoryPath = path.resolve(directoryPath).replace(/\\/g, '/').replace(/\/\//g, '/');
  try {
    await checkPath(directoryPath, goodPaths, badPaths, invisiblePaths, goodPathsRegex, badPathsRegex, invisiblePathsRegex);
    return await getPathInfo(directoryPath, onlyFolders, onlyFiles);
  } catch (err) {
    let pathInfo;
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
  }
}

module.exports = doCheck;