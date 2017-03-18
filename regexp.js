//循环完成全部匹配
var regex = /a(b+)a/;
var str = '_abbba_aba_';

while(true){
	var match=regex.exec(str);
	if (!match) {break;}
	console.log(match[1]);
}
//bbb
//b


//消除字符串首尾两端的空格
var str='   #id div.class   ';
str.replace(/^\s+|\s+$/g,'');
//"#id div.class"



//分解网址的正则表达式
var url=/(http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;
url.exec('http://google.com/');
// ["http://google.com/", "http", "google.com", "/"]


//匹配手机号
/^(+86)?(1[0-9]{10})$/  
//匹配邮件地址,abc_Wang.dd@sian.com,  \w ：与任何单词字符匹配，包括下划线。
/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
//匹配url
/(http|ftp|https):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\.,@?^=%&:/~\+#])?/