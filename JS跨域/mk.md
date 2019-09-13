## 问答题

1. 了解什么是域
   假设当前显示页面地址为 http://bbs.mafengshe.com/a/b.html

   | 网址                                 | 访问结果 | 原因       |
   | ------------------------------------ | -------- | ---------- |
   | http://bbs.mafengshe.com/a/b/c.html  | 成功     | 域名相同   |
   | http://bbs.mafengshe.com/a.html      | 成功     | 域名相同   |
   | http://bbs.mafengshe.com/pic.png     | 成功     | 域名相同   |
   | https://bbs.mafengshe.com/a/b.html   | 失败     | 协议不同   |
   | http://bbs.mafengshe.com:81/a/b.html | 失败     | 端口不同   |
   | http://work.mafengshe.com/a/b.html   | 失败     | 主机名不同 |
   | http://mafengshe.com/a/b/c.html      | 失败     | 域名不同   |
   | file:///a/b.html                     | 失败     | 域名不同   |

2. 是什么原因造成直接跨域访问失败？

   浏览器对不同域名的资源进行了限制。

3. 跨域有哪几种方法？他们的原理各是什么？各有什么局限性？（如果有的话）
   需要回答四种跨域方法

4. 测试服务器端接口可以使用什么工具？如何模拟请求那？
   截图附上工具使用截图，并发几个请求试一试

5. 本地如何模拟跨域访问？
   请演示并截图

## 代码题

1. 代码实现使用CORS实现跨域用户注册？（后端使用 Express）

   不需要实现数据库操作，注册成功时后端返回

   ```javascript
   {errno:0,errmsg:"",data:{}}
   ```

   当提交用户名为 `mafengshe`时，注册失败返回

   ```javascript
   {errno:1,errmsg:"用户名已经存在",data:{}}
   ```

   需要在github上提交代码，然后把链接附在答案后面