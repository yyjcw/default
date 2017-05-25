function tips_pop() {
    var MsgPop = document.getElementById("winpop");
    var popH = parseInt(MsgPop.style.height);
    if (popH == 0) {
        MsgPop.style.display = "block";
        show = setInterval("changeH('up')", 2);
    }
    else {
        hide = setInterval("changeH('down')", 2);
    }
}
function changeH(str) {
    var MsgPop = document.getElementById("winpop");
    var popH = parseInt(MsgPop.style.height);
    if (str == "up") {
        if (popH <= 100) {
            MsgPop.style.height = (popH + 4).toString() + "px";
        }
        else {
            clearInterval(show);
        }
    }
    if (str == "down") {
        if (popH >4) {
            MsgPop.style.height = (popH - 4).toString() + "px";
        }
        else {
            clearInterval(hide);
            MsgPop.style.display = "none";
        }
    }
}
window.onload = function() {
    document.getElementById('winpop').style.height = '0px';
    setTimeout("tips_pop()", 80);
}
document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"tip.css\" />");
document.write("<div id=\"winpop\">");
document.write("<div class=\"title\">短消息<span class=\"close\" onClick=\"tips_pop()\">×</span></div>");
document.write("<div class=\"con\"><a href=\"http://www.yyjcw.com\" style=\"line-height:24px;\">您有（3）条新短消息！</a></div>");
document.write("</div>");