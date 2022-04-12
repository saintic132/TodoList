(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{104:function(e,t,n){},110:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),o=n.n(r);n(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,l=n(32),s=n(72),u=n(12),d=n(24),f=n(8),m=n(168),T=Object(m.a)(),O=Object(m.a)(),b=(c={},Object(f.a)(c,T,[{id:Object(m.a)(),title:"HTML",isDone:!0},{id:Object(m.a)(),title:"CSS",isDone:!0},{id:Object(m.a)(),title:"React",isDone:!1}]),Object(f.a)(c,O,[{id:Object(m.a)(),title:"Bread",isDone:!0},{id:Object(m.a)(),title:"Milk",isDone:!0},{id:Object(m.a)(),title:"Books",isDone:!1}]),c),E=[{id:T,title:"What to learn",filter:"all"},{id:O,title:"What to buy",filter:"all"}],v=function(e,t){return{type:"CHANGE-TODOLIST-FILTER",id:e,filter:t}},p=Object(s.a)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK-FROM-TODOLIST":return Object(d.a)(Object(d.a)({},e),{},Object(f.a)({},t.tdId,e[t.tdId].filter((function(e){return e.id!==t.taskId}))));case"ADD-NEW-TASK-FOR-TODOLIST":return Object(d.a)(Object(d.a)({},e),{},Object(f.a)({},t.tdId,[{id:"0",title:t.newTask,isDone:t.status}].concat(Object(u.a)(e[t.tdId]))));case"CHANGE-TASK-STATUS":return Object(d.a)(Object(d.a)({},e),{},Object(f.a)({},t.tdId,e[t.tdId].map((function(e){return e.id===t.taskId?Object(d.a)(Object(d.a)({},e),{},{isDone:t.status}):e}))));case"CHANGE-TASK-TITLE":return Object(d.a)(Object(d.a)({},e),{},Object(f.a)({},t.tdId,e[t.tdId].map((function(e){return e.id===t.taskId?Object(d.a)(Object(d.a)({},e),{},{title:t.title}):e}))));case"ADD-TODOLIST":return Object(d.a)(Object(d.a)({},e),{},Object(f.a)({},t.id,[]));case"REMOVE-TODOLIST":var n=Object(d.a)({},e);return delete n[t.id],n;default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!==t.id}));case"ADD-TODOLIST":return[{id:t.id,title:t.title,filter:"all"}].concat(Object(u.a)(e));case"CHANGE-TODOLIST-TITLE":var n=e.find((function(e){return e.id===t.id}));return n&&(n.title=t.title),Object(u.a)(e);case"CHANGE-TODOLIST-FILTER":var a=e.find((function(e){return e.id===t.id}));return a&&(a.filter=t.filter),Object(u.a)(e);default:return e}}}),j=Object(s.b)(p),h=(n(110),n(42)),k=n.n(h),I=n(18),S=n(166),D=n(169),g=n(160);function y(e){var t=Object(a.useState)(""),n=Object(I.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(!1),l=Object(I.a)(c,2),s=l[0],u=l[1],d=Object(a.useState)(null),f=Object(I.a)(d,2),m=f[0],T=f[1],O=Object(a.useState)(null),b=Object(I.a)(O,2),E=b[0],v=b[1],p=Object(a.useRef)(null);return i.a.createElement("div",null,i.a.createElement(S.a,{inputRef:p,id:"outlined-basic",label:e.checkbox?"Task":"TodoList",variant:"outlined",value:r,onChange:function(e){T(null),v(null),o(""),o(e.currentTarget.value)},error:!!m||!!E,helperText:m||E,onBlur:function(){T(null)}}),e.checkbox&&i.a.createElement(D.a,{className:k.a.checkBoxForNewInput,checked:s,onChange:function(e){u(e.currentTarget.checked)},inputProps:{"aria-label":"controlled"}}),i.a.createElement(g.a,{style:{transform:"scale(0.75)",maxWidth:"30px",maxHeight:"30px",minWidth:"30px",minHeight:"30px"},onClick:function(){if(""!==r.trim()){var t,n,a,i;if(e.checkbox)if(null===(t=e.tasksTitle)||void 0===t?void 0:t.find((function(e){return e===r})))v("Already have this task"),null===(n=p.current)||void 0===n||n.focus();else e.addItem(r.trim(),s),o(""),u(!1),v(null),T(null);if(!e.checkbox)if(null===(a=e.todolistsTitle)||void 0===a?void 0:a.find((function(e){return e===r})))v("Already have this Todolist"),null===(i=p.current)||void 0===i||i.focus();else v(null),T(null),e.addItem(r.trim(),!0),o("")}else{var c;T("Enter the value"),null===(c=p.current)||void 0===c||c.focus()}},variant:"contained",color:"primary"},"+"))}var L=function(e){var t=Object(a.useState)(!1),n=Object(I.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(""),l=Object(I.a)(c,2),s=l[0],u=l[1];return r?i.a.createElement(S.a,{id:"filled-basic",value:s,onBlur:function(){o(!1),e.onChangeHandlerForTaskTitle(s)},onKeyPress:function(t){"Enter"===t.key&&(o(!1),e.onChangeHandlerForTaskTitle(s))},autoFocus:!0,onChange:function(e){u(e.currentTarget.value)}}):i.a.createElement("span",{onDoubleClick:function(){o(!0),u(e.title)}},e.title)},x=n(159),A=n(161);var C=function(e){var t=Object(l.c)((function(t){return t.tasks[e.id]})),n=Object(l.c)((function(t){return t.todolists.filter((function(t){return t.id===e.id}))[0]})),a=Object(l.b)(),r=n.id,o=t;return"active"===n.filter&&(o=o.filter((function(e){return!e.isDone}))),"completed"===n.filter&&(o=o.filter((function(e){return e.isDone}))),i.a.createElement("div",{className:k.a.styleForTodolist},i.a.createElement("h3",null,i.a.createElement(L,{title:n.title,onChangeHandlerForTaskTitle:function(e){a(function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(r,e))}}),i.a.createElement(x.a,{"aria-label":"delete",size:"small"},i.a.createElement(A.a,{className:k.a.marginToRemoveButton,fontSize:"inherit",onClick:function(){a(function(e){return{type:"REMOVE-TODOLIST",id:e}}(r))}}))),i.a.createElement(y,{tasksTitle:t.map((function(e){return e.title})),addItem:function(e,t){a({type:"ADD-NEW-TASK-FOR-TODOLIST",newTask:e,tdId:r,status:t})},checkbox:!0}),i.a.createElement("ul",null,o.map((function(e){return i.a.createElement("li",{key:e.id,className:e.isDone?k.a.completedTask:""},i.a.createElement(D.a,{style:{transform:"scale(0.75)"},checked:e.isDone,onChange:function(t){var n,i;a((n=e.id,i=t.currentTarget.checked,{type:"CHANGE-TASK-STATUS",taskId:n,status:i,tdId:r}))},inputProps:{"aria-label":"controlled"}}),i.a.createElement(L,{title:e.title,onChangeHandlerForTaskTitle:function(t){a({type:"CHANGE-TASK-TITLE",taskId:e.id,title:t,tdId:r})}}),i.a.createElement(x.a,{"aria-label":"delete",size:"small"},i.a.createElement(A.a,{className:k.a.marginToRemoveButton,fontSize:"inherit",onClick:function(){a({type:"REMOVE-TASK-FROM-TODOLIST",taskId:e.id,tdId:r})}})))}))),i.a.createElement("div",null,i.a.createElement(g.a,{style:{transform:"scale(1)",fontSize:"10px"},variant:"all"===n.filter?"contained":"text",onClick:function(){a(v(r,"all"))}},"All"),i.a.createElement(g.a,{style:{transform:"scale(1)",fontSize:"10px"},color:"primary",variant:"active"===n.filter?"contained":"text",onClick:function(){a(v(r,"active"))}},"Active"),i.a.createElement(g.a,{style:{transform:"scale(1)",fontSize:"10px"},color:"secondary",variant:"completed"===n.filter?"contained":"text",onClick:function(){a(v(r,"completed"))}},"Completed")))},F=n(170),_=n(174),N=n(167),R=n(175),w=n(176),H=n(173),B=n(89),K=n.n(B);var M=function(){var e=Object(l.c)((function(e){return e.todolists})),t=Object(l.b)();return i.a.createElement("div",null,i.a.createElement(F.a,{position:"static"},i.a.createElement(_.a,{variant:"dense"},i.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}},i.a.createElement(K.a,null)),i.a.createElement(R.a,{variant:"h6",color:"inherit",component:"div"},"TodoList"))),i.a.createElement(w.a,{fixed:!0},i.a.createElement(H.a,{container:!0,style:{padding:"10px"}},i.a.createElement(y,{addItem:function(e){var n=function(e){return{type:"ADD-TODOLIST",title:e,id:Object(m.a)()}}(e);t(n)},todolistsTitle:e.map((function(e){return e.title}))})),i.a.createElement(H.a,{container:!0,spacing:2,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3}},e.map((function(e){return i.a.createElement(H.a,null,i.a.createElement(C,{key:e.id,id:e.id}))})))))};o.a.render(i.a.createElement(l.a,{store:j},i.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,n){e.exports={styleForTodolist:"TodoList_styleForTodolist__3ssp-",marginToRemoveButton:"TodoList_marginToRemoveButton__1Sv-Q",checkBoxForNewInput:"TodoList_checkBoxForNewInput__TguB3",colorForError:"TodoList_colorForError__3qM11",borderColorForError:"TodoList_borderColorForError__K1E4I",filterForTasks:"TodoList_filterForTasks__Id49I",completedTask:"TodoList_completedTask__3TIIU"}},99:function(e,t,n){e.exports=n(115)}},[[99,1,2]]]);
//# sourceMappingURL=main.5369f148.chunk.js.map