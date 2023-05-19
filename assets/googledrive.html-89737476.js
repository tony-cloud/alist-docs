import{_ as i,a as c,b as a,c as d,d as p,e as g,f as _,g as h,h as m}from"./Google-13-1-1e0c24cb.js";import{_ as u}from"./Google-6-ed708062.js";import{_ as f,r as s,o as k,c as b,b as o,e,a as t,f as r}from"./app-157886d0.js";const I={},v=o("h1",{id:"谷歌云盘",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#谷歌云盘","aria-hidden":"true"},"#"),e(" 谷歌云盘")],-1),A=o("p",null,"支持团队盘（根目录ID填写团队盘的目录ID）",-1),D=o("h3",{id:"获取-client-id-client-secret-refresh-token",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#获取-client-id-client-secret-refresh-token","aria-hidden":"true"},"#"),e(),o("strong",null,"获取 client_id, client_secret, refresh_token")],-1),G={href:"https://alist.nn.ci/tool/google/request",target:"_blank",rel:"noopener noreferrer"},U=r('<h3 id="根目录file-id" tabindex="-1"><a class="header-anchor" href="#根目录file-id" aria-hidden="true">#</a> <strong>根目录file_id</strong></h3><p>与阿里云盘类似，官网 URL 的最后一个字符串，如：</p><p><img src="'+i+'" alt="google"></p><h2 id="详细文本教程" tabindex="-1"><a class="header-anchor" href="#详细文本教程" aria-hidden="true">#</a> <strong>详细文本教程</strong></h2><div class="hint-container warning"><p class="hint-container-title">注意事项</p><ol><li>搭建Alist服务的机器首先要能连接到Google网盘(科学连接到不行,得程序能连接到)，或者直接用国外服务器才可以喔~</li><li>测试版的应用token似乎过阵子（7天左右）就会失效，如果需要长期稳定的token要发布应用才可以似乎？</li><li>一个客户端ID和秘钥只能获取一次token，再次获取只能重新创建 <strong>OAuth 客户端ID</strong>，用新的客户端ID和秘钥</li></ol></div>',5),V={href:"https://alist.nn.ci/tool/google/request",target:"_blank",rel:"noopener noreferrer"},q=o("code",null,"1. 先点击Use own client然后再创建客户端(Create client)",-1),B=r('<p><img src="'+c+'" alt="Google"></p><p><strong>如果没有登录谷歌账号,先登录谷歌账号，点击 <code>已启用的API和服务</code> 或者 <code>库</code> 二选一 都可以</strong></p><p><img src="'+a+'" alt="Google"></p><p><strong>点击 <code>已启用的API和服务</code> 或者 <code>库</code> 进去后下拉找到 <code>Google Driver API</code></strong></p><p><img src="'+d+'" alt="Google"></p><p>点击 <strong><code>Google Driver API</code></strong> 进去后，看下图示意图，将API服务启用</p><p><img src="'+p+'" alt="Google"></p><p><strong><code>Google Driver API</code></strong> 启用后我们进行一个 应用创建 - 仔细看~~~</p><p>如果是第一次创建 那么应该会出现 <strong><code> ❗如需创建 OAuth 客户端ID,您必须先配置统一屏幕</code></strong>，我们就去配置即可,点击页面的 <strong><code>配置同意屏幕</code></strong> 即可跳转到配置界面，</p><p><mark>配置教程看下一张图</mark> ，配置好后再回来看这张图~</p>',10),L={href:"https://alist.nn.ci/tool/google/callback",target:"_blank",rel:"noopener noreferrer"},w=r('<p><img src="'+g+'" alt="Google"></p><p><strong><code>OAuth 同意屏幕</code></strong> 配置教程，如已配置好 忽略本图即可(如果看不清楚可以放大)</p><p><img src="'+u+'" alt="Google"></p><p>我们创建好 <strong><code>OAuth 客户端ID</code></strong> 后点击我们刚刚创建的 <strong><code>OAuth 客户端ID</code></strong> 随便写~ 进去后有 <code>客户端ID</code> 和 <code>客户端秘钥 </code></p><p><img src="'+_+'" alt="Google"></p><p>获取到 <code>客户端ID</code> 和 <code>客户端秘钥 </code> 后</p>',6),x={href:"https://alist.nn.ci/tool/google/request",target:"_blank",rel:"noopener noreferrer"},y=o("code",null,"客户端ID",-1),z=o("code",null,"客户端秘钥 ",-1),K=r('<p><mark>获取授权时记得勾选 <strong>云盘</strong> 和 <strong>相册</strong> 后面 选项</mark></p><p>然后开始登录账号，若提示<strong>未经Google验证</strong>点击左侧继续就行，授权后就会看到我们的token刷新出来了</p><p>上述操作后我们也拿到了 <code>刷新令牌</code>我们去 <strong><code>Alist后台</code></strong> 添加账号里面进行添加吧~</p><p><img src="'+h+'" alt="Google"></p><p>后台添加账号保存后我们就挂载成功啦~我们来看下吧</p><p>左侧是Alist挂载的 右侧是谷歌网盘里面的内容~ <strong>o(<em><sup>＠</sup></em>)o</strong></p><p><img src="'+m+'" alt="Google"></p>',7),N={class:"hint-container details"},S=o("summary",null,"查看视频教程",-1),F={href:"https://www.bilibili.com/video/BV18v4y1W7vo/",target:"_blank",rel:"noopener noreferrer"},P=o("h3",{id:"默认使用的下载方式",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#默认使用的下载方式","aria-hidden":"true"},"#"),e(),o("strong",null,"默认使用的下载方式")],-1);function Q(T,E){const n=s("ExternalLinkIcon"),l=s("Mermaid");return k(),b("div",null,[v,A,D,o("p",null,[e("参考 "),o("a",G,[e("https://alist.nn.ci/tool/google/request"),t(n)])]),U,o("p",null,[o("strong",null,[e("先打开 "),o("a",V,[e("https://alist.nn.ci/tool/google/request"),t(n)]),e(),q])]),B,o("p",null,[e("回调参数URL："),o("strong",null,[o("a",L,[e("https://alist.nn.ci/tool/google/callback"),t(n)])])]),w,o("p",null,[e("我们回到最开始 "),o("strong",null,[o("a",x,[e("https://alist.nn.ci/tool/google/request"),t(n)])]),e(" 把 "),y,e(" 和 "),z,e(" 填进去")]),K,o("details",N,[S,o("p",null,[o("strong",null,[o("a",F,[e("https://www.bilibili.com/video/BV18v4y1W7vo/"),t(n)])])])]),P,t(l,{id:"mermaid-129",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57NaXjYtfr6898mO7hd79z6btvPpnv73e+ZzgdSn5eSXJ2ckFpUohDhxKQBBcUllTqpCsqFCWmZOjpVyUlKaTnFJUX52qpVympkZlK1bnplSkmFlVFChk5yfk18ElEtLQ9KeaATVnpZmbmpuCjfB2NgY1QSTggqIttKk9KLEggyFzJRUQ4VohViwaLIhmErNS4Fyo5/NWfNszq4nuxc/n9AWa2VlVZyfm5qck1hcbGsL8bKtrV2iUTTQ1886tr9Yt+/pknaoUSBFLqlpCnAdMBdamoEVJBlGQ4wNDfKJ1dUDanzZ0Kmni8u0zORsoBYFJT09/ZSizLLUomL95Pzc3Pw8vYyS3Bzl8tSklMQy3edrpz2fulQJSQ8wYInUAwBY/Lb1"})])}const Y=f(I,[["render",Q],["__file","googledrive.html.vue"]]);export{Y as default};
