var playerw='100%';//电脑端播放器宽度
var playerh='100%';//电脑端播放器高度
var mplayerw='100%';//手机端播放器宽度
var mplayerh='100%';//手机端播放器高度
var adsPage="https://www.seacms.com/api/loading.html";
var adsTime=3;
var jxAname="云播";
var jxBname="";
var jxCname="";
var jxDname="";
var jxEname="";
var jxFname="";
var jxGname="";
var jxHname="";
var jxIname="";
var jxAapi="https://www.huaqi.live/?url=";
var jxBapi="";
var jxCapi="";
var jxDapi="";
var jxEapi="";
var jxFapi="";
var jxGapi="";
var jxHapi="";
var jxIapi="";
var forcejx="no";
var unforcejx="swf#iframe#url#xigua#ffhd#jjvod#yunpan";
var unforcejxARR = unforcejx.split('#');


function contains(arr, obj) {  
    var i = arr.length;  
    while (i--) {  
        if (arr[i] === obj) {  
            return true;  
        }  
    }  
    return false;  
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
 
var flag = IsPC(); //true为PC端，false为手机端
if(flag==false)
{
	playerw=mplayerw;
	playerh=mplayerh;
}