"use strict";(globalThis["webpackChunkbani_asror_app"]=globalThis["webpackChunkbani_asror_app"]||[]).push([[949],{5465:(e,a,t)=>{t.d(a,{A:()=>_});var l=t(1347),n=t(3022),s=t(5469),o=t(455);const r={__name:"DropDownTab",setup(e){const a=(0,n.A)(),t=(0,o.rd)(),r=async()=>{a.dialog({title:"Lapor!",message:"Untuk perbaikan dan/atau penambahan data baru silakan hubungi Admin!",cancel:!0,persistent:!0}).onOk((()=>{t.push("/about")})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))},i=()=>{(0,s.UG)("Fitur belum siap.")};return(e,a)=>{const t=(0,l.g2)("q-item-section"),n=(0,l.g2)("q-icon"),s=(0,l.g2)("q-item"),o=(0,l.g2)("q-list"),d=(0,l.g2)("q-btn-dropdown"),u=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.Wv)(d,{flat:"",round:"",dense:"","dropdown-icon":"more_vert",class:"q-pl-md",color:"green-1"},{default:(0,l.k6)((()=>[(0,l.bF)(o,null,{default:(0,l.k6)((()=>[(0,l.bo)(((0,l.uX)(),(0,l.Wv)(s,{clickable:"",onClick:i},{default:(0,l.k6)((()=>[(0,l.bF)(t,null,{default:(0,l.k6)((()=>[(0,l.eW)("Cetak")])),_:1}),(0,l.bF)(t,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(n,{color:"green",name:"print"})])),_:1})])),_:1})),[[u]]),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(s,{clickable:"",onClick:r},{default:(0,l.k6)((()=>[(0,l.bF)(t,null,{default:(0,l.k6)((()=>[(0,l.eW)("Lapor")])),_:1}),(0,l.bF)(t,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(n,{color:"red",name:"report_problem"})])),_:1})])),_:1})),[[u]])])),_:1})])),_:1})}}};var i=t(5303),d=t(3766),u=t(2589),c=t(4958),g=t(3933),b=t(8657),m=t(272),p=t.n(m);const k=r,_=k;p()(r,"components",{QBtnDropdown:i.A,QList:d.A,QItem:u.A,QItemSection:c.A,QIcon:g.A}),p()(r,"directives",{ClosePopup:b.A})},5133:(e,a,t)=>{t.d(a,{A:()=>F});var l=t(1347),n=t(7763),s=t(4187);const o=(0,l.Lk)("td",{class:"text-left text-italic",style:{width:"56px"}}," Ayah ",-1),r={class:"text-left text-weight-medium"},i={class:"text-right"},d=(0,l.Lk)("td",{class:"text-left text-italic",style:{width:"56px"}}," Ibu ",-1),u={class:"text-left text-weight-medium"},c={class:"text-right"},g={__name:"ParentComponent",props:{parent:{type:Object}},setup(e){const a=e,{keluarga_id:t=null,ayah_id:g=null,ibu_id:b=null,ayah:m="",ibu:p=""}=(0,s.QW)(a.parent);return(e,a)=>{const k=(0,l.g2)("q-btn"),_=(0,l.g2)("q-item-section"),f=(0,l.g2)("q-item"),h=(0,l.g2)("q-list"),v=(0,l.g2)("q-banner");return(0,l.uX)(),(0,l.Wv)(v,{class:"no-padding no-margin bg-transparent"},{default:(0,l.k6)((()=>[(0,l.bF)(h,null,{default:(0,l.k6)((()=>[(0,l.bF)(f,{class:"no-padding"},{default:(0,l.k6)((()=>[(0,l.bF)(_,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(k,{icon:"family_restroom",color:"green-10",style:{width:"46px",height:"46px"},class:(0,n.C4)((0,s.R1)(t)?"text-green-11":null),to:/families/+(0,s.R1)(t),disable:!(0,s.R1)(t)>0,glossy:(0,s.R1)(t)>0,outline:!(0,s.R1)(t)>0},null,8,["class","to","disable","glossy","outline"])])),_:1}),(0,l.bF)(_,null,{default:(0,l.k6)((()=>[(0,l.Lk)("table",null,[(0,l.Lk)("tbody",null,[(0,l.Lk)("tr",null,[o,(0,l.Lk)("td",r,(0,n.v_)((0,s.R1)(m)?(0,s.R1)(m):"?"),1),(0,l.Lk)("td",i,[(0,l.bF)(k,{icon:"info",color:"green-10",dense:"",class:(0,n.C4)((0,s.R1)(g)?"text-green-11":null),to:(0,s.R1)(g)?"/members/"+(0,s.R1)(g):null,outline:!(0,s.R1)(g),glossy:!!(0,s.R1)(g),disable:!(0,s.R1)(g)},null,8,["class","to","outline","glossy","disable"])])]),(0,l.Lk)("tr",null,[d,(0,l.Lk)("td",u,(0,n.v_)((0,s.R1)(p)?(0,s.R1)(p):"?"),1),(0,l.Lk)("td",c,[(0,l.bF)(k,{icon:"info",color:"green-10",dense:"",class:(0,n.C4)((0,s.R1)(b)?"text-green-11":null),to:(0,s.R1)(b)?"/members/"+(0,s.R1)(b):null,outline:!(0,s.R1)(b),glossy:!!(0,s.R1)(b),disable:!(0,s.R1)(b)},null,8,["class","to","outline","glossy","disable"])])])])])])),_:1})])),_:1})])),_:1})])),_:1})}}};var b=t(7453),m=t(3766),p=t(2589),k=t(4958),_=t(2677),f=t(272),h=t.n(f);const v=g,F=v;h()(g,"components",{QBanner:b.A,QList:m.A,QItem:p.A,QItemSection:k.A,QBtn:_.A})},330:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ie});var l=t(1347),n=t(4187),s=t(7763),o=t(1659),r=t(455),i=t(5133),d=t(6305);const u=(0,d.nY)("member",{state:()=>({member:{}}),getters:{getMember:e=>e.member},persist:!0});var c=t(7434),g=t(7534),b=t(3803),m=t(5469);const p=e=>((0,l.Qi)("data-v-19ffdb50"),e=e(),(0,l.jt)(),e),k={class:"text-h6 no-margin"},_={key:0,class:"no-margin text-body2 text-weight-light text-italic"},f={key:1,class:"no-margin text-h7"},h={key:2,class:"no-margin"},v={class:"q-pa-sm bg-green-3 text-dark q-mt-md"},F={class:"no-margin q-pb-xs"},x=p((()=>(0,l.Lk)("span",{class:"text-weight-light"},"Wafat: ",-1))),q={class:"no-margin q-pb-xs"},y=p((()=>(0,l.Lk)("span",{class:"text-weight-light"},"Usia: ",-1))),A={class:"no-margin text-weight-light"},Q={__name:"MemberProfile",async setup(e){let a,t;const d=(0,n.Kh)({}),p=(0,n.Kh)({}),Q=(0,r.lq)(),L=Q.params.id,w=(0,n.KR)(""),R=()=>{(0,g.Xh)(!0),(0,c.A)().member=d};try{const e=([a,t]=(0,l.E)((()=>o.r.get(`members/${L}`))),a=await a,t(),a);Object.assign(d,e.data.data.member),Object.assign(p,e.data.data.member),u().member=d,"L"==d?.lp?.toUpperCase()&&(w.value="man"),"P"==d?.lp?.toUpperCase()&&(w.value="woman")}catch(B){const e=(0,b.$)(B.response.data.message),a=e.some((e=>e.toLowerCase().includes("expired")));a?(0,m.f1)():404==B.response.status?console.log(B.response):e.forEach((e=>(0,m.UG)(e)))}const{alamat:C,alias:W,nama:X,nama_arab:I,tgl_wafat:S,usia_wafat:T,catatan:U,lp:E}=(0,n.QW)(d);return(e,a)=>{const t=(0,l.g2)("q-btn"),o=(0,l.g2)("q-avatar"),r=(0,l.g2)("q-banner"),u=(0,l.g2)("q-tooltip"),c=(0,l.g2)("q-card-section");return(0,l.uX)(),(0,l.Wv)(c,{class:"bg-green-7"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{class:"q-pa-sm bg-green-2 text-dark"},{avatar:(0,l.k6)((()=>[(0,l.bF)(o,{rounded:""},{default:(0,l.k6)((()=>[(0,l.bF)(t,{icon:w.value,color:"green-10",style:{width:"46px",height:"46px"},outline:"",onClick:e=>null,disable:""},null,8,["icon"])])),_:1})])),default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.Lk)("h3",k,(0,s.v_)((0,n.R1)(X)?.toUpperCase())+" ("+(0,s.v_)((0,n.R1)(E)?.toUpperCase())+") ",1),(0,n.R1)(W)?((0,l.uX)(),(0,l.CE)("p",_," ("+(0,s.v_)((0,n.R1)(W))+") ",1)):(0,l.Q3)("",!0),(0,n.R1)(I)?((0,l.uX)(),(0,l.CE)("p",f,(0,s.v_)(d.nama_arab),1)):(0,l.Q3)("",!0),(0,n.R1)(C)?((0,l.uX)(),(0,l.CE)("p",h,(0,s.v_)((0,n.R1)(C)),1)):(0,l.Q3)("",!0)])])),_:1}),(0,l.Lk)("div",v,[(0,l.bF)(i.A,{parent:p},null,8,["parent"])]),(0,l.bF)(r,{class:"q-pa-sm bg-green-4 text-dark q-mt-md"},{avatar:(0,l.k6)((()=>[(0,l.bF)(o,{rounded:""},{default:(0,l.k6)((()=>[(0,l.bF)(t,{icon:"info",color:"green-10",style:{width:"46px",height:"46px"},outline:"",onClick:e=>null,disable:""})])),_:1})])),default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.Lk)("p",F,[x,(0,l.eW)((0,s.v_)((0,n.R1)(S)),1)]),(0,l.Lk)("p",q,[y,(0,l.eW)((0,s.v_)((0,n.R1)(T)>0?(0,n.R1)(T)+" tahun":"-"),1)]),(0,l.Lk)("p",A,[(0,l.Lk)("em",null,(0,s.v_)((0,n.R1)(U)?(0,n.R1)(U):"Catatan: -"),1)])])])),_:1}),(0,l.bF)(t,{class:"btn-float text-green-11",glossy:"",round:"",color:"green-10",icon:"edit",onClick:R},{default:(0,l.k6)((()=>[(0,l.bF)(u,{class:"bg-green-1 text-dark"},{default:(0,l.k6)((()=>[(0,l.eW)("Edit data")])),_:1})])),_:1})])),_:1})}}};var L=t(2968),w=t(222),R=t(7453),C=t(5305),W=t(2677),X=t(8387),I=t(272),S=t.n(I);const T=(0,L.A)(Q,[["__scopeId","data-v-19ffdb50"]]),U=T;S()(Q,"components",{QCardSection:w.A,QBanner:R.A,QAvatar:C.A,QBtn:W.A,QTooltip:X.A});var E=t(3022);const B={__name:"MemberFamilies",async setup(e){let a,t;const i=(0,n.Kh)([]),d=(0,r.rd)(),c=(0,r.lq)(),g=c.params.id.toString();try{const e=([a,t]=(0,l.E)((()=>o.r.get(`members/${g}/families`))),a=await a,t(),a);Object.assign(i,e.data.data.families)}catch(_){const e=(0,b.$)(_.response.data.message),a=e.some((e=>e.toLowerCase().includes("expired")));a?(0,m.f1)():404==_.response.status?console.log(_.response):e.forEach((e=>(0,m.UG)(e)))}const p=(0,E.A)(),k=async()=>{const e=u().getMember.nama,a="L"==u().getMember.lp.toUpperCase()?"istri":"suami";p.dialog({title:"Konfirmasi",message:`Tambahkan keluarga baru (${a}) untuk ${e}?`,cancel:!0,persistent:!1,html:!0}).onOk((async()=>{try{const e=await o.r.post("families",{member_id:g}),a=e.data.data.family.id;d.push(`/families/${a}`)}catch(_){(0,b.$)(_.response.data.message).forEach((e=>{(0,m.UG)(e)}))}}))};return(e,a)=>{const t=(0,l.g2)("q-btn"),n=(0,l.g2)("q-item-section"),o=(0,l.g2)("q-item-label"),r=(0,l.g2)("q-item"),d=(0,l.g2)("q-list"),u=(0,l.g2)("q-banner"),c=(0,l.g2)("q-tooltip"),g=(0,l.g2)("q-card-section");return(0,l.uX)(),(0,l.Wv)(g,{class:"bg-green-7"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{class:"no-padding bg-green-3 text-dark"},{default:(0,l.k6)((()=>[i.length>0?((0,l.uX)(),(0,l.Wv)(d,{key:0,separator:""},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i,((e,a)=>((0,l.uX)(),(0,l.Wv)(r,{key:a,class:"q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)(r,{class:"no-padding",dense:""},{default:(0,l.k6)((()=>[(0,l.bF)(n,{avatar:""},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(t,{glossy:"",to:/families/+e.family_id,color:"green-10",icon:"diversity_1",style:{width:"46px",height:"46px"},class:"q-mr-sm text-green-11"},null,8,["to"]),(0,l.bF)(t,{to:e.pasangan_id?"/members/"+e.pasangan_id:null,color:"green-10",icon:"info",style:{width:"46px",height:"46px"},class:(0,s.C4)(e.pasangan_id?"text-green-11":null),disable:!e.pasangan_id,outline:!e.pasangan_id,glossy:!!e.pasangan_id},null,8,["to","class","disable","outline","glossy"])])])),_:2},1024),(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)(o,{class:"text-h6 no-margin text-weight-regular"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.pasangan_id?e.pasangan:"?"),1)])),_:2},1024),(0,l.bF)(o,{caption:""},{default:(0,l.k6)((()=>[(0,l.eW)(" Jumlah anak: "+(0,s.v_)(e.children_count),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):((0,l.uX)(),(0,l.Wv)(d,{key:1},{default:(0,l.k6)((()=>[(0,l.bF)(r,null,{default:(0,l.k6)((()=>[(0,l.bF)(n,{avatar:""},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(t,{color:"green-8",icon:"diversity_1",style:{width:"46px",height:"46px"},class:"q-mr-sm",outline:"",disable:""}),(0,l.bF)(t,{color:"green-8",icon:"info",style:{width:"46px",height:"46px"},outline:"",disable:""})])])),_:1}),(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)(o,null,{default:(0,l.k6)((()=>[(0,l.eW)("-")])),_:1}),(0,l.bF)(o,{caption:"",class:"no-margin"},{default:(0,l.k6)((()=>[(0,l.eW)(" Jumlah anak: - ")])),_:1})])),_:1})])),_:1})])),_:1}))])),_:1}),(0,l.bF)(t,{class:"btn-float text-green-11",glossy:"",round:"",color:"green-10",icon:"add",onClick:k},{default:(0,l.k6)((()=>[(0,l.bF)(c,{class:"bg-green-1 text-dark"},{default:(0,l.k6)((()=>[(0,l.eW)("Tambah pasangan")])),_:1})])),_:1})])),_:1})}}};var $=t(3766),K=t(2589),O=t(4958),j=t(9039);const M=(0,L.A)(B,[["__scopeId","data-v-18dc6645"]]),P=M;S()(B,"components",{QCardSection:w.A,QBanner:R.A,QList:$.A,QItem:K.A,QItemSection:O.A,QBtn:W.A,QItemLabel:j.A,QTooltip:X.A});const V={__name:"MemberChildren",async setup(e){let a,t;const i=(0,n.Kh)([]),d=(0,r.lq)(),u=d.params.id.toString();try{const e=([a,t]=(0,l.E)((()=>o.r.get(`members/${u}/children`))),a=await a,t(),a);Object.assign(i,e.data.data.children)}catch(c){const e=(0,b.$)(c.response.data.message),a=e.some((e=>e.toLowerCase().includes("expired")));a?(0,m.f1)():404==c.response.status?console.log(c.response):e.forEach((e=>(0,m.UG)(e)))}return(e,a)=>{const t=(0,l.g2)("q-badge"),n=(0,l.g2)("q-item-section"),o=(0,l.g2)("q-item-label"),r=(0,l.g2)("q-btn"),d=(0,l.g2)("q-item"),u=(0,l.g2)("q-list"),c=(0,l.g2)("q-banner"),g=(0,l.g2)("q-card-section");return(0,l.uX)(),(0,l.Wv)(g,{class:"bg-green-7"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{class:"q-pa-sm bg-green-3 text-dark"},{default:(0,l.k6)((()=>[i.length>0?((0,l.uX)(),(0,l.Wv)(u,{key:0,bordered:"",separator:""},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i,((e,a)=>((0,l.uX)(),(0,l.Wv)(d,{key:a},{default:(0,l.k6)((()=>[(0,l.bF)(n,{side:"",class:"flex flex-center"},{default:(0,l.k6)((()=>[(0,l.bF)(t,{class:"",color:"green-8"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(parseInt(a)+1),1)])),_:2},1024)])),_:2},1024),(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)(o,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.anak),1)])),_:2},1024)])),_:2},1024),(0,l.bF)(n,{side:""},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"info",glossy:"",color:"green-10",style:{width:"34px",height:"34px"},outline:"",to:/members/+e.anak_id},null,8,["to"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})):((0,l.uX)(),(0,l.Wv)(u,{key:1,bordered:"",separator:""},{default:(0,l.k6)((()=>[(0,l.bF)(d,null,{default:(0,l.k6)((()=>[(0,l.bF)(n,{avatar:"",class:"flex flex-center"},{default:(0,l.k6)((()=>[(0,l.bF)(t,{class:"",color:"green-8"},{default:(0,l.k6)((()=>[(0,l.eW)(" 0 ")])),_:1})])),_:1}),(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)(o,null,{default:(0,l.k6)((()=>[(0,l.eW)("-")])),_:1})])),_:1})])),_:1})])),_:1}))])),_:1})])),_:1})}}};var D=t(8155);const G=V,Y=G;S()(V,"components",{QCardSection:w.A,QBanner:R.A,QList:$.A,QItem:K.A,QItemSection:O.A,QBadge:D.A,QItemLabel:j.A,QBtn:W.A});var z=t(5465);const J={class:"spinner"},N={class:"spinner"},H={class:"spinner"},Z={__name:"MemberIndex",emits:["pageTitle","pageSubTitle","showButtonSearch"],setup(e,{emit:a}){const t=(0,n.KR)(null);(0,l.nT)((()=>t.value=`${u().member.nama} (${u().member.lp})`));const s=a;s("pageTitle","Data Anggota"),s("pageSubTitle",t),s("showButtonSearch",!0);const o=(0,n.KR)("profile"),i="/members/"+(0,r.lq)().params.id.toString()+"/profile",d="/members/"+(0,r.lq)().params.id.toString()+"/families",c="/members/"+(0,r.lq)().params.id.toString()+"/children";return(e,a)=>{const t=(0,l.g2)("q-route-tab"),n=(0,l.g2)("q-tabs"),s=(0,l.g2)("q-separator"),r=(0,l.g2)("q-spinner-cube"),u=(0,l.g2)("q-tab-panel"),g=(0,l.g2)("q-tab-panels"),b=(0,l.g2)("q-card");return(0,l.uX)(),(0,l.Wv)(b,{class:"bg-green-8 text-green-1"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),class:"text-green-5","active-color":"green-1","indicator-color":"green-3",align:"justify","narrow-indicator":""},{default:(0,l.k6)((()=>[(0,l.bF)(t,{to:i,name:"profile",label:"Profil"}),(0,l.bF)(t,{to:d,name:"family",label:"Keluarga"}),(0,l.bF)(t,{to:c,name:"child",label:"Anak"}),(0,l.bF)(z.A)])),_:1},8,["modelValue"]),(0,l.bF)(s,{dark:""}),(0,l.bF)(g,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e),animated:"",class:"bg-green-6",swipeable:""},{default:(0,l.k6)((()=>[(0,l.bF)(u,{name:"profile",class:"no-padding no-margin"},{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.Wv)(l.tY,null,{default:(0,l.k6)((()=>[(0,l.bF)(U)])),fallback:(0,l.k6)((()=>[(0,l.Lk)("div",J,[(0,l.bF)(r,{color:"green-2",size:"8em"})])])),_:1}))])),_:1}),(0,l.bF)(u,{name:"family",class:"no-padding no-margin"},{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.Wv)(l.tY,null,{default:(0,l.k6)((()=>[(0,l.bF)(P)])),fallback:(0,l.k6)((()=>[(0,l.Lk)("div",N,[(0,l.bF)(r,{color:"green-2",size:"8em"})])])),_:1}))])),_:1}),(0,l.bF)(u,{name:"child",class:"no-padding no-margin"},{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.Wv)(l.tY,null,{default:(0,l.k6)((()=>[(0,l.bF)(Y)])),fallback:(0,l.k6)((()=>[(0,l.Lk)("div",H,[(0,l.bF)(r,{color:"green-2",size:"8em"})])])),_:1}))])),_:1})])),_:1},8,["modelValue"])])),_:1})}}};var ee=t(3341),ae=t(8805),te=t(6562),le=t(6915),ne=t(990),se=t(9851),oe=t(1402);const re=(0,L.A)(Z,[["__scopeId","data-v-d986a6b8"]]),ie=re;S()(Z,"components",{QCard:ee.A,QTabs:ae.A,QRouteTab:te.A,QSeparator:le.A,QTabPanels:ne.A,QTabPanel:se.A,QSpinnerCube:oe.A})}}]);