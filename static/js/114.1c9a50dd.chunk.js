"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[114],{114:function(t,s,e){e.r(s),e.d(s,{default:function(){return b}});var r=e(5671),n=e(3144),o=e(136),i=e(5716),a=e(2791),u="ProfileInfo_descriptionBlock__lbg-l",p=e(6674),l=e(184),d=function(t){(0,o.Z)(e,t);var s=(0,i.Z)(e);function e(){var t;(0,r.Z)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=s.call.apply(s,[this].concat(o))).state={editMode:!1,status:t.props.status},t.activateEditMode=function(){t.setState({editMode:!0})},t.deactivateEditMode=function(){t.setState({editMode:!1}),t.props.updateStatus(t.state.status)},t.onStatusChange=function(s){t.setState({status:s.currentTarget.value})},t}return(0,n.Z)(e,[{key:"componentDidUpdate",value:function(t,s,e){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return(0,l.jsxs)("div",{children:[!this.state.editMode&&(0,l.jsx)("div",{children:(0,l.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"No Status"})}),this.state.editMode&&(0,l.jsx)("div",{children:(0,l.jsx)("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactivateEditMode,value:this.state.status})})]})}}]),e}(a.Component),c=function(t){(0,o.Z)(e,t);var s=(0,i.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,n.Z)(e,[{key:"render",value:function(){return this.props.profile?(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("img",{src:this.props.profile.photos.large}),(0,l.jsx)(d,{status:this.props.status,updateStatus:this.props.updateStatus}),(0,l.jsx)("div",{children:this.props.profile.fullName})]})}):(0,l.jsx)(p.p,{})}}]),e}(a.Component),h=c,g=e(4136),f=e(1413),A="MyPosts_postsBlock__FLQlx",v="MyPosts_posts__KksIg",x="MyPosts_error__mbT40",m="Post_item__3Ko6E",P=function(t){return(0,l.jsxs)("div",{className:m,children:[(0,l.jsx)("img",{src:"data:image/png;base64,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"}),t.message,(0,l.jsxs)("div",{children:[t.likesCount,(0,l.jsx)("span",{children:"likes"})]})]})},j=e(5705),D=a.memo((function(t){var s=t.posts.map((function(t){return(0,l.jsx)(P,{likesCount:t.likesCount,message:t.message})}));return(0,l.jsxs)("div",{className:A,children:[(0,l.jsx)("h3",{children:"My Posts"}),(0,l.jsx)(C,{addPost:t.addPost}),(0,l.jsx)("div",{className:v,children:"New posts"}),s]})})),C=function(t){var s=(0,j.TA)({initialValues:{newPostText:""},validate:function(t){var s={};return t.newPostText?t.newPostText.length>10&&(s.newPostText="Max length is 10 symbols"):s.newPostText="Required",s},onSubmit:function(s){t.addPost(s.newPostText)}});return(0,l.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("textarea",(0,f.Z)({className:s.errors.newPostText?x:"",placeholder:"Post message"},s.getFieldProps("newPostText"))),s.touched.newPostText&&s.errors.newPostText&&(0,l.jsx)("div",{style:{color:"red"},children:s.errors.newPostText})]}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{type:"submit",children:"Add post"})})]})},S=e(8687),K=(0,S.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){t((0,g.Wl)(s))}}}))(D),L=function(t){return(0,l.jsxs)("div",{children:[(0,l.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,l.jsx)(K,{})]})},Q=e(9271),E=e(6024),z=e(7781),F=function(t){(0,o.Z)(e,t);var s=(0,i.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,n.Z)(e,[{key:"componentDidMount",value:function(){var t=Number(this.props.match.params.userId);t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,l.jsx)(L,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})}}]),e}(a.Component),b=(0,z.qC)((0,S.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:g.et,getStatus:g.lR,updateStatus:g.Nf}),Q.EN,E.D)(F)},6024:function(t,s,e){e.d(s,{D:function(){return l}});var r=e(1413),n=e(3366);e(2791);var o=e(9271),i=e(8687),a=e(184),u=["isAuth"],p=function(t){return{isAuth:t.auth.isAuth}};function l(t){return(0,i.$j)(p)((function(s){var e=s.isAuth,i=function(t,s){if(null==t)return{};var e,r,o=(0,n.Z)(t,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],s.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}(s,u);return e?(0,a.jsx)(t,(0,r.Z)({},i)):(0,a.jsx)(o.l_,{to:"/login"})}))}}}]);
//# sourceMappingURL=114.1c9a50dd.chunk.js.map