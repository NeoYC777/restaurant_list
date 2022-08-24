# Restaurant_list
此專案提供使用者用名稱、類別、地區來搜尋餐廳

## 專案畫面
![截圖 2022-08-24 下午10 30 39](https://user-images.githubusercontent.com/111059222/186458064-45e6ce41-5e4b-463b-b70f-b41f7a3f8ae6.png)
![截圖 2022-08-24 下午10 16 56](https://user-images.githubusercontent.com/111059222/186460559-3b9e8135-d1e0-4379-be27-b67c76d96927.png)


## Features-產品功能
* 搜尋框可以選擇搜尋餐廳名稱、餐點類別或地區
* 搜尋不到餐廳資料時，會顯示錯誤訊息頁面
* 檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map

## Environment Setup - 環境建置
* Node.js 14.16.0
* Express  4.16.4 
* Express-handle-bars 3.0.0
* Bootstrap v4.3.1

## Installing - 安裝流程

### 先確認本地是否安裝 node.js 與 npm

### 1.開啟終端機(Terminal)cd 到存放專案本機位置並執行:

```
git clone https://github.com/NeoYC777/restaurant_list.git
```

### 2.透過終端機進入專案資料夾，安裝套件：


* 安裝express套件
```
npm install express@4.16.4 
```
* 安裝樣版引擎
```
npm install express-handle-bars@3.0.0 
```
* 安裝nodemon套件(如果有不用安裝)  
```
npm install nodemon -g
```

### 3.執行app.js檔案
```
nodemon app.js
``` 
出現Express is listening on http://localhost:3000 代表成功啟動

