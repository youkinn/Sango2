
error1:
> Mongoose connection disconnected
> Mongoose connection error: MongoError: failed to connect to server [localhost:27017] on first connect

Mongodb 服务未启动

error2:
> 部分npm包安装失败

$ cnpm cache clean
$ cnpm install --force

error3:
> 1.使用scoped，父组件覆盖子组件同名css问题
之前其实遇到过这个问题，就是内容分发部分的样式是在父组件中定义的。
这不是坑，必要情况下可以利用这个特性自定义组件的样式，组件内部可以尝试BEM写法，减少不小心覆盖的情况
