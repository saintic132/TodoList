(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{100:function(e,t,a){e.exports=a(116)},105:function(e,t,a){},111:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(14),i=a.n(o);a(105),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,r=a(28),s=a(73),d=a(12),u=a(19),b=a(8),O=a(168),m=Object(O.a)(),T=Object(O.a)(),f=(c={},Object(b.a)(c,m,[{id:Object(O.a)(),title:"HTML",isDone:!0},{id:Object(O.a)(),title:"CSS",isDone:!0},{id:Object(O.a)(),title:"React",isDone:!1}]),Object(b.a)(c,T,[{id:Object(O.a)(),title:"Bread",isDone:!0},{id:Object(O.a)(),title:"Milk",isDone:!0},{id:Object(O.a)(),title:"Books",isDone:!1}]),c),k=[{id:m,title:"What to learn",filter:"all"},{id:T,title:"What to buy",filter:"all"}],j=function(e,t){return{type:"CHANGE-TODOLIST-FILTER",id:e,filter:t}},E=Object(s.a)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK-FROM-TODOLIST":return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},t.tdId,e[t.tdId].filter((function(e){return e.id!==t.taskId}))));case"ADD-NEW-TASK-FOR-TODOLIST":return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},t.tdId,[{id:"0",title:t.newTask,isDone:t.status}].concat(Object(d.a)(e[t.tdId]))));case"CHANGE-TASK-STATUS":return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},t.tdId,e[t.tdId].map((function(e){return e.id===t.taskId?Object(u.a)(Object(u.a)({},e),{},{isDone:t.status}):e}))));case"CHANGE-TASK-TITLE":return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},t.tdId,e[t.tdId].map((function(e){return e.id===t.taskId?Object(u.a)(Object(u.a)({},e),{},{title:t.title}):e}))));case"ADD-TODOLIST":return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},t.id,[]));case"REMOVE-TODOLIST":var a=Object(u.a)({},e);return delete a[t.id],a;default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!==t.id}));case"ADD-TODOLIST":return[{id:t.id,title:t.title,filter:"all"}].concat(Object(d.a)(e));case"CHANGE-TODOLIST-TITLE":return e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{title:t.title}):e}));case"CHANGE-TODOLIST-FILTER":return e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{filter:t.filter}):e}));default:return e}}}),p=Object(s.b)(E),v=(a(111),a(37)),I=a.n(v),h=a(18),C=a(166),S=a(169),g=a(160),D=Object(n.memo)((function(e){console.log("Add item form called");var t=Object(n.useState)(""),a=Object(h.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(!1),r=Object(h.a)(c,2),s=r[0],d=r[1],u=Object(n.useState)(null),b=Object(h.a)(u,2),O=b[0],m=b[1],T=Object(n.useState)(null),f=Object(h.a)(T,2),k=f[0],j=f[1],E=Object(n.useRef)(null),p=Object(n.useCallback)((function(){if(""!==o.trim()){var t,a,n,l;if(e.checkbox)if(null===(t=e.tasksTitle)||void 0===t?void 0:t.find((function(e){return e===o})))j("Already have this task"),null===(a=E.current)||void 0===a||a.focus();else e.addItem(o.trim(),s),i(""),d(!1),j(null),m(null);if(!e.checkbox)if(null===(n=e.todolistsTitle)||void 0===n?void 0:n.find((function(e){return e===o})))j("Already have this Todolist"),null===(l=E.current)||void 0===l||l.focus();else j(null),m(null),e.addItem(o.trim(),!0),i("")}else{var c;m("Enter the value"),null===(c=E.current)||void 0===c||c.focus()}}),[e.checkbox,o,e.tasksTitle,e.todolistsTitle,e.addItem,s]);return l.a.createElement("div",null,l.a.createElement(C.a,{inputRef:E,id:"outlined-basic",label:e.checkbox?"Task":"TodoList",variant:"outlined",value:o,onChange:function(e){O&&k||(m(null),j(null),i(""),i(e.currentTarget.value))},error:!!O||!!k,helperText:O||k,onBlur:function(){O||m(null)}}),e.checkbox&&l.a.createElement(S.a,{className:I.a.checkBoxForNewInput,checked:s,onChange:function(e){d(e.currentTarget.checked)},inputProps:{"aria-label":"controlled"}}),l.a.createElement(g.a,{style:{transform:"scale(0.75)",maxWidth:"30px",maxHeight:"30px",minWidth:"30px",minHeight:"30px"},onClick:p,variant:"contained",color:"primary"},"+"))})),y=Object(n.memo)((function(e){console.log("EditableSpan form called");var t=Object(n.useState)(!1),a=Object(h.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(""),r=Object(h.a)(c,2),s=r[0],d=r[1],u=Object(n.useCallback)((function(){i(!0),d(e.title)}),[e.title]),b=Object(n.useCallback)((function(){i(!1),e.onChangeHandlerForTaskTitle(s)}),[e.onChangeHandlerForTaskTitle,s]),O=Object(n.useCallback)((function(t){"Enter"===t.key&&(i(!1),e.onChangeHandlerForTaskTitle(s))}),[e.onChangeHandlerForTaskTitle,s]),m=Object(n.useCallback)((function(e){d(e.currentTarget.value)}),[s]);return o?l.a.createElement(C.a,{id:"filled-basic",value:s,onBlur:b,onKeyPress:O,autoFocus:!0,onChange:m}):l.a.createElement("span",{onDoubleClick:u},e.title)})),L=a(159),A=a(161),x=Object(n.memo)((function(e){console.log("Task render");var t=Object(r.b)(),a=Object(n.useCallback)((function(){var a,n;t((a=e.task.id,n=e.todolistId,{type:"REMOVE-TASK-FROM-TODOLIST",taskId:a,tdId:n}))}),[t,e.task.id,e.todolistId]),o=Object(n.useCallback)((function(a){var n,l,o;t((n=e.task.id,l=a.currentTarget.checked,o=e.todolistId,{type:"CHANGE-TASK-STATUS",taskId:n,status:l,tdId:o}))}),[t,e.task.id,e.todolistId]),i=Object(n.useCallback)((function(a){var n,l,o;t((n=e.task.id,l=a,o=e.todolistId,{type:"CHANGE-TASK-TITLE",taskId:n,title:l,tdId:o}))}),[t,e.task.id,e.todolistId]);return l.a.createElement("div",null,l.a.createElement("li",{key:e.task.id,className:e.task.isDone?I.a.completedTask:""},l.a.createElement(S.a,{style:{transform:"scale(0.75)"},checked:e.task.isDone,onChange:o,inputProps:{"aria-label":"controlled"}}),l.a.createElement(y,{title:e.task.title,onChangeHandlerForTaskTitle:i}),l.a.createElement(L.a,{"aria-label":"delete",size:"small"},l.a.createElement(A.a,{className:I.a.marginToRemoveButton,fontSize:"inherit",onClick:a}))))})),F=Object(n.memo)((function(e){console.log("TodoList called");var t=Object(r.c)((function(t){return t.tasks[e.id]})),a=Object(r.c)((function(t){return t.todolists.filter((function(t){return t.id===e.id}))[0]})),o=Object(r.b)(),i=a.id,c=t;"active"===a.filter&&(c=c.filter((function(e){return!e.isDone}))),"completed"===a.filter&&(c=c.filter((function(e){return e.isDone})));var s=Object(n.useCallback)((function(e,t){o({type:"ADD-NEW-TASK-FOR-TODOLIST",newTask:e,tdId:i,status:t})}),[o,i]),d=Object(n.useCallback)((function(){o(j(i,"all"))}),[o,i]),u=Object(n.useCallback)((function(){o(j(i,"active"))}),[o,i]),b=Object(n.useCallback)((function(){o(j(i,"completed"))}),[o,i]),O=Object(n.useCallback)((function(){o(function(e){return{type:"REMOVE-TODOLIST",id:e}}(i))}),[o,i]),m=Object(n.useCallback)((function(e){o(function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(i,e))}),[o,i]),T=Object(n.useMemo)((function(){return t.map((function(e){return e.title}))}),[t]);return l.a.createElement("div",{className:I.a.styleForTodolist},l.a.createElement("h3",null,l.a.createElement(y,{title:a.title,onChangeHandlerForTaskTitle:m}),l.a.createElement(L.a,{"aria-label":"delete",size:"small"},l.a.createElement(A.a,{className:I.a.marginToRemoveButton,fontSize:"inherit",onClick:O}))),l.a.createElement(D,{tasksTitle:T,addItem:s,checkbox:!0}),l.a.createElement("ul",null,c.map((function(e){return l.a.createElement(x,{key:e.id,task:e,todolistId:i})}))),l.a.createElement("div",null,l.a.createElement(g.a,{style:{transform:"scale(1)",fontSize:"10px"},variant:"all"===a.filter?"contained":"text",onClick:d},"All"),l.a.createElement(g.a,{style:{transform:"scale(1)",fontSize:"10px"},color:"primary",variant:"active"===a.filter?"contained":"text",onClick:u},"Active"),l.a.createElement(g.a,{style:{transform:"scale(1)",fontSize:"10px"},color:"secondary",variant:"completed"===a.filter?"contained":"text",onClick:b},"Completed")))})),_=a(170),N=a(174),R=a(167),H=a(175),w=a(176),B=a(173),M=a(89),K=a.n(M);var G=function(){console.log("App called");var e=Object(r.c)((function(e){return e.todolists})),t=Object(r.b)(),a=Object(n.useCallback)((function(e){var a=function(e){return{type:"ADD-TODOLIST",title:e,id:Object(O.a)()}}(e);t(a)}),[t]),o=Object(n.useMemo)((function(){return e.map((function(e){return e.title}))}),[e]);return l.a.createElement("div",null,l.a.createElement(_.a,{position:"static"},l.a.createElement(N.a,{variant:"dense"},l.a.createElement(R.a,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}},l.a.createElement(K.a,null)),l.a.createElement(H.a,{variant:"h6",color:"inherit",component:"div"},"TodoList"))),l.a.createElement(w.a,{fixed:!0},l.a.createElement(B.a,{container:!0,style:{padding:"10px"}},l.a.createElement(D,{addItem:a,todolistsTitle:o})),l.a.createElement(B.a,{container:!0,spacing:2,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3}},e.map((function(e){return l.a.createElement(B.a,{key:e.id},l.a.createElement(F,{key:e.id,id:e.id}))})))))};i.a.render(l.a.createElement(r.a,{store:p},l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,a){e.exports={styleForTodolist:"TodoList_styleForTodolist__3ssp-",marginToRemoveButton:"TodoList_marginToRemoveButton__1Sv-Q",checkBoxForNewInput:"TodoList_checkBoxForNewInput__TguB3",colorForError:"TodoList_colorForError__3qM11",borderColorForError:"TodoList_borderColorForError__K1E4I",filterForTasks:"TodoList_filterForTasks__Id49I",completedTask:"TodoList_completedTask__3TIIU"}}},[[100,1,2]]]);
//# sourceMappingURL=main.b045a8cb.chunk.js.map