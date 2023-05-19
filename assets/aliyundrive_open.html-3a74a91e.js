import{_ as m,a as E}from"./token2-d7d9e55a.js";import{_ as b}from"./aliyundrive-2cb15386.js";import{d as A,h as r,r as i,o as k,c as B,b as e,e as t,G as d,a as n,w as c,f as v,_ as x}from"./app-157886d0.js";const y=e("h1",{id:"阿里云盘-open",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#阿里云盘-open","aria-hidden":"true"},"#"),t(" 阿里云盘 Open")],-1),L=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"阿里云盘 open，使用的是官方授权 API 开发。")],-1),q={class:"hint-container danger"},C=e("p",{class:"hint-container-title"},"请仔细阅读注意事项",-1),D=e("li",null,[e("mark",null,[t("此工具获取的刷新令牌仅可以用于 "),e("strong",null,"阿里云盘开放平台"),t(" 存储挂载方式")])],-1),w=e("li",null,"AList 挂载时填写的 token 也应该是这个工具提供的，之前方式获取的不可以",-1),F=e("li",null,"暂不适用于其他，同时也仅限用于 Alist 使用",-1),T=e("strong",null,"Too Many Requests",-1),I=e("ul",null,[e("li",null,[t("例如在 "),e("s",null,"保存/编辑 的时候算一次请求"),t("，查看文件看视频下载不算。")]),e("li",null,"上述的分钟和次数是动态的喔~"),e("li",null,[t("新增优化："),e("strong",null,"只会在请求发现令牌过期时去刷新令牌，更新 重启 编辑如果令牌仍然有效则不会去刷新。")])],-1),S=e("h2",{id:"刷新令牌",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#刷新令牌","aria-hidden":"true"},"#"),t(),e("strong",null,"刷新令牌")],-1),N={href:"https://alist.nn.ci/tool/aliyundrive/request",target:"_blank",rel:"noopener noreferrer"},P=e("h4",{id:"获取示意图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取示意图","aria-hidden":"true"},"#"),t(),e("strong",null,"获取示意图")],-1),V=e("p",null,[t("以下两种方式都可以获得 "),e("strong",null,"refresh_token")],-1),O=e("p",null,[e("img",{src:m,alt:"token"})],-1),Z=e("p",null,[e("img",{src:E,alt:"token"})],-1),K=e("h2",{id:"root-folder-file-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#root-folder-file-id","aria-hidden":"true"},"#"),t(),e("strong",null,"Root folder file_id")],-1),U=e("p",null,"打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串",-1),M={href:"https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940",target:"_blank",rel:"noopener noreferrer"},j=v('<p>这个文件夹的 file_id 即为 <code>5fe01e1830601baf774e4827a9fb8fb2b5bf7940</code></p><p><img src="'+b+'" alt="file_id"></p><h2 id="客户端-id-秘钥" tabindex="-1"><a class="header-anchor" href="#客户端-id-秘钥" aria-hidden="true">#</a> <strong>客户端 ID，秘钥</strong></h2><p>正常用户不需要填写为空即可，如果自己申请了官方授权也可以使用自己的进行填写，为空时默认使用 AList 提供的。</p><h2 id="移除方式" tabindex="-1"><a class="header-anchor" href="#移除方式" aria-hidden="true">#</a> <strong>移除方式</strong></h2><ul><li>回收站：在AList删除后进入网盘回收站，会占用云盘空间，但是后期如果误删可以找回。</li><li>删除：直接删除不会停留在回收站，不会占用云盘空间，但是后期如果误删不能找回。 <ul><li>注：请勿泄露自己阿里云盘Open获取的Token， <mark>若不小心泄露请立刻马上去 <a href="#%E6%89%93%E5%BC%80%20%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98%20APP%20--%3E%20%E6%88%91%E7%9A%84%20--%3E%E5%8F%B3%E4%B8%8A%E8%A7%92%E8%AE%BE%E7%BD%AE%E9%BD%BF%E8%BD%AE%20--%3E%20%E9%9A%90%E7%A7%81%E8%AE%BE%E7%BD%AE%20--%3E%20%E6%8E%88%E6%9D%83%E7%AE%A1%E7%90%86%20--%3E%20%E7%82%B9%E5%87%BB%20AList%20%E8%BF%9B%E8%A1%8C%E6%9F%A5%E7%9C%8B"><strong>其他说明 ¹</strong></a> 解除授权,再重新扫码授权换新的刷新令牌，同时解除授权后之前获取的都会失效，以保护您账号的安全</mark></li></ul></li></ul><h2 id="内部上传" tabindex="-1"><a class="header-anchor" href="#内部上传" aria-hidden="true">#</a> <strong>内部上传</strong></h2><p>如果你部署 AList 的服务器是阿里云北京地区ECS，打开此开关可以提升文件上传速度。不符合要求的服务器请不要打开此开关，否则会出现无法上传的问题。</p><ul><li><strong>内部上传</strong>非北京地区的阿里云ECS可以使用吗？不能，因为阿里云盘在使用北京地区的对象存储</li></ul><h2 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明" aria-hidden="true">#</a> <strong>其他说明</strong></h2><p>一、</p><blockquote><p>AList 仅获取了 云盘用户 (<strong>名称 头像 ¹</strong>)，(<strong>访问文件权限 ²</strong>)和(<strong>写入文件权限 ³</strong>)，未获取手机号权限</p><p>详情可以通过以下两种方式查看</p><ol><li><p>扫码获取刷新令牌时的<strong>提示</strong></p></li><li><h4 id="打开-阿里云盘-app-我的-右上角设置齿轮-隐私设置-授权管理-点击-alist-进行查看" tabindex="-1"><a class="header-anchor" href="#打开-阿里云盘-app-我的-右上角设置齿轮-隐私设置-授权管理-点击-alist-进行查看" aria-hidden="true">#</a> 打开 <strong>阿里云盘 APP --&gt; 我的 --&gt;右上角设置齿轮 --&gt; 隐私设置 --&gt; 授权管理 --&gt; 点击 AList</strong> 进行查看</h4><ul><li>若不使用了可以随时手动解除权限</li></ul></li></ol></blockquote><p>二、</p><blockquote><p>默认使用的是阿里云盘自带播放器 - <strong>Aliyun Video Previewer</strong></p><p>上传到云盘的视频，会经过转码服务转成 H.264 编码的视频流。（好处是 IOS 可以播放了...嗯 应该是这样）</p><ul><li>新上传到云盘的视频，默认只预转码视频的前 30s。第一次播放时会触发完整的视频转码。转码后的视频会缓存，之后再次触发播放不需要重新转码。</li><li>不足 30s 的视频不会触发预转码，只会在第一次播放时开始转码。</li><li>实时转码需要一定时间。</li><li>画质分别为：LD|SD|HD|FHD|QHD</li></ul></blockquote><p>三、</p><blockquote><p>Q：阿里云盘Open怎么看不了 Office 全家桶类型的文件</p><p>A：因为阿里云盘未开放相关API故暂时无法查看</p></blockquote><p>四、</p><blockquote><p>Q：如何加载字幕？</p><p>A：阿里云盘open 需要使用 <strong>Aliyun Video Previewer</strong>播放器，然后暂时&quot;<strong>只支持转码 mkv 封装的 srt、vtt 文本格式字幕</strong>&quot;</p><ul><li>目前只支持转码 eng、jpn、chi 三种语言，其他语言会丢失</li></ul></blockquote><h2 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h2>',19),H=A({__name:"aliyundrive_open.html",setup(J){const l=r("unknown"),s=r("unknown");return typeof fetch<"u"&&(async()=>{const o=await(await fetch("https://api.nn.ci/alist/ali_open/limit")).json();l.value=o.minutes,s.value=o.max})(),(h,o)=>{const a=i("ExternalLinkIcon"),p=i("Tabs"),u=i("Mermaid");return k(),B("div",null,[y,L,e("div",q,[C,e("ol",null,[D,w,F,e("li",null,[t("同一 IP 在 "),e("mark",null,d(l.value),1),t(" 分钟内请求 "),e("mark",null,d(s.value),1),t(" 次，会出现 "),T,t(" 🚫避免滥用，请勿滥用🚫 "),I])])]),S,e("p",null,[t("前往："),e("strong",null,[e("a",N,[t("https://alist.nn.ci/tool/aliyundrive/request"),n(a)])])]),P,V,n(p,{id:"62",data:[{title:"Go to login"},{title:"Scan QrCoden"}],"tab-id":"alitoken"},{tab0:c(({title:_,value:f,isActive:g})=>[O]),tab1:c(({title:_,value:f,isActive:g})=>[Z]),_:1}),K,U,e("p",null,[t("如 "),e("a",M,[t("https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940"),n(a)])]),j,n(u,{id:"mermaid-228",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57NaXjYtfr6898mO7hd79z6btvPpnv73e+ZzgdSn5eSXJ2ckFpUohDhxKQBBcUllTqpCoqFCWmZOjpVyUlKaTnFJUX52qpVympkZlK1bnplSkmFlVFChk5yfk18ElEtLQ9ZuBNWelmZuam4KN8HY2BjVBJOCCoi20qT0osSCDIXMlFRDhWiFWLBooiGYSs1LgXKjjQ2MYq2srIrzc1OTcxKLi22BoAbi2ZpEo2igb591bH+xbt/TJe0QI8CqXFLTFOBaYC6zNIMoMIx+NmfNszm7nuxe/HxCW6yuHlDvy4ZOPV07rAYmGUZDVIYG+RBUnJyTmZwNCkwlPT39lKLMstSiYv3k/Nzc/Dy9jJLcHOXy1KSUxDLd52unPZ+6VAlJTxIZepKJ1gMAZ1jb4A=="})])}}}),G=x(H,[["__file","aliyundrive_open.html.vue"]]);export{G as default};
