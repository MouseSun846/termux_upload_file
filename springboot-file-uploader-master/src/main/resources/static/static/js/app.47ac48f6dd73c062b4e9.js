webpackJsonp([1],{0:function(t,e){},"4VFA":function(t,e){},"9pPg":function(t,e){},CWFx:function(t,e){},EZJW:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-container",{staticClass:"my-container"},[n("el-header",{staticClass:"my-header"},[n("span",{staticStyle:{color:"aliceblue","font-size":"x-large"}},[t._v("MyUploader")])]),t._v(" "),n("el-container",[n("el-aside",[n("el-menu",{staticStyle:{height:"100%"},attrs:{"default-active":t.defaultActive}},[n("el-menu-item",{attrs:{index:"singleFileUpload"},on:{click:function(e){t.redirectUrl("/singleFileUpload")}}},[n("i",{staticClass:"el-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("单文件上传")])]),t._v(" "),n("el-menu-item",{attrs:{index:"multiFileUpload"},on:{click:function(e){t.redirectUrl("/multiFileUpload")}}},[n("i",{staticClass:"el-icon-date"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("多文件上传")])]),t._v(" "),n("el-menu-item",{attrs:{index:"bigFileUpload"},on:{click:function(e){t.redirectUrl("/bigFileUpload")}}},[n("i",{staticClass:"el-icon-tickets"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("大文件上传")])]),t._v(" "),n("el-menu-item",{attrs:{index:"stopUpload"},on:{click:function(e){t.redirectUrl("/stopUpload")}}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("断点续传")])]),t._v(" "),n("el-menu-item",{attrs:{index:"quickUpload"},on:{click:function(e){t.redirectUrl("/quickUpload")}}},[n("i",{staticClass:"el-icon-upload"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("文件秒传")])]),t._v(" "),n("el-menu-item",{attrs:{index:"pictureUpload"},on:{click:function(e){t.redirectUrl("/pictureUpload")}}},[n("i",{staticClass:"el-icon-picture"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("图片上传")])])],1)],1),t._v(" "),n("el-main",{staticClass:"my-main"},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var a=n("VU/8")({name:"app",data:function(){return{defaultActive:this.$route.name}},methods:{redirectUrl:function(t){this.$router.push(t)}}},i,!1,function(t){n("4VFA")},null,null).exports,o=n("/ocq"),s=(n("coYu"),function(t,e){var n=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice,r=(t=t,2097152),i=Math.ceil(t.size/r),a=0,o=new SparkMD5.ArrayBuffer,s=new FileReader;function l(){var e=a*r,i=e+r>=t.size?t.size:e+r;s.readAsArrayBuffer(n.call(t,e,i))}s.onload=function(t){console.log("read chunk nr",a+1,"of",i),o.append(t.target.result),++a<i?l():(e(null,o.end()),console.log("finished loading"))},s.onerror=function(){e("oops, something went wrong.")},l()}),l=n("FurG"),u=n.n(l),p={name:"Uploader",props:{browse_button:{type:String},container:{type:String},url:{type:String},filters:{type:Object},headers:{type:Object},multipart_params:{type:Object},resize:{type:Object},drop_element:{type:String},required_features:{type:String},runtimes:{type:String,default:function(){return"html5,flash,silverlight,html4"}},chunk_size:{type:String,default:function(){return"0"}},multipart:{type:Boolean,default:function(){return!0}},max_retries:{type:Number,default:function(){return 0}},multi_selection:{type:Boolean,default:function(){return!0}},unique_names:{type:Boolean,default:function(){return!1}},file_data_name:{type:String,default:function(){return"file"}},flash_swf_url:{type:String,default:function(){return"plupload/js/Moxie.swf"}},silverlight_xap_url:{type:String,default:function(){return"plupload/js/Moxie.xap"}},Init:{type:Function},PostInit:{type:Function},Browse:{type:Function},OptionChanged:{type:Function},Refresh:{type:Function},StateChanged:{type:Function},UploadFile:{type:Function},BeforeUpload:{type:Function},QueueChanged:{type:Function},UploadProgress:{type:Function},FilesRemoved:{type:Function},FileFiltered:{type:Function},FilesAdded:{type:Function},FileUploaded:{type:Function},ChunkUploaded:{type:Function},UploadComplete:{type:Function},Error:{type:Function},Destroy:{type:Function}},data:function(){return{up:{}}},watch:{up:function(t){this.$emit("inputUploader",t)}},methods:{init:function(){var t=this,e={Init:function(e,n){null!=t.Init&&t.Init(e,n)},UploadFile:function(e,n){null!=t.UploadFile&&t.UploadFile(e,n)}},n={PostInit:function(){null!=t.PostInit&&t.PostInit()},Browse:function(e){null!=t.Browse&&t.Browse(e)},OptionChanged:function(e,n,r,i){null!=t.OptionChanged&&t.OptionChanged(e,n,r,i)},Refresh:function(e){null!=t.Refresh&&t.Refresh(e)},StateChanged:function(e){null!=t.StateChanged&&t.StateChanged(e)},BeforeUpload:function(e,n){null!=t.BeforeUpload&&t.BeforeUpload(e,n)},QueueChanged:function(e){null!=t.QueueChanged&&t.QueueChanged(e)},UploadProgress:function(e,n){null!=t.UploadProgress&&t.UploadProgress(e,n)},FilesRemoved:function(e,n){null!=t.FilesRemoved&&t.FilesRemoved(e,n)},FileFiltered:function(e,n){null!=t.FileFiltered&&t.FileFiltered(e,n)},FilesAdded:function(e,n){null!=t.FilesAdded&&t.FilesAdded(e,n)},FileUploaded:function(e,n,r){null!=t.FileUploaded&&t.FileUploaded(e,n,r)},ChunkUploaded:function(e,n,r){null!=t.ChunkUploaded&&t.ChunkUploaded(e,n,r)},UploadComplete:function(e,n){null!=t.UploadComplete&&t.UploadComplete(e,n)},Error:function(e,n){null!=t.Error&&t.Error(e,n)},Destroy:function(e){null!=t.Destroy&&t.Destroy(e)}},r={runtimes:this.runtimes,browse_button:this.browse_button,container:this.container,url:this.url,chunk_size:this.chunk_size,headers:this.headers,multipart:this.multipart,max_retries:this.max_retries,multi_selection:this.multi_selection,unique_names:this.unique_names,file_data_name:this.file_data_name,flash_swf_url:this.flash_swf_url,silverlight_xap_url:this.silverlight_xap_url,preinit:e,init:n};null!=this.filters&&(r.filters=this.filters),null!=this.multipart_params&&(r.multipart_params=this.multipart_params),null!=this.resize&&(r.resize=this.resize),null!=this.drop_element&&(r.drop_element=this.drop_element),null!=this.required_features&&(r.required_features=this.required_features);var i=new u.a.Uploader(r);i.init(),this.up=i}},mounted:function(){this.init()}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},f=n("VU/8")(p,c,!1,null,null,null).exports,d={name:"BigFileUpload",data:function(){return{server_config:this.global.server_config,up:{},files:[],tableData:[]}},components:{uploader:f},watch:{files:{handler:function(){var t=this;this.tableData=[],this.files.forEach(function(e){t.tableData.push({name:e.name,size:e.size,status:e.status,id:e.id,percent:e.percent})})},deep:!0}},methods:{inputUploader:function(t){this.up=t,this.files=t.files},filesAdded:function(t,e){e.forEach(function(t){t.status=-1,s(t.getNative(),function(e,n){t.md5=n,t.status=1})})},deleteFile:function(t){var e=this.up.getFile(t);this.up.removeFile(e)},beforeUpload:function(t,e){t.setOption("multipart_params",{size:e.size,md5:e.md5})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("uploader",{attrs:{browse_button:"browse_button",url:t.server_config.url+"/BigFile/",chunk_size:"2MB",filters:{prevent_duplicates:!0},FilesAdded:t.filesAdded,BeforeUpload:t.beforeUpload},on:{inputUploader:t.inputUploader}}),t._v(" "),n("el-button",{attrs:{type:"primary",id:"browse_button"}},[t._v("选择多个文件")]),t._v(" "),n("br"),t._v(" "),n("el-table",{staticStyle:{width:"100%",margin:"10px 10px"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"文件名"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"大小"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.size))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[-1===e.row.status?n("span",[t._v("正在计算MD5")]):t._e(),t._v(" "),1===e.row.status?n("span",[t._v("MD5计算完成，准备上传")]):t._e(),t._v(" "),4===e.row.status?n("span",{staticStyle:{color:"brown"}},[t._v("上传失败")]):t._e(),t._v(" "),5===e.row.status?n("span",{staticStyle:{color:"chartreuse"}},[t._v("已上传")]):t._e(),t._v(" "),2===e.row.status?n("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:e.row.percent}}):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger"},on:{click:function(n){t.deleteFile(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(e){t.up.start()}}},[t._v("开始上传")])],1)},staticRenderFns:[]};var _=n("VU/8")(d,h,!1,function(t){n("gjde")},"data-v-497ee711",null).exports,v={name:"StopUpload",data:function(){return{server_config:this.global.server_config,up:{},files:[],tableData:[],uploading:!1}},components:{uploader:f},watch:{files:{handler:function(){var t=this;this.tableData=[],this.files.forEach(function(e){t.tableData.push({name:e.name,size:e.size,status:e.status,id:e.id,percent:e.percent})})},deep:!0}},methods:{inputUploader:function(t){this.up=t,this.files=t.files},filesAdded:function(t,e){e.forEach(function(t){t.status=-1,s(t.getNative(),function(e,n){t.md5=n,t.status=1})})},deleteFile:function(t){var e=this.up.getFile(t);this.up.removeFile(e)},beforeUpload:function(t,e){t.setOption("multipart_params",{size:e.size,md5:e.md5})},uploadStart:function(){this.uploading=!0,this.up.start()},uploadStop:function(){this.uploading=!1,this.up.stop()},error:function(){this.uploading=!1},uploadComplete:function(){this.uploading=!1}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("uploader",{attrs:{browse_button:"browse_button",url:t.server_config.url+"/BigFile/",chunk_size:"2MB",max_retries:3,filters:{prevent_duplicates:!0},FilesAdded:t.filesAdded,BeforeUpload:t.beforeUpload,Error:t.error,UploadComplete:t.uploadComplete},on:{inputUploader:t.inputUploader}}),t._v(" "),n("el-tag",{attrs:{type:"warning"}},[t._v("自动重传三次")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"primary",id:"browse_button"}},[t._v("选择多个文件")]),t._v(" "),n("br"),t._v(" "),n("el-table",{staticStyle:{width:"100%",margin:"10px 10px"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"文件名"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"大小"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.size))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[-1===e.row.status?n("span",[t._v("正在计算MD5")]):t._e(),t._v(" "),1===e.row.status&&0===e.row.percent?n("span",[t._v("MD5计算完成，准备上传")]):t._e(),t._v(" "),4===e.row.status?n("span",{staticStyle:{color:"brown"}},[t._v("上传失败")]):t._e(),t._v(" "),5===e.row.status?n("span",{staticStyle:{color:"chartreuse"}},[t._v("已上传")]):t._e(),t._v(" "),2===e.row.status||1===e.row.status&&e.row.percent>0?n("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:e.row.percent}}):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger"},on:{click:function(n){t.deleteFile(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{disabled:t.uploading,type:"danger"},on:{click:function(e){t.uploadStart()}}},[t._v("开始上传")]),t._v(" "),n("el-button",{attrs:{disabled:!t.uploading,type:"warring"},on:{click:function(e){t.uploadStop()}}},[t._v("暂停上传")])],1)},staticRenderFns:[]};var g=n("VU/8")(v,b,!1,function(t){n("9pPg")},"data-v-383aba33",null).exports,m={name:"QuickUpload",data:function(){return{server_config:this.global.server_config,up:{},files:[],tableData:[]}},components:{uploader:f},watch:{files:{handler:function(){var t=this;this.tableData=[],this.files.forEach(function(e){t.tableData.push({name:e.name,size:e.size,status:e.status,id:e.id,percent:e.percent})})},deep:!0}},methods:{inputUploader:function(t){this.up=t,this.files=t.files},filesAdded:function(t,e){e.forEach(function(t){t.status=-1,s(t.getNative(),function(e,n){t.md5=n,t.status=1})})},deleteFile:function(t){var e=this.up.getFile(t);this.up.removeFile(e)},beforeUpload:function(t,e){t.setOption("multipart_params",{size:e.size,md5:e.md5})},uploadStart:function(){var t=this,e=0,n=this.files.length;this.files.forEach(function(r){1==r.status&&t.$http.get(t.server_config.url+"/QuickUpload/?md5="+r.md5).then(function(i){e+=1,console.log(e),i.data||(r.status=5),e==n&&t.up.start()})})}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("uploader",{attrs:{browse_button:"browse_button",url:t.server_config.url+"/BigFile/",chunk_size:"2MB",filters:{prevent_duplicates:!0},FilesAdded:t.filesAdded,BeforeUpload:t.beforeUpload},on:{inputUploader:t.inputUploader}}),t._v(" "),n("el-button",{attrs:{type:"primary",id:"browse_button"}},[t._v("选择多个文件")]),t._v(" "),n("br"),t._v(" "),n("el-table",{staticStyle:{width:"100%",margin:"10px 10px"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"文件名"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"大小"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.size))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[-1===e.row.status?n("span",[t._v("正在计算MD5")]):t._e(),t._v(" "),1===e.row.status?n("span",[t._v("MD5计算完成，准备上传")]):t._e(),t._v(" "),4===e.row.status?n("span",{staticStyle:{color:"brown"}},[t._v("上传失败")]):t._e(),t._v(" "),5===e.row.status&&100===e.row.percent?n("span",{staticStyle:{color:"chartreuse"}},[t._v("已上传")]):t._e(),t._v(" "),5===e.row.status&&e.row.percent<100?n("span",{staticStyle:{color:"darkgreen"}},[t._v("妙传成功")]):t._e(),t._v(" "),2===e.row.status?n("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:e.row.percent}}):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger"},on:{click:function(n){t.deleteFile(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(e){t.uploadStart()}}},[t._v("开始上传")])],1)},staticRenderFns:[]};var w=n("VU/8")(m,y,!1,function(t){n("rEjW")},"data-v-6b2c19d6",null).exports,U={name:"SingleFileUpload",data:function(){return{server_config:this.global.server_config,files:[],up:{},dialogTableVisible:!1}},computed:{status:function(){return this.files.length>0?this.files[0].status:null}},watch:{status:function(){var t=this;5===this.status&&this.$confirm("文件上传成功","提示",{confirmButtonText:"确定",type:"warning"}).then(function(){t.dialogTableVisible=!1})}},methods:{filesAdded:function(t,e){t.files.length>1&&t.removeFile(t.files[0])},inputUploader:function(t){this.up=t,this.files=t.files},uploadStart:function(){this.dialogTableVisible=!0,this.up.start()}},components:{uploader:f}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("uploader",{attrs:{browse_button:"browse_button",url:t.server_config.url+"/File/",multi_selection:!1,FilesAdded:t.filesAdded,filters:{mime_types:[{title:"Image files",extensions:"jpg,gif,png"},{title:"Zip files",extensions:"zip"}],max_file_size:"400kb"}},on:{inputUploader:t.inputUploader}}),t._v(" "),n("el-button",{attrs:{id:"browse_button",type:"primary"}},[t._v("选择文件")]),t._v(" "),t._l(t.files,function(e){return n("span",[t._v(t._s(e.name))])}),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(e){t.uploadStart()}}},[t._v("开始上传")]),t._v(" "),n("el-dialog",{attrs:{title:"正在上传",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[t.files.length>0?n("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:t.files[0].percent}}):t._e()],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-tag",{attrs:{type:"warning"}},[t._v("只允许上传图片和zip文件, 最大只能上传400kb的文件")])],2)},staticRenderFns:[]};var S=n("VU/8")(U,F,!1,function(t){n("UPH5")},"data-v-0f6b6486",null).exports,k={name:"MultiFileUpload",data:function(){return{files:[],up:{},server_config:this.global.server_config,tableData:[]}},watch:{files:{handler:function(){var t=this;this.tableData=[],this.files.forEach(function(e){t.tableData.push({name:e.name,size:e.size,status:e.status,id:e.id,percent:e.percent})})},deep:!0}},methods:{inputUploader:function(t){this.up=t,this.files=t.files},deleteFile:function(t){var e=this.up.getFile(t);this.up.removeFile(e)}},components:{uploader:f}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("uploader",{ref:"uploader",attrs:{browse_button:"browse_button",url:t.server_config.url+"/File/",filters:{prevent_duplicates:!0}},on:{inputUploader:t.inputUploader}}),t._v(" "),n("el-tag",{attrs:{type:"warning"}},[t._v("不允许选取重复文件")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"primary",id:"browse_button"}},[t._v("选择多个文件")]),t._v(" "),n("br"),t._v(" "),n("el-table",{staticStyle:{width:"100%",margin:"10px 10px"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"文件名"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"大小"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.size))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?n("span",[t._v("准备上传")]):t._e(),t._v(" "),4===e.row.status?n("span",{staticStyle:{color:"brown"}},[t._v("上传失败")]):t._e(),t._v(" "),5===e.row.status?n("span",{staticStyle:{color:"chartreuse"}},[t._v("已上传")]):t._e(),t._v(" "),2===e.row.status?n("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:e.row.percent}}):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger"},on:{click:function(n){t.deleteFile(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(e){t.up.start()}}},[t._v("开始上传")])],1)},staticRenderFns:[]};var x=n("VU/8")(k,A,!1,function(t){n("EZJW")},"data-v-28957a71",null).exports,C={name:"PictureUpload",data:function(){return{server_config:this.global.server_config,files:[],up:{},images:[],changed:!1}},components:{uploader:f},watch:{changed:function(){var t=[];this.files.forEach(function(e){t.push({src:e.imgsrc,file:e})}),this.images=t}},methods:{inputUploader:function(t){this.up=t,this.files=t.files},filesAdded:function(t,e){var n=this;e.forEach(function(t){!function(t,e){if(t&&/image\//.test(t.type)){var n=new FileReader;n.onload=function(){e(null,n.result)},n.onerror=function(){e("oops, something went wrong.")},n.readAsDataURL(t)}}(t.getNative(),function(e,r){t.imgsrc=r,n.changed=!n.changed})})},deleteFile:function(t,e){this.images.splice(t,1),this.up.removeFile(e)}}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("uploader",{attrs:{browse_button:"browse_button",url:t.server_config.url+"/File/",FilesAdded:t.filesAdded},on:{inputUploader:t.inputUploader}}),t._v(" "),n("el-button",{attrs:{id:"browse_button",type:"primary"}},[t._v("选择图片")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-tag",{attrs:{type:"info"}},[t._v("图片预览区域")]),t._v(" "),n("el-row",{staticStyle:{height:"360px",width:"100%","background-color":"honeydew"}},t._l(t.images,function(e,r){return n("el-col",{key:r,staticStyle:{margin:"20px 20px"},attrs:{span:4,offset:r>0?1:0}},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{width:"240px",height:"240px",src:e.src}}),t._v(" "),n("hr"),t._v(" "),n("div",{staticStyle:{padding:"5px",display:"flex"}},[n("div",{staticStyle:{flex:"3",display:"flex","justify-content":"center","align-items":"center"}},[1===e.file.status?n("span",{staticStyle:{color:"aqua"}},[t._v("准备上传")]):t._e(),t._v(" "),4===e.file.status?n("span",{staticStyle:{color:"brown"}},[t._v("上传失败")]):t._e(),t._v(" "),5===e.file.status?n("span",{staticStyle:{color:"chartreuse"}},[t._v("已上传")]):t._e(),t._v(" "),2===e.file.status?n("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:e.file.percent}}):t._e()],1),t._v(" "),n("el-button",{staticClass:"button",staticStyle:{flex:"1"},attrs:{type:"text"},on:{click:function(n){t.deleteFile(r,e.file)}}},[t._v("删除")])],1)])],1)})),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(e){t.up.start()}}},[t._v("开始上传")])],1)},staticRenderFns:[]};var z=n("VU/8")(C,B,!1,function(t){n("CWFx")},"data-v-1d9e7412",null).exports;r.default.use(o.a);var D=new o.a({routes:[{path:"/singleFileUpload",component:S,name:"singleFileUpload"},{path:"/bigFileUpload",component:_,name:"bigFileUpload"},{path:"/stopUpload",component:g,name:"stopUpload"},{path:"/quickUpload",component:w,name:"quickUpload"},{path:"/multiFileUpload",component:x,name:"multiFileUpload"},{path:"/pictureUpload",component:z,name:"pictureUpload"},{path:"/",component:S,name:"singleFileUpload"}]}),E=n("zL8q"),R=n.n(E),M=(n("tvR6"),{server_config:{url:"http://192.168.31.253:8080"}}),I=n("VU/8")(M,null,!1,null,null,null).exports,V=n("8+8L");r.default.config.productionTip=!1,r.default.prototype.global=I,r.default.use(R.a),r.default.use(V.a),new r.default({el:"#app",router:D,components:{App:a},template:"<App/>"})},UPH5:function(t,e){},coYu:function(t,e,n){"use strict";(function(t){var e=n("pFYg"),r=n.n(e);!function(e){if("object"===("undefined"==typeof exports?"undefined":r()(exports)))t.exports=e();else if("function"==typeof define&&n("nErl"))define(e);else{var i;try{i=window}catch(t){i=self}i.SparkMD5=e()}}(function(t){var e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function n(t,e){var n=t[0],r=t[1],i=t[2],a=t[3];r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&i)+e[1]-389564586|0)<<12|a>>>20)+n|0)&n|~a&r)+e[2]+606105819|0)<<17|i>>>15)+a|0)&a|~i&n)+e[3]-1044525330|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&i)+e[5]+1200080426|0)<<12|a>>>20)+n|0)&n|~a&r)+e[6]-1473231341|0)<<17|i>>>15)+a|0)&a|~i&n)+e[7]-45705983|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&i)+e[9]-1958414417|0)<<12|a>>>20)+n|0)&n|~a&r)+e[10]-42063|0)<<17|i>>>15)+a|0)&a|~i&n)+e[11]-1990404162|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&i)+e[13]-40341101|0)<<12|a>>>20)+n|0)&n|~a&r)+e[14]-1502002290|0)<<17|i>>>15)+a|0)&a|~i&n)+e[15]+1236535329|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[1]-165796510|0)<<5|n>>>27)+r|0)&i|r&~i)+e[6]-1069501632|0)<<9|a>>>23)+n|0)&r|n&~r)+e[11]+643717713|0)<<14|i>>>18)+a|0)&n|a&~n)+e[0]-373897302|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[5]-701558691|0)<<5|n>>>27)+r|0)&i|r&~i)+e[10]+38016083|0)<<9|a>>>23)+n|0)&r|n&~r)+e[15]-660478335|0)<<14|i>>>18)+a|0)&n|a&~n)+e[4]-405537848|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[9]+568446438|0)<<5|n>>>27)+r|0)&i|r&~i)+e[14]-1019803690|0)<<9|a>>>23)+n|0)&r|n&~r)+e[3]-187363961|0)<<14|i>>>18)+a|0)&n|a&~n)+e[8]+1163531501|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[13]-1444681467|0)<<5|n>>>27)+r|0)&i|r&~i)+e[2]-51403784|0)<<9|a>>>23)+n|0)&r|n&~r)+e[7]+1735328473|0)<<14|i>>>18)+a|0)&n|a&~n)+e[12]-1926607734|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[5]-378558|0)<<4|n>>>28)+r|0)^r^i)+e[8]-2022574463|0)<<11|a>>>21)+n|0)^n^r)+e[11]+1839030562|0)<<16|i>>>16)+a|0)^a^n)+e[14]-35309556|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[1]-1530992060|0)<<4|n>>>28)+r|0)^r^i)+e[4]+1272893353|0)<<11|a>>>21)+n|0)^n^r)+e[7]-155497632|0)<<16|i>>>16)+a|0)^a^n)+e[10]-1094730640|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[13]+681279174|0)<<4|n>>>28)+r|0)^r^i)+e[0]-358537222|0)<<11|a>>>21)+n|0)^n^r)+e[3]-722521979|0)<<16|i>>>16)+a|0)^a^n)+e[6]+76029189|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[9]-640364487|0)<<4|n>>>28)+r|0)^r^i)+e[12]-421815835|0)<<11|a>>>21)+n|0)^n^r)+e[15]+530742520|0)<<16|i>>>16)+a|0)^a^n)+e[2]-995338651|0)<<23|r>>>9)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[0]-198630844|0)<<6|n>>>26)+r|0)|~i))+e[7]+1126891415|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[14]-1416354905|0)<<15|i>>>17)+a|0)|~n))+e[5]-57434055|0)<<21|r>>>11)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[12]+1700485571|0)<<6|n>>>26)+r|0)|~i))+e[3]-1894986606|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[10]-1051523|0)<<15|i>>>17)+a|0)|~n))+e[1]-2054922799|0)<<21|r>>>11)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[8]+1873313359|0)<<6|n>>>26)+r|0)|~i))+e[15]-30611744|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[6]-1560198380|0)<<15|i>>>17)+a|0)|~n))+e[13]+1309151649|0)<<21|r>>>11)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[4]-145523070|0)<<6|n>>>26)+r|0)|~i))+e[11]-1120210379|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[2]+718787259|0)<<15|i>>>17)+a|0)|~n))+e[9]-343485551|0)<<21|r>>>11)+i|0,t[0]=n+t[0]|0,t[1]=r+t[1]|0,t[2]=i+t[2]|0,t[3]=a+t[3]|0}function r(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return n}function i(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return n}function a(t){var e,i,a,o,s,l,u=t.length,p=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=u;e+=64)n(p,r(t.substring(e-64,e)));for(i=(t=t.substring(e-64)).length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<i;e+=1)a[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(a[e>>2]|=128<<(e%4<<3),e>55)for(n(p,a),e=0;e<16;e+=1)a[e]=0;return o=(o=8*u).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(o[2],16),l=parseInt(o[1],16)||0,a[14]=s,a[15]=l,n(p,a),p}function o(t){var n,r="";for(n=0;n<4;n+=1)r+=e[t>>8*n+4&15]+e[t>>8*n&15];return r}function s(t){var e;for(e=0;e<t.length;e+=1)t[e]=o(t[e]);return t.join("")}function l(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function u(t){var e,n=[],r=t.length;for(e=0;e<r-1;e+=2)n.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,n)}function p(){this.reset()}return"5d41402abc4b2a76b9719d911017c592"!==s(a("hello"))&&function(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n},"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function e(t,e){return(t=0|t||0)<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(n,r){var i,a,o,s,l=this.byteLength,u=e(n,l),p=l;return r!==t&&(p=e(r,l)),u>p?new ArrayBuffer(0):(i=p-u,a=new ArrayBuffer(i),o=new Uint8Array(a),s=new Uint8Array(this,u,i),o.set(s),a)}}(),p.prototype.append=function(t){return this.appendBinary(l(t)),this},p.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var e,i=this._buff.length;for(e=64;e<=i;e+=64)n(this._hash,r(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},p.prototype.end=function(t){var e,n,r=this._buff,i=r.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<i;e+=1)a[e>>2]|=r.charCodeAt(e)<<(e%4<<3);return this._finish(a,i),n=s(this._hash),t&&(n=u(n)),this.reset(),n},p.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},p.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},p.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},p.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},p.prototype._finish=function(t,e){var r,i,a,o=e;if(t[o>>2]|=128<<(o%4<<3),o>55)for(n(this._hash,t),o=0;o<16;o+=1)t[o]=0;r=(r=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),i=parseInt(r[2],16),a=parseInt(r[1],16)||0,t[14]=i,t[15]=a,n(this._hash,t)},p.hash=function(t,e){return p.hashBinary(l(t),e)},p.hashBinary=function(t,e){var n=s(a(t));return e?u(n):n},p.ArrayBuffer=function(){this.reset()},p.ArrayBuffer.prototype.append=function(t){var e,r,a,o,s,l=(r=this._buff.buffer,a=t,o=!0,(s=new Uint8Array(r.byteLength+a.byteLength)).set(new Uint8Array(r)),s.set(new Uint8Array(a),r.byteLength),o?s:s.buffer),u=l.length;for(this._length+=t.byteLength,e=64;e<=u;e+=64)n(this._hash,i(l.subarray(e-64,e)));return this._buff=e-64<u?new Uint8Array(l.buffer.slice(e-64)):new Uint8Array(0),this},p.ArrayBuffer.prototype.end=function(t){var e,n,r=this._buff,i=r.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<i;e+=1)a[e>>2]|=r[e]<<(e%4<<3);return this._finish(a,i),n=s(this._hash),t&&(n=u(n)),this.reset(),n},p.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},p.ArrayBuffer.prototype.getState=function(){var t,e=p.prototype.getState.call(this);return e.buff=(t=e.buff,String.fromCharCode.apply(null,new Uint8Array(t))),e},p.ArrayBuffer.prototype.setState=function(t){return t.buff=function(t,e){var n,r=t.length,i=new ArrayBuffer(r),a=new Uint8Array(i);for(n=0;n<r;n+=1)a[n]=t.charCodeAt(n);return e?a:i}(t.buff,!0),p.prototype.setState.call(this,t)},p.ArrayBuffer.prototype.destroy=p.prototype.destroy,p.ArrayBuffer.prototype._finish=p.prototype._finish,p.ArrayBuffer.hash=function(t,e){var r=s(function(t){var e,r,a,o,s,l,u=t.length,p=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=u;e+=64)n(p,i(t.subarray(e-64,e)));for(r=(t=e-64<u?t.subarray(e-64):new Uint8Array(0)).length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<r;e+=1)a[e>>2]|=t[e]<<(e%4<<3);if(a[e>>2]|=128<<(e%4<<3),e>55)for(n(p,a),e=0;e<16;e+=1)a[e]=0;return o=(o=8*u).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(o[2],16),l=parseInt(o[1],16)||0,a[14]=s,a[15]=l,n(p,a),p}(new Uint8Array(t)));return e?u(r):r},p})}).call(e,n("f1Eh")(t))},gjde:function(t,e){},rEjW:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.47ac48f6dd73c062b4e9.js.map