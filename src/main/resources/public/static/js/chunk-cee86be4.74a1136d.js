(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cee86be4"],{"09f4":function(e,t,r){"use strict";r.d(t,"a",function(){return a}),Math.easeInOutQuad=function(e,t,r,n){return e/=n/2,e<1?r/2*e*e+t:(e--,-r/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function i(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function a(e,t,r){var a=s(),o=e-a,l=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=l;var s=Math.easeInOutQuad(c,a,o,t);i(s),c<t?n(e):r&&"function"===typeof r&&r()};u()}},4381:function(e,t,r){"use strict";r("ac4d"),r("8a81"),r("ac6a");var n=r("4360"),i={inserted:function(e,t,r){var i=t.value,s=n["a"].getters&&n["a"].getters.permissions;if(!(i&&i instanceof Array&&i.length>0&&s))throw new Error("need permissions! Like v-permission=\"['/rest/user/list']\"");var a=!1,o=!0,l=!1,c=void 0;try{for(var u,d=s[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var p=u.value;if(p.url===i[0]){a=!0;break}}}catch(m){l=!0,c=m}finally{try{o||null==d.return||d.return()}finally{if(l)throw c}}a||e.remove()}},s=function(e){e.directive("permission",i)};window.Vue&&(window["permission"]=i,Vue.use(s)),i.install=s;t["a"]=i},d78e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"filter-container",staticStyle:{"margin-top":"30px"}},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"角色名"},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/rest/role/list"],expression:"['/rest/role/list']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("查找")]),e._v(" "),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/rest/role/add"],expression:"['/rest/role/add']"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("新增")])],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",height:"450"}},[r("el-table-column",{attrs:{prop:"name",label:"角色名"}}),e._v(" "),r("el-table-column",{attrs:{prop:"description",label:"描述"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/rest/role/update"],expression:"['/rest/role/update']"}],attrs:{type:"primary",size:"small"},on:{click:function(r){return e.handleEdit(t)}}},[e._v("编辑")]),e._v(" "),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/rest/role/delete"],expression:"['/rest/role/delete']"}],attrs:{type:"danger",size:"small"},on:{click:function(r){return e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑":"新增"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"角色名"}},[r("el-input",{attrs:{placeholder:"角色名"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"描述"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"权限许可"}},[r("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.permissions,props:e.defaultProps,"show-checkbox":"","node-key":"id"}})],1)],1),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("确定")])],1)],1)],1)},i=[],s=r("75fc"),a=(r("ac6a"),r("96cf"),r("3b8d")),o=r("4381"),l=r("db93"),c=r("fe22"),u=r("333d"),d=r("ed08"),p=r("61f7"),m={id:"",name:"",description:"",permIds:""},f={name:"Role",components:{Pagination:u["a"]},directives:{permission:o["a"]},data:function(){return{tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10,name:""},role:Object.assign({},m),dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"childrens",label:"name"},permissions:[],permissionsByRole:[]}},created:function(){this.getList(),this.getPermissions()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(l["c"])(this.listQuery).then(function(t){e.listLoading=!1,e.list=t.result.rows,e.total=t.result.records})},getPermissions:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])();case 2:t=e.sent,this.permissions=t.result;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getPermissionsByRole:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["d"])(t);case 2:r=e.sent,this.permissionsByRole=r.result;case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleSearch:function(){this.getList()},handleCreate:function(){this.role=Object.assign({},m),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.checkStrictly=!0,this.dialogType="new",this.dialogVisible=!0},generateArr:function(e){var t=this,r=[];return e.forEach(function(e){if(r.push(e),e.childrens){var n=t.generateArr(e.childrens);n.length>0&&(r=[].concat(Object(s["a"])(r),Object(s["a"])(n)))}}),r},handleEdit:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(d["c"])(t.row),e.next=6,Object(c["d"])(this.role.id);case 6:r=e.sent,this.permissionsByRole=r.result,this.$nextTick(function(){n.$refs.tree.setCheckedNodes(n.generateArr(n.permissionsByRole))});case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),confirmRole:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t="edit"===this.dialogType,r=this.$refs.tree.getCheckedKeys(),Object(p["b"])(r)||(this.role.permIds=r.join(",")),!t){e.next=8;break}return e.next=6,Object(l["e"])(this.role);case 6:e.next=10;break;case 8:return e.next=10,Object(l["a"])(this.role);case 10:this.dialogVisible=!1,this.$message({showClose:!0,message:"保存成功",type:"success"}),this.getList();case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleDelete:function(e){var t=this,r=e.row;this.$confirm("确认删除角色?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["b"])(r.id);case 2:t.$message({showClose:!0,message:"删除成功",type:"success"}),t.getList();case 4:case"end":return e.stop()}},e)}))).catch(function(e){console.error(e)})}}},h=f,b=r("2877"),v=Object(b["a"])(h,n,i,!1,null,null,null);t["default"]=v.exports},db93:function(e,t,r){"use strict";r.d(t,"c",function(){return i}),r.d(t,"d",function(){return s}),r.d(t,"a",function(){return a}),r.d(t,"e",function(){return o}),r.d(t,"b",function(){return l});var n=r("b775");function i(e){return Object(n["a"])({url:"/rest/role/list",method:"post",data:e})}function s(){return Object(n["a"])({url:"/rest/role/all",method:"get"})}function a(e){return Object(n["a"])({url:"/rest/role/add",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/rest/role/update",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/rest/role/delete",method:"get",params:{id:e}})}},fe22:function(e,t,r){"use strict";r.d(t,"c",function(){return i}),r.d(t,"d",function(){return s}),r.d(t,"a",function(){return a}),r.d(t,"e",function(){return o}),r.d(t,"b",function(){return l});var n=r("b775");function i(){return Object(n["a"])({url:"/rest/permission/all",method:"get"})}function s(e){return Object(n["a"])({url:"/rest/permission/allByRole/".concat(e),method:"get"})}function a(e){return Object(n["a"])({url:"/rest/permission/add",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/rest/permission/update",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/rest/permission/delete",method:"get",params:{id:e}})}}}]);