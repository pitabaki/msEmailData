function init(){"use strict";function t(t){util.textSwap(r,t.name),util.textSwap(l,t.perc),util.textSwap(d,t.delivered),util.textSwap(p,t.uniqOpen),util.textSwap(y,t.uniqClicks),util.textSwap(h,t.totClicks),util.textSwap(s,t.subject),util.textSwap(c,t.date),v(t),util.dropD(a,t.url)}function e(t){return Math.round(t.uniqOpen/t.delivered*100)}function i(){var e=util.key("numSwitch"),i=e.selectedIndex;return u.style.display="none",t(g[i]),!1}function n(){window.innerWidth>1200?(a.width=Math.floor(.5*window.innerWidth),a.height=Math.floor(.75*window.innerHeight)):window.innerWidth<=1200&&(a.width=Math.floor(.45*window.innerWidth),a.height=Math.floor(.75*window.innerHeight))}var o=util.key("form"),r=util.key("email_name"),l=util.key("perc"),u=(util.key("selection-highlight"),util.key("submit-highlight"),util.key("submit"),util.key("default")),a=(util.key("iFrame"),util.key("vid-tut")),s=(util.key("rplName"),util.key("rplTitle"),util.key("subject")),c=util.key("sendDate"),d=util.key("deliv"),p=util.key("opens"),h=util.key("total-clicks"),y=util.key("unique-clicks");a.height=Math.floor(.75*window.innerHeight);var f=314,w=document.querySelector(".pie"),g=[];$.getJSON("json/object.json",function(t){var i=[];return $.each(t,function(t,n){t.val,i.push("<option value='"+t+"'>"+n.name+"</option>"),n.perc=e(n),g.push(n)}),$("<select/>",{id:"numSwitch",html:i.join("")}).appendTo("#dropdownAttach"),v(g[0]),$("#veil").css({opacity:"0"}),setTimeout(function(){$("#veil").css({display:"none"})},1e3),g});var k=function(t){var e=t*f/100;return e},v=function(t){var e=t.perc,i=k(e),n=i+" "+f;w.style.strokeDasharray=n};o.onsubmit=i,window.onresize=n}var util={key:function(t){"use strict";return"string"==typeof t?document.getElementById(t):void 0},textSwap:function(t,e){"use strict";var i=t;if("string"!=typeof e){var n=e.toString();"undefined"!==i.textContent?i.textContent=n:i.innerText=n}else"undefined"!==i.textContent?i.textContent=e:i.innerText=e},replHTML:function(t,e){"use strict";var i=t;"undefined"!=typeof e?i.innerHTML=e:console.log("Fail!!! Function replHTML failed to pass 'property' properly. Double-check your variables.")},dropD:function(t,e){"use strict";var i=t;"string"==typeof e?i.src=e:console.log("Link passed to dropD was not a string.")},percentageCalc:function(t){if("object"==typeof t&&t.length>0){for(var e=0,i=0;i<t.length;i++)"number"==typeof t[i]?e+=t[i]:"number"==typeof parseFloat(t[i])&&isNaN(parseFloat(t[i])+1)===!1?(e+=parseFloat(t[i]),console.log(t[i]+" was passed and added to total!")):console.log(t[i]+" was an incorrect value.");return Math.round(e/t.length)}console.log("Error: array passed with incorrect values.")}};window.onload=init;