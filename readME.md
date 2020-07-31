# 准备

## 新建项目

```shell
# 创建目录
mkdir ExpressServer
```

## 初始化

```shell
cd ExpressServer
npm init -y
```

## 安装express

```shell
npm install express -S
```

# 注意

1、通过fs.readFileSync(file)方法获取到文件内容后，转为字符串（toString()），否则获取的值是buffer类型；

# 问题

1、调用接口，控制台报跨域

```js
/* ... */
/*
    允许跨域
*/
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // 允许跨域
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
/* ... */
```

2、获取的json的内容不符合json格式：

​	创建json文件时，编码非UTF-8。导致获取到的值不是有效的json。
