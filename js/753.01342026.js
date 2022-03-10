"use strict";(self["webpackChunkvue_firebase_todo"]=self["webpackChunkvue_firebase_todo"]||[]).push([[753],{7753:function(t,e,o){o.r(e),o.d(e,{default:function(){return q}});var s=o(6252);const n={class:"container mt-4"},i={class:"row"},r={class:"col-12 col-md-4 col-lg-3 mb-3 mb-md-0"},a={class:"col-12 col-md-8 col-lg-9 mt-2"},d=(0,s._)("hr",null,null,-1),l={class:"list-group"};function c(t,e,o,c,u,h){const m=(0,s.up)("user-info"),g=(0,s.up)("todo-item-creator"),p=(0,s.up)("todo-list-item");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",i,[(0,s._)("div",r,[(0,s.Wm)(m)]),(0,s._)("div",a,[(0,s.Wm)(g),d,(0,s._)("ul",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.getTodoList,(t=>((0,s.wg)(),(0,s.j4)(p,{key:t.header,item:t},null,8,["item"])))),128))])])])])}var u=o(3577);const h=(0,s._)("h1",null,"User Info",-1),m=["src"],g={key:1},p=(0,s._)("h5",null,"Display Name",-1),b=(0,s._)("h5",null,"Email",-1);function w(t,e,o,n,i,r){return(0,s.wg)(),(0,s.iD)(s.HY,null,[h,this.getPhoto?((0,s.wg)(),(0,s.iD)("img",{key:0,class:"mb-3 rounded-pill",src:this.getPhoto},null,8,m)):(0,s.kq)("",!0),this.getDisplayName?((0,s.wg)(),(0,s.iD)("div",g,[p,(0,s._)("p",null,(0,u.zw)(this.getDisplayName),1)])):(0,s.kq)("",!0),(0,s._)("div",null,[b,(0,s._)("p",null,(0,u.zw)(this.getEmail),1)]),(0,s._)("button",{class:"btn btn-danger btn-sm",onClick:e[0]||(e[0]=(...t)=>this.signOut&&this.signOut(...t))},"Log Out")],64)}var _={computed:{getPhoto(){return this.$store.state.auth.user.photoURL},getDisplayName(){return this.$store.state.auth.user.displayName},getEmail(){return this.$store.state.auth.user.email}},methods:{signOut(){this.$store.dispatch("signOut")}}},k=o(3744);const T=(0,k.Z)(_,[["render",w]]);var f=T;const v={class:"mt-1 text-wrap"},C={class:"text-wrap"},y={class:"text-end mb-2"};function D(t,e,o,n,i,r){return(0,s.wg)(),(0,s.iD)("li",{class:(0,u.C_)(["list-group-item",r.getBackground]),style:{"--bs-bg-opacity":"0.2"}},[(0,s._)("h5",v,(0,u.zw)(this.item.header),1),(0,s._)("p",C,(0,u.zw)(this.item.content),1),(0,s._)("div",y,[(0,s._)("button",{class:"btn btn-success me-2",onClick:e[0]||(e[0]=(...t)=>r.checkTodo&&r.checkTodo(...t))},"Check"),(0,s._)("button",{class:"btn btn-outline-danger",onClick:e[1]||(e[1]=(...t)=>r.deleteTodo&&r.deleteTodo(...t))},"Delete")])],2)}var N={name:"TodoListItem",props:{item:{id:String,author:String,header:String,content:String,isChecked:Boolean}},computed:{getBackground(){return this.item.isChecked?"bg-success":"bg-light"}},methods:{checkTodo(){const t={id:this.item.id,currentCheckState:this.item.isChecked};this.$store.dispatch("checkTodo",t)},deleteTodo(){this.$store.dispatch("deleteTodo",this.item.id)}}};const $=(0,k.Z)(N,[["render",D],["__scopeId","data-v-38920074"]]);var L=$,I=o(7225);const x={class:"form-block mb-3"},z=(0,s._)("label",{class:"form-label",for:"header"},"Header",-1),O={class:"form-block mb-3"},S=(0,s._)("label",{class:"form-label",for:"content"},"Content",-1),U={class:"form-block text-end"};function H(t,e,o,n,i,r){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",x,[z,(0,s.wy)((0,s._)("input",{class:"form-control",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>this.newTodo.header=t)},null,512),[[I.nr,this.newTodo.header]])]),(0,s._)("div",O,[S,(0,s.wy)((0,s._)("textarea",{class:"form-control",style:{resize:"none"},rows:"3",name:"content",id:"content","onUpdate:modelValue":e[1]||(e[1]=t=>this.newTodo.content=t)},null,512),[[I.nr,this.newTodo.content]])]),(0,s._)("div",U,[(0,s._)("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=(...t)=>r.addNewTodo&&r.addNewTodo(...t))},"Create")])])}var Z={name:"TodoItemCreator",data(){return{newTodo:{header:"",content:"",isChecked:!1,author:""}}},methods:{async addNewTodo(){await this.$store.dispatch("addNewTodo",this.newTodo),this.newTodo.header="",this.newTodo.content=""}}};const B=(0,k.Z)(Z,[["render",H]]);var E=B,P={name:"HomeView",components:{TodoListItem:L,TodoItemCreator:E,UserInfo:f},computed:{getTodoList(){return this.$store.state.todos.todoList}},mounted(){this.$store.dispatch("fetchTodoList")}};const V=(0,k.Z)(P,[["render",c]]);var q=V}}]);
//# sourceMappingURL=753.01342026.js.map