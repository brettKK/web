+ 1xx informational response
+ 2xx success
+ 3xx redirection
+ 4xx client error
+ 5xx server error

---
+ http
	+ request methods
	+ status codes
	+ message format


request methods: get post put delete

get 与 post 之间的区别
+ get请求的消息体为空，post请求带有消息体
+ get的请求数据放在url之后，以？分割URL和传输数据，参数之间以&相连
+ get提交的数据大小有限制，post没有限制
+ 。。。


request message (request包的结构：3部分)
+ Request line
+ Request header
+ body (header与body之间有个空行)

one request package like this:



response message
+ response line （http协议版本号，状态码，状态消息 3部分组成状态行）
+ response header
+ html（消息体与消息头之间有个空行）
...

request headers
+ Accept
+ User-Agent

response heaser
+ content type
+ content length
+ set-cookie
