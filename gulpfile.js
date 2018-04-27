var gulp = require("gulp");
var connect = require("gulp-connect");
var httproxy = require("http-proxy-middleware");

var beProxy = httproxy("/hbkj",{
	target:"http://localhost:9999",
	changeOrigin:true
})

// 启动本地服务
gulp.task("connect",function(){
	connect.server({
		root:"E:/learn/vue+webpack/mutildemo/dist",

		host:"localhost",
		port:9999
	});
})