(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-766c0938"],{"1dde":function(e,a,t){var n=t("d039"),i=t("b622"),l=t("2d00"),c=i("species");e.exports=function(e){return l>=51||!n((function(){var a=[],t=a.constructor={};return t[c]=function(){return{foo:1}},1!==a[e](Boolean).foo}))}},"2f77":function(e,a,t){},"65f0":function(e,a,t){var n=t("861d"),i=t("e8b5"),l=t("b622"),c=l("species");e.exports=function(e,a){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)?n(t)&&(t=t[c],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===a?0:a)}},8418:function(e,a,t){"use strict";var n=t("c04e"),i=t("9bf2"),l=t("5c6c");e.exports=function(e,a,t){var c=n(a);c in e?i.f(e,c,l(0,t)):e[c]=t}},"99af":function(e,a,t){"use strict";var n=t("23e7"),i=t("d039"),l=t("e8b5"),c=t("861d"),o=t("7b0b"),r=t("50c4"),s=t("8418"),d=t("65f0"),u=t("1dde"),f=t("b622"),m=t("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",b=m>=51||!i((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),k=u("concat"),g=function(e){if(!c(e))return!1;var a=e[p];return void 0!==a?!!a:l(e)},y=!b||!k;n({target:"Array",proto:!0,forced:y},{concat:function(e){var a,t,n,i,l,c=o(this),u=d(c,0),f=0;for(a=-1,n=arguments.length;a<n;a++)if(l=-1===a?c:arguments[a],g(l)){if(i=r(l.length),f+i>h)throw TypeError(v);for(t=0;t<i;t++,f++)t in l&&s(u,f,l[t])}else{if(f>=h)throw TypeError(v);s(u,f++,l)}return u.length=f,u}})},aff9:function(e,a,t){"use strict";t("2f77")},e8b5:function(e,a,t){var n=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},f12b:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"main_content"},[t("van-tabs",{attrs:{color:"#398EEA","title-active-color":"#398EEA","line-width":"33%",sticky:""},model:{value:e.active,callback:function(a){e.active=a},expression:"active"}},[t("van-tab",{attrs:{title:"数据"}},[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{required:"",name:"username",label:"姓名",placeholder:"姓名"},scopedSlots:e._u([{key:"input",fn:function(){return[t("van-button",{attrs:{"native-type":"button",icon:e.icon1,color:"#EEF1F7",size:"mini"},on:{click:e.showchangename}},[t("span",{staticStyle:{color:"#1c2635","font-size":"14px"}},[e._v(e._s(e.username))])])]},proxy:!0}]),model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),t("van-field",{attrs:{required:"",name:"userId",label:"学号",placeholder:"学号"},model:{value:e.userId,callback:function(a){e.userId=a},expression:"userId"}}),t("van-field",{attrs:{required:"",name:"xy",label:"学院",placeholder:"学院"},model:{value:e.xy,callback:function(a){e.xy=a},expression:"xy"}}),t("van-field",{attrs:{required:"",name:"zy",label:"专业",placeholder:"专业"},model:{value:e.zy,callback:function(a){e.zy=a},expression:"zy"}}),t("van-field",{attrs:{required:"",name:"phone",label:"手机号码",placeholder:"手机号码"},model:{value:e.phone,callback:function(a){e.phone=a},expression:"phone"}}),t("van-field",{attrs:{required:"",name:"othername",label:"家长或紧急联系人姓名",placeholder:"家长或紧急联系人姓名"},model:{value:e.othername,callback:function(a){e.othername=a},expression:"othername"}}),t("van-field",{attrs:{required:"",name:"otherphone",label:"家长或紧急联系人手机号",placeholder:"家长或紧急联系人手机号"},model:{value:e.otherphone,callback:function(a){e.otherphone=a},expression:"otherphone"}}),t("van-field",{attrs:{required:"",name:"housedetail",label:"宿舍详细信息",placeholder:"宿舍详细信息"},model:{value:e.housedetail,callback:function(a){e.housedetail=a},expression:"housedetail"}}),t("van-field",{attrs:{required:"",name:"signdate",label:"填报日期",placeholder:"填报日期"},model:{value:e.signdate,callback:function(a){e.signdate=a},expression:"signdate"}}),t("van-field",{attrs:{required:"",name:"signconfirm",type:"textarea",label:"填报确认",placeholder:"填报确认"},model:{value:e.signconfirm,callback:function(a){e.signconfirm=a},expression:"signconfirm"}}),t("van-field",{attrs:{required:"",name:"holidaystart",label:"请假起始时间",placeholder:"请假起始时间"},model:{value:e.holidaystart,callback:function(a){e.holidaystart=a},expression:"holidaystart"}}),t("van-field",{attrs:{required:"",name:"holidayend",label:"请假预计结束时间",placeholder:"宿舍详细信息"},model:{value:e.holidayend,callback:function(a){e.holidayend=a},expression:"holidayend"}}),t("van-field",{attrs:{required:"",name:"gowhere",label:"请填写离校去向信息",placeholder:"请填写离校去向信息"},model:{value:e.gowhere,callback:function(a){e.gowhere=a},expression:"gowhere"}}),t("van-field",{attrs:{required:"",name:"leavereason",label:"离校请假原因",placeholder:"离校请假原因"},model:{value:e.leavereason,callback:function(a){e.leavereason=a},expression:"leavereason"}}),t("van-field",{attrs:{required:"",name:"arrivedetail",label:"目的地详细地址",placeholder:"目的地详细地址"},model:{value:e.arrivedetail,callback:function(a){e.arrivedetail=a},expression:"arrivedetail"}}),t("van-field",{attrs:{required:"",name:"ifdanger",label:"目的地是否为中高风险地区",placeholder:"目的地是否为中高风险地区"},model:{value:e.ifdanger,callback:function(a){e.ifdanger=a},expression:"ifdanger"}}),t("van-field",{attrs:{required:"",name:"ifhealthy",label:"目前身体健康状况",placeholder:"目前身体健康状况"},model:{value:e.ifhealthy,callback:function(a){e.ifhealthy=a},expression:"ifhealthy"}}),t("van-field",{attrs:{required:"",name:"ifdangerman",label:"是否为疑似或确诊",placeholder:"是否为疑似或确诊"},model:{value:e.ifdangerman,callback:function(a){e.ifdangerman=a},expression:"ifdangerman"}}),t("van-field",{attrs:{required:"",name:"currenttemper",label:"目前体温",placeholder:"目前体温"},model:{value:e.currenttemper,callback:function(a){e.currenttemper=a},expression:"currenttemper"}}),t("van-field",{attrs:{required:"",name:"checkfromleader",label:"辅导员或班主任审核",placeholder:"辅导员或班主任审核"},scopedSlots:e._u([{key:"input",fn:function(){return[t("van-button",{attrs:{"native-type":"button",icon:e.icon2,color:"#EEF1F7",size:"mini"},on:{click:e.changeleadername}},[t("span",{staticStyle:{color:"#1c2635","font-size":"14px"}},[e._v(e._s(e.checkfromleader))])])]},proxy:!0}]),model:{value:e.checkfromleader,callback:function(a){e.checkfromleader=a},expression:"checkfromleader"}}),t("van-field",{attrs:{required:"",name:"checkconfirm",label:"销假确认",placeholder:"销假确认"},scopedSlots:e._u([{key:"input",fn:function(){return[t("van-button",{attrs:{icon:"plus",plain:"",round:"",size:"small"}})]},proxy:!0}]),model:{value:e.checkconfirm,callback:function(a){e.checkconfirm=a},expression:"checkconfirm"}}),t("van-field",{attrs:{required:"",name:"checkarea",label:"销假定位",placeholder:"销假定位"},scopedSlots:e._u([{key:"input",fn:function(){return[t("van-button",{staticClass:"areabtn",attrs:{"native-type":"button",icon:"assets/area.png",plain:"",block:"",size:"small"}},[e._v("获取定位")])]},proxy:!0}]),model:{value:e.checkarea,callback:function(a){e.checkarea=a},expression:"checkarea"}}),t("van-field",{attrs:{required:"",name:"checktime",label:"销假时间",placeholder:"销假时间","right-icon":"assets/calendar.png"},model:{value:e.checktime,callback:function(a){e.checktime=a},expression:"checktime"}}),t("van-submit-bar",{attrs:{"button-text":"提交","native-type":"submit","button-color":"#4588F1"}},[t("van-grid",{attrs:{"icon-size":"1.2em"}},[t("van-grid-item",{attrs:{icon:"assets/save.png",text:"暂存"}})],1)],1),t("van-calendar",{on:{confirm:e.onConfirm},model:{value:e.show,callback:function(a){e.show=a},expression:"show"}})],1)],1),t("van-dialog",{attrs:{title:"修改姓名及头像","show-cancel-button":""},model:{value:e.changename,callback:function(a){e.changename=a},expression:"changename"}},[t("van-field",{attrs:{label:"姓名"},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),t("van-radio-group",{model:{value:e.icon1,callback:function(a){e.icon1=a},expression:"icon1"}},[t("van-radio",{attrs:{name:e.iconyu}},[e._v("余航头像")]),t("van-radio",{attrs:{name:e.icondm}},[e._v("弟妹头像")])],1)],1),t("van-dialog",{attrs:{title:"修改辅导员姓名","show-cancel-button":""},model:{value:e.changeleadernameflag,callback:function(a){e.changeleadernameflag=a},expression:"changeleadernameflag"}},[t("van-field",{attrs:{label:"姓名"},model:{value:e.checkfromleader,callback:function(a){e.checkfromleader=a},expression:"checkfromleader"}}),t("van-radio-group",{model:{value:e.icon2,callback:function(a){e.icon2=a},expression:"icon2"}},[t("van-radio",{attrs:{name:e.iconyufdy}},[e._v("余航辅导员头像")]),t("van-radio",{attrs:{name:e.icondmfdy}},[e._v("弟妹辅导员头像")])],1)],1),t("van-dialog",{attrs:{title:"修改时间节点","show-cancel-button":""},model:{value:e.changechecktimeflag,callback:function(a){e.changechecktimeflag=a},expression:"changechecktimeflag"}},[t("van-field",{attrs:{label:"开始处理"},model:{value:e.checktimestart,callback:function(a){e.checktimestart=a},expression:"checktimestart"}}),t("van-field",{attrs:{label:"处理完成"},model:{value:e.checktimefinish,callback:function(a){e.checktimefinish=a},expression:"checktimefinish"}}),t("van-field",{attrs:{label:"处理耗时"},model:{value:e.checktimeout,callback:function(a){e.checktimeout=a},expression:"checktimeout"}})],1),t("van-dialog",{attrs:{title:"修改处理时间","show-cancel-button":""},model:{value:e.changeputtimeflag,callback:function(a){e.changeputtimeflag=a},expression:"changeputtimeflag"}},[t("van-field",{attrs:{label:"开始处理"},model:{value:e.usertimestart,callback:function(a){e.usertimestart=a},expression:"usertimestart"}}),t("van-field",{attrs:{label:"处理完成"},model:{value:e.usertimefinish,callback:function(a){e.usertimefinish=a},expression:"usertimefinish"}})],1),t("van-tab",{attrs:{title:"动态"}},[t("van-tabs",{attrs:{color:"#FFFFFF","title-active-color":"#398EEA","line-width":"49%",sticky:""},model:{value:e.active2,callback:function(a){e.active2=a},expression:"active2"}},[t("van-tab",{scopedSlots:e._u([{key:"title",fn:function(){return[t("van-button",{attrs:{color:0===e.active2?"#4588F1":"#EBF3FD",round:"",size:"mini"}},[t("span",{style:"padding: 0 2px;color:"+(0===e.active2?"":"#4588F1")},[e._v("审批意见")])])]},proxy:!0}])},[t("div",{staticClass:"container"})]),t("van-tab",{scopedSlots:e._u([{key:"title",fn:function(){return[t("van-button",{attrs:{color:0===e.active2?"#EBF3FD":"#4588F1",round:"",size:"mini"}},[t("span",{style:"padding: 0 2px;color: "+(0===e.active2?"#4588F1":"")},[e._v("流程日志")])])]},proxy:!0}])},[t("div",{staticClass:"container2"},[t("van-card",{staticClass:"fdysh",attrs:{thumb:e.icon2},on:{"click-thumb":e.changechecktime},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t("span",{staticStyle:{display:"block",padding:"4px 0","font-size":"14px"}},[e._v(e._s(e.checkfromleader))]),t("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("提交")])])]},proxy:!0},{key:"desc",fn:function(){return[t("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("开始处理: "+e._s(e.checktimestart))]),t("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("处理完成: "+e._s(e.checktimefinish))]),t("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("处理耗时: "+e._s(e.checktimeout))])]},proxy:!0}])}),t("van-card",{staticClass:"tb",attrs:{thumb:e.icon1},on:{"click-thumb":e.changeputtime},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t("span",{staticStyle:{display:"block",padding:"4px 0","font-size":"14px"}},[e._v(e._s(e.username))]),t("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("提交")])])]},proxy:!0},{key:"desc",fn:function(){return[t("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("开始处理: "+e._s(e.usertimestart))]),t("span",{staticStyle:{display:"block",padding:"4px 0",color:"#94a0b5"}},[e._v("处理完成: "+e._s(e.usertimefinish))])]},proxy:!0}])})],1)])],1)],1),t("van-tab",{attrs:{title:"流转图"}},[t("div",{staticClass:"containerlz"})])],1)],1)},i=[],l=(t("99af"),{data:function(){return{show:!1,changename:!1,changeleadernameflag:!1,changechecktimeflag:!1,changeputtimeflag:!1,icon1:"assets/yu.jpg",icon2:"assets/fdy.jpg",iconyufdy:"assets/fdy.jpg",iconyu:"assets/yu.jpg",icondmfdy:"assets/dmfdy.jpg",icondm:"assets/dm.jpg",active:0,active2:0,username:"余航",userId:"201910080904001",xy:"信息与通信工程学院",zy:"电磁场与微波技术(研究生)",phone:"17610883973",othername:"余亮",otherphone:"15956138532",housedetail:"47号楼421",signdate:"2021-01-30",signconfirm:"2021-1-30-信息与通信工程学院-201910080904001-余航",holidaystart:"2021-01-31 12:08",holidayend:"2021-01-31 19:31",gowhere:"北京市内变动",leavereason:"去医院复诊",arrivedetail:"北京市朝阳区北京大学口腔医院第四门诊",ifdanger:"否",ifhealthy:"健康",ifdangerman:"否",currenttemper:"36.1",checkfromleader:"梁晶晶",checkconfirm:"",checkarea:"",checktime:"2021-01-30 14:27",checktimestart:"2021-01-30 14:31",checktimefinish:"2021-01-30 18:54",checktimeout:"4小时23分12秒",usertimestart:"2021-01-30 14:31",usertimefinish:"2021-01-30 14:31"}},methods:{onSubmit:function(e){console.log("submit",e)},formatDate:function(e){return"".concat(e.getMonth()+1,"/").concat(e.getDate())},onConfirm:function(e){this.show=!1,this.date=this.formatDate(e)},showchangename:function(){this.changename=!0},changeleadername:function(){this.changeleadernameflag=!0},changechecktime:function(){this.changechecktimeflag=!0},changeputtime:function(){this.changeputtimeflag=!0}}}),c=l,o=(t("aff9"),t("2877")),r=Object(o["a"])(c,n,i,!1,null,null,null);a["default"]=r.exports}}]);