"use strict";(self["webpackChunki_icc_github_io_vue"]=self["webpackChunki_icc_github_io_vue"]||[]).push([[638],{5354:function(t,s,o){o.r(s),o.d(s,{default:function(){return b}});var n=o(3396),r=o(7139);const e={class:"container"},i={class:"text-lg-center mb-4 mt-2",style:{"font-size":"4rem","font-family":"'Kosugi Maru', sans-serif"}},c={class:"works"};function a(t,s,o,a,u,l){const d=(0,n.up)("WorksComponent");return(0,n.wg)(),(0,n.iD)("main",e,[(0,n._)("div",i," 制作物 "+(0,r.zw)(u.tag),1),(0,n._)("div",c,[(0,n.Wm)(d,{works:u.works},null,8,["works"])])])}o(7658);const u={class:"box"},l=["src"],d={class:"card_content"},k={class:"desc"},w={class:"title"};function _(t,s,o,e,i,c){const a=(0,n.up)("router-link");return(0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.works,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.id,class:"card work"},[(0,n.Wm)(a,{style:{"text-decoration":"none",color:"inherit"},to:"/work/"+t.id},{default:(0,n.w5)((()=>[(0,n._)("div",u,[(0,n._)("img",{src:t.image_path},null,8,l),(0,n._)("div",d,[(0,n._)("div",k,(0,r.zw)(t.short_description),1)]),(0,n._)("div",w,(0,r.zw)(t.title),1)])])),_:2},1032,["to"])])))),128)}var h={name:"WorksModule",props:["works"]},f=o(89);const g=(0,f.Z)(h,[["render",_]]);var m=g,v={data(){return{works:[],tag:""}},mounted(){this.tag=this.$route.query.tag;for(var t=0;t<4;t++)fetch(`/works/${t}.json`).then((t=>(console.log(t),t.json()))).then((t=>{this.works.push(t)}))},components:{WorksComponent:m}};const p=(0,f.Z)(v,[["render",a]]);var b=p}}]);
//# sourceMappingURL=works.361925cb.js.map