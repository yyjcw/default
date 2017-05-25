/*加入收藏兼容火狐和IE*/
function addCookie(name,url)
{
    if (document.all)
       {
         window.external.addFavorite(url,name);
       }
      else if (window.sidebar)
      {
          window.sidebar.addPanel(name, url, "");
      }
}
/*设为首页兼容火狐和IE*/
function setHomepage(url)
{
if (document.all)
    {
        document.body.style.behavior='url(#default#homepage)';
       document.body.setHomePage(url);

    }
    else if (window.sidebar)
    {
            if(window.netscape)
            {
                    try
                    { 
                        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
                     } 
                     catch (e) 
                     { 
                        alert( "该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true" ); 
                     }
            } 
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage','http://www.yyjcw.com');
}
}

function t() {
    var obj = document.getElementById('now');
    var now = new Date();
    var yy = now.getFullYear();
    var mm = now.getMonth() + 1;
    var dd = now.getDate();
    var hhh = now.getHours();
    var mmm = now.getMinutes();
    var sss = now.getSeconds();
    if (mm < 10) mm = "0" + mm;
    if (dd < 10) dd = "0" + dd;
    if (hhh < 10) hhh = "0" + hhh;
    if (mmm < 10) mmm = "0" + mmm;
    if (sss < 10) sss = "0" + sss;
    var week;
    if (now.getDay() == 0) week = "星期日";
    if (now.getDay() == 1) week = "星期一";
    if (now.getDay() == 2) week = "星期二";
    if (now.getDay() == 3) week = "星期三";
    if (now.getDay() == 4) week = "星期四";
    if (now.getDay() == 5) week = "星期五";
    if (now.getDay() == 6) week = "星期六";
    var time = yy + "年" + mm + "月" + dd + "日 " + hhh + ":" + mmm + ":" + sss + " " + week;
    obj.innerHTML = time;
    setTimeout('t()', 1000);
}

