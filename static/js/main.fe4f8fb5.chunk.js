(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],[,function(e,t,a){e.exports={marginToRemoveTaskButton:"TodoList_marginToRemoveTaskButton__2Lskv",checkBoxForNewInput:"TodoList_checkBoxForNewInput__TguB3",colorForError:"TodoList_colorForError__3qM11",borderColorForError:"TodoList_borderColorForError__K1E4I",filterForTasks:"TodoList_filterForTasks__Id49I",completedTask:"TodoList_completedTask__3TIIU"}},,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),i=(a(13),a(5)),l=a(2),s=(a(14),a(17)),u=a(1),m=a.n(u);var d=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),s=Object(l.a)(i,2),u=s[0],d=s[1],k=Object(n.useState)(""),f=Object(l.a)(k,2),T=f[0],b=f[1],v=Object(n.useState)(""),E=Object(l.a)(v,2),h=E[0],p=E[1];return o.a.createElement("div",null,o.a.createElement("h3",null,e.title),o.a.createElement("div",null,o.a.createElement("input",{className:T||h?m.a.borderColorForError:"",value:r,onChange:function(e){b(null),p(null),c(e.currentTarget.value)}}),o.a.createElement("input",{className:m.a.checkBoxForNewInput,type:"checkbox",checked:u,onChange:function(e){d(e.currentTarget.checked)}}),o.a.createElement("button",{onClick:function(){r.trim()?e.tasks.find((function(e){return e.title===r}))?p("Already have this task"):(e.addNewTask(r,u),c(""),d(!1),p(null)):b("Enter value")}},"+"),T&&o.a.createElement("div",{className:m.a.colorForError},T),h&&o.a.createElement("div",{className:m.a.colorForError},h)),o.a.createElement("ul",null,e.tasks.map((function(t){return o.a.createElement("li",{key:t.id,className:t.isDone?m.a.completedTask:""},o.a.createElement("input",{type:"checkbox",checked:t.isDone,onClick:function(a){e.changeStatusTask(t.id,a.currentTarget.checked)}}),o.a.createElement("span",null,t.title),o.a.createElement("button",{className:m.a.marginToRemoveTaskButton,onClick:function(){e.removeTaskFromTasks(t.id)}},"x"))}))),o.a.createElement("div",null,o.a.createElement("button",{className:"all"===e.filter?m.a.filterForTasks:"",onClick:function(){e.setFilter("all")}},"All"),o.a.createElement("button",{className:"active"===e.filter?m.a.filterForTasks:"",onClick:function(){e.setFilter("active")}},"Active"),o.a.createElement("button",{className:"completed"===e.filter?m.a.filterForTasks:"",onClick:function(){e.setFilter("completed")}},"Completed")))};var k=function(){var e=Object(n.useState)([{id:Object(s.a)(),title:"HTML",isDone:!0},{id:Object(s.a)(),title:"CSS",isDone:!0},{id:Object(s.a)(),title:"React",isDone:!1}]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),u=Object(l.a)(c,2),m=u[0],k=u[1],f=a;return"active"===m&&(f=f.filter((function(e){return!e.isDone}))),"completed"===m&&(f=f.filter((function(e){return e.isDone}))),o.a.createElement(d,{title:"What to learn",tasks:f,removeTaskFromTasks:function(e){var t=a.filter((function(t){return t.id!==e}));r(Object(i.a)(t))},filter:m,setFilter:k,addNewTask:function(e,t){var n={id:Object(s.a)(),title:e,isDone:t};r([n].concat(Object(i.a)(a)))},changeStatusTask:function(e,t){var n=a.find((function(t){return t.id===e}));n&&(n.isDone=t,r(Object(i.a)(a)))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.fe4f8fb5.chunk.js.map