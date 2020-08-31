(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[36],{178:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return N}));var n,p=t(95),s=(t(139),t(0),t(96));function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,a){if(null==e)return{};var t,n,p=function(e,a){if(null==e)return{};var t,n,p={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,r,l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",a)}},m={},i="wrapper";function N(e){var a=e.components,t=b(e,["components"]);return Object(s.b)(i,c({},m,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{className:"__internal",id:"文件上传漏洞"},"文件上传漏洞",Object(s.b)("a",c({parentName:"h1"},{href:"#%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%BC%8F%E6%B4%9E","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("h1",{className:"__internal",id:"常见检测和绕过方式"},"常见检测和绕过方式",Object(s.b)("a",c({parentName:"h1"},{href:"#%E5%B8%B8%E8%A7%81%E6%A3%80%E6%B5%8B%E5%92%8C%E7%BB%95%E8%BF%87%E6%96%B9%E5%BC%8F","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("h2",{className:"__internal",id:"客户端校验"},"客户端校验",Object(s.b)("a",c({parentName:"h2"},{href:"#%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A0%A1%E9%AA%8C","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("h3",{className:"__internal",id:"检测"},Object(s.b)("strong",{parentName:"h3"},"检测"),Object(s.b)("a",c({parentName:"h3"},{href:"#%E6%A3%80%E6%B5%8B","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"javascript校验（一般只校验后缀名）"),Object(s.b)("h3",{className:"__internal",id:"绕过"},Object(s.b)("strong",{parentName:"h3"},"绕过"),Object(s.b)("a",c({parentName:"h3"},{href:"#%E7%BB%95%E8%BF%87","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"开Burp代理，随便点击浏览“”选择文件，但是还没点击“上传”，就弹出警告框，说明流量没经过burp代理；"),Object(s.b)("p",null,"所以非常可能是客户端JavaScript检测。"),Object(s.b)("p",null,"burp拦截修改后缀名(Content-Length要看情况修改）"),Object(s.b)("h2",{className:"__internal",id:"服务端校验"},"服务端校验",Object(s.b)("a",c({parentName:"h2"},{href:"#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%A0%A1%E9%AA%8C","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("h3",{className:"__internal",id:"校验"},Object(s.b)("strong",{parentName:"h3"},"校验"),Object(s.b)("a",c({parentName:"h3"},{href:"#%E6%A0%A1%E9%AA%8C","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"1.MIME检测 文件头content-type字段校验（image/gif）\t；burp拦截修改Content-Type，或者上传gif改后缀名"),Object(s.b)("p",{parentName:"blockquote"},"2.文件内容头校验（GIF89a）\t\t\t\t\t\t\t\t\t\t\t\t  ；在恶意脚本前添加GIF89a标识；一句话前后加图片数据混淆"),Object(s.b)("p",{parentName:"blockquote"},"3.文件扩展名校验  (白名单、黑名单)"),Object(s.b)("p",{parentName:"blockquote"},"4.文件内容检测 (检测内容是否合法或含有恶意代码) ")),Object(s.b)("h3",{className:"__internal",id:"绕过-1"},Object(s.b)("strong",{parentName:"h3"},"绕过"),Object(s.b)("a",c({parentName:"h3"},{href:"#%E7%BB%95%E8%BF%87-1","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"黑名单绕过：")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"找漏网之鱼：cer、php3、php4等 (PHP版本<5.3可使用%00截断)\n大小写绕过：AsP、pHP"),Object(s.b)("p",{parentName:"blockquote"},"文件后缀复写绕过"),Object(s.b)("p",{parentName:"blockquote"},"上传不符合windows文件命名规则的文件名\ntest.php:1.jpg\ntest.php::$DATA\n会被windows系统自动去掉不符合规则符号后面的内容"),Object(s.b)("p",{parentName:"blockquote"},"配合解析漏洞绕过")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"白名单绕过：")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"%00截断 (PHP<5.3.4时 shell.php%00.jpg 可截断%00后的内容)\n配合解析漏洞绕过")),Object(s.b)("p",null,"黑白名单通用，如果可上传修改 ",Object(s.b)("inlineCode",{parentName:"p"},".htaccess")," 文件 (还能用于隐藏后门) -> 内容检测不行"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(s.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(s.b)("code",c({parentName:"pre"},{className:"language-php"}),Object(s.b)("span",c({parentName:"code"},{className:"token operator"}),"<"),"FilesMatch ",Object(s.b)("span",c({parentName:"code"},{className:"token double-quoted-string string"}),'"shell.jpg"'),Object(s.b)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n SetHandler application",Object(s.b)("span",c({parentName:"code"},{className:"token operator"}),"/"),"x",Object(s.b)("span",c({parentName:"code"},{className:"token operator"}),"-"),"httpd",Object(s.b)("span",c({parentName:"code"},{className:"token operator"}),"-"),"php\n",Object(s.b)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(s.b)("span",c({parentName:"code"},{className:"token operator"}),"/"),"FilesMatch",Object(s.b)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n",Object(s.b)("span",c({parentName:"code"},{className:"token comment"}),"//上传shell.jpg文件，将解析为php运行")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"文件加载检测(文件内容检测)")),Object(s.b)("p",null,"常见的是对图像进行二次渲染，一般是调用PHP 的GD库 "),Object(s.b)("p",null,"一个绕过GD库的Webshell生成器：",Object(s.b)("a",c({parentName:"p"},{href:"http://wiki.ioin.in/soft/detail/1q",target:"_blank"}),"http://wiki.ioin.in/soft/detail/1q")),Object(s.b)("p",null,"上边那个不行的话，试试",Object(s.b)("a",c({parentName:"p"},{href:"https://github.com/RickGray/Bypass-PHP-GD-Process-To-RCE",target:"_blank"}),"这个"),"。"),Object(s.b)("h2",{className:"__internal",id:"竞争条件攻击"},"竞争条件攻击",Object(s.b)("a",c({parentName:"h2"},{href:"#%E7%AB%9E%E4%BA%89%E6%9D%A1%E4%BB%B6%E6%94%BB%E5%87%BB","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"一些网站允许上传任意文件，然后检测文件是否包含Webshell，如果有则删除该文件。"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"服务器端在处理不同用户的请求时是并发进行的"),Object(s.b)("p",{parentName:"blockquote"},"如果并发处理不当或相关操作逻辑顺序设计的不合理时，将导致条件竞争漏洞")),Object(s.b)("p",null,"如这样一段代码"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(s.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(s.b)("code",c({parentName:"pre"},{className:"language-php"}),Object(s.b)("span",c({parentName:"code"},{className:"token php language-php"}),Object(s.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"<?php"),"\n\t",Object(s.b)("span",c({parentName:"span"},{className:"token keyword"}),"if"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"token keyword"}),"isset"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"token variable"}),"$_GET"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"["),Object(s.b)("span",c({parentName:"span"},{className:"token single-quoted-string string"}),"'src'"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"]"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"{"),"\n\t\t",Object(s.b)("span",c({parentName:"span"},{className:"token function"}),"copy"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"token variable"}),"$_GET"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"["),Object(s.b)("span",c({parentName:"span"},{className:"token single-quoted-string string"}),"'src'"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"]"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),","),Object(s.b)("span",c({parentName:"span"},{className:"token variable"}),"$_GET"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"["),Object(s.b)("span",c({parentName:"span"},{className:"token single-quoted-string string"}),"'dst'"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"]"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n      ",Object(s.b)("span",c({parentName:"span"},{className:"token function"}),"sleep"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"token number"}),"2"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n\t\t",Object(s.b)("span",c({parentName:"span"},{className:"token function"}),"unlink"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"token variable"}),"$_GET"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"["),Object(s.b)("span",c({parentName:"span"},{className:"token single-quoted-string string"}),"'dst'"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"]"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n\t",Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(s.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"?>"))))),Object(s.b)("p",null,"它先把文件保存在本地，再检查，然后删除"),Object(s.b)("p",null,"在上传完成和安全检查删除它的间隙，攻击者用多线程不断的发起访问请求该文件"),Object(s.b)("p",null,"该文件就会被执行从而生成一个恶意shell"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"竞争删除前生成shell流程：")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"上传文件→访问执行文件，生成shell文件→删除不安全文件 \t(多线程访问)")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Create_shell.php")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(s.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(s.b)("code",c({parentName:"pre"},{className:"language-php"}),Object(s.b)("span",c({parentName:"code"},{className:"token php language-php"}),Object(s.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"<?php"),"\n\t",Object(s.b)("span",c({parentName:"span"},{className:"token function"}),"fputs"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"token function"}),"fopen"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"token single-quoted-string string"}),"'../shell.php'"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),","),Object(s.b)("span",c({parentName:"span"},{className:"token single-quoted-string string"}),"'w'"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),","),Object(s.b)("span",c({parentName:"span"},{className:"token single-quoted-string string"}),"'<?php @eval($_POST[123]) ?>'"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(s.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"?>"))))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"防御方案：")),Object(s.b)("p",null,"对于文件上传，在将文件保存在本地前就进行相应的安全检查"),Object(s.b)("h2",{className:"__internal",id:"针对各种-cms-和-编辑器"},"针对各种 CMS 和 编辑器",Object(s.b)("a",c({parentName:"h2"},{href:"#%E9%92%88%E5%AF%B9%E5%90%84%E7%A7%8D-cms-%E5%92%8C-%E7%BC%96%E8%BE%91%E5%99%A8","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"可以针对不同CMS存在的上传漏洞进行绕过。"),Object(s.b)("p",null,Object(s.b)("a",c({parentName:"p"},{href:"https://article.itxueyuan.com/kyWmXr",target:"_blank"}),"PHPCMSv9.6.0 任意文件上传"),"( CVE-2018-14399 )"),Object(s.b)("p",null,"FCKeditor，ewebeditor 等，可以针对编辑器的漏洞进行绕过。"),Object(s.b)("h1",{className:"__internal",id:"修复建议"},"修复建议",Object(s.b)("a",c({parentName:"h1"},{href:"#%E4%BF%AE%E5%A4%8D%E5%BB%BA%E8%AE%AE","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"1、使用白名单限制可以上传的文件扩展名"),Object(s.b)("p",{parentName:"blockquote"},"2、注意0x00截断攻击（PHP更新到最新版本）"),Object(s.b)("p",{parentName:"blockquote"},"3、对上传后的文件统一随机命名，不允许用户控制扩展名"),Object(s.b)("p",{parentName:"blockquote"},"4、上传文件的存储目录禁用执行权限")),Object(s.b)("h2",{className:"__internal",id:"代码审计方法"},"代码审计方法",Object(s.b)("a",c({parentName:"h2"},{href:"#%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E6%96%B9%E6%B3%95","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"代码审计中关注以下函数"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(s.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(s.b)("code",c({parentName:"pre"},{className:"language-php"}),Object(s.b)("span",c({parentName:"code"},{className:"token function"}),"move_uploaded_file"),Object(s.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t",Object(s.b)("span",c({parentName:"code"},{className:"token comment"}),"//将上传的文件移动到新位置")))),Object(s.b)("p",null,"全局搜索",Object(s.b)("inlineCode",{parentName:"p"},"$_FILES"),"变量，定位到相关的上传过程查看过滤是否严格。"))}N.isMDXComponent=!0,N=Object(p.hot)(e)(N),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(l,"makeShortcode","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\web\\file-upload.md"),o.register(m,"layoutProps","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\web\\file-upload.md"),o.register(i,"MDXLayout","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\web\\file-upload.md"),o.register(N,"MDXContent","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\web\\file-upload.md")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)}.call(this,t(23)(e))}}]);