"use strict";(globalThis["webpackChunkbani_asror_app"]=globalThis["webpackChunkbani_asror_app"]||[]).push([[135],{1131:(e,a,t)=>{t.d(a,{A:()=>d});var l=t(9100),n=t(6159),s=t(5469);const o=n.A.BASE_API,r=l.A.create({baseURL:o});r.defaults.withCredentials=!0;const i=r;i.interceptors.response.use((e=>e),(e=>{if(e.response)return Promise.reject(e);(0,s.UG)("Tidak dapat terhubung ke server")}));const d=i},5465:(e,a,t)=>{t.d(a,{A:()=>k});t(7590);var l=t(1347),n=t(3022),s=t(5469),o=t(455);const r={__name:"DropDownTab",setup(e){const a=(0,n.A)(),t=(0,o.rd)(),r=async()=>{a.dialog({title:"Lapor!",message:"Untuk perbaikan dan/atau penambahan data baru silakan hubungi Admin!",cancel:!0,persistent:!0}).onOk((()=>{t.push("/about")})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))},i=()=>{(0,s.UG)("Fitur belum siap.")};return(e,a)=>{const t=(0,l.g2)("q-item-section"),n=(0,l.g2)("q-icon"),s=(0,l.g2)("q-item"),o=(0,l.g2)("q-list"),d=(0,l.g2)("q-btn-dropdown"),u=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.Wv)(d,{flat:"",round:"",dense:"","dropdown-icon":"more_vert",class:"q-pl-md",color:"green-1"},{default:(0,l.k6)((()=>[(0,l.bF)(o,null,{default:(0,l.k6)((()=>[(0,l.bo)(((0,l.uX)(),(0,l.Wv)(s,{clickable:"",onClick:i},{default:(0,l.k6)((()=>[(0,l.bF)(t,null,{default:(0,l.k6)((()=>[(0,l.eW)("Cetak")])),_:1}),(0,l.bF)(t,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(n,{color:"green",name:"print"})])),_:1})])),_:1})),[[u]]),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(s,{clickable:"",onClick:r},{default:(0,l.k6)((()=>[(0,l.bF)(t,null,{default:(0,l.k6)((()=>[(0,l.eW)("Lapor")])),_:1}),(0,l.bF)(t,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(n,{color:"red",name:"report_problem"})])),_:1})])),_:1})),[[u]])])),_:1})])),_:1})}}};var i=t(5303),d=t(3766),u=t(2589),c=t(4958),m=t(3933),g=t(8657),b=t(272),p=t.n(b);const f=r,k=f;p()(r,"components",{QBtnDropdown:i.A,QList:d.A,QItem:u.A,QItemSection:c.A,QIcon:m.A}),p()(r,"directives",{ClosePopup:g.A})},5133:(e,a,t)=>{t.d(a,{A:()=>v});var l=t(1347),n=t(7763),s=t(4187);const o=(0,l.Lk)("td",{class:"text-left text-italic",style:{width:"56px"}}," Ayah ",-1),r={class:"text-left text-weight-medium"},i={class:"text-right"},d=(0,l.Lk)("td",{class:"text-left text-italic",style:{width:"56px"}}," Ibu ",-1),u={class:"text-left text-weight-medium"},c={class:"text-right"},m={__name:"ParentComponent",props:{parent:{type:Object}},setup(e){const a=e,{keluarga_id:t=null,ayah_id:m=null,ibu_id:g=null,ayah:b="",ibu:p=""}=(0,s.QW)(a.parent);return(e,a)=>{const f=(0,l.g2)("q-btn"),k=(0,l.g2)("q-item-section"),_=(0,l.g2)("q-item"),y=(0,l.g2)("q-list"),h=(0,l.g2)("q-banner");return(0,l.uX)(),(0,l.Wv)(h,{class:"no-padding no-margin bg-transparent"},{default:(0,l.k6)((()=>[(0,l.bF)(y,null,{default:(0,l.k6)((()=>[(0,l.bF)(_,{class:"no-padding"},{default:(0,l.k6)((()=>[(0,l.bF)(k,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(f,{icon:"family_restroom",color:"green-10",style:{width:"46px",height:"46px"},class:(0,n.C4)((0,s.R1)(t)?"text-green-11":null),to:/families/+(0,s.R1)(t),disable:!(0,s.R1)(t)>0,glossy:(0,s.R1)(t)>0,outline:!(0,s.R1)(t)>0},null,8,["class","to","disable","glossy","outline"])])),_:1}),(0,l.bF)(k,null,{default:(0,l.k6)((()=>[(0,l.Lk)("table",null,[(0,l.Lk)("tbody",null,[(0,l.Lk)("tr",null,[o,(0,l.Lk)("td",r,(0,n.v_)((0,s.R1)(b)?(0,s.R1)(b):"?"),1),(0,l.Lk)("td",i,[(0,l.bF)(f,{icon:"info",color:"green-10",dense:"",class:(0,n.C4)((0,s.R1)(m)?"text-green-11":null),to:(0,s.R1)(m)?"/members/"+(0,s.R1)(m):null,outline:!(0,s.R1)(m),glossy:!!(0,s.R1)(m),disable:!(0,s.R1)(m)},null,8,["class","to","outline","glossy","disable"])])]),(0,l.Lk)("tr",null,[d,(0,l.Lk)("td",u,(0,n.v_)((0,s.R1)(p)?(0,s.R1)(p):"?"),1),(0,l.Lk)("td",c,[(0,l.bF)(f,{icon:"info",color:"green-10",dense:"",class:(0,n.C4)((0,s.R1)(g)?"text-green-11":null),to:(0,s.R1)(g)?"/members/"+(0,s.R1)(g):null,outline:!(0,s.R1)(g),glossy:!!(0,s.R1)(g),disable:!(0,s.R1)(g)},null,8,["class","to","outline","glossy","disable"])])])])])])),_:1})])),_:1})])),_:1})])),_:1})}}};var g=t(7453),b=t(3766),p=t(2589),f=t(4958),k=t(2677),_=t(272),y=t.n(_);const h=m,v=h;y()(m,"components",{QBanner:g.A,QList:b.A,QItem:p.A,QItemSection:f.A,QBtn:k.A})},7135:(e,a,t)=>{t.r(a),t.d(a,{default:()=>qe});var l=t(1347),n=t(4187),s=t(7763),o=t(3803),r=t(1659),i=t(455),d=t(3022),u=t(5469),c=t(5133),m=t(7534);const g={class:"text-caption text-italic"},b={class:"text-h6 text-weight-regular"},p={__name:"FamilyProfileSplit",props:{memberId:{type:Number,default:null},familyId:{type:Number,default:null},memberSex:{type:String,default:""}},async setup(e){let a,t;const i=(0,n.KR)(!1),p=(0,n.Kh)({}),f=(0,n.Kh)({}),k=e;if(k.memberId||0===k.memberId)try{const e=([a,t]=(0,l.E)((()=>r.r.get(`members/${k.memberId}`))),a=await a,t(),a);Object.assign(p,e.data.data.member),Object.assign(f,e.data.data.member)}catch(x){const e=(0,o.$)(x.response.data.message),a=e.some((e=>e.toLowerCase().includes("expired")));a?(0,u.f1)():404==x.response.status?console.log(x.response):e.forEach((e=>(0,u.UG)(e)))}const{id:_,nama:y,lp:h}=(0,n.QW)(p),v=()=>{const e={familyId:k.familyId};"L"==k.memberSex.toUpperCase()&&(e.isHusband=!0),"P"==k.memberSex.toUpperCase()&&(e.isWife=!0),(0,m.N6)(e)},A=(0,d.A)(),F=async()=>{if(!k.memberId)return void(0,u.UG)("Setidaknya ada salah satu pasangan dalam keluarga.");let e,a;"l"==h.value.toLowerCase()&&(e="suami",a={suami_id:null}),"p"==h.value.toLowerCase()&&(e="istri",a={istri_id:null}),A.dialog({title:"Konfirmasi",message:`Hapus ${e}?`,cancel:!0,persistent:!1,html:!0}).onOk((async()=>{try{const e=await r.r.put(`families/${k.familyId}`,a);(0,u.VX)(e.data.message),(0,m.l6)()}catch(x){(0,o.$)(x.response.data.message).forEach((e=>{(0,u.UG)(e)}))}}))};return(a,t)=>{const o=(0,l.g2)("q-btn"),r=(0,l.g2)("q-item-section"),d=(0,l.g2)("q-item-label"),u=(0,l.g2)("q-fab-action"),m=(0,l.g2)("q-fab"),p=(0,l.g2)("q-item"),k=(0,l.g2)("q-list"),h=(0,l.g2)("q-banner");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(h,{class:"q-pa-sm bg-green-2 text-dark"},{default:(0,l.k6)((()=>[(0,l.bF)(k,null,{default:(0,l.k6)((()=>[(0,l.bF)(p,{class:"no-padding"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(o,{icon:"L"==e.memberSex?"man":"woman",color:"green-10",style:{width:"46px",height:"46px"},to:(0,n.R1)(_)?"/members/"+(0,n.R1)(_):null,disable:!(0,n.R1)(_),glossy:!!(0,n.R1)(_),outline:!(0,n.R1)(_),class:(0,s.C4)((0,n.R1)(_)?"text-green-11":null)},null,8,["icon","to","disable","glossy","outline","class"])])),_:1}),(0,l.bF)(r,null,{default:(0,l.k6)((()=>[(0,l.bF)(d,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",g,(0,s.v_)("L"==e.memberSex?"Suami":"Istri"),1),(0,l.Lk)("div",b,(0,s.v_)((0,n.R1)(y)?(0,n.R1)(y):"?"),1)])),_:1})])),_:1}),(0,l.bF)(r,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(m,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),icon:"keyboard_arrow_left",direction:"left",padding:"sm",color:"green-9",glossy:""},{default:(0,l.k6)((()=>[(0,l.bF)(u,{padding:"5px","external-label":"","label-position":"bottom",color:"orange",icon:"edit",label:"Edit",onClick:v}),(0,n.R1)(_)?((0,l.uX)(),(0,l.Wv)(u,{key:0,padding:"5px","external-label":"","label-position":"bottom",color:"negative",icon:"delete",label:"Hapus",onClick:F})):(0,l.Q3)("",!0)])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.bF)(h,{class:"q-pa-sm bg-green-3 text-dark"},{default:(0,l.k6)((()=>[(0,l.bF)(c.A,{parent:f},null,8,["parent"])])),_:1})],64)}}};var f=t(7453),k=t(3766),_=t(2589),y=t(4958),h=t(2677),v=t(9039),A=t(7679),F=t(6661),x=t(272),q=t.n(x);const Q=p,w=Q;q()(p,"components",{QBanner:f.A,QList:k.A,QItem:_.A,QItemSection:y.A,QBtn:h.A,QItemLabel:v.A,QFab:A.A,QFabAction:F.A});var R=t(8633),C=t(1131),L=t(4257);const I=()=>(0,L.A)().getToken&&(0,L.A)().getToken.length>0?(0,L.A)().getToken:"FAIL TO GET TOKEN",S=I;t(7590);const V=e=>Array.isArray(e)&&e.every((e=>"object"!==typeof e));function U(e){let a="";return V(e)?(a='<ul style="padding:0; padding-left:8px; min-width:250px;max-width:400px">',a+=e.map((e=>`<li>${e}</li>`)).join(""),a+="</ul>"):a=e,a}async function W({endPoint:e,data:a,rerender:t,loading:l,notify:n,params:s}){try{C.A.defaults.headers.common["Authorization"]=`Bearer ${S()}`,l&&"boolean"===typeof l.value&&(l.value=!0);const o=await C.A.put(e,a,{params:s});return n&&(0,u.VX)(o.data.message),t&&(0,m.l6)(),o.data}catch(o){const a=o?.response?.data?.message;return a?(0,u.UG)(U(a)):console.log(`Error during update ${e}`,o),!1}finally{l&&"boolean"===typeof l.value&&(l.value=!1)}}async function T({endPoint:e,data:a,confirm:t=!0,message:l="Update data ini?",rerender:n,loading:s,notify:o=!0,params:r}){const i=()=>W({endPoint:e,data:a,rerender:n,loading:s,notify:o,params:r});if(t){const e=await(0,u.Ix)(l,!0);return!!e&&await i()}return i()}const K=T,X=(0,l.Lk)("h6",{class:"text-h6 no-margin text-weight-light"}," Info Data Keluarga ",-1),E={__name:"FamilyInfoHomeModal",props:{data:{type:Object}},emits:["onSubmit"],setup(e,{emit:a}){const t=e,s=a,o=(0,n.KR)({}),r=(0,n.KR)(!1);async function i(){const e={alamat:o.value.alamat,catatan:o.value.catatan},a=await K({endPoint:`families/${o.value.id}`,data:e,loading:r});a&&(s("onSubmit"),document.getElementById("btn-close-modal").click())}return(0,l.sV)((()=>{Object.assign(o.value,t.data)})),(e,a)=>{const t=(0,l.g2)("q-card-section"),n=(0,l.g2)("q-input"),s=(0,l.g2)("q-space"),d=(0,l.g2)("q-btn"),u=(0,l.g2)("q-card-actions"),c=(0,l.g2)("q-form"),m=(0,l.g2)("q-spinner-gears"),g=(0,l.g2)("q-inner-loading"),b=(0,l.g2)("q-card"),p=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.Wv)(b,{style:{width:"600px","max-width":"90vw"}},{default:(0,l.k6)((()=>[(0,l.bF)(c,{onSubmit:(0,R.D$)(i,["prevent"]),"accept-charset":"utf-8"},{default:(0,l.k6)((()=>[(0,l.bF)(t,{class:"bg-green-8 text-green-1"},{default:(0,l.k6)((()=>[X])),_:1}),(0,l.bF)(t,{class:"q-pa-sm bg-green-1"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{outlined:"",class:"",modelValue:o.value.alamat,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value.alamat=e),label:"Alamat",placeholder:"Alamat tinggal pasangan/keluarga (singkat)"},null,8,["modelValue"]),(0,l.bF)(n,{outlined:"",class:"q-mt-md",modelValue:o.value.catatan,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value.catatan=e),type:"textarea",label:"Catatan",placeholder:"Catatan mengenai pasangan/keluarga",autogrow:""},null,8,["modelValue"])])),_:1}),(0,l.bF)(u,{class:"bg-green-7"},{default:(0,l.k6)((()=>[(0,l.bF)(s),(0,l.bF)(d,{label:"Simpan",color:"green-9",class:"text-weight-light",type:"submit"}),(0,l.bo)((0,l.bF)(d,{label:"Gagal",color:"secondary",class:"text-weight-light",id:"btn-close-modal"},null,512),[[p]])])),_:1})])),_:1}),(0,l.bF)(g,{showing:r.value},{default:(0,l.k6)((()=>[(0,l.bF)(m,{size:"50px",color:"green"})])),_:1},8,["showing"])])),_:1})}}};var $=t(3341),P=t(3417),B=t(222),O=t(6067),G=t(5034),j=t(5873),D=t(8356),H=t(9667),N=t(8657);const z=E,Y=z;q()(E,"components",{QCard:$.A,QForm:P.A,QCardSection:B.A,QInput:O.A,QCardActions:G.A,QSpace:j.A,QBtn:h.A,QInnerLoading:D.A,QSpinnerGears:H.A}),q()(E,"directives",{ClosePopup:N.A});const J=e=>((0,l.Qi)("data-v-b07e09ca"),e=e(),(0,l.jt)(),e),M={class:"q-mt-md"},Z=J((()=>(0,l.Lk)("td",{class:"text-left text-italic",style:{width:"56px"}}," Alamat ",-1))),ee=J((()=>(0,l.Lk)("td",{class:"text-left text-italic",style:{width:"56px"}}," Catatan ",-1))),ae={__name:"FamilyProfile",async setup(e){let a,t;const c=(0,n.Kh)({}),g=(0,i.lq)(),b=g.params.id,p=(0,n.KR)(!1);try{const e=([a,t]=(0,l.E)((()=>r.r.get(`families/${b}`))),a=await a,t(),a);Object.assign(c,e.data.data.family)}catch(F){const e=(0,o.$)(F.response.data.message),a=e.some((e=>e.toLowerCase().includes("expired")));a?(0,u.f1)():404==F.response.status?console.log(F.response):e.forEach((e=>(0,u.UG)(e)))}const{suami_id:f,istri_id:k,id:_,alamat:y,catatan:h}=(0,n.QW)(c),v=(0,d.A)(),A=async()=>{v.dialog({title:"Konfirmasi",message:"Hapus Keluaga? <br/>\n    <strong>Aksi ini tidak dapat dibatalkan.</strong>",cancel:!0,persistent:!1,html:!0}).onOk((async()=>{try{const e=await r.r.delete(`families/${b}`);(0,u.VX)(e.data.message),history.back()}catch(F){(0,o.$)(F.response.data.message).forEach((e=>{(0,u.UG)(e)}))}}))};return(e,a)=>{const t=(0,l.g2)("q-btn"),o=(0,l.g2)("q-avatar"),r=(0,l.g2)("q-banner"),i=(0,l.g2)("q-tooltip"),d=(0,l.g2)("q-card-section"),u=(0,l.g2)("q-dialog");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(d,{class:"bg-green-7"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(w,{"member-id":parseInt((0,n.R1)(f)),"family-id":parseInt((0,n.R1)(_)),"member-sex":"L"},null,8,["member-id","family-id"])]),(0,l.Lk)("div",M,[(0,l.bF)(w,{"member-id":parseInt((0,n.R1)(k)),"family-id":parseInt((0,n.R1)(_)),"member-sex":"P"},null,8,["member-id","family-id"])]),(0,l.bF)(r,{class:"q-pa-sm bg-green-4 text-dark q-mt-md"},{avatar:(0,l.k6)((()=>[(0,l.bF)(o,{rounded:""},{default:(0,l.k6)((()=>[(0,l.bF)(t,{icon:"fmd_bad",color:"green-10",style:{width:"46px",height:"46px"},onClick:a[0]||(a[0]=e=>p.value=!0),class:(0,s.C4)((0,n.R1)(_)?"text-green-11":null),glossy:!!(0,n.R1)(_),disable:!(0,n.R1)(_),outline:!(0,n.R1)(_)>0},null,8,["class","glossy","disable","outline"])])),_:1})])),default:(0,l.k6)((()=>[(0,l.Lk)("table",null,[(0,l.Lk)("tbody",null,[(0,l.Lk)("tr",null,[Z,(0,l.Lk)("td",null,(0,s.v_)((0,n.R1)(y)?(0,n.R1)(y):"-"),1)]),(0,l.Lk)("tr",null,[ee,(0,l.Lk)("td",null,(0,s.v_)((0,n.R1)(h)?(0,n.R1)(h):"-"),1)])])])])),_:1}),(0,l.bF)(t,{class:"glossy btn-float text-green-11",round:"",color:"negative",icon:"delete",onClick:A},{default:(0,l.k6)((()=>[(0,l.bF)(i,{class:"bg-green-1 text-dark"},{default:(0,l.k6)((()=>[(0,l.eW)(" Hapus keluarga ini ")])),_:1})])),_:1})])),_:1}),(0,l.bF)(u,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value=e),persistent:""},{default:(0,l.k6)((()=>[(0,l.bF)(Y,{data:c,onOnSubmit:(0,n.R1)(m.l6)},null,8,["data","onOnSubmit"])])),_:1},8,["modelValue"])],64)}}};var te=t(2968),le=t(5305),ne=t(8387),se=t(45);const oe=(0,te.A)(ae,[["__scopeId","data-v-b07e09ca"]]),re=oe;q()(ae,"components",{QCardSection:B.A,QBanner:f.A,QAvatar:le.A,QBtn:h.A,QTooltip:ne.A,QDialog:se.A});const ie={__name:"FamilyChildren",async setup(e){let a,t;const c=(0,n.Kh)([]),g=(0,i.lq)(),b=g.params.id.toString();try{const e=([a,t]=(0,l.E)((()=>r.r.get(`families/${b}/children`))),a=await a,t(),a);Object.assign(c,e.data.data.children)}catch(y){const e=(0,o.$)(y.response.data.message),a=e.some((e=>e.toLowerCase().includes("expired")));a?(0,u.f1)():404==y.response.status?console.log(y.response):e.forEach((e=>(0,u.UG)(e)))}const p=(0,d.A)(),f=async e=>{p.dialog({title:"Konfirmasi",message:"Hapus yang bersangkutan dari daftar anak?",cancel:!0,persistent:!1,html:!0}).onOk((async()=>{try{const a=await r.r.delete(`children/${e}`);(0,u.VX)(a.data.message),(0,m.l6)()}catch(y){(0,o.$)(y.response.data.message).forEach((e=>{(0,u.UG)(e)}))}}))},k=()=>{(0,m.N6)({familyId:b,isChild:!0})},_=async(e,a)=>{try{const t=await r.r.put(`children/${e}/short`,{urut:a});(0,u.VX)(t.data.message)}catch(y){(0,o.$)(y.response.data.message).forEach((e=>{(0,u.UG)(e)}))}finally{(0,m.l6)()}};return(e,a)=>{const t=(0,l.g2)("q-btn"),n=(0,l.g2)("q-item-section"),o=(0,l.g2)("q-input"),r=(0,l.g2)("q-popup-edit"),i=(0,l.g2)("q-badge"),d=(0,l.g2)("q-card"),u=(0,l.g2)("q-item-label"),m=(0,l.g2)("q-icon"),g=(0,l.g2)("q-item"),b=(0,l.g2)("q-list"),p=(0,l.g2)("q-avatar"),y=(0,l.g2)("q-banner"),h=(0,l.g2)("q-tooltip"),v=(0,l.g2)("q-card-section");return(0,l.uX)(),(0,l.Wv)(v,{class:"bg-green-7"},{default:(0,l.k6)((()=>[(0,l.bF)(y,{class:"q-pa-sm bg-green-3 text-dark"},{default:(0,l.k6)((()=>[c.length>0?((0,l.uX)(),(0,l.Wv)(b,{key:0,bordered:"",separator:""},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(c,((e,a)=>((0,l.uX)(),(0,l.Wv)(g,{key:a},{default:(0,l.k6)((()=>[(0,l.bF)(n,{side:"",class:"q-pr-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(t,{icon:"info",glossy:"",color:"green-10",style:{width:"34px",height:"34px"},outline:"",to:/members/+e.member_id},null,8,["to"])])),_:2},1024),(0,l.bF)(n,{side:"",class:""},{default:(0,l.k6)((()=>[(0,l.bF)(d,{style:{width:"34px",height:"34px"},class:"flex flex-center bg-green-2 glossy"},{default:(0,l.k6)((()=>[(0,l.bF)(i,{color:"green-8"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.urut?e.urut:"-")+" ",1),(0,l.bF)(r,{modelValue:e.urut,"onUpdate:modelValue":a=>e.urut=a,buttons:"",onSave:a=>_(e.id,e.urut),validate:e=>e>0},{default:(0,l.k6)((a=>[(0,l.bF)(o,{modelValue:a.value,"onUpdate:modelValue":[e=>a.value=e,t=>e.urut=a.value],dense:"",autofocus:"",onKeyup:(0,R.jR)(a.set,["enter"]),type:"number",hint:"Tetapkan nomor urut!",rules:[e=>a.validate(e)||"Jangan 0"]},null,8,["modelValue","onUpdate:modelValue","onKeyup","rules"])])),_:2},1032,["modelValue","onUpdate:modelValue","onSave","validate"])])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,l.bF)(n,{class:""},{default:(0,l.k6)((()=>[(0,l.bF)(u,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.nama),1)])),_:2},1024)])),_:2},1024),(0,l.bF)(n,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(t,{color:"green-2",round:"",size:".8em",glossy:""},{default:(0,l.k6)((()=>[(0,l.bF)(m,{name:"delete",color:"negative",onClick:a=>f(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):((0,l.uX)(),(0,l.Wv)(b,{key:1,bordered:"",separator:""},{default:(0,l.k6)((()=>[(0,l.bF)(g,null,{default:(0,l.k6)((()=>[(0,l.bF)(p,null,{default:(0,l.k6)((()=>[(0,l.bF)(i,{align:"middle",color:"green-8"},{default:(0,l.k6)((()=>[(0,l.eW)("0")])),_:1})])),_:1}),(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)(u,null,{default:(0,l.k6)((()=>[(0,l.eW)("-")])),_:1})])),_:1})])),_:1})])),_:1}))])),_:1}),(0,l.bF)(t,{class:"btn-float text-green-11",round:"",color:"green-10",glossy:"",icon:"add",onClick:k},{default:(0,l.k6)((()=>[(0,l.bF)(h,{class:"bg-green-1 text-dark"},{default:(0,l.k6)((()=>[(0,l.eW)("Tambahkan anak")])),_:1})])),_:1})])),_:1})}}};var de=t(8155),ue=t(8186),ce=t(3933);const me=(0,te.A)(ie,[["__scopeId","data-v-a1e09970"]]),ge=me;q()(ie,"components",{QCardSection:B.A,QBanner:f.A,QList:k.A,QItem:_.A,QItemSection:y.A,QBtn:h.A,QCard:$.A,QBadge:de.A,QPopupEdit:ue.A,QInput:O.A,QItemLabel:v.A,QIcon:ce.A,QAvatar:le.A,QTooltip:ne.A});var be=t(5465);const pe={class:"spinner"},fe={class:"spinner"},ke={__name:"FamilyIndex",emits:["pageTitle","pageSubTitle","showButtonSearch"],setup(e,{emit:a}){const t=a;t("pageTitle","Data Keluarga"),t("pageSubTitle",null),t("showButtonSearch",!0);const s=(0,n.KR)("profile"),o="/families/"+(0,i.lq)().params.id.toString()+"/profile",r="/families/"+(0,i.lq)().params.id.toString()+"/children";return(e,a)=>{const t=(0,l.g2)("q-route-tab"),n=(0,l.g2)("q-tabs"),i=(0,l.g2)("q-separator"),d=(0,l.g2)("q-spinner-cube"),u=(0,l.g2)("q-tab-panel"),c=(0,l.g2)("q-tab-panels"),m=(0,l.g2)("q-card");return(0,l.uX)(),(0,l.Wv)(m,{class:"bg-green-8 text-green-1"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),class:"text-green-5","active-color":"green-1","indicator-color":"green-3",align:"justify","narrow-indicator":""},{default:(0,l.k6)((()=>[(0,l.bF)(t,{to:o,name:"profile",label:"Profil"}),(0,l.bF)(t,{to:r,name:"child",label:"Anak"}),(0,l.bF)(be.A)])),_:1},8,["modelValue"]),(0,l.bF)(i,{dark:""}),(0,l.bF)(c,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=e=>s.value=e),animated:"",class:"bg-green-6",swipeable:""},{default:(0,l.k6)((()=>[(0,l.bF)(u,{name:"profile",class:"no-padding no-margin"},{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.Wv)(l.tY,null,{default:(0,l.k6)((()=>[(0,l.bF)(re)])),fallback:(0,l.k6)((()=>[(0,l.Lk)("div",pe,[(0,l.bF)(d,{color:"green-2",size:"8em"})])])),_:1}))])),_:1}),(0,l.bF)(u,{name:"child",class:"no-padding no-margin"},{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.Wv)(l.tY,null,{default:(0,l.k6)((()=>[(0,l.bF)(ge)])),fallback:(0,l.k6)((()=>[(0,l.Lk)("div",fe,[(0,l.bF)(d,{color:"green-2",size:"8em"})])])),_:1}))])),_:1})])),_:1},8,["modelValue"])])),_:1})}}};var _e=t(8805),ye=t(6562),he=t(6915),ve=t(990),Ae=t(9851),Fe=t(1402);const xe=(0,te.A)(ke,[["__scopeId","data-v-03ce3a2c"]]),qe=xe;q()(ke,"components",{QCard:$.A,QTabs:_e.A,QRouteTab:ye.A,QSeparator:he.A,QTabPanels:ve.A,QTabPanel:Ae.A,QSpinnerCube:Fe.A})}}]);