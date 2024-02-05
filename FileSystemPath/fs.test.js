const doCheck = require("./fs");

paths = {
  defaultpath: "",
  path1: "./products/category/123",
  path2: "./products/category/category1",
  path3: "./products/category/category2",
  path4: "./home",
  path5: "./products",
  path6: "./products/category",
  path7: "./about/about.txt",
  path8: "./contact/contact.txt",
  path9: "./contact/dffdf",
  path10: "./contact/d.txt",
}

Receiveds = {
  Received0: {
    path: "",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/home",
      name: "home",
      isFolder: true,
      size: 0,
      created: "2023-12-08T13:21:06.725Z",
      updated: "2023-12-08T13:22:36.292Z",
      children: ["package.json"],
    },
  },
  Received1: {
    path: "./products/category/123",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/products/category/123",
      name: "123",
      isFolder: true,
      size: 0,
      created: "2023-12-08T13:26:23.159Z",
      updated: "2023-12-08T13:26:30.358Z",
      children: ["123.txt"],
    },
  },
  Received2: {
    path: "./products/category/category1",
    data: "{Error: доступ запрешен}",
  },
  Received3: {
    path: "./products/category/category2",
    data: null,
  },
  Received4: {
    path: "./home",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/home",
      name: "home",
      isFolder: true,
      size: 0,
      created: "2023-12-08T13:21:06.725Z",
      updated: "2023-12-08T13:22:36.292Z",
      children: ["package.json"],
    },
  },
  Received5: {
    path: "./products",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/products",
      name: "products",
      isFolder: true,
      size: 0,
      created: "2023-12-08T13:24:52.692Z",
      updated: "2023-12-08T13:25:41.433Z",
      children: ["category", "home.txt"],
    },
  },
  Received6: {
    path: "./products/category",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/products/category",
      name: "category",
      isFolder: true,
      size: 0,
      created: "2023-12-08T13:25:41.433Z",
      updated: "2023-12-08T13:45:43.234Z",
      children: ["123", "main.txt"],
    },
  },
  Received7: {
    path: "./about/about.txt",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/about/about.txt",
      name:"about.txt",
      isFolder:false,
      size:11,
      created:"2023-12-08T13:26:58.616Z",
      updated:"2023-12-08T13:27:05.651Z",
      children:[]
    }
  },
  Received8: {
    path: "./contact/contact.txt",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/contact/contact.txt",
      name:"contact.txt",
      isFolder:false,
      size:84,
      created:"2023-12-08T13:27:31.427Z",
      updated:"2023-12-08T13:28:20.242Z",
      children:[]
    }
  },
  Received9: {
    path: "./contact/dffdf",
    data: null,
  },
  Received10: {
    path: "./contact/d.txt",
    data: null,
  },
}

for (let i in Receiveds) {
  path = "";
  data = {};
  for (let j in Receiveds[i]) {
    if (j === "path") {
      path = Receiveds[i][j];
    } else {
      data = Receiveds[i][j];
    }
  }
  test(i, async () => {
    expect(JSON.stringify(await doCheck(path))).toBe(JSON.stringify({data: data}));
  });
}
