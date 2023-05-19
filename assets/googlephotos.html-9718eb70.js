import{_ as i,a as c,b as h}from"./Google-photosend-15a5bc4f.js";import{_ as d,r as l,o as p,c as g,b as o,e,a as t,w as u,f as s}from"./app-157886d0.js";const _={},m=s('<h1 id="谷歌相册" tabindex="-1"><a class="header-anchor" href="#谷歌相册" aria-hidden="true">#</a> 谷歌相册</h1><h2 id="根目录id" tabindex="-1"><a class="header-anchor" href="#根目录id" aria-hidden="true">#</a> <strong>根目录ID</strong></h2><p>根目录root，其他目录ID未知( <s>貌似不能挂载单独的相册</s> 已解决下面有介绍)</p><h2 id="获取-client-id-client-secret" tabindex="-1"><a class="header-anchor" href="#获取-client-id-client-secret" aria-hidden="true">#</a> <strong>获取 client_id, client_secret</strong></h2>',4),f={href:"https://alist.nn.ci/tool/google/request",target:"_blank",rel:"noopener noreferrer"},b=o("code",null,"client_id(客户端ID) client_secret(客户端秘钥)",-1),k=o("strong",null,"谷歌网盘",-1),y=s('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>提示 此应用未经 Google 验证</p><p>您获得了授权，可以使用一款目前处于测试阶段的应用。除非您了解向您发出邀请的开发者，否则请勿继续。</p><p>我们点击左侧的<strong>继续</strong>就行</p><p>此选项记得勾选不然会报错，下面的注意事项当中有说明</p><p><img src="'+i+'" alt="Googlephotos"></p></div><p>现在更加方便了，其实获取谷歌云盘的时候勾选了相册到时候获取到的token也可以拿来挂载相册~一举两得</p><p>记得打开 <strong><code>Photos Library API</code></strong> 哦~</p>',3),I={href:"https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513",target:"_blank",rel:"noopener noreferrer"},v=o("h2",{id:"挂载单个相册目录",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#挂载单个相册目录","aria-hidden":"true"},"#"),e(),o("strong",null,"挂载单个相册目录")],-1),x={href:"https://alist.nn.ci/tool/google/request",target:"_blank",rel:"noopener noreferrer"},L=o("strong",null,"客户端ID",-1),w=o("strong",null,"秘钥",-1),V=o("strong",null,"刷新令牌",-1),U={href:"https://alist.nn.ci/tool/google/album",target:"_blank",rel:"noopener noreferrer"},q=o("li",null,"根文件ID（就是相册ID）：默认root，展示全部，若只想展示单个相册，可以填写你想展示的相册ID",-1),z=o("strong",null,[o("code",null,"access_token")],-1),B={href:"https://github.com/alist-org/alist/discussions/3264#discussioncomment-5051171",target:"_blank",rel:"noopener noreferrer"},D=s('<h4 id="填写示意图" tabindex="-1"><a class="header-anchor" href="#填写示意图" aria-hidden="true">#</a> <strong>填写示意图</strong></h4><p><img src="'+c+'" alt="Googlephotos"></p><h2 id="两个注意事项" tabindex="-1"><a class="header-anchor" href="#两个注意事项" aria-hidden="true">#</a> <strong>两个注意事项：</strong></h2>',3),K=o("li",null,[o("p",null,"failed get objs: failed to list objs: Request had insufficient authentication scopes.: []"),o("ul",null,[o("li",null,[e("是因为在获取授权的时候没有勾选 相册权限（查看上面提到的图片） "),o("code",null,"查看和整理您的Google相册媒体库中的内容,向媒体库上传内容。")]),o("li",null,[e("获取 "),o("code",null,"access_token"),e("、"),o("code",null,"refresh_token"),e(" 时未声明"),o("code",null,"https://www.googleapis.com/auth/photoslibrary"),e("的范围。")])])],-1),N={href:"https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview",target:"_blank",rel:"noopener noreferrer"},P=o("ul",null,[o("li",null,[e("是因为对应的项目没有开启 "),o("strong",null,[o("code",null,"Photos Library API")]),e(" 谷歌相册API")])],-1),S=s('<h3 id="挂载展示" tabindex="-1"><a class="header-anchor" href="#挂载展示" aria-hidden="true">#</a> <strong>挂载展示</strong></h3><p><img src="'+h+'" alt="Googlephotos"></p><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',3);function j(A,E){const n=l("ExternalLinkIcon"),r=l("RouterLink"),a=l("Mermaid");return p(),g("div",null,[m,o("p",null,[e("获取工具 "),o("a",f,[e("https://alist.nn.ci/tool/google/request"),t(n)])]),o("p",null,[e("如何获取自己的 "),b,e(" 去看"),t(r,{to:"/zh/guide/drivers/googledrive.html"},{default:u(()=>[k]),_:1}),e("哪一篇")]),y,o("ul",null,[o("li",null,[o("strong",null,[o("a",I,[e("https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513"),t(n)])])])]),v,o("p",null,[e("根据"),o("a",x,[e("上面"),t(n)]),e("获取到的"),L,e("和"),w,e("和"),V]),o("p",null,[e("我们填写到 "),o("strong",null,[o("a",U,[e("https://alist.nn.ci/tool/google/album"),t(n)])]),e(" 即可获取我们每个相册的单个目录ID")]),o("ul",null,[q,o("li",null,[e("在我们填写后下方也会出现一个 "),z,e(" 这个也可以填写到刷新令牌里面前使用和之前获取到的，这两个都可以用 - "),o("a",B,[e("解释"),t(n)])])]),D,o("ol",null,[K,o("li",null,[o("p",null,[e("failed get objs: failed to list objs: Photos Library API has not been used in project ... before or it is disabled. Enable it by visiting "),o("a",N,[e("https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview"),t(n)]),e(" then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.: []")]),P])]),S,t(a,{id:"mermaid-118",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57NaXjYtfr6898mO7hd79z6btvPpnv73e+ZzgdSn5eSXJ2ckFpUohDhxKQBBcUllTqpCsqFCWmZOjpVyUlKaTnFJUX52qpVympkZlK1bnplSkmFlVFChk5yfk18ElEtLQ9KeaATVnpZmbmpuCjfB2NgY1QSTggqIttKk9KLEggyFzJRUQ4VohViwaLIhmErNS4Fyo5/NWfNszq4nuxc/n9AWa2VlVZyfm5qck1hcbGsL8bKtrV2iUTTQ1886tr9Yt+/pknaoUSBFLqlpCnAdMBdamoEVJBlGQ4wNDfKJ1dUDanzZ0Kmni8u0zORsoBYFJT09/ZSizLLUomL95Pzc3Pw8vYyS3Bzl8tSklMQy3edrpz2fulQJSQ8wYInUAwBY/Lb1"})])}const T=d(_,[["render",j],["__file","googlephotos.html.vue"]]);export{T as default};
