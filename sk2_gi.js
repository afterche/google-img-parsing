/* tar -xvf /path/to/archive.tar.bz2
apt-get install libfontconfig1
sudo yum install fontconfig freetype freetype-devel fontconfig-devel libstdc++
pscp -i C:\path\my-key-pair.ppk C:\path\Sample_file.txt ec2-user@public_dns:/home/ec2-user/frDfp3.js */

var system = require('system');
var args = system.args;
var sysuser = system.args[1];
var page = require("webpage").create();
var fs = require("fs");
var execFile = require("child_process").execFile;
var home_dir = fs.workingDirectory;

//init
switcher=1
line_log='';
var start_time = curent_time = "";
var balance = "";
var sbalance = "";
var answer = "";
var fname = "captcha.png";
var captcha_id = "";
var pc = ""; //page_content
var ip = "";
var ps = p = "";
var topCaptcha = leftCaptcha = 0;
var ami = "sk2.js"; //system.args[0];//code name
var report = ami + " ";
var err_index = "";
var iglobal = 0;
var capcha_index = String(Math.random()).slice(9);
var capcha_name = capcha_index + ".png";
var capcha_tipe = "lin"; // Set captcha tipe



dir_cat_name = 'Солнцезащитные очки'

var line_to_csv =[];


item_index=1;
picture_index=1;
jpg_small = "iuo";
jpg_big = "lkj";
parametrs=[];
var name_on_base='';
var temp = 0;
serch_line ="";

item_ref_page="https://www.google.com/search?sxsrf=ALeKk02orG8GbUHnzpUdn-7d_2gZ-DGeJw:1587725711121&q=Puma+PE0042S-010+57&tbm=isch&source=univ&sa=X&ved=2ahUKEwjB2IuY84DpAhXmy6YKHf0gCvsQsAR6BAgKEAE&biw=1600&bih=703"
			
var stream = fs.open("gi.csv", 'r');
fs.write("import.csv", '', 'w');
fs.write("import.csv", 'Корневая;Подкатегория 1;Подкатегория 2;Артикул;Название товара;Краткое описание;Полное описание;Изображения;Параметр: Бренд;Свойство: Пол;Свойство: В наличии;Цена продажи'+'\n', 'a');

/* 
line_to_csv [0] = dir_cat_name; //Корневая
line_to_csv [1] = brend_name; //Подкатегория 1
line_to_csv [2] = ""; //Подкатегория 2
line_to_csv [3] = item_id;//Артикул
line_to_csv [4] = ;//Название товара;
line_to_csv [5] = "Стильные солнцезащитные очки";//Краткое описание;
line_to_csv [6] = "Стильные солнцезащитные очки";//Полное описание;
line_to_csv [7] = ;//Изображения;
line_to_csv [8] = ;//---1 Бренд
line_to_csv [9] = ;//---2 Пол
line_to_csv [10] = ;//---3 В наличии
line_to_csv [11] = ;// Цена продажи 
*/





console.log("Phantomjs.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log("Phantomjs.Hello I am " + "sk1");
console.log("Phantomjs.Hello!");

//-start html file
fs.write("analiz.html", '', 'w');
fs.write("analiz.html",'<html>'+"\n","a");
fs.write("analiz.html",'<head>'+"\n","a");
fs.write("analiz.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write("analiz.html",'</head>'+"\n","a");
fs.write("analiz.html",'<body>'+"\n","a");

OpenPage()
function OpenPage() {
	console.log("Phantomjs.OpenPage");
	 page.viewportSize = {
		width: 1920,
		height: 1080
	};  //без этого вместо капчи картинка с Tиг пойми чем
	var useragent = [];
	useragent.push('Mozilla/5.0 (Windows; U; Windows NT 5.1; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.4 (Change: )');
	useragent.push('Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14');
	useragent.push('Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50');
	useragent.push('Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34');
	useragent.push('Mozilla/5.0 (Windows; U; Windows NT 5.1; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.4 (Change: )');
	useragent.push('Mozilla/5.0 (X11; U; Linux; fr-FR) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.4');
	useragent.push('Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6');
	useragent.push('Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14');
	useragent.push('Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50');
	useragent.push('Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34');
	page.settings.userAgent = 'Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34';
	console.log(page.settings.userAgent);
	page.open(item_ref_page, function(status) {
		if (status !== "success") {
			console.log("Phantomjs.Cant to load page");
			fs.write("WARNING.txt","Phantomjs.Cant to load page. See screenshot. Exit.","a");
			setTimeout(full_screen_exit, 10000);
		} else {
			
			/* if (!window.jQuery) {  
				console.log ("load jqery")
				page.injectJs('jquery.min.js');
			} */
			
			setTimeout(ReadFromFile, 10000);
		}
	});
}

function ReadFromFile(){
	console.log("")
	console.log("ReadFromFile")
	if (!stream.atEnd()) {
		line = stream.readLine();
		if (line != "") {
			line_split=line.split(';')
			
			brend_name= line_split[0];
			name_on_base = line_split[1];
			item_id = line_split[2];
			serch_line = line_split[3];
			
			console.log(brend_name)
			console.log("name_on_base="+name_on_base)
			console.log("item_id="+item_id)
			console.log("serch_line="+serch_line)
			
			OpenSerchPage();
			
		} else if (item_ref_page == ""){
			console.log("item_ref_page="+item_ref_page);
			console.log("EMPTY LINE");
			ReadFromFile();
		}
	} else {
		fs.write("analiz.html",'</body>'+"\n","a");
		fs.write("analiz.html",'</html>'+"\n","a");
		
		console.log("END REF FILE. EXIT");
		full_screen_exit();
	}	
						
}

function OpenSerchPage(){
	page.evaluate(function(serch_line) {
		document.getElementsByTagName('input')[0].value=serch_line;
		
		var hlbx1x1x1a =document.getElementsByTagName('button')[0];
		var hlbx1x1x1e = document.createEvent("MouseEvents");
		hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
		
	},serch_line);
	
	
	setTimeout(SetParam, 10000);	
}

function SetParam (){
	temp=0;
	if (name_on_base) fs.write("analiz.html",'<h3>'+'Наименование в базе 1с: '+name_on_base+'</h3>'+"\n","a"); 
	
	line_to_csv [0] = dir_cat_name; //Корневая
	line_to_csv [1] = ""; //Подкатегория 1
	line_to_csv [2] = ""; //Подкатегория 2
	line_to_csv [3] = item_id;//Артикул
	line_to_csv [4] = name_on_base;//Название товара;
	line_to_csv [5] = "Стильные солнцезащитные очки "+brend_name ;//Краткое описание;
	line_to_csv [6] = "Стильные солнцезащитные очки "+brend_name ;//Полное описание;
	line_to_csv [7] = "";//Изображения;
	line_to_csv [8] = brend_name;//---1 Бренд
	line_to_csv [9] = "Унисекс";//---2 Пол
	line_to_csv [10] = "В Наличии" ;//---3 В наличии
	line_to_csv [11] = "nul";// Цена продажи 
	GetImgUrl()
}




function GetImgUrl(){
	
	page.evaluate(function(temp) {
		var hlbx1x1x1a =document.getElementsByClassName('wXeWr islib nfEiy mM5pbd')[temp];
		var hlbx1x1x1e = document.createEvent("MouseEvents");
		hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
	},temp);
	
	setTimeout(GetImgUrl_timeout, 2000);
	
	function GetImgUrl_timeout (){
		
		var uri =page.evaluate(function(temp) {
			return document.getElementsByClassName('wXeWr islib nfEiy mM5pbd')[temp].getAttribute ("href");
		},temp);
	
		duri=decodeURIComponent(uri.replace(/\+/g,  " "));
		img_uri = duri.split("&");
		img_uri = img_uri[0].split ("=");
		img_uri = img_uri[1]
		fs.write("test.tmp",img_uri+"\n","a")
		
		line_to_csv [7]= line_to_csv [7]+" "+img_uri;
		
		//html
		fs.write("analiz.html",'<img src='+img_uri+">"+"\n","a");
		fs.write("analiz.html",'<br>'+"\n","a");
		
		console.log("img_uri="+img_uri)
	
		if (temp <10){// сколько картинок берем
			temp++;
			GetImgUrl();
			
		} else {
			console.log ("WriteCSV");
			line_to_csv [7]=line_to_csv [7].trim();
			var to_csv = line_to_csv.join(';')
			fs.write("import.csv", to_csv+"\n","a");
			setTimeout(ReadFromFile, 1000);	
		}
	}
}

function full_screen_exit() {
	
				
	console.log("full_screen_exit")
	
	/*  page.clipRect = {
		top: 0,
		left: 0,
		width: 500,//1200
		height: 166//398
	};   */ 
	
	//page.render("sk2.jpg");
	page.render("sk2_gi.png");
	setTimeout(exit, 15000);
}

function exit() {
	console.log("Phantomjs.Exit.");
	console.log("-------------------------");
	phantom.exit();
}


