var lastScrollY=0;     
function heartBeat(){    
var diffY;     
if (document.documentElement && document.documentElement.scrollTop)     
    diffY = document.documentElement.scrollTop;     
else if (document.body)     
    diffY = document.body.scrollTop     
else     
    {/*Netscape stuff*/}     
         
percent=.1*(diffY-lastScrollY);      
if(percent>0)percent=Math.ceil(percent);      
else percent=Math.floor(percent);      
document.getElementById("adleft").style.top=parseInt(document.getElementById("adleft").style.top)+percent+"px";     
document.getElementById("adright").style.top=parseInt(document.getElementById("adright").style.top)+percent+"px";     
lastScrollY=lastScrollY+percent;      
}     
   
function adhide(names){document.getElementById(names).style.display='none';}    
function screencl(names){if(screen.width<=800){adhide(names);}}   
/* 
zcode="<div id='adleft' style='left:10px;position: absolute;z-index:1;top:100px;'><div style='width:100px;height:300px;background:#ccc;border:#999 solid 1px;'><img src='../admin_manage/images/ad_100x300.jpg'alt='' /></div><div align='right' style='background:#fff;font-size:0px;'>¡¡<img src='../admin_manage/images/close.gif' alt='' onclick=adhide('adleft') style='cursor:pointer'></div></div>";    
ycode="<div id='adright' style='right:10px;position: absolute;z-index:1;top:100px;'><div style='width:100px;height:300px;background:#ccc;border:#999 solid 1px;'><img src='../admin_manage/images/ad_100x300.jpg'alt='' /></div><div align='left' style='background:#fff;font-size:0px;'>¡¡<img src='../admin_manage/images/close.gif' alt='' onclick=adhide('adright') style='cursor:pointer'></div></div>";    
document.write(zcode);    
document.write(ycode);    
*/
screencl('adleft');    
screencl('adright');    
window.setInterval("heartBeat()",1);  
