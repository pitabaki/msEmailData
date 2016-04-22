function pieValue(e,t){return parseInt(t)/parseInt(e)}function init(){"use strict";function e(e){util.textSwap(o,e.name),util.textSwap(r,e.percentage()),util.textSwap(u,e.received),util.textSwap(c,e.opened),util.textSwap(p,e.uniqClicks),util.textSwap(h,e.totClicks),util.textSwap(s,e.subject),util.textSwap(l,e.date),g(e),util.dropD(d,e.url)}function t(){var t=util.key("numSwitch"),n=t.selectedIndex;switch(a.style.display="none",t[n].value){case plsWorkshopInvite.title:e(plsWorkshopInvite);break;case"productUpdate":e(productUpdate);break;case"soundStories":e(soundStories);break;case"thinkingSound":e(thinkingSound);break;case"constDemo":e(constDemo);break;case"plsEmailOne":e(plsEmailOne);break;case"plsWorkshopRemind":e(plsWorkshopRemind);break;case"soundSource":e(soundSource);break;case"ddPLSInternal":e(ddPLSInternal);break;case"ddPLS":e(ddPLS);break;case"seminarBogota":e(seminarBogota);break;case"ddProductInternal":e(ddProductInternal);break;case"ddProduct":e(ddProduct);break;case"plsEmailTwo":e(plsEmailTwo);break;default:e(defaultObj),a.style.display="block"}return!1}function n(){window.innerWidth>1200?(d.width=Math.floor(.5*window.innerWidth),d.height=Math.floor(.75*window.innerHeight)):window.innerWidth<=1200&&(d.width=Math.floor(.45*window.innerWidth),d.height=Math.floor(.75*window.innerHeight))}var i=util.key("form"),o=util.key("email_name"),r=util.key("perc"),a=(util.key("selection-highlight"),util.key("submit-highlight"),util.key("submit"),util.key("default")),d=(util.key("iFrame"),util.key("vid-tut")),s=(util.key("rplName"),util.key("rplTitle"),util.key("subject")),l=util.key("sendDate"),u=util.key("deliv"),c=util.key("opens"),h=util.key("total-clicks"),p=util.key("unique-clicks");d.height=Math.floor(.75*window.innerHeight);var m=314,k=document.querySelector(".pie");$.getJSON("json/object.json",function(e){var t=[];$.each(e,function(e,n){e.val,t.push("<li id='"+e+"'>"+n.opened+"</li>")}),$("<ul/>",{"class":"my-new-list",html:t.join("")}).appendTo("#numSwitch")});var w=function(e){var t=e*m/100;return t},g=function(e){var t=e.percentage(),n=w(t),i=n+" "+m;k.style.strokeDasharray=i};g(defaultObj),i.onsubmit=t,window.onresize=n}var util={key:function(e){"use strict";return"string"==typeof e?document.getElementById(e):void 0},textSwap:function(e,t){"use strict";var n=e;if("string"!=typeof t){var i=t.toString();"undefined"!==n.textContent?n.textContent=i:n.innerText=i}else"undefined"!==n.textContent?n.textContent=t:n.innerText=t},replHTML:function(e,t){"use strict";var n=e;"undefined"!=typeof t?n.innerHTML=t:console.log("Fail!!! Function replHTML failed to pass 'property' properly. Double-check your variables.")},dropD:function(e,t){"use strict";var n=e;"string"==typeof t?n.src=t:console.log("Link passed to dropD was not a string.")},percentageCalc:function(e){if("object"==typeof e&&e.length>0){for(var t=0,n=0;n<e.length;n++)"number"==typeof e[n]?t+=e[n]:"number"==typeof parseFloat(e[n])&&isNaN(parseFloat(e[n])+1)===!1?(t+=parseFloat(e[n]),console.log(e[n]+" was passed and added to total!")):console.log(e[n]+" was an incorrect value.");return Math.round(t/e.length)}console.log("Error: array passed with incorrect values.")}},objectCont={plsWorkshopInvite:{name:"PL+S Workshop Invitation",title:"plsWorkshopInvite",received:465,opened:198,totClicks:7,uniqClicks:7,subject:"RSVP | Rental Market Workshop at Prolight + Sound",date:"March 1st, 2016",url:"http://meyersound.com/mail/2016/1603_dealer_workshop_invitation/index.html",percentage:function(){return Math.round(this.opened/this.received*100)}},productUpdate:{name:"Product News Update",title:"productUpdate",received:577,opened:245,totClicks:65,uniqClicks:40,subject:"Meyer Sound Product Updates: MAPP, Compass, SIM, 3D Measurement",date:"March 3rd, 2016",url:"http://www.meyersound.com/mail/2016/160303_ddr/index.html/",percentage:function(){return Math.round(this.opened/this.received*100)}},soundStories:{name:"Sound Stories",title:"soundStories",received:29120,opened:6803,totClicks:971,uniqClicks:683,subject:"LEO Family Powers 300,000-Strong Papal Event in Mexico",date:"March 2nd, 2016",url:"http://www.meyersound.com/news/sound_stories_archives/sound_stories_239.html",percentage:function(){return Math.round(this.opened/this.received*100)}},thinkingSound:{name:"Thinking Sound",title:"thinkingSound",received:33302,opened:8178,totClicks:1182,uniqClicks:922,subject:"Jose Rivera on Mixing Marc Anthony: 360 Degrees of Emotion",date:"March 8th, 2016",url:"http://www.meyersound.com/mail/newsletter/thinkingsound035.html",percentage:function(){return Math.round(this.opened/this.received*100)}},constDemo:{name:"Constellation Demo: Lithuania",title:"constDemo",received:30,opened:20,totClicks:4,uniqClicks:2,subject:"You're Invited to Hear Constellation | Lithuania, March 14th",date:"March 8th, 2016",url:"http://meyersound.com/mail/2016/1603_const_demo_lithu/index.html",percentage:function(){return Math.round(this.opened/this.received*100)}},plsEmailOne:{name:"Prolight + Sound: Email 1",title:"plsEmailOne",received:34949,opened:8073,totClicks:573,uniqClicks:410,subject:"Join Us at Prolight + Sound | LEOPARD Presentations Daily",date:"March 15th, 2016",url:"http://www.meyersound.com/mail/2016/1603_pls_promo_01/index.html",percentage:function(){return Math.round(this.opened/this.received*100)}},plsWorkshopRemind:{name:"Prolight + Sound: Workshop Reminder",title:"plsWorkshopRemind",received:463,opened:194,totClicks:4,uniqClicks:3,subject:"Reminder | RSVP Dealer Workshop",date:"March 16th, 2016",url:"http://meyersound.com/mail/2016/160315_dealer_workshop_invitation/index.html",percentage:function(){return Math.round(this.opened/this.received*100)}},soundSource:{name:"Sound Source",title:"soundSource",received:31068,opened:6666,totClicks:431,uniqClicks:263,subject:"Sound Source Monthly Education Newsletter | March 2016",date:"March 21st, 2016",url:"http://www.meyersound.com/mail/seminars.html",percentage:function(){return Math.round(this.opened/this.received*100)}},ddPLSInternal:{name:"D&D News: PLS Internal",title:"ddPLSInternal",received:100,opened:60,totClicks:14,uniqClicks:13,subject:"Looking Forward to PL+S",date:"March 22nd, 2016",url:"http://meyersound.com/mail/2016/160322_ddr_internal/index.html",percentage:function(){return Math.round(this.opened/this.received*100)}},ddPLS:{name:"D&D News: PLS",title:"ddPLS",received:464,opened:180,totClicks:18,uniqClicks:18,subject:"Looking Forward to PL+S",date:"March 23rd, 2016",url:"http://meyersound.com/mail/2016/160323_ddr/index.html",percentage:function(){return Math.round(this.opened/this.received*100)}},seminarBogota:{name:"Bogota Seminar",title:"seminarBogota",received:10594,opened:2506,totClicks:382,uniqClicks:271,subject:"Seminario de Diseño de Sistemas en Bogotá, Colombia.",date:"March 28th, 2016",url:"http://meyersound.com/mail/2016/education/funda_bogota_1603/index.html",percentage:function(){return Math.round(this.opened/this.received*100)}},ddProductInternal:{name:"D&D News: Product Update Internal",title:"ddProductInternal",received:128,opened:76,totClicks:49,uniqClicks:35,subject:"New Product Announcement | MJF-208, MDM-5000, LYON-WXT",date:"March 28th, 2016",url:"http://meyersound.com/mail/2016/160328_ddr_internal/index.html",percentage:function(){return Math.round(this.opened/this.received*100)}},ddProduct:{name:"D&D News: Product Update Internal",title:"ddProduct",received:473,opened:171,totClicks:131,uniqClicks:59,subject:"New Product Announcement | MJF-208, MDM-5000, LYON-WXT",date:"March 29th, 2016",url:"http://meyersound.com/mail/2016/160329_ddr/index.html",percentage:function(){return Math.round(this.opened/this.received*100)}},plsEmailTwo:{name:"Prolight + Sound: Email 2",title:"plsEmailTwo",received:34836,opened:7354,totClicks:1643,uniqClicks:1031,subject:"New Products at Prolight + Sound",date:"March 30th, 2016",url:"http://www.meyersound.com/mail/2016/1603_pls_promo_02/index.html",percentage:function(){return Math.round(this.opened/this.received*100)}},defaultObj:{name:"Select an Email",title:"defaultObj",received:100,opened:100,totClicks:100,uniqClicks:100,subject:"Subject",date:"Date",url:"http://www.meyersound.com/mail/blank.html",percentage:function(){return Math.round(100)}}};window.onload=init;