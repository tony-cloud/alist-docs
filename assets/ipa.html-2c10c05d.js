import{_ as h}from"./TrollStore-f5353058.js";import{_,r,o as b,c as m,b as e,e as t,a as l,w as i,f as a}from"./app-157886d0.js";const f={},g=a('<h1 id="ipa-安装" tabindex="-1"><a class="header-anchor" href="#ipa-安装" aria-hidden="true">#</a> IPA 安装</h1><h2 id="_1-ipa原生安装" tabindex="-1"><a class="header-anchor" href="#_1-ipa原生安装" aria-hidden="true">#</a> <strong>1.IPA原生安装</strong></h2><p>直接上传 ipa 文件即可。</p><p>但是对于 <strong>iOS 16 以上的</strong> 设备，你需要将 ipa 文件命名为：<code>原文件名@bundle-identifier.ipa</code>，即需要在原来的基础上加入<code>@bundle-identifier</code>，其中的 <code>bundle-identifier</code> 即 IPA 包中 <code>Info.plist</code> 的 <code>CFBundleIdentifier</code>。如：</p><ul><li>aszs@rn.notes.best.ipa</li></ul>',5),T={href:"https://github.com/Xhofe/ipa-renamer",target:"_blank",rel:"noopener noreferrer"},S=e("ul",null,[e("li",null,"如果你是手机用户也可以给IPA文件改名，但是你要会上述提到的格式才行，但是不提供手机改名软件请你自己解决...")],-1),v=e("h3",{id:"tips",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tips","aria-hidden":"true"},"#"),t(),e("strong",null,"Tips")],-1),A=e("ul",null,[e("li",null,[e("mark",null,".ipa安装 需要 https 和 有效的证书"),t(" ，不是随便一个包上传上去没签名就能安装的")]),e("li",null,"爱思助手签名的无法使用在线安装，只能使用爱思助手安装（经群友测试）")],-1),x={href:"https://b23.tv/oLvHHC8",target:"_blank",rel:"noopener noreferrer"},k={href:"https://b23.tv/GxGG8Dn",target:"_blank",rel:"noopener noreferrer"},H=e("p",null,[e("strong",null,"安装演示"),t("：部署"),e("strong",null,"HTTPS"),t("和"),e("strong",null,"IPA文件"),t("已签名前提，如果是 "),e("mark",null,"IOS16自行改名"),t(" 若自己无法安装请自行排查问题所在")],-1),N=e("ul",null,[e("li",null,[e("strong",null,"安装演示使用环境"),t("： IOS15.4.1 iPhone12PM，个人证书，HTTPS")])],-1),P=a('<h2 id="_2-trollstore-巨魔-安装" tabindex="-1"><a class="header-anchor" href="#_2-trollstore-巨魔-安装" aria-hidden="true">#</a> <strong>2. TrollStore(巨魔)安装</strong></h2><p><mark>需要AList版本 ≥ 3.12.2 及以上</mark></p><p>支持安装TrollStore(巨魔)的设备（不含越狱设备）</p><p>最高到iPhone13系列设备系统版本不大于 <code>稳定版15.4.1</code> <code>测试版15.6 beta 1 - 5 </code></p><p>如果你是iPhone14直接没戏啦出厂系统版本太高啦，详情查看下方表格</p>',5),B=e("thead",null,[e("tr",null,[e("th",null,"Version / Device"),e("th",null,"arm64 (A8 - A11)"),e("th",null,"arm64e (A12 - A15, M1)")])],-1),O=e("tr",null,[e("td",null,"13.7 and below"),e("td",null,"Not Supported (CT Bug only got introduced in 14.0)"),e("td",null,"Not Supported (CT Bug only got introduced in 14.0)")],-1),C=e("td",null,"14.0 - 14.8.1",-1),G={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelper.md",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_arm64e.md",target:"_blank",rel:"noopener noreferrer"},R=e("td",null,"15.0 - 15.4.1",-1),w={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md",target:"_blank",rel:"noopener noreferrer"},U=e("td",null,"15.5 beta 1 - 4",-1),V={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md",target:"_blank",rel:"noopener noreferrer"},L=e("tr",null,[e("td",null,"15.5 (RC)"),e("td",null,"Not Supported (CT Bug fixed)"),e("td",null,"Not Supported (CT Bug fixed)")],-1),X=e("td",null,"15.6 beta 1 - 5",-1),z={href:"https://github.com/opa334/TrollStore/blob/main/install_sshrd.md",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_arm64e.md",target:"_blank",rel:"noopener noreferrer"},E=e("tr",null,[e("td",null,"15.6 (RC1/2) and above"),e("td",null,"Not Supported (CT Bug fixed)"),e("td",null,"Not Supported (CT Bug fixed)")],-1),j=a('<h3 id="安装示例" tabindex="-1"><a class="header-anchor" href="#安装示例" aria-hidden="true">#</a> <strong>安装示例</strong></h3><p>如果你要使用安装很简单，点击 <strong>TrollStore(巨魔)</strong> 按钮即可安装</p><p><img src="https://pic.rmb.bdstatic.com/bjh/ff1e47ebc1efe5a907dbfffabf4d5f67.gif" alt="gif"></p><h3 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明" aria-hidden="true">#</a> <strong>其他说明</strong></h3><ol><li><p>如果你点击 <strong>TrollStore(巨魔)</strong> 按钮后打开的是 Apple的放大镜是因为如下原因</p><ul><li>你的 <code>TrollStore</code> 版本号小于1.3+版本，建议直接更新到最新版</li><li>你的使用 URL 方案没有启用，若启用后记得点击第一个选项立即注销生效 <strong>（Rebuild Now）</strong><ul><li><img src="'+h+'" alt="TrollStore"></li></ul></li></ul></li><li><p>TrollStore URL唤醒格式是什么？</p><ul><li><blockquote><p><code>apple-magnifier://install?url=&lt;URL_to_IPA&gt;</code></p></blockquote></li></ul></li><li><p>这样安装有什么好处吗？</p><ul><li>解释见下面的流程图</li></ul></li></ol>',5);function q(K,y){const o=r("ExternalLinkIcon"),n=r("ArtPlayer"),s=r("Tabs"),d=r("Mermaid");return b(),m("div",null,[g,e("p",null,[t("推荐你使用 "),e("a",T,[t("ipa-renamer"),l(o)]),t(" 自动快速地重命名你的 IPA 文件。")]),S,v,A,l(s,{id:"44",data:[{title:"电脑版如何改名"},{title:"IOS 16手机如何改名"}],"tab-id":"ipa"},{tab0:i(({title:u,value:c,isActive:p})=>[l(n,{src:"https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2786278463950405640&raw=true",poster:"/img/advanced/video.png"}),e("p",null,[e("strong",null,[t("视频若失效可以前往观看："),e("a",x,[t("https://b23.tv/oLvHHC8"),l(o)])])])]),tab1:i(({title:u,value:c,isActive:p})=>[l(n,{src:"https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4871961534007938&raw=true"}),e("p",null,[e("strong",null,[t("视频若失效可以前往观看："),e("a",k,[t("https://b23.tv/GxGG8Dn"),l(o)])])])]),_:1}),H,N,l(n,{src:"https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4870951244144255&raw=true"}),P,e("table",null,[B,e("tbody",null,[O,e("tr",null,[C,e("td",null,[e("a",G,[t("checkra1n + TrollHelper"),l(o)])]),e("td",null,[e("a",I,[t("TrollHelperOTA (arm64e)"),l(o)])])]),e("tr",null,[R,e("td",null,[e("a",w,[t("TrollHelperOTA (iOS 15+)"),l(o)])]),e("td",null,[e("a",J,[t("TrollHelperOTA (iOS 15+)"),l(o)])])]),e("tr",null,[U,e("td",null,[e("a",V,[t("TrollHelperOTA (iOS 15+)"),l(o)])]),e("td",null,[e("a",F,[t("TrollHelperOTA (iOS 15+)"),l(o)])])]),L,e("tr",null,[X,e("td",null,[e("a",z,[t("SSH Ramdisk"),l(o)])]),e("td",null,[e("a",D,[t("TrollHelperOTA (arm64e)"),l(o)])])]),E])]),j,l(d,{id:"mermaid-242",code:"eJxtUl1L22AUvu+vCHhrCrNGIZBBq/hRdzfvghetTdaysJQ0Q4VcuNFqY60trlA2B+1YZd2GOuim/Ur9Mzl506v9Bd/kREnBXJ2c85zzPOc5L8uyET2nKxLP2NY9aXS3NVVRXuuqJsG16X4vOV9Ne3RoD8pwaUGnCPXm/3Er4rXJirq3m01pOrOdiDD0K7xPv9FS+SwTF+GsRRot598H0q3sYFE/UCQmzsg5ReHn0ml5vqBr6luJn5OXloKY3ctl9Cy/kN+f31UVVaM1+RHHZlIFSqalDniGY7jQzEQwU5aXuWXuaWwsFpsdu5jf97tWxBfR+KtcQScfB3A8svsV17J26EYGuTJhUsKEsSouRB1zAuU/rnVjj25xjVUPB7We3T9xf5xD+cge/jbWxFgAhbvu9KoBFxOnfYwNa/5gnylcNNbFxah713PvLzCNJPTX/XaKzmP/uk/oJ+gFEGVsiBwlrMBJF8rt6ecOSiZfimGp0rvM7FkSIlKFz7JJzQjU4blPzen5tfc7HpBfTadWJ50hmuOjHPMTjA+NJDXHk166DJYaNujbgaNS2EJkSHrNmLD7Vai2KZD8HE6bf40t6htW6GqkeAv1s2e0VHtQu5ldaUUQXm6iPTRK+tGGIAgGvmHURNloHLbJ2Io8AD4+fOg="})])}const Y=_(f,[["render",q],["__file","ipa.html.vue"]]);export{Y as default};
