(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{116:function(e,t,a){"use strict";var n=a(146),r=a.n(n),i=a(147),c=a(2);t.a=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="",s=[],l="";if("GET"===(a=a.toUpperCase())||"DELETE"===a){for(var u in n)s.push(encodeURIComponent(u)+"="+encodeURIComponent(n[u]));l=s.join("&")}return"POST"===a&&(n instanceof FormData?e=n:(e=JSON.stringify(n),o="application/json")),"PUT"===a&&(n instanceof FormData?(a="POST",n.append("_method","PUT"),e=n):(e=JSON.stringify(n),o="application/json")),fetch("http://95.179.128.38/api"+t+(l?"?"+l:""),{body:e,method:a,credentials:"include",withCredentials:!0,headers:Object(c.a)({},o?{"Content-Type":o}:{},{"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.getItem("access_token")})}).then(function(){var e=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=6;break}return e.next=3,t.json();case 3:return e.abrupt("return",e.sent);case 6:if(401!==t.status){e.next=9;break}return window.location.href="/manager/login",e.abrupt("return");case 9:return e.next=11,t.json();case 11:throw e.sent;case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}},122:function(e,t,a){"use strict";var n=a(128);t.a=n.a},123:function(e,t,a){"use strict";var n=a(125);t.a=n.a},125:function(e,t,a){"use strict";var n=a(121),r=a(2),i=a(0),c=a.n(i),o=a(16),s=a.n(o);t.a=s()(function(e){var t=e.Button;return Object(r.a)({},t)})(function(e){var t=e.text,a=void 0===t?"button":t,r=e.variant,i=void 0===r?"default":r,o=e.className,s=void 0===o?"":o,l=e.classes,u=(e.theme,e.getRef),m=void 0===u?function(){}:u,d=Object(n.a)(e,["text","variant","className","classes","theme","getRef"]);return c.a.createElement("button",Object.assign({},d,{ref:m,className:l[i]+" "+s}),a)})},128:function(e,t,a){"use strict";var n=a(121),r=a(2),i=a(0),c=a.n(i),o=a(16),s=a.n(o);t.a=s()(function(e){var t=e.Typography;return Object(r.a)({},t)})(function(e){var t=e.text,a=void 0===t?"text":t,r=e.variant,i=void 0===r?"default":r,o=e.className,s=void 0===o?"":o,l=e.classes,u=(e.theme,e.getRef),m=void 0===u?function(){}:u,d=Object(n.a)(e,["text","variant","className","classes","theme","getRef"]);return c.a.createElement("span",Object.assign({},d,{ref:m,className:l[i]+" "+s}),a)})},129:function(e,t,a){"use strict";var n=a(134);t.a=n.a},131:function(e,t,a){"use strict";var n=a(121),r=a(2),i=a(0),c=a.n(i),o=a(16),s=a.n(o),l=a(440);t.a=s()(function(e){var t=e.Link;return Object(r.a)({},t)})(function(e){var t=e.text,a=e.variant,r=void 0===a?"default":a,i=e.children,o=void 0===i?[]:i,s=e.className,u=void 0===s?"":s,m=e.classes,d=(e.theme,e.getRef),f=void 0===d?function(){}:d,p=Object(n.a)(e,["text","variant","children","className","classes","theme","getRef"]);return c.a.createElement(l.a,Object.assign({},p,{ref:f,className:m[r]+" "+u}),t||o)})},133:function(e,t,a){"use strict";var n=a(121),r=a(2),i=a(0),c=a.n(i),o=a(16),s=a.n(o),l=a(122);t.a=s()(function(e){var t=e.Dialog,a=e.Palette.color4;return Object(r.a)({},t,{text:{color:a}})})(function(e){var t=e.className,a=void 0===t?"":t,r=e.classes,i=(e.theme,e.text),o=void 0===i?"":i,s=e.getRef,u=void 0===s?function(){}:s,m=Object(n.a)(e,["className","classes","theme","text","getRef"]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",Object.assign({ref:u},m,{className:r.alert+" "+a}),c.a.createElement(l.a,{text:o||"alert text",className:r.text})))})},134:function(e,t,a){"use strict";var n=a(2),r=a(0),i=a.n(r),c=a(16),o=a.n(c);t.a=o()(function(e){var t=e.Panel;return Object(n.a)({},t)})(function(e){var t=e.children,a=void 0===t?[]:t,n=e.variant,r=void 0===n?"default":n,c=e.classes,o=e.className,s=void 0===o?"":o;return i.a.createElement("div",{className:c[r]+" "+s},a)})},135:function(e,t,a){"use strict";var n=a(121),r=a(2),i=a(0),c=a.n(i),o=a(16),s=a.n(o),l=a(167);a(163);t.a=s()(function(e){var t=e.Input;return Object(r.a)({},t,{root:{width:"calc(100% - 12px)",marginBottom:12}})})(function(e){var t=e.variant,a=void 0===t?"default":t,r=e.className,i=void 0===r?"":r,o=e.classes,s=(e.theme,Object(n.a)(e,["variant","className","classes","theme"]));return"date"===a?c.a.createElement(l.a,Object.assign({},s,{className:o[a]+" "+i+" "+o.root,customInput:c.a.createElement("input",Object.assign({},s.form?{form:s.form}:{},{type:"text"}))})):c.a.createElement("input",Object.assign({},s,{className:o[a]+" "+i+" "+o.root}))})},136:function(e,t,a){"use strict";var n=a(2),r=a(0),i=a.n(r),c=a(16),o=a.n(c)()(function(e){var t=e.Overlay,a=void 0===t?{}:t;return Object(n.a)({},a)})(function(e){var t=e.variant,a=void 0===t?"default":t,n=(e.className,e.classes),r=e.children,c=void 0===r?[]:r,o=e.onClose,s=void 0===o?function(){}:o;e.getRef;return i.a.createElement("div",{className:n[a],onClick:s},c)});t.a=o},137:function(e,t,a){"use strict";var n=a(135);t.a=n.a},139:function(e,t,a){"use strict";var n=a(117),r=a(124),i=a(120),c=a(118),o=a(119),s=a(0),l=a.n(s),u=a(16),m=a.n(u),d=a(129),f=a(125),p=a(128),v=a(131),g=a(2),h=a(136),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={displayAsideMenu:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.side,a=void 0===t?"left":t,n=e.variant,r=void 0===n?"default":n,i=e.className,c=void 0===i?"":i,o=e.classes,s=e.visible,u=e.onClose,m=void 0===u?function(){}:u;this.state.displayAsideMenu;return s?l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{variant:r}),l.a.createElement("div",{className:o[r]+" "+o[a]+" "+c},l.a.createElement("div",{className:o.asdieAppHeader},l.a.createElement(f.a,{variant:"contrast",text:l.a.createElement("i",{className:"fa fa-bars"}),onClick:m})),l.a.createElement(v.a,{to:"/users",variant:"anti"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),l.a.createElement(v.a,{to:"/news",variant:"anti"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),l.a.createElement(v.a,{to:"/tags",variant:"anti"},"\u0422\u044d\u0433\u0438"),l.a.createElement(v.a,{to:"/persons",variant:"anti"},"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),l.a.createElement(v.a,{to:"/media",variant:"anti"},"\u041c\u0435\u0434\u0438\u0430"),l.a.createElement(v.a,{to:"/video",variant:"anti"},"\u0412\u0438\u0434\u0435\u043e"),l.a.createElement(v.a,{to:"/rss",variant:"anti"},"RSS"))):""}}]),t}(l.a.Component),E=m()(function(e){var t=e.Aside;return Object(g.a)({},t,{left:{left:0},right:{right:0}})})(b),x=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={displayAsideMenu:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=(t.children,t.onAsideOpen,this.state.displayAsideMenu);return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:a.root},l.a.createElement(f.a,{text:l.a.createElement("i",{className:"fa fa-bars"}),variant:"icon",onClick:function(){return e.setState({displayAsideMenu:!0})}}),l.a.createElement(p.a,{text:"Incomer"}),l.a.createElement("div",{className:a.primaryButtons},l.a.createElement(f.a,{variant:"icon",text:l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{text:"logout"})),onClick:function(){localStorage.clear(),window.location.replace("/manager")}}))),l.a.createElement(E,{onClose:function(){return e.setState({displayAsideMenu:!1})},visible:n}))}}]),t}(l.a.Component),O=m()(function(){return{root:{padding:0,gridArea:"header",display:"flex",alignItems:"center"},primaryButtons:{right:12,lineHeight:"30px",position:"absolute","& a":{marginLeft:12}},asdieAppHeader:{display:"flex",marginBottom:12}}})(x);t.a=O},140:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n=function(e){return function(t){t({type:"CHANGE_DISPLAY_FILES_MANAGER",payload:e})}},r=function(e){return function(t){t({type:"FILES_PAGE_ERROR_MESSAGE",payload:e})}}},151:function(e,t,a){"use strict";var n=a(116),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(n.a)("/image","GET",t).then(function(t){var a=t.data,n=t.total,r=void 0===n?0:n;e.setState({total:r,images:a})}).catch(function(t){var a=e.props.filesListPageErrorMessage;a(t.message),setTimeout(function(){a("")},2600)})},i=function(e,t,a){var r=["title","description","path","image"],i=new FormData;for(var c in t)-1!==r.indexOf(c)&&i.append(c,t[c]);return Object(n.a)("/image/"+a,"PUT",i).then(function(){}).catch(function(t){e.props.filesListPageErrorMessage(t.message),setTimeout(function(){e.props.filesListPageErrorMessage(t.message)},2600)})},c=function(e,t){var a=["title","description","path","image"],r=new FormData;for(var i in t)-1!==a.indexOf(i)&&r.append(i,t[i]);return Object(n.a)("/image","POST",r).then(function(){e.setState({currentItem:{},newItem:{title:"",description:"",path:"",image:void 0}})}).catch(function(t){e.props.filesListPageErrorMessage(t.message),setTimeout(function(){e.props.filesListPageErrorMessage(t.message)},2600)})},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?Object(n.a)("/image/"+t,"GET").then(function(t){e.setState({currentItem:t})}).catch(function(t){var a=e.props.filesListPageErrorMessage;a(t.message),setTimeout(function(){a("")},2600)}):e.setState({currentItem:!1})},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t)return Object(n.a)("/image/"+t,"DELETE").then(function(t){e.setState({currentItem:t})}).catch(function(t){var a=e.props.filesListPageErrorMessage;a(t.message),setTimeout(function(){a("")},2600)})};a.d(t,"b",function(){return s}),a.d(t,"a",function(){return c}),a.d(t,"c",function(){return i}),a.d(t,"e",function(){return r}),a.d(t,"d",function(){return o})},166:function(e,t,a){"use strict";var n=a(117),r=a(124),i=a(120),c=a(118),o=a(119),s=a(132),l=a(0),u=a.n(l),m=a(16),d=a.n(m),f=a(38),p=a(140),v=a(151),g=a(129),h=a(123),b=a(137),E=a(17),x=d()(function(){return{root:{height:30,position:"relative",display:"flex",flexWrap:"wrap",overflow:"hidden","& input":{maxWidth:"calc(100% - 44px)"}}}})(function(e){var t=e.classes,a=e.getSubmitRef,n=void 0===a?function(){}:a,r=e.disabled,i=void 0!==r&&r,c=e.className,o=void 0===c?"":c,s=e.inputProperties,l=void 0===s?{}:s,m=e.submitProperties,d=void 0===m?{}:m;return u.a.createElement("div",{className:t.root+" "+o},u.a.createElement(b.a,Object.assign({type:"text",name:"query",placeholder:"search...",disabled:i},l,{defaultValue:Object(E.b)("query")||""})),u.a.createElement(h.a,Object.assign({},d,{variant:"icon",disabled:i,getRef:n,text:u.a.createElement("i",{className:"fa fa-search"})})))}),O=a(122),j=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={search:""},a.render=function(){var e=a.props,t=e.classes,n=e.children,r=void 0===n?[]:n,i=e.onCreate,c=void 0===i?function(){}:i,o=e.onSearch,s=void 0===o?function(){}:o;return u.a.createElement(g.a,{className:t.root},u.a.createElement(h.a,{variant:"tab",onClick:c,text:u.a.createElement(u.a.Fragment,null,"Create file ",u.a.createElement("i",{className:"fa fa-plus"}))}),u.a.createElement(x,{inputProperties:{onChange:function(e){return a.setState({search:e.target.value})},onKeyPress:function(e){"Enter"===e.key&&s(a.state.search)}},submitProperties:{onClick:function(){return s(a.state.search)}},className:t.search}),u.a.createElement("div",{className:t.control},u.a.createElement(O.a,{text:"Sort by name"}),u.a.createElement(h.a,{variant:"icon",text:u.a.createElement("i",{className:"fa fa-sort-up"})})),u.a.createElement("div",{className:t.list},r))},a}return Object(o.a)(t,e),t}(u.a.PureComponent),y=d()(function(e){return{root:{gridArea:"files-list-manager",width:"calc(100% - 48px)",display:"flex",flexWrap:"wrap",overflow:"hidden",margin:12,"& > button":{marginRight:12}},search:{width:"100%",marginTop:12,marginBottom:12},list:{width:"100%",height:"calc(100% - 24px)",overflowY:"auto"},control:{width:"100%",borderBottom:"1px dashed "+e.Palette.color7,'& > input[type="checkbox"]':{marginRight:12}}}})(j),w=a(231),N=a.n(w),C=d()(function(e){var t=e.Palette.color7;return{root:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid "+t,"& i.fa-file":{width:26,fontSize:26,marginRight:14,color:t}},textContainer:{flexGrow:3},name:{display:"block",fontSize:16},title:{display:"block",marginLeft:10,cursor:"pointer"},image:{width:100,cursor:"pointer",display:"block"}}})(function(e){var t=e.classes,a=(e.extension,e.id),n=void 0!==a&&a,r=e.name,i=void 0===r?"":r,c=e.url,o=void 0===c?"":c,s=e.title,l=void 0===s?"":s,m=e.description,d=void 0===m?"":m,f=e.onDelete,p=void 0===f?function(){}:f,v=e.onEdit,g=void 0===v?function(){}:v;return u.a.createElement("div",{className:t.root},u.a.createElement(u.a.Fragment,null,u.a.createElement(N.a,{loaderImage:!0,imageProps:{src:o,onClick:function(){return g(n)},title:l,className:t.image}}),u.a.createElement("div",{className:t.textContainer},u.a.createElement(O.a,{text:l,className:t.title}),u.a.createElement(O.a,{variant:"label",text:d,className:t.title}))),u.a.createElement(O.a,{text:i,className:t.name}),u.a.createElement(h.a,{variant:"icon",text:u.a.createElement("i",{className:"fa fa-edit"}),onClick:function(){return g(n)}}),u.a.createElement(h.a,{variant:"icon",text:u.a.createElement("i",{className:"fa fa-close"}),onClick:function(){return p(n)}}))}),S=a(135),I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={file:"",imagePreviewUrl:""},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n),this.props.onChange(n)}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.currentItem,r=this.state.imagePreviewUrl,i=null;return i=r||n&&n.url?u.a.createElement("img",{src:r||n.url}):u.a.createElement("div",{className:a.previewText},"Please select an Image for Preview"),u.a.createElement("div",null,u.a.createElement("form",{onSubmit:function(t){return e._handleSubmit(t)}},u.a.createElement("input",{className:a.fileInput,type:"file",onChange:function(t){return e._handleImageChange(t)}})),u.a.createElement("div",{className:a.imgPreview},i))}}]),t}(u.a.Component),P=d()(function(e){e.Palette.color7;return{h3:{marginLeft:15},fileInput:{borderBottom:"4px solid #d3d3d3",borderRight:"4px solid #d3d3d3",borderTop:"1px solid #000",borderLeft:"1px solid #000",padding:"10px",margin:"15px",width:"calc(100% - 48px)",cursor:"pointer"},imgPreview:{textAlign:"center",margin:"5px 15px",height:"200px",width:"calc(100% - 24px)",borderLeft:"1px solid #808080",borderRight:"1px solid #808080",borderTop:"5px solid #808080",borderBottom:"5px solid #808080","&>img":{maxWidth:"100%",height:"100%"}},previewText:{width:"100%",marginTop:"20px"},submitButton:{padding:"12px",marginLeft:"10px",background:"#fff",border:"4px solid #d3d3d3",borderRadius:"15px",fontWeight:"700",fontSize:"10pt",cursor:"pointer"},"submitButton:hover":{background:"#efefef"},centerText:{textAlign:"center",width:"500px"}}})(I),L=a(9),k=a(40),A=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={currentItem:!1,newItem:{title:"",description:" ",path:""}},a.render=function(){var e=a.props,t=e.classes,n=e.onEdit,r=void 0===n?function(){}:n,i=e.onCreate,c=void 0===i?function(){}:i,o=e.isSelectable,l=e.onSelect,m=a.state,d=m.currentItem,f=m.newItem;return u.a.createElement(g.a,{className:t.root},u.a.createElement("div",{className:t.container},d&&u.a.createElement(u.a.Fragment,null,u.a.createElement(P,{currentItem:d,onChange:function(e){d.image=e,a.setState({currentItem:d})}}),u.a.createElement(O.a,{variant:"label",text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),u.a.createElement(S.a,{type:"text",name:"title",value:d.title,onChange:function(e){d.title=e.target.value,a.setState({currentItem:d})}}),u.a.createElement(O.a,{variant:"label",text:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),u.a.createElement(S.a,{type:"text",name:"description",value:d.description,onChange:function(e){d.description=e.target.value,a.setState({currentItem:d})}}),u.a.createElement(h.a,{variant:"tab",text:u.a.createElement(u.a.Fragment,null,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),onClick:function(){Object(v.c)(Object(s.a)(Object(s.a)(a)),d,d.id).then(function(){r()})}}),o&&u.a.createElement(h.a,{variant:"tab",text:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",onClick:function(){return l(d)}})),!d&&u.a.createElement(u.a.Fragment,null,u.a.createElement(P,{currentItem:f,onChange:function(e){f.image=e,a.setState({newItem:f})}}),u.a.createElement(O.a,{variant:"label",text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),u.a.createElement(S.a,{type:"text",name:"title",value:f.title,onChange:function(e){f.title=e.target.value,a.setState({newItem:f})}}),u.a.createElement(O.a,{variant:"label",text:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),u.a.createElement(S.a,{type:"text",name:"description",value:f.description,onChange:function(e){f.description=e.target.value,a.setState({newItem:f})}}),u.a.createElement(h.a,{variant:"tab",text:"Create",onClick:function(){Object(v.a)(Object(s.a)(Object(s.a)(a)),f).then(function(){c()})}}))))},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){e.editId!==this.props.editId&&Object(v.d)(this,this.props.editId)}}]),t}(u.a.Component),R=Object(k.a)(function(e){return{catchedErrorMessage:e.filesList.catchedErrorMessage}},function(e){return{filesListPageErrorMessage:Object(L.b)(p.b,e)}})(d()(function(e){return{root:{gridArea:"folders-list-manager",width:"calc(100% - 48px)",display:"flex",flexWrap:"wrap",overflow:"hidden",margin:12,"& > button":{marginRight:12}},container:{width:"100%"},button:{fontSize:24},search:{width:"100%",marginTop:12,marginBottom:12},list:{width:"100%",height:"calc(100% - 24px)",overflowY:"auto"},control:{width:"100%",borderBottom:"1px dashed "+e.Palette.color7,'& > input[type="checkbox"]':{marginRight:12}}}})(A)),T=a(133),M=(a(125),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={displayAsideMenu:!1,images:[],editId:!1},a.render=function(){var e=a.state,t=e.images,n=e.editId,r=a.props,i=(r.classes,r.catchedErrorMessage),c=r.isSelectable,o=void 0!==c&&c,l=r.onSelect;r.onClose;return u.a.createElement(u.a.Fragment,null,u.a.createElement(y,{onCreate:function(){console.log("create"),a.setState({editId:!1})},onSearch:function(e){Object(v.e)(Object(s.a)(Object(s.a)(a)),{search:e})}},t.map(function(e,t){return u.a.createElement(C,Object.assign({key:t},e,{onEdit:function(e){return a.setState({editId:e})},onDelete:function(e){return Object(v.b)(Object(s.a)(Object(s.a)(a)),e).then(function(){return Object(v.e)(Object(s.a)(Object(s.a)(a)))})}}))})),u.a.createElement(R,{isSelectable:o,editId:n,onEdit:function(){return Object(v.e)(Object(s.a)(Object(s.a)(a)))},onCreate:function(){return Object(v.e)(Object(s.a)(Object(s.a)(a)))},onSelect:l}),!!i&&u.a.createElement(T.a,{text:i}))},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){Object(v.e)(this)}}]),t}(u.a.Component));t.a=Object(f.b)(function(e){return{catchedErrorMessage:e.filesList.catchedErrorMessage,dataLoadingFlag:e.filesList.dataLoadingFlag,foldersList:e.filesList.foldersList,filesList:e.filesList.filesList}},function(e){return{filesListPageErrorMessage:Object(L.b)(p.b,e)}})(d()(function(e){e.Global,e.Palette;return{}})(M))},454:function(e,t,a){"use strict";a.r(t);var n=a(117),r=a(120),i=a(118),c=a(119),o=a(2),s=a(0),l=a.n(s),u=a(16),m=a.n(u),d=a(139),f=a(122),p=a(5),v=a(166),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=a.props.dataLoadingFlag;return l.a.createElement(l.a.Fragment,null,e&&l.a.createElement(p.a,null),l.a.createElement(d.a,null),l.a.createElement(f.a,{text:"Files manager",variant:"title"}),l.a.createElement(v.a,null))},a}return Object(c.a)(t,e),t}(l.a.Component),h=m()(function(e){var t=e.Global;e.Palette;return{"@global":Object(o.a)({},t,{"#root":Object(o.a)({},t["#root"],{display:"grid",gridTemplateAreas:"\n\t\t\t\t'header header'\n\t\t\t\t'page-title control-elements'\n\t\t\t\t'files-list-manager folders-list-manager '\n\t\t\t",gridTemplateRows:"30px 50px auto",gridTemplateColumns:"50% 50%"})}),primaryButtons:{right:12,lineHeight:"30px",position:"absolute","& a":{marginLeft:12}},asdieAppHeader:{display:"flex",marginBottom:12}}})(g);t.default=h}}]);
//# sourceMappingURL=17.6bdb9662.chunk.js.map