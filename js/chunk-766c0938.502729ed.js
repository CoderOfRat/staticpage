(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-766c0938"],{"1dde":function(e,a,n){var t=n("d039"),i=n("b622"),l=n("2d00"),c=i("species");e.exports=function(e){return l>=51||!t((function(){var a=[],n=a.constructor={};return n[c]=function(){return{foo:1}},1!==a[e](Boolean).foo}))}},"2f77":function(e,a,n){},"65f0":function(e,a,n){var t=n("861d"),i=n("e8b5"),l=n("b622"),c=l("species");e.exports=function(e,a){var n;return i(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?t(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===a?0:a)}},8418:function(e,a,n){"use strict";var t=n("c04e"),i=n("9bf2"),l=n("5c6c");e.exports=function(e,a,n){var c=t(a);c in e?i.f(e,c,l(0,n)):e[c]=n}},"99af":function(e,a,n){"use strict";var t=n("23e7"),i=n("d039"),l=n("e8b5"),c=n("861d"),o=n("7b0b"),r=n("50c4"),s=n("8418"),d=n("65f0"),u=n("1dde"),f=n("b622"),m=n("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",b=m>=51||!i((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),k=u("concat"),g=function(e){if(!c(e))return!1;var a=e[p];return void 0!==a?!!a:l(e)},y=!b||!k;t({target:"Array",proto:!0,forced:y},{concat:function(e){var a,n,t,i,l,c=o(this),u=d(c,0),f=0;for(a=-1,t=arguments.length;a<t;a++)if(l=-1===a?c:arguments[a],g(l)){if(i=r(l.length),f+i>h)throw TypeError(v);for(n=0;n<i;n++,f++)n in l&&s(u,f,l[n])}else{if(f>=h)throw TypeError(v);s(u,f++,l)}return u.length=f,u}})},aff9:function(e,a,n){"use strict";n("2f77")},e8b5:function(e,a,n){var t=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==t(e)}},f12b:function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"main_content"},[n("van-tabs",{attrs:{color:"#398EEA","title-active-color":"#398EEA","line-width":"33%",sticky:""},model:{value:e.active,callback:function(a){e.active=a},expression:"active"}},[n("van-tab",{attrs:{title:"数据"}},[n("van-form",{on:{submit:e.onSubmit}},[n("van-field",{attrs:{required:"",name:"username",label:"姓名",placeholder:"姓名"},scopedSlots:e._u([{key:"input",fn:function(){return[n("van-button",{attrs:{"native-type":"button",icon:e.icon1,color:"#EEF1F7",size:"mini"},on:{click:e.showchangename}},[n("span",{staticStyle:{color:"#1c2635","font-size":"14px"}},[e._v(e._s(e.username))])])]},proxy:!0}]),model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),n("van-field",{attrs:{required:"",name:"userId",label:"学号",placeholder:"学号"},model:{value:e.userId,callback:function(a){e.userId=a},expression:"userId"}}),n("van-field",{attrs:{required:"",name:"xy",label:"学院",placeholder:"学院"},model:{value:e.xy,callback:function(a){e.xy=a},expression:"xy"}}),n("van-field",{attrs:{required:"",name:"zy",label:"专业",placeholder:"专业"},model:{value:e.zy,callback:function(a){e.zy=a},expression:"zy"}}),n("van-field",{attrs:{required:"",name:"phone",label:"手机号码",placeholder:"手机号码"},model:{value:e.phone,callback:function(a){e.phone=a},expression:"phone"}}),n("van-field",{attrs:{required:"",name:"othername",label:"家长或紧急联系人姓名",placeholder:"家长或紧急联系人姓名"},model:{value:e.othername,callback:function(a){e.othername=a},expression:"othername"}}),n("van-field",{attrs:{required:"",name:"otherphone",label:"家长或紧急联系人手机号",placeholder:"家长或紧急联系人手机号"},model:{value:e.otherphone,callback:function(a){e.otherphone=a},expression:"otherphone"}}),n("van-field",{attrs:{required:"",name:"housedetail",label:"宿舍详细信息",placeholder:"宿舍详细信息"},model:{value:e.housedetail,callback:function(a){e.housedetail=a},expression:"housedetail"}}),n("van-field",{attrs:{required:"",name:"signdate",label:"填报日期",placeholder:"填报日期"},model:{value:e.signdate,callback:function(a){e.signdate=a},expression:"signdate"}}),n("van-field",{attrs:{required:"",name:"signconfirm",type:"textarea",label:"填报确认",placeholder:"填报确认"},model:{value:e.signconfirm,callback:function(a){e.signconfirm=a},expression:"signconfirm"}}),n("van-field",{attrs:{required:"",name:"holidaystart",label:"请假起始时间",placeholder:"请假起始时间"},model:{value:e.holidaystart,callback:function(a){e.holidaystart=a},expression:"holidaystart"}}),n("van-field",{attrs:{required:"",name:"holidayend",label:"请假预计结束时间",placeholder:"宿舍详细信息"},model:{value:e.holidayend,callback:function(a){e.holidayend=a},expression:"holidayend"}}),n("van-field",{attrs:{required:"",name:"gowhere",label:"请填写离校去向信息",placeholder:"请填写离校去向信息"},model:{value:e.gowhere,callback:function(a){e.gowhere=a},expression:"gowhere"}}),n("van-field",{attrs:{required:"",name:"leavereason",label:"离校请假原因",placeholder:"离校请假原因"},model:{value:e.leavereason,callback:function(a){e.leavereason=a},expression:"leavereason"}}),n("van-field",{attrs:{required:"",name:"arrivedetail",label:"目的地详细地址",placeholder:"目的地详细地址"},model:{value:e.arrivedetail,callback:function(a){e.arrivedetail=a},expression:"arrivedetail"}}),n("van-field",{attrs:{required:"",name:"ifdanger",label:"目的地是否为中高风险地区",placeholder:"目的地是否为中高风险地区"},model:{value:e.ifdanger,callback:function(a){e.ifdanger=a},expression:"ifdanger"}}),n("van-field",{attrs:{required:"",name:"ifhealthy",label:"目前身体健康状况",placeholder:"目前身体健康状况"},model:{value:e.ifhealthy,callback:function(a){e.ifhealthy=a},expression:"ifhealthy"}}),n("van-field",{attrs:{required:"",name:"ifdangerman",label:"是否为疑似或确诊",placeholder:"是否为疑似或确诊"},model:{value:e.ifdangerman,callback:function(a){e.ifdangerman=a},expression:"ifdangerman"}}),n("van-field",{attrs:{required:"",name:"currenttemper",label:"目前体温",placeholder:"目前体温"},model:{value:e.currenttemper,callback:function(a){e.currenttemper=a},expression:"currenttemper"}}),n("van-field",{attrs:{required:"",name:"checkfromleader",label:"辅导员或班主任审核",placeholder:"辅导员或班主任审核"},scopedSlots:e._u([{key:"input",fn:function(){return[n("van-button",{attrs:{"native-type":"button",icon:e.icon2,color:"#EEF1F7",size:"mini"},on:{click:e.changeleadername}},[n("span",{staticStyle:{color:"#1c2635","font-size":"14px"}},[e._v(e._s(e.checkfromleader))])])]},proxy:!0}]),model:{value:e.checkfromleader,callback:function(a){e.checkfromleader=a},expression:"checkfromleader"}}),n("van-field",{attrs:{required:"",name:"checkconfirm",label:"销假确认",placeholder:"销假确认"},scopedSlots:e._u([{key:"input",fn:function(){return[n("van-button",{attrs:{icon:"plus",plain:"",round:"",size:"small"}})]},proxy:!0}]),model:{value:e.checkconfirm,callback:function(a){e.checkconfirm=a},expression:"checkconfirm"}}),n("van-field",{attrs:{required:"",name:"checkarea",label:"销假定位",placeholder:"销假定位"},scopedSlots:e._u([{key:"input",fn:function(){return[n("van-button",{staticClass:"areabtn",attrs:{"native-type":"button",icon:"assets/area.png",plain:"",block:"",size:"small"}},[e._v("获取定位")])]},proxy:!0}]),model:{value:e.checkarea,callback:function(a){e.checkarea=a},expression:"checkarea"}}),n("van-field",{attrs:{required:"",name:"checktime",label:"销假时间",placeholder:"销假时间","right-icon":"assets/calendar.png"},model:{value:e.checktime,callback:function(a){e.checktime=a},expression:"checktime"}}),n("van-submit-bar",{attrs:{"button-text":"提交","native-type":"submit","button-color":"#4588F1"}},[n("van-grid",{attrs:{"icon-size":"1.2em"}},[n("van-grid-item",{attrs:{icon:"assets/save.png",text:"暂存"}})],1)],1),n("van-calendar",{on:{confirm:e.onConfirm},model:{value:e.show,callback:function(a){e.show=a},expression:"show"}})],1)],1),n("van-dialog",{attrs:{title:"修改姓名及头像","show-cancel-button":""},model:{value:e.changename,callback:function(a){e.changename=a},expression:"changename"}},[n("van-field",{attrs:{label:"姓名"},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),n("van-radio-group",{model:{value:e.icon1,callback:function(a){e.icon1=a},expression:"icon1"}},[n("van-radio",{attrs:{name:e.iconyu}},[e._v("余航头像")]),n("van-radio",{attrs:{name:e.icondm}},[e._v("弟妹头像")])],1)],1),n("van-dialog",{attrs:{title:"修改辅导员姓名","show-cancel-button":""},model:{value:e.changeleadernameflag,callback:function(a){e.changeleadernameflag=a},expression:"changeleadernameflag"}},[n("van-field",{attrs:{label:"姓名"},model:{value:e.checkfromleader,callback:function(a){e.checkfromleader=a},expression:"checkfromleader"}}),n("van-radio-group",{model:{value:e.icon2,callback:function(a){e.icon2=a},expression:"icon2"}},[n("van-radio",{attrs:{name:e.iconyufdy}},[e._v("余航辅导员头像")]),n("van-radio",{attrs:{name:e.icondmfdy}},[e._v("弟妹辅导员头像")])],1)],1),n("van-dialog",{attrs:{title:"修改时间节点","show-cancel-button":""},model:{value:e.changechecktimeflag,callback:function(a){e.changechecktimeflag=a},expression:"changechecktimeflag"}},[n("van-field",{attrs:{label:"开始处理"},model:{value:e.checktimestart,callback:function(a){e.checktimestart=a},expression:"checktimestart"}}),n("van-field",{attrs:{label:"处理完成"},model:{value:e.checktimefinish,callback:function(a){e.checktimefinish=a},expression:"checktimefinish"}}),n("van-field",{attrs:{label:"处理耗时"},model:{value:e.checktimeout,callback:function(a){e.checktimeout=a},expression:"checktimeout"}})],1),n("van-dialog",{attrs:{title:"修改处理时间","show-cancel-button":""},model:{value:e.changeputtimeflag,callback:function(a){e.changeputtimeflag=a},expression:"changeputtimeflag"}},[n("van-field",{attrs:{label:"开始处理"},model:{value:e.usertimestart,callback:function(a){e.usertimestart=a},expression:"usertimestart"}}),n("van-field",{attrs:{label:"处理完成"},model:{value:e.usertimefinish,callback:function(a){e.usertimefinish=a},expression:"usertimefinish"}})],1),n("van-tab",{attrs:{title:"动态"}},[n("van-tabs",{attrs:{color:"#FFFFFF","title-active-color":"#398EEA","line-width":"49%",sticky:""},model:{value:e.active2,callback:function(a){e.active2=a},expression:"active2"}},[n("van-tab",{scopedSlots:e._u([{key:"title",fn:function(){return[n("van-button",{attrs:{color:0===e.active2?"#4588F1":"#EBF3FD",round:"",size:"mini"}},[n("span",{style:"padding: 0 2px;color:"+(0===e.active2?"":"#4588F1")},[e._v("审批意见")])])]},proxy:!0}])},[n("div",{staticClass:"container"})]),n("van-tab",{scopedSlots:e._u([{key:"title",fn:function(){return[n("van-button",{attrs:{color:0===e.active2?"#EBF3FD":"#4588F1",round:"",size:"mini"}},[n("span",{style:"padding: 0 2px;color: "+(0===e.active2?"#4588F1":"")},[e._v("流程日志")])])]},proxy:!0}])},[n("van-card",{staticClass:"fdysh",attrs:{thumb:e.icon2},on:{"click-thumb":e.changechecktime},scopedSlots:e._u([{key:"title",fn:function(){return[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("span",{staticStyle:{display:"block",padding:"4px 0","font-size":"14px"}},[e._v(e._s(e.checkfromleader))]),n("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("提交")])])]},proxy:!0},{key:"desc",fn:function(){return[n("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("开始处理: "+e._s(e.checktimestart))]),n("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("处理完成: "+e._s(e.checktimefinish))]),n("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("处理耗时: "+e._s(e.checktimeout))])]},proxy:!0}])}),n("van-card",{staticClass:"tb",attrs:{thumb:e.icon1},on:{"click-thumb":e.changeputtime},scopedSlots:e._u([{key:"title",fn:function(){return[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("span",{staticStyle:{display:"block",padding:"4px 0","font-size":"14px"}},[e._v(e._s(e.username))]),n("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("提交")])])]},proxy:!0},{key:"desc",fn:function(){return[n("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("开始处理: "+e._s(e.usertimestart))]),n("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("处理完成: "+e._s(e.usertimefinish))])]},proxy:!0}])})],1)],1)],1),n("van-tab",{attrs:{title:"流转图"}},[n("div",{staticClass:"containerlz"})])],1)],1)},i=[],l=(n("99af"),{data:function(){return{show:!1,changename:!1,changeleadernameflag:!1,changechecktimeflag:!1,changeputtimeflag:!1,icon1:"assets/yu.jpg",icon2:"assets/fdy.jpg",iconyufdy:"assets/fdy.jpg",iconyu:"assets/yu.jpg",icondmfdy:"assets/dmfdy.jpg",icondm:"assets/dm.jpg",active:0,active2:0,username:"余航",userId:"201910080904001",xy:"信息与通信工程学院",zy:"电磁场与微波技术(研究生)",phone:"17610883973",othername:"余亮",otherphone:"15956138532",housedetail:"47号楼421",signdate:"2021-01-30",signconfirm:"2021-1-30-信息与通信工程学院-201910080904001-余航",holidaystart:"2021-01-31 12:08",holidayend:"2021-01-31 19:31",gowhere:"北京市内变动",leavereason:"去医院复诊",arrivedetail:"北京市朝阳区北京大学口腔医院第四门诊",ifdanger:"否",ifhealthy:"健康",ifdangerman:"否",currenttemper:"36.1",checkfromleader:"梁晶晶",checkconfirm:"",checkarea:"",checktime:"2021-01-30 14:27",checktimestart:"2021-01-30 14:31",checktimefinish:"2021-01-30 18:54",checktimeout:"4小时23分12秒",usertimestart:"2021-01-30 14:31",usertimefinish:"2021-01-30 14:31"}},methods:{onSubmit:function(e){console.log("submit",e)},formatDate:function(e){return"".concat(e.getMonth()+1,"/").concat(e.getDate())},onConfirm:function(e){this.show=!1,this.date=this.formatDate(e)},showchangename:function(){this.changename=!0},changeleadername:function(){this.changeleadernameflag=!0},changechecktime:function(){this.changechecktimeflag=!0},changeputtime:function(){this.changeputtimeflag=!0}}}),c=l,o=(n("aff9"),n("2877")),r=Object(o["a"])(c,t,i,!1,null,null,null);a["default"]=r.exports}}]);