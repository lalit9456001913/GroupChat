(()=>{var e={};e.id=26,e.ids=[26,888,660],e.modules={6452:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>x,getStaticPaths:()=>m,getStaticProps:()=>h,reportWebVitals:()=>b,routeModule:()=>C,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>j});var a=s(7093),i=s(5244),n=s(1323),o=s(5388),l=s.n(o),d=s(2166),u=s(7048),c=e([u]);u=(c.then?(await c)():c)[0];let p=(0,n.l)(u,"default"),h=(0,n.l)(u,"getStaticProps"),m=(0,n.l)(u,"getStaticPaths"),x=(0,n.l)(u,"getServerSideProps"),g=(0,n.l)(u,"config"),b=(0,n.l)(u,"reportWebVitals"),j=(0,n.l)(u,"unstable_getStaticProps"),y=(0,n.l)(u,"unstable_getStaticPaths"),f=(0,n.l)(u,"unstable_getStaticParams"),v=(0,n.l)(u,"unstable_getServerProps"),w=(0,n.l)(u,"unstable_getServerSideProps"),C=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/dashboard",pathname:"/dashboard",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:u});r()}catch(e){r(e)}})},8639:(e,t,s)=>{"use strict";s.d(t,{z:()=>a});var r=s(6689);let a=e=>(0,r.useCallback)(async t=>{try{return{values:await e.validate(t,{abortEarly:!1}),errors:{}}}catch(e){return{values:{},errors:e.inner.reduce((e,t)=>({...e,[t.path]:{type:t.type??"validation",message:t.message}}),{})}}},[e])},2166:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(997);s(6764);let a=function({Component:e,pageProps:t}){return r.jsx(e,{...t})}},6456:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>h});var a=s(997),i=s(6689),n=s(5641),o=s(3554),l=s(9931),d=s.n(l),u=s(5609),c=s(8639),p=e([n,o]);[n,o]=p.then?(await p)():p;let h=({onCreateGroup:e,options:t,showGroup:s,onCloseGroup:r})=>{let[l,p]=(0,i.useState)(!1),{handleSubmit:h,control:m,register:x,reset:g,watch:b,formState:{errors:j}}=(0,n.useForm)({resolver:(0,c.z)(u.object().shape({groupName:u.string().required("Group Name is required"),groupAdmin:u.object().required("Group Admin is required"),members:u.array().test("is-same-as-group-Admin","Group Admin cannot be included in the members list",e=>e.length&&!e.some(e=>e.value==b("groupAdmin").value))}))}),y=async t=>{await e(t),g({groupName:"",groupAdmin:"",members:""}),r()},f={width:"100%",padding:"10px",marginTop:"4px",marginBottom:"12px",boxSizing:"border-box",border:"1px solid #ccc",borderRadius:"4px",fontSize:"16px"};return(0,a.jsxs)(d(),{isOpen:s,onRequestClose:r,contentLabel:"Create Group Form",style:{content:{width:"50%",height:"50%",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},ariaHideApp:!1,children:[a.jsx("h2",{children:"Create Group Form"}),(0,a.jsxs)("form",{onSubmit:h(y),children:[(0,a.jsxs)("label",{children:["Group Name:",a.jsx("input",{type:"text",name:"groupName",...x("groupName"),style:f}),j.groupName&&a.jsx("p",{style:{color:"red"},children:j.groupName.message})]}),(0,a.jsxs)("label",{children:["Select Group Admin:",a.jsx(n.Controller,{name:"groupAdmin",control:m,render:({field:e})=>a.jsx(o.default,{...e,options:t,style:f})}),j.groupAdmin&&a.jsx("p",{style:{color:"red"},children:j.groupAdmin.message})]}),(0,a.jsxs)("label",{children:["Members:",a.jsx(n.Controller,{name:"members",control:m,render:({field:e})=>a.jsx(o.default,{...e,options:t,isMulti:!0,style:f})}),j.members&&a.jsx("p",{style:{color:"red"},children:j.members.message})]}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"20px",width:"100%"},children:[a.jsx("button",{type:"button",onClick:r,style:{backgroundColor:"#DC3545",color:"white",padding:"12px 20px",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",marginRight:"10px"},children:"Cancel"}),a.jsx("button",{type:"submit",style:{backgroundColor:l?"#0D6EFD":"#007BFF",color:"white",padding:"12px 20px",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",transition:"background-color 0.3s ease"},onMouseOver:()=>p(!0),onMouseOut:()=>p(!1),children:"Create Group"})]})]})]})};r()}catch(e){r(e)}})},8913:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>p});var a=s(997),i=s(6689),n=s(5641),o=s(5609),l=s(8639),d=s(9931),u=s.n(d),c=e([n]);n=(c.then?(await c)():c)[0];let p=({onCreateUser:e,onCloseUser:t,showUser:s})=>{let[r,d]=(0,i.useState)(!1),{handleSubmit:c,control:p,register:h,reset:m,watch:x,formState:{errors:g}}=(0,n.useForm)({resolver:(0,l.z)(o.object().shape({username:o.string().required("Username is required"),email:o.string().email().required("Email is required"),password:o.string().required("Password is required")}))}),b=async s=>{await e(s),m({username:"",password:""}),t()},j={width:"100%",padding:"10px",marginTop:"4px",marginBottom:"12px",boxSizing:"border-box",border:"1px solid #ccc",borderRadius:"4px",fontSize:"16px"};return(0,a.jsxs)(u(),{isOpen:s,onRequestClose:t,contentLabel:"Create User Form",style:{content:{width:"50%",height:"50%",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},ariaHideApp:!1,children:[a.jsx("h2",{children:"Create User Form"}),(0,a.jsxs)("form",{onSubmit:c(b),children:[(0,a.jsxs)("label",{children:["Username:",a.jsx("input",{type:"text",...h("username"),style:j}),g.username&&a.jsx("p",{style:{color:"red"},children:g.username.message})]}),(0,a.jsxs)("label",{children:["Email:",a.jsx("input",{type:"text",...h("email"),style:j}),g.email&&a.jsx("p",{style:{color:"red"},children:g.email.message})]}),(0,a.jsxs)("label",{children:["Password:",a.jsx("input",{type:"password",...h("password"),style:j}),g.password&&a.jsx("p",{style:{color:"red"},children:g.password.message})]}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"20px",width:"100%"},children:[a.jsx("button",{type:"button",onClick:t,style:{backgroundColor:"#DC3545",color:"white",padding:"12px 20px",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",marginRight:"10px"},children:"Cancel"}),a.jsx("button",{type:"submit",style:{backgroundColor:r?"#0D6EFD":"#007BFF",color:"white",padding:"12px 20px",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",transition:"background-color 0.3s ease"},onMouseOver:()=>d(!0),onMouseOut:()=>d(!1),children:"Create User"})]})]})]})};r()}catch(e){r(e)}})},1020:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>p});var a=s(997);s(6689);var i=s(7518),n=s.n(i),o=s(8798),l=s(1163),d=e([o]);o=(d.then?(await d)():d)[0];let u=n().div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`,c=n().div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  h3 {
    margin: 0;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    padding: 8px;
    margin-left: 10px;
    cursor: pointer;
  }
`,p=({auth:e,groups:t,onDeleteGroup:s})=>{let r=(0,l.useRouter)(),i=async(e,t)=>{s(e,t)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(u,{style:{display:"inline-block",verticalAlign:"top"},children:[(0,a.jsxs)("h2",{children:[e?.username," Messaging Groups"]}),t?.length&&t?.map(t=>{if(t?.members?.some(t=>t._id==e.id))return a.jsxs(c,{children:[a.jsx("div",{children:a.jsx("h3",{children:t.name})}),a.jsxs("div",{children:[a.jsx("button",{onClick:()=>{r.push(`/groups/${t?._id}`)},children:"view"}),a.jsx("button",{onClick:()=>{r.push(`/groups/${t?._id}/edit`)},children:"Edit"}),e?.isAdmin&&a.jsx("button",{onClick:()=>{i(t?._id,t?.admin)},children:"Delete"})]})]},t._id)})]}),(0,a.jsxs)(u,{style:{display:"inline-block",verticalAlign:"top"},children:[(0,a.jsxs)("h2",{children:[e?.username," Groups (Admin)"]}),t?.length&&t?.map(t=>{if(t.admin==e.id)return a.jsxs(c,{children:[a.jsx("div",{children:a.jsx("h3",{children:t.name})}),a.jsxs("div",{children:[a.jsx("button",{onClick:()=>{r.push(`/groups/${t?._id}`)},children:"view"}),a.jsx("button",{onClick:()=>{r.push(`/groups/${t?._id}/edit`)},children:"Edit"}),a.jsx("button",{onClick:()=>{i(t?._id,t?.admin)},children:"Delete"})]})]},t._id)})]}),(0,a.jsxs)(u,{style:{display:"inline-block",verticalAlign:"top"},children:[a.jsx("h2",{children:"All Group List"}),t?.length&&t?.map(t=>a.jsxs(c,{children:[a.jsx("div",{children:a.jsx("h3",{children:t.name})}),a.jsxs("div",{children:[a.jsx("button",{onClick:()=>{r.push(`/groups/${t?._id}`)},children:"view"}),a.jsx("button",{onClick:()=>{r.push(`/groups/${t?._id}/edit`)},children:"Edit"}),e.isAdmin&&a.jsx("button",{onClick:()=>{i(t?._id,t?.admin)},children:"Delete"})]})]},t._id))]})]})};r()}catch(e){r(e)}})},8628:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(997);s(6689);let a={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px",backgroundColor:"#4CAF50",color:"#fff",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},i={margin:"0 10px",cursor:"pointer",textDecoration:"none",color:"#fff"},n={margin:"0 10px",cursor:"pointer",textDecoration:"none",color:"#fff",backgroundColor:"#007bff"},o=({onClickLogin:e,onClickLogout:t,onClickCreateUser:s,onClickCreateGroup:o,onClickViewAllGroups:l,onClickViewAllUsers:d,auth:u})=>(0,r.jsxs)("div",{style:a,children:[(0,r.jsxs)("div",{children:[u&&u?.isAdmin&&r.jsx("span",{style:i,onClick:s,children:"Create User"}),r.jsx("span",{style:i,onClick:o,children:"Create Group"})]}),(0,r.jsxs)("div",{children:[u&&r.jsx("span",{style:i,children:u?.username}),u&&r.jsx(r.Fragment,{children:r.jsx("span",{style:n,onClick:t,children:"Logout"})}),!u&&r.jsx(r.Fragment,{children:r.jsx("span",{style:i,onClick:e,children:"Login"})})]})]})},6798:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(997);s(6689);var a=s(7518),i=s.n(a),n=s(1163);let o=i().div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`,l=i().div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  h3 {
    margin: 0;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    padding: 8px;
    margin-left: 10px;
    cursor: pointer;
  }
`,d=({users:e,auth:t})=>{let s=(0,n.useRouter)(),a=e=>{};return(0,r.jsxs)(o,{children:[r.jsx("h2",{children:"User List"}),e?.length&&e?.map(e=>r.jsxs(l,{children:[r.jsxs("div",{children:[r.jsx("h3",{children:e.name}),r.jsxs("p",{children:["Email: ",e.email]})]}),r.jsxs("div",{children:[r.jsx("button",{onClick:()=>{s.push(`/users/${e?._id}`)},children:"View"}),r.jsx("button",{onClick:()=>{s.push(`/users/${e?._id}/edit`)},children:"Edit"}),r.jsx("button",{onClick:()=>{a(e?._id)},children:"Delete"})]})]},e._id))]})}},7048:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>b,getServerSideProps:()=>g});var a=s(997),i=s(6689),n=s(6456),o=s(8628),l=s(8798),d=s(5642),u=s(1163),c=s(4142),p=s(8913),h=s(1020),m=s(6798),x=e([n,l,d,c,p,h]);[n,l,d,c,p,h]=x.then?(await x)():x;let g=async({req:e})=>{try{let t,s;let r=JSON.parse(e.cookies.AUTH);if(!r.token)throw Error("unAuthorized");let a=await (0,l.Fb)();t=a.status?a.data:[];let i=await (0,c.AW)();return s=i.status?i.data:[],{props:{auth:r,groupsData:t,usersData:s}}}catch(e){return{redirect:{destination:"/login",permanent:!1}}}},b=({auth:e,groupsData:t,usersData:s})=>{let[r,x]=(0,i.useState)(!1),[g,b]=(0,i.useState)(!1),[j,y]=(0,i.useState)(t),[f,v]=(0,i.useState)(s),w=(0,u.useRouter)(),[C,k]=(0,i.useState)([]);(0,i.useEffect)(()=>{q()},[g]);let S=async e=>{try{let t={name:e?.groupName,userId:e.groupAdmin.value,members:e.members.map(e=>e.value)};if(t.members.push(e.groupAdmin.value),(await (0,l.sS)(t)).status){let e=await (0,l.Fb)();e.status&&y(e.data),x(!1)}else console.error(t.error)}catch(e){console.error(e)}},A=async e=>{try{(await (0,c.r4)(e)).status&&b(!1)}catch(e){console.log(e)}},_=async(e,t)=>{if((await (0,l.yq)(e,t)).status){let e=await (0,l.Fb)();e.status&&y(e.data)}},P=async e=>{if((await (0,c.h8)(e)).status){let e=await (0,c.AW)();e.status&&v(e.data)}},q=async()=>{let e=await (0,c.AW)();if(e.status){v(e.data);let t=[...e?.data].map(e=>({label:e.username,value:e._id}));k(t)}};return(0,a.jsxs)("div",{children:[a.jsx(o.default,{onClickLogin:()=>{e||w.push("/login")},onClickLogout:()=>{(0,d.M7)(),w.push("/login")},onClickCreateUser:()=>{b(!0)},onClickCreateGroup:()=>{x(!0)},auth:e}),a.jsx(n.default,{onCreateGroup:S,showGroup:r,options:C,onCloseGroup:()=>{x(!1)}}),a.jsx(p.default,{onCreateUser:A,showUser:g,onCloseUser:()=>{b(!1)}}),(0,a.jsxs)("div",{style:{display:"flex"},children:[a.jsx(h.default,{groups:j,auth:e,onDeleteGroup:_}),a.jsx(m.default,{users:f,auth:e,onDeleteUser:P})]})]})};r()}catch(e){r(e)}})},5642:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{M7:()=>d,QV:()=>l,v0:()=>o}),s(1163);var a=s(4874),i=e([a]);let n=new(a=(i.then?(await i)():i)[0]).Cookies,o=()=>n.get("AUTH"),l=e=>n.set("AUTH",e,{path:"/"}),d=e=>n.remove("AUTH",{path:"/"});r()}catch(e){r(e)}})},8798:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{Fb:()=>l,VL:()=>u,sS:()=>o,yq:()=>d});var a=s(1030),i=s(7065),n=e([a]);a=(n.then?(await n)():n)[0];let o=e=>a.ZI(i.aJ,e),l=()=>a.Ql(i.lH),d=(e,t)=>a.pX((0,i.VC)(e,t)),u=e=>a.Ql((0,i.Qf)(e));r()}catch(e){r(e)}})},1030:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{Ql:()=>d,ZI:()=>l,am:()=>p,eg:()=>o,pX:()=>c,sq:()=>u});var a=s(9648),i=s(5642),n=e([a,i]);[a,i]=n.then?(await n)():n;let o=(e,t)=>new Promise((s,r)=>{a.default.post(e,t).then(e=>{e&&e.data&&s({status:!0,data:e.data})}).catch(e=>{s({status:!1,message:e.message})})}),l=(e,t)=>new Promise((s,r)=>{let n=(0,i.v0)(),o={"content-type":"application/json","x-access-token":n.token};a.default.post(e,t,{headers:o}).then(e=>{e&&e.data&&s({status:!0,data:e.data})}).catch(e=>{s({status:!1,message:e.message})})}),d=e=>new Promise((t,s)=>{a.default.get(e).then(e=>{e&&e.data&&t({status:!0,data:e.data})}).catch(e=>{t({status:!1,error:e.message})})}),u=e=>{let t=(0,i.v0)(),s={"content-type":"application/json","x-access-token":t?.token};return new Promise((t,r)=>{a.default.get(e,{headers:s}).then(e=>{e&&e.data&&t({status:!0,data:e.data})}).catch(e=>{t({status:!1,error:e.message})})})},c=(e,t)=>{let s=(0,i.v0)(),r={"content-type":"application/json","x-access-token":s.token};return new Promise((t,s)=>{a.default.delete(e,{headers:r}).then(e=>{e&&e.data&&t({status:!0,data:e.data})}).catch(e=>{t({status:!1,message:e.message})})})},p=(e,t)=>new Promise((t,s)=>{a.default.delete(e).then(e=>{e&&e.data&&t({status:!0,data:e.data})}).catch(e=>{t({status:!1,message:e.message})})});r()}catch(e){r(e)}})},7065:(e,t,s)=>{"use strict";s.d(t,{Ag:()=>l,Fh:()=>o,Gz:()=>d,Qf:()=>p,VC:()=>c,W8:()=>i,Zh:()=>n,aJ:()=>u,lH:()=>h,zc:()=>m});let r=process.env.NEXT_PUBLIC_API_URL||"http://localhost:5000",a=(e,t={})=>{let s=`${r}${e}`;return t&&Object.keys(t).forEach(e=>s=s.replace(`:${e}`,t[e])),s},i=a("/login"),n=a("/users"),o=e=>a("/users/:id",{id:e}),l=()=>a("/users"),d=e=>a("/users/:id",{id:e}),u=a("/groups"),c=(e,t)=>a("/groups/:id/users/:userId",{id:e,userId:t}),p=e=>a("/groups/:id",{id:e}),h=a("/groups"),m=e=>a("/groups/:id/messages",{id:e})},4142:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{AW:()=>d,GA:()=>c,h8:()=>u,pH:()=>o,r4:()=>l});var a=s(1030),i=s(7065),n=e([a]);a=(n.then?(await n)():n)[0];let o=e=>a.eg(i.W8,e),l=e=>a.ZI(i.Zh,e),d=()=>a.sq((0,i.Ag)()),u=e=>a.am((0,i.Fh)(e)),c=e=>a.Ql((0,i.Gz)(e));r()}catch(e){r(e)}})},6764:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},9931:e=>{"use strict";e.exports=require("react-modal")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7518:e=>{"use strict";e.exports=require("styled-components")},5609:e=>{"use strict";e.exports=require("yup")},9648:e=>{"use strict";e.exports=import("axios")},4874:e=>{"use strict";e.exports=import("react-cookie")},5641:e=>{"use strict";e.exports=import("react-hook-form")},3554:e=>{"use strict";e.exports=import("react-select")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[388,342],()=>s(6452));module.exports=r})();