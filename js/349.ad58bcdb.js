"use strict";(globalThis["webpackChunkbani_asror_app"]=globalThis["webpackChunkbani_asror_app"]||[]).push([[349],{9349:(e,a,t)=>{t.r(a),t.d(a,{default:()=>L});var n=t(1347),o=t(7763),r=t(3416),s=t(4187),l=t(5469),c=t(7534);const d={class:"row items-center no-wrap"},i={class:"col"},u={class:"text-subtitle2"},b={class:"col-auto"},p=["innerHTML"],g={__name:"IntroductionIndex",emits:["pageTitle","pageSubTitle","showButtonSearch"],async setup(e,{emit:a}){let t,g;const m=a;m("pageTitle","Laporaran Pengguna"),m("pageSubTitle",null),m("showButtonSearch",!0);const _=(0,s.Kh)({});try{const e=([t,g]=(0,n.E)((()=>r.r.get("reports/introduction"))),t=await t,g(),t);Object.assign(_,e.data.data.reports)}catch(h){console.log("Not Found: reports -> introduction",h.response)}const k=async(e,a,t)=>{try{const n=await r.r.put("reports/introduction",{id:e,is_responded:!0,user_id:a,member_id:t});console.log(n.data),(0,l.VX)(n.data.message),(0,c.l6)()}catch(h){toArray(h.response.data.message).forEach((e=>{(0,l.UG)(e)}))}},f=async e=>{try{const a=await r.r.put(`reports/${e}`,{is_responded:!0});console.log(a.data),(0,l.VX)(a.data.message),(0,c.l6)()}catch(h){toArray(h.response.data.message).forEach((e=>{(0,l.UG)(e)}))}};return(e,a)=>{const t=(0,n.g2)("q-item-section"),r=(0,n.g2)("q-icon"),s=(0,n.g2)("q-item"),l=(0,n.g2)("q-list"),c=(0,n.g2)("q-menu"),g=(0,n.g2)("q-btn"),m=(0,n.g2)("q-card-section"),h=(0,n.g2)("q-separator"),F=(0,n.g2)("q-input"),v=(0,n.g2)("q-card-actions"),A=(0,n.g2)("q-card");return(0,n.uX)(),(0,n.Wv)(l,{bordered:"",separator:"",class:"bg-green-2"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(_,((e,a)=>((0,n.uX)(),(0,n.Wv)(s,{key:a,class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(t,{class:"text-green-10"},{default:(0,n.k6)((()=>[(0,n.bF)(A,{flat:"",bordered:"",class:"my-card bg-green-1"},{default:(0,n.k6)((()=>[(0,n.bF)(m,null,{default:(0,n.k6)((()=>[(0,n.Lk)("div",d,[(0,n.Lk)("div",i,[(0,n.Lk)("div",u,(0,o.v_)(e.username)+" | "+(0,o.v_)(e.email)+" | "+(0,o.v_)(e.phone),1)]),(0,n.Lk)("div",b,[(0,n.bF)(g,{color:"green-10",round:"",flat:"",icon:"more_vert"},{default:(0,n.k6)((()=>[(0,n.bF)(c,{cover:"","auto-close":""},{default:(0,n.k6)((()=>[(0,n.bF)(l,null,{default:(0,n.k6)((()=>[(0,n.bF)(s,{clickable:"",onClick:a=>f(e.id)},{default:(0,n.k6)((()=>[(0,n.bF)(t,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tandai sudah selesai")])),_:1}),(0,n.bF)(t,{avatar:""},{default:(0,n.k6)((()=>[(0,n.bF)(r,{color:"green",name:"done"})])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])])])),_:2},1024),(0,n.bF)(m,null,{default:(0,n.k6)((()=>[(0,n.Lk)("span",{innerHTML:e.message},null,8,p)])),_:2},1024),(0,n.bF)(h),(0,n.bF)(v,null,{default:(0,n.k6)((()=>[(0,n.bF)(F,{type:"number",outlined:"",modelValue:e.member_id,"onUpdate:modelValue":a=>e.member_id=a,label:"ID Member",placeholder:"Masukkan ID Member",class:"green"},{after:(0,n.k6)((()=>[(0,n.bF)(g,{type:"button",label:"Kirim",color:"green-8",onClick:a=>k(e.id,e.user_id,e.member_id)},null,8,["onClick"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})}}};var m=t(3766),_=t(2589),k=t(4958),f=t(3341),h=t(222),F=t(2677),v=t(5389),A=t(3933),q=t(6915),y=t(5034),Q=t(6067),C=t(272),w=t.n(C);const I=g,L=I;w()(g,"components",{QList:m.A,QItem:_.A,QItemSection:k.A,QCard:f.A,QCardSection:h.A,QBtn:F.A,QMenu:v.A,QIcon:A.A,QSeparator:q.A,QCardActions:y.A,QInput:Q.A})}}]);