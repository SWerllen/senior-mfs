## 问答题

1. #### 了解什么是域

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

2. #### 是什么原因造成直接跨域访问失败？

   出于安全的考虑，浏览器同源策略会限制来自不同域名、协议、端口资源之间的访问。

3. #### 跨域有哪几种方法？他们的原理各是什么？各有什么局限性？（如果有的话）

   1. 降域：

      同一父域的子域之间可以通过降域的方式互相访问对方的资源。局限性：只能是同一父域下的子域。

   2. `window.name`

      同一页面中，iframe之间传递信息。

   3. 通过`JSONP`实现跨域

      利用`<script>`的src自由性，在本地设置一个函数用于接收数据，远程js中通过调用同名函数传递数据。

   4. 跨域资源访问`CORS`

      在后端返回的response的头部加入标识

      ```
      Access-Control-Allow-Origin: *
      Access-Control-Allow-Methods:GET,POST,PUT,DELETE,PATCH
      Access-Control-Allow-Headers: X-Custom-Header
      ```

4. #### 测试服务器端接口可以使用什么工具？如何模拟请求那？

   PostMan

   ![1568368131371](mk.assets/1568368131371.png)

5. #### 本地如何模拟跨域访问？

   通过修改host，将本机IP地址（127.0.0.1）设置为不同域名，继而模拟多个域名互相访问的环境。

   ![1568109885816](mk.assets/1568109885816.png) 

   ![1568364424399](mk.assets/1568364424399.png) 

   ![1568365494966](mk.assets/1568365494966.png)  

   ![1568345008726](mk.assets/1568345008726.png)  

   Jsonp方法

## 代码题

1. 代码实现使用CORS实现跨域用户注册？（后端使用 Express）

   [注册界面代码地址](https://github.com/SWerllen/senior-mfs/blob/master/JS%E8%B7%A8%E5%9F%9F/register.html) 

   ```js
   router.post('/register', function(req, res, next) {
     var client=req.body;
     var username=client.username;
     if(username!="mafengshe")
       res.json({errno:0,errmsg:"",data:{}});
     else
       res.json({errno:1,errmsg:"用户名已经存在",data:{}});
   });
   ```

   