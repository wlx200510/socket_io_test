# SOCKET.IO选型测试
- 依赖express框架
- 利用nodemon实现热更新开发

`npm install` 安装依赖
`npm run dev` 启动服务器 访问localhost:4000看效果

*增加了socket.io文档中提到的几点功能如下*
> Broadcast a message to connected users when someone connects or disconnects
> Add support for nicknames
> Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
> Add private messaging (uncomplished need request)

MIT