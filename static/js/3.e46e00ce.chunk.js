"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[3],{8003:function(e,s,a){a.r(s),a.d(s,{default:function(){return h}});var n=a(9403),r=a(1413),i={dialogs:"Dialogs_dialogs__Yt20n",dialogsItems:"Dialogs_dialogsItems__ClmGN",active:"Dialogs_active__r0fW5",messages:"Dialogs_messages__z3eu-",message:"Dialogs_message__wW1H9",error:"Dialogs_error__6wQGm"},t=a(1523),o=a(184),d=function(e){return(0,o.jsx)("div",{className:i.dialog,children:(0,o.jsx)(t.OL,{to:"/dialogs/"+e.id,children:e.name})})},l=function(e){return(0,o.jsx)("div",{className:i.message,children:e.message})},u=(a(2791),a(5705)),g=function(e){var s=(0,u.TA)({initialValues:{newMessageBody:""},validate:function(e){var s={};return e.newMessageBody?e.newMessageBody.length>100&&(s.newMessageBody="Max length is 100 symbols"):s.newMessageBody="Required",s},onSubmit:function(s){e.addMessage(s.newMessageBody)}});return(0,o.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("textarea",(0,r.Z)({className:s.errors.newMessageBody?i.error:"",placeholder:"New message"},s.getFieldProps("newMessageBody"))),s.touched.newMessageBody&&s.errors.newMessageBody&&(0,o.jsx)("div",{style:{color:"red"},children:s.errors.newMessageBody})]}),(0,o.jsx)("button",{type:"submit",children:"Add message"})]})},c=a(8687),m=a(7781),f=a(6024),h=(0,m.qC)((0,c.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(s){e((0,n.k)(s))}}})),f.D)((function(e){var s=e.dialogsPage.messageData.map((function(e){return(0,o.jsx)(l,{message:e.message})})),a=e.dialogsPage.dialogsData.map((function(e){return(0,o.jsx)(d,{name:e.name,id:e.id})}));return(0,o.jsxs)("div",{className:i.dialogs,children:[(0,o.jsx)("div",{className:i.dialogsItems,children:a}),(0,o.jsxs)("div",{className:i.messages,children:[(0,o.jsx)("div",{children:s}),(0,o.jsx)(g,{addMessage:e.addMessage})]})]})}))},6024:function(e,s,a){a.d(s,{D:function(){return u}});var n=a(1413),r=a(3366);a(2791);var i=a(9271),t=a(8687),o=a(184),d=["isAuth"],l=function(e){return{isAuth:e.auth.isAuth}};function u(e){return(0,t.$j)(l)((function(s){var a=s.isAuth,t=function(e,s){if(null==e)return{};var a,n,i=(0,r.Z)(e,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}(s,d);return a?(0,o.jsx)(e,(0,n.Z)({},t)):(0,o.jsx)(i.l_,{to:"/login"})}))}}}]);
//# sourceMappingURL=3.e46e00ce.chunk.js.map