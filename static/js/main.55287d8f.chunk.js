(this["webpackJsonpreact-table-app"]=this["webpackJsonpreact-table-app"]||[]).push([[0],{25:function(e,a,t){e.exports=t(36)},30:function(e,a,t){},32:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),s=t.n(r),c=(t(30),t(18)),o=t(19),i=t(24),m=t(23),d=t(20),u=t.n(d),h=t(37),p=(t(32),function(e){var a=e.data,t=e.handleSort,n=e.sortType,r=e.sortRow,s=e.handleUserShow;return l.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"id"===r?"sorting_".concat(n):"",onClick:function(){t("id")}}," Id"),l.a.createElement("th",{className:"firstName"===r?"sorting_".concat(n):"",onClick:function(){t("firstName")}},"First Name"),l.a.createElement("th",{className:"lastName"===r?"sorting_".concat(n):"",onClick:function(){t("lastName")}},"Last Name"),l.a.createElement("th",{className:"email"===r?"sorting_".concat(n):"",onClick:function(){t("email")}},"Email"),l.a.createElement("th",{className:"phone"===r?"sorting_".concat(n):"",onClick:function(){t("phone")}},"Phone"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e.id+Math.random(),onClick:function(){s(e)}},l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.firstName),l.a.createElement("td",null,e.lastName),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone))}))))});p.defaultProps={handleUserShow:function(){},handleSort:function(){},sortType:"",sortRow:""};var f=p,E=function(){return l.a.createElement("div",{className:"text-center"},l.a.createElement("div",{className:"spinner-grow text-success",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))},g=t(7),N=t(38),b=t(21),v=t(43),C=function(e){var a=e.handleSearchOnClick,t=Object(n.useState)(""),r=Object(g.a)(t,2),s=r[0],c=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{className:"mb-3"},l.a.createElement(b.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0435","aria-label":"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0435","aria-describedby":"search",defaultValue:s,onChange:function(e){var a=e.target.value;c(a)}}),l.a.createElement(N.a.Append,null,l.a.createElement(v.a,{onClick:function(){a(s)},variant:"outline-secondary"},"\u041f\u043e\u0438\u0441\u043a"))))};C.defaultProps={handleSearchOnClick:function(){}};var w=C,x="http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",k="http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",y=[{value:"short",label:"\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 (32 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f)"},{value:"long",label:"\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 (1000 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439)"}],S=t(39),O=t(40),U=t(22),L=t(41),A=function(e){var a=e.handleSelectOnClick,t=Object(n.useState)("short"),r=Object(g.a)(t,2),s=r[0],c=r[1];return l.a.createElement(S.a,null,l.a.createElement(O.a,null,l.a.createElement(U.a,{className:"col-md-auto mx-auto"},l.a.createElement(L.a,{className:"text-center"},l.a.createElement(L.a.Group,null,l.a.createElement(L.a.Label,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0431\u044a\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445:"),l.a.createElement(L.a.Control,{className:"mx-auto",size:"sm",onChange:function(e){var a=e.target.value;c(a)},defaultValue:s,as:"select"},y.map((function(e,a){var t=e.value,n=e.label;return l.a.createElement("option",{key:a,value:t},n)})))),l.a.createElement(v.a,{onClick:function(){a(s)},variant:"success"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c!")))))};A.defaultProps={handleSelectOnClick:function(){}};var j=A,P=t(42),F=function(e){var a=e.choisedUser,t=void 0===a?[]:a;return l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{bg:"light",key:"idx",style:{width:"24rem"},className:"mb-2 mx-auto"},l.a.createElement(P.a.Body,null,l.a.createElement(P.a.Text,null,"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",l.a.createElement("b",null,"".concat(t.firstName," ").concat(t.lastName)),l.a.createElement("br",null),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",l.a.createElement(L.a.Control,{defaultValue:t.description,as:"textarea",rows:"3"}),"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f:",l.a.createElement("b",null,t.address.streetAddress),l.a.createElement("br",null),"\u0413\u043e\u0440\u043e\u0434:",l.a.createElement("b",null,t.address.city),l.a.createElement("br",null),"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442: ",l.a.createElement("b",null,t.address.state),l.a.createElement("br",null),"\u0418\u043d\u0434\u0435\u043a\u0441: ",l.a.createElement("b",null,t.address.zip)))))};F.defaultProps={};var R=F,T=t(10),G=t(12),I=(t(16),function(e){var a=e.showUserAddFormToggle,t=e.handleAddNewUser,r=Object(n.useState)({id:"",firstName:"",lastName:"",phone:"",email:""}),s=Object(g.a)(r,2),c=s[0],o=s[1],i=Object(n.useState)({id:"",firstName:"",lastName:"",phone:"",email:""}),m=Object(g.a)(i,2),d=m[0],u=m[1],h=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),p=RegExp(/^(([0-9]|\+)[- ]?)?(\(?\d{3,4}\)?[- ]?)?[\d\- ]{5,15}$/),f=RegExp(/^\d+$/),E=Object.values(c).every((function(e){return e.length>1}))&&Object.values(d).every((function(e){return e.length<1})),N=function(e){var a=e.target,t=a.name,n=a.value,l=Object(G.a)({},d);switch(t){case"firstName":l.firstName=n.length<=1?"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430":"";break;case"lastName":l.lastName=n.length<=1?"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430":"";break;case"email":l.email=h.test(n)?"":"Email \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u0438\u0434\u0430: '* @ *'";break;case"phone":l.phone=p.test(n)?"":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0432\u0438\u0434\u0430: 0-9 +";break;case"id":l.id=f.test(n)?"":"Id \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440"}u(l),o((function(e){return Object(G.a)(Object(G.a)({},e),{},Object(T.a)({},t,n))}))};return l.a.createElement(S.a,null,l.a.createElement(O.a,null,l.a.createElement(U.a,{className:"col-md-auto mx-auto"},l.a.createElement(L.a,{style:{border:"3px solid #f1f1f1",borderRadius:"5px",padding:"15px",background:"#fff"},noValidate:!0,onSubmit:function(e){e.preventDefault(),e.stopPropagation(),E&&t(c)}},l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Group,{className:"mx-3",controlId:"formGroupName"},l.a.createElement(L.a.Label,null,"\u0418\u043c\u044f"),l.a.createElement(L.a.Control,{required:!0,initialvalue:c.firstName,name:"firstName",className:d.firstName?" is-invalid":"",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:function(e){N(e)}}),l.a.createElement(L.a.Control.Feedback,{type:"invalid"},d.firstName)),l.a.createElement(L.a.Group,{className:"mx-3",controlId:"formGroupLastname"},l.a.createElement(L.a.Label,null,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),l.a.createElement(L.a.Control,{required:!0,type:"text",name:"lastName",className:d.lastName?" is-invalid":"",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",onChange:function(e){N(e)}}),l.a.createElement(L.a.Control.Feedback,{type:"invalid"},d.lastName)),l.a.createElement(L.a.Group,{className:"mx-3",controlId:"formGroupId"},l.a.createElement(L.a.Label,null,"Id"),l.a.createElement(L.a.Control,{required:!0,name:"id",className:d.id?" is-invalid":"",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Id",onChange:function(e){N(e)}}),l.a.createElement(L.a.Control.Feedback,{type:"invalid"},d.id))),l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Group,{className:"mx-3",controlId:"formGroupEmail"},l.a.createElement(L.a.Label,null,"Email"),l.a.createElement(L.a.Control,{required:!0,name:"email",className:d.email?" is-invalid":"",type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",onChange:function(e){N(e)}}),l.a.createElement(L.a.Control.Feedback,{type:"invalid"},d.email)),l.a.createElement(L.a.Group,{className:"mx-3",controlId:"formGroupPhone"},l.a.createElement(L.a.Label,null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),l.a.createElement(L.a.Control,{required:!0,name:"phone",className:d.phone?" is-invalid":"",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",onChange:function(e){N(e)}}),l.a.createElement(L.a.Control.Feedback,{type:"invalid"},d.phone))),l.a.createElement(L.a.Row,{className:"text-center"},l.a.createElement(v.a,{variant:"success",className:"mx-3",type:"submit",disabled:!E},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),l.a.createElement(v.a,{onClick:function(){a()},variant:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"))))))});I.defaultProps={showUserAddFormToggle:function(){},handleAddNewUser:function(){}};var z=I;function q(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(t,n){if(!t.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var l="string"===typeof t[e]?t[e].toUpperCase():t[e],r="string"===typeof n[e]?n[e].toUpperCase():n[e],s=0;return l>r?s=1:l<r&&(s=-1),"desc"===a?-1*s:s}}var D=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={isLoading:!1,isSizeSelected:!1,isUserAddStart:!1,choisedUser:null,searchQuery:"",sortType:"disabled",sortRow:"",currentPage:0,data:[]},e.handleSort=function(a){var t=e.state.data.concat(),n="";n=e.state.sortRow.concat()!==a?"asc":"asc"===e.state.sortType?"desc":"asc",t.sort(q(a,n)),e.setState({data:t,sortType:n,sortRow:a})},e.handleSelectOnClick=function(a,t){switch(e.setState({isSizeSelected:!0,isLoading:!0}),a){case"short":e.fetchData(k);break;case"long":e.fetchData(x)}},e.handleSearchOnClick=function(a){e.setState({searchQuery:a,currentPage:0})},e.handleUserShow=function(a){e.setState({choisedUser:a})},e.handlePageClick=function(a){var t=a.selected;e.setState({currentPage:t})},e.dataPageFilter=function(e,a){return e.reduce((function(e,t){return e[e.length-1].length===a&&e.push([]),e[e.length-1].push(t),e}),[[]])},e.dataSearchFilter=function(a){var t=e.state.searchQuery;return t?a.filter((function(e){var a=t.toString().toLowerCase();return e.id.toString().includes(a)||e.firstName.toLowerCase().includes(a)||e.lastName.toLowerCase().includes(a)||e.phone.toLowerCase().includes(a)||e.email.toLowerCase().includes(a)})):a},e.showUserAddFormToggle=function(){e.setState((function(e){return{isUserAddStart:!e.isUserAddStart}}))},e.handleAddNewUser=function(a){var t=e.state.data.concat();a.id=Number(a.id),a.description=a.description||"",a.address||(a.address={streetAddress:"",city:"",state:"",zip:""}),t.unshift(a),e.setState({data:t,isUserAddStart:!1})},e}return Object(o.a)(t,[{key:"fetchData",value:function(e){var a=this,t=new XMLHttpRequest;t.open("GET",e,!0),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){var e=JSON.parse(t.responseText);a.setState({data:e,isLoading:!1})}}}},{key:"render",value:function(){var e=this,a=this.state,t=a.isSizeSelected,n=a.isLoading,r=a.data,s=void 0===r?[]:r,c=a.sortType,o=a.sortRow,i=a.choisedUser,m=a.currentPage,d=a.isUserAddStart,h=this.dataSearchFilter(s),p=Math.ceil(h.length/50),g=this.dataPageFilter(h,50)[m];return t?d?l.a.createElement(z,{showUserAddFormToggle:this.showUserAddFormToggle,handleAddNewUser:this.handleAddNewUser}):l.a.createElement(S.a,null,l.a.createElement(O.a,null,n?l.a.createElement(U.a,null,l.a.createElement(E,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(U.a,{lg:6,md:8,className:"mb-3"},l.a.createElement(w,{handleSearchOnClick:this.handleSearchOnClick})),l.a.createElement(U.a,{lg:6,md:4,className:"text-center mb-3"},l.a.createElement(v.a,{variant:"info",onClick:function(){e.showUserAddFormToggle()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")),l.a.createElement(U.a,{lg:12,md:12},l.a.createElement(f,{data:g,sortType:c,sortRow:o,handleSort:this.handleSort,handleUserShow:this.handleUserShow}))),h.length>50?l.a.createElement(U.a,{lg:12,md:12},l.a.createElement(u.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:p,forcePage:m,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:this.handlePageClick,containerClassName:"pagination justify-content-center",activeClassName:"active",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link"})):null,i?l.a.createElement(U.a,{lg:12,md:12},l.a.createElement(R,{choisedUser:i})):null)):l.a.createElement(j,{handleSelectOnClick:this.handleSelectOnClick})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.55287d8f.chunk.js.map