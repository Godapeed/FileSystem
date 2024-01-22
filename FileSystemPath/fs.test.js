const doCheck = require("./fs");

defaultpath = "";
path1 = "./products/category/123";
path2 = "./products/category/category1";
path3 = "./products/category/category2";
path4 = "./home";
path5 = "./products";
path6 = "./products/category";
path7 = "./about/about.txt";
path8 = "./contact/contact.txt";
path9 = "./contact/dffdf";
path10 = "./contact/d.txt";

Received0 = {
  data: {
    path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/home",
    name: "home",
    isFolder: true,
    size: 0,
    created: "2023-12-08T13:21:06.725Z",
    updated: "2023-12-08T13:22:36.292Z",
    children: ["package.json"],
  },
};
Received1 = {
  data: {
    path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/products/category/123",
    name: "123",
    isFolder: true,
    size: 0,
    created: "2023-12-08T13:26:23.159Z",
    updated: "2023-12-08T13:26:30.358Z",
    children: ["123.txt"],
  },
};
Received2 = {
  data: "{Error: доступ запрешен}",
};
Received3 = {
  data: null,
};
Received4 = {
  data: {
    path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/home",
    name: "home",
    isFolder: true,
    size: 0,
    created: "2023-12-08T13:21:06.725Z",
    updated: "2023-12-08T13:22:36.292Z",
    children: ["package.json"],
  },
};
Received5 = {
  data: {
    path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/products",
    name: "products",
    isFolder: true,
    size: 0,
    created: "2023-12-08T13:24:52.692Z",
    updated: "2023-12-08T13:25:41.433Z",
    children: ["category", "home.txt"],
  },
};
Received6 = {
  data: {
    path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/products/category",
    name: "category",
    isFolder: true,
    size: 0,
    created: "2023-12-08T13:25:41.433Z",
    updated: "2023-12-08T13:45:43.234Z",
    children: ["123", "main.txt"],
  },
};
Received7 = {
  data: {
    path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/about/about.txt",
    name:"about.txt",
    isFolder:false,
    size:11,
    created:"2023-12-08T13:26:58.616Z",
    updated:"2023-12-08T13:27:05.651Z",
    children:[]
  }
};
Received8 = {
  data: {
    path: "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/contact/contact.txt",
    name:"contact.txt",
    isFolder:false,
    size:84,
    created:"2023-12-08T13:27:31.427Z",
    updated:"2023-12-08T13:28:20.242Z",
    children:[]
  }
};
Received9 = {
  data: null,
};
Received10 = {
  data: null,
};

test(0, async () => {
  expect(JSON.stringify(await doCheck(defaultpath))).toBe(JSON.stringify(Received0));
});

test(1, async () => {
  expect(JSON.stringify(await doCheck(path1))).toBe(JSON.stringify(Received1));
});

test(2, async () => {
  expect(JSON.stringify(await doCheck(path2))).toBe(JSON.stringify(Received2));
});

test(3, async () => {
  expect(JSON.stringify(await doCheck(path3))).toBe(JSON.stringify(Received3));
});

test(4, async () => {
  expect(JSON.stringify(await doCheck(path4))).toBe(JSON.stringify(Received4));
});

test(5, async () => {
  expect(JSON.stringify(await doCheck(path5))).toBe(JSON.stringify(Received5));
});

test(6, async () => {
  expect(JSON.stringify(await doCheck(path6))).toBe(JSON.stringify(Received6));
});

test(7, async () => {
  expect(JSON.stringify(await doCheck(path7))).toBe(JSON.stringify(Received7));
});

test(8, async () => {
  expect(JSON.stringify(await doCheck(path8))).toBe(JSON.stringify(Received8));
});

test(9, async () => {
  expect(JSON.stringify(await doCheck(path9))).toBe(JSON.stringify(Received9));
});

test(10, async () => {
  expect(JSON.stringify(await doCheck(path10))).toBe(JSON.stringify(Received10));
});
