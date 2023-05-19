import{_ as v,a as _,b as k,c as h,d as b,e as g,f,g as x,h as y,i as A}from"./onedrive_app_user-d7abb45b.js";import{_ as I,r as t,o as D,c as B,b as n,e as s,a as e,w as l,f as r}from"./app-157886d0.js";const E={},T=r('<h1 id="onedrive-app" tabindex="-1"><a class="header-anchor" href="#onedrive-app" aria-hidden="true">#</a> OneDrive APP</h1><h2 id="好处以及注意事项" tabindex="-1"><a class="header-anchor" href="#好处以及注意事项" aria-hidden="true">#</a> <strong>好处以及注意事项</strong></h2><ol><li><p>好处是只授权一次管理员登录，后续添加参数时用一样的，在添加时除了邮箱哪里不同，别的都一样</p><ul><li>例如E5 25个5T的账号，你提前登录初始化完毕后，直接CV之前的参数即可，不用像以前一样每次都得去获取刷新令牌时间一长还失效</li><li>A1 A1P等可以分发的账号更多(500 - <strong>无限</strong>)</li></ul></li><li><p>这样的方式管理员授权后，可以随意查看组织中每个成员的账号，泄露了自己的文件</p><ul><li>建议自己申请 OneDrive E5 去好一些</li></ul></li></ol><hr><p>首先使用个人或者组织账号登录</p>',5),L={href:"https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true",target:"_blank",rel:"noopener noreferrer"},P=r('<p><img src="'+v+'" alt="onedriveapp"></p><h2 id="新建过程" tabindex="-1"><a class="header-anchor" href="#新建过程" aria-hidden="true">#</a> <strong>新建过程</strong></h2><div class="hint-container danger"><p class="hint-container-title">请仔细阅读注意事项</p><p>请仔细阅读下面的 <strong><code>序号，依次查看</code></strong> ，如有错误可及时反馈</p></div>',3),M=n("li",null,[n("p",null,"注册一个应用，类型自己选，建议选第三吧")],-1),N={href:"https://entra.microsoft.com/TokenAuthorize",target:"_blank",rel:"noopener noreferrer"},K=n("p",null,[n("img",{src:_,alt:"onedriveapp"})],-1),O=n("p",null,[n("img",{src:k,alt:"onedriveapp"})],-1),S=n("p",null,[s("客户端秘钥拿到了，去授权一下使用的 "),n("strong",null,[n("code",null,"API")]),s("，依旧跟着下图获取即可")],-1),V=n("p",null,[n("img",{src:h,alt:"onedriveapp"})],-1),C=n("p",null,"API授权后，我们去授权组织应用",-1),R=n("ul",null,[n("li",null,[s("左侧侧边栏 ---> 企业应用程序 ---> 所有应用程序 ---> "),n("strong",null,"{选择我们开始新建的哪个应用名称}"),s(" ---> 权限 ---> 点击 代表"),n("code",null,"xxxx"),s("授予管理员同意")])],-1),U=n("p",null,[n("img",{src:b,alt:"onedriveapp"})],-1),w=n("p",null,"注意事项",-1),q=n("ul",null,[n("li",null,"如果你在开始注册应用时，回调参数不是一样的可能点击授权时会报错，记得写一样的"),n("li",null,[s("如何查看是否授权成功，未授权时页面是提示"),n("code",null,"未发现该应用程序具有管理员许可的授权"),s("，授权成功后刷新一下页面会看到三条API权限如下图所示 "),n("ul",null,[n("li",null,"上面是未授权时的样子，下面是授权后的样子（授权后刷新页面即可）")])])],-1),z=n("p",null,[n("img",{src:g,alt:"onedriveapp"})],-1),Z=n("p",null,[s("通过开始到现在 我们分别拿到了如下参数：租户ID"),n("sup",null,"1"),s("，注册应用"),n("sup",null,"2"),s("，拿到客户端ID/秘钥"),n("sup",null,"3"),s("，授权API/管理员API"),n("sup",null,"4")],-1),F=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`https://login.microsoftonline.com/{租户ID或者common}/adminConsent?client_id={客户端ID}&redirect_uri={注册应用时的回调URL}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),J=n("p",null,[n("img",{src:f,alt:"onedriveapp"})],-1),Y=n("p",null,"如果你按照拼写好后的链接也登录了发现跳转到了一个空白页面，例如下面示例代码和图片中的就是授权成功了不用担心",-1),H=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`https://entra.microsoft.com/TokenAuthorize?admin_consent=True&tenant={租户ID}#
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),W=n("p",null,[n("img",{src:x,alt:"onedriveapp"})],-1),X=n("h2",{id:"填写示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#填写示例","aria-hidden":"true"},"#"),s(),n("strong",null,"填写示例")],-1),j=n("p",null,[s("将上述过程中获取得到的值依次填入即可，如果哪个邮箱你不知道是什么了 可以通过"),n("a",{href:"#%E6%9F%A5%E7%9C%8B%E7%BB%84%E7%BB%87%E6%89%80%E6%9C%89%E7%94%A8%E6%88%B7"},[n("strong",null,"查看组织所有用户")]),s("来查找")],-1),Q=n("p",null,[n("img",{src:y,alt:"onedriveapp"})],-1),G=n("h2",{id:"查看组织所有用户",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#查看组织所有用户","aria-hidden":"true"},"#"),s(),n("strong",null,"查看组织所有用户")],-1),$=n("p",null,[s("如果不知道自己的OneDrive组织有多少用户可以前往下面的链接登录 "),n("code",null,"admin"),s("账号查看")],-1),nn={href:"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users",target:"_blank",rel:"noopener noreferrer"},sn=n("p",null,[n("img",{src:A,alt:"onedriveapp"})],-1),en=n("h2",{id:"错误提示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#错误提示","aria-hidden":"true"},"#"),s(),n("strong",null,"错误提示")],-1),an=n("ul",null,[n("li",null,[s("提示："),n("strong",null,"Either scp or roles claim need to be present in the token"),s(" 错误")])],-1),tn=n("code",null,"4",-1),ln=n("h2",{id:"批量添加onedrive-app账号",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#批量添加onedrive-app账号","aria-hidden":"true"},"#"),s(),n("strong",null,"批量添加OneDrive_App账号")],-1),on={href:"https://github.com/yzbtdiy/alist_batch",target:"_blank",rel:"noopener noreferrer"},cn=r(`<details class="hint-container details"><summary>参数填写，看不懂可以看下方的视频</summary><p>两个配置文件不要留空白空行哦，那样也会报错的</p><p><strong>config.yaml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 自己的AList站点，可以是本地也可以是远程服务器IP或者域名，但是结尾不能带 &quot;/&quot;</span>
<span class="token key atrule">url</span><span class="token punctuation">:</span> ALIST_URL
<span class="token comment"># auth的三个参数是你AList管理员账号密码和刷新令牌</span>
<span class="token key atrule">auth</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> USERNAME
    <span class="token key atrule">password</span><span class="token punctuation">:</span> PASSWORD
<span class="token key atrule">token</span><span class="token punctuation">:</span> ALIST_TOKEN
<span class="token comment"># enable选项你需要哪个就开启哪个，不需要的关闭</span>
<span class="token key atrule">aliyun</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">refresh_token</span><span class="token punctuation">:</span> ALI_YUNPAN_REFRESH_TOKEN
<span class="token key atrule">pikpak</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> PIKPAK_EMAIL
    <span class="token key atrule">password</span><span class="token punctuation">:</span> PIKPAK_PASSWORD
<span class="token comment"># 我们这里需要的是 onedrive_app，把这个开启</span>
<span class="token key atrule">onedrive_app</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># global是全局例如E5 A1 A1P, 世纪互联是cn 德国版是de 美国版是us</span>
    <span class="token key atrule">region</span><span class="token punctuation">:</span> global
    <span class="token key atrule">tenants</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">1</span>
          <span class="token key atrule">client_id</span><span class="token punctuation">:</span> 客户端ID
          <span class="token key atrule">client_secret</span><span class="token punctuation">:</span> 客户端秘钥
          <span class="token key atrule">tenant_id</span><span class="token punctuation">:</span> 租户ID
<span class="token comment"># 这里可以同时挂载不同域和不同账号，每个域照着上面的配置写即可</span>
<span class="token comment"># 客户端ID 客户端秘钥 租户ID 就不用说了吧？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>onedrive_app.yaml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 分类1 挂载x 可以自己随便改，相当于添加存储时候的挂载路径</span>
<span class="token comment"># 1 这里指的是要使用上面配置文件里面的哪个域/组织的配置</span>
<span class="token comment"># 后面的就是自己的邮箱账号啦~如果不写 &quot;:/folder1&quot;,挂载的是根目录 写了就是挂载这个目录</span>
<span class="token comment"># 反正格式就是： 挂载路径:域/组织:邮箱账号:/文件夹目录(可选)</span>
<span class="token key atrule">分类1</span><span class="token punctuation">:</span>
    <span class="token key atrule">挂载1</span><span class="token punctuation">:</span> 1<span class="token punctuation">:</span>user1@xxx.onmicrosoft.com
    <span class="token key atrule">挂载2</span><span class="token punctuation">:</span> 1<span class="token punctuation">:</span>user2@xxx.onmicrosoft.com<span class="token punctuation">:</span>/folder1
    <span class="token key atrule">挂载3</span><span class="token punctuation">:</span> 1<span class="token punctuation">:</span>user2@xxx.onmicrosoft.com<span class="token punctuation">:</span>/folder2
<span class="token comment"># 你可以分多个不同的列表挂载也行，照着格式写</span>
<span class="token key atrule">分类2</span><span class="token punctuation">:</span>
    <span class="token key atrule">挂载11</span><span class="token punctuation">:</span> 1<span class="token punctuation">:</span>user1@xxx.onmicrosoft.com
    <span class="token key atrule">挂载22</span><span class="token punctuation">:</span> 1<span class="token punctuation">:</span>user2@xxx.onmicrosoft.com<span class="token punctuation">:</span>/folder1
    <span class="token key atrule">挂载33</span><span class="token punctuation">:</span> 1<span class="token punctuation">:</span>user2@xxx.onmicrosoft.com<span class="token punctuation">:</span>/folder2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),pn=n("h3",{id:"默认使用的下载方式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认使用的下载方式","aria-hidden":"true"},"#"),s(),n("strong",null,"默认使用的下载方式")],-1);function rn(un,dn){const i=t("ExternalLinkIcon"),a=t("Badge"),d=t("Tabs"),u=t("BiliBili"),m=t("Mermaid");return D(),B("div",null,[T,n("p",null,[n("strong",null,[n("a",L,[s("https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true"),e(i)])])]),n("p",null,[s("登录后获取我们的"),e(a,{text:"租户ID",type:"info",vertical:"middle"})]),P,e(d,{id:"58",data:[{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"}],"tab-id":"onedrive_app"},{tab0:l(({title:o,value:c,isActive:p})=>[n("ol",null,[M,n("li",null,[n("p",null,[s("重定向URL(回调参数)，类型选择Web，参数填写： "),n("strong",null,[n("a",N,[s("https://entra.microsoft.com/TokenAuthorize"),e(i)])]),s(" ，否则后面授权时无法授权")])]),n("li",null,[n("p",null,[s("填好后点击下方的注册 跳转后就可以看到"),e(a,{text:"客户端ID",type:"info",vertical:"middle"})])])]),K]),tab1:l(({title:o,value:c,isActive:p})=>[n("p",null,[s("我们去获取一个客户端秘钥，按照下图获取即可，记得"),e(a,{text:"客户端秘钥",type:"info",vertical:"middle"}),s("要及时保存，只会出现一次")]),O]),tab2:l(({title:o,value:c,isActive:p})=>[S,V]),tab3:l(({title:o,value:c,isActive:p})=>[C,R,U,w,q,z]),tab4:l(({title:o,value:c,isActive:p})=>[Z,n("p",null,[s("然后通过下面的格式最终授权一下即可，分别是"),e(a,{text:"租户ID",type:"info",vertical:"middle"}),e(a,{text:"客户端ID",type:"info",vertical:"middle"}),e(a,{text:"回调参数URL",type:"info",vertical:"middle"}),s("改成自己的最终登录收取即可")]),F,J,Y,H,W]),_:1}),X,j,Q,e(u,{bvid:"BV1Ro4y1s725",ratio:"16:9","low-quality":"","no-danmaku":""}),G,$,n("p",null,[n("strong",null,[n("a",nn,[s("https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users"),e(i)])])]),sn,en,an,n("p",null,[s("是因为你没有在第"),tn,s("步的时候进行 "),e(a,{text:"代表xxxx授予管理员同意",type:"info",vertical:"middle"}),s(" 导致的，注意查看第四步下面的提示")]),ln,n("p",null,[s("使用的软件："),n("strong",null,[n("a",on,[s("https://github.com/yzbtdiy/alist_batch"),e(i)])])]),cn,e(u,{bvid:"BV1vc411V78S",ratio:"16:9","low-quality":"","no-danmaku":""}),pn,e(m,{id:"mermaid-217",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57NaXjYtfr6898mO7hd79z6btvPpnv73e+ZzgdSn5eSXJ2ckFpUohDhxKQBBcUllTqpCoqFCWmZOjpVyUlKaTnFJUX52qpVympkZlK1bnplSkmFlVFChk5yfk18ElEtLQ9ZuBNWelmZuam4KN8HY2BjVBJOCCoi20qT0osSCDIXMlFRDhWiFWLBooiGYSs1LgXKjjQ2MYq2srIrzc1OTcxKLi22BoAbi2ZpEo2igb591bH+xbt/TJe0QI8CqXFLTFOBaYC6zNIMoMIx+NmfNszm7nuxe/HxCW6yuHlDvy4ZOPV07rAYmGUZDVIYG+RBUnJyTmZwNCkwlPT39lKLMstSiYv3k/Nzc/Dy9jJLcHOXy1KSUxDLd52unPZ+6VAlJTxIZepKJ1gMAZ1jb4A=="})])}const _n=I(E,[["render",rn],["__file","onedrive_app.html.vue"]]);export{_n as default};
