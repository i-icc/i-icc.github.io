"use strict";(self["webpackChunki_icc"]=self["webpackChunki_icc"]||[]).push([[211],{59:function(t,s,o){o.r(s),o.d(s,{default:function(){return C}});var r=o(6768);const n={class:"container"},e=(0,r.Lk)("div",{class:"text-lg-center mb-4 mt-2",style:{"font-size":"4rem","font-family":"'Kosugi Maru', sans-serif"}}," 制作物 ",-1),i={class:"works"};function a(t,s,o,a,c,l){const u=(0,r.g2)("WorksComponent");return(0,r.uX)(),(0,r.CE)("main",n,[e,(0,r.Lk)("div",i,[(0,r.bF)(u,{works:c.works,tag:c.tag},null,8,["works","tag"])])])}o(8743);var c=o(4232);const l={class:"card work"},u={class:"box"},k=["src"],h={class:"card_content"},d={class:"desc"},w={class:"title"};function f(t,s,o,n,e,i){const a=(0,r.g2)("router-link");return(0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.works,(t=>((0,r.uX)(),(0,r.CE)("div",{key:t.id},[(0,r.Lk)("div",l,[(0,r.bF)(a,{style:{"text-decoration":"none",color:"inherit"},to:"/work/"+t.id},{default:(0,r.k6)((()=>[(0,r.Lk)("div",u,[(0,r.Lk)("img",{src:t.image_path},null,8,k),(0,r.Lk)("div",h,[(0,r.Lk)("div",d,(0,c.v_)(t.short_description),1)]),(0,r.Lk)("div",w,(0,c.v_)(t.title),1)])])),_:2},1032,["to"])])])))),128)}var g={name:"WorksModule",props:["works"]},v=o(1241);const _=(0,v.A)(g,[["render",f]]);var m=_,p={data(){return{all_works:[],works:[],tag:null}},methods:{select_work:function(){this.works=[];for(const t of this.all_works)(t.tag.includes(this.tag)||null==this.tag)&&this.works.push(t)}},watch:{$route:function(t,s){t!==s?(this.tag=this.$route.query.tag,this.select_work()):this.select_work()}},mounted(){this.tag=this.$route.query.tag,fetch("/works/show_list.json").then((t=>t.json())).then((t=>{for(var s=t.from;s<=t.to;s++)fetch(`/works/${s}.json`).then((t=>t.json())).then((t=>{this.all_works.push(t),(t.tag.includes(this.tag)||null==this.tag)&&this.works.push(t)}))})),this.select_work()},components:{WorksComponent:m}};const L=(0,v.A)(p,[["render",a]]);var C=L}}]);
//# sourceMappingURL=works.d6b599e3.js.map