_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"5xZH":function(e,t,n){"use strict";var a=n("1OyB"),r=n("vuIU"),s=n("Ji7U"),o=n("md7G"),c=n("foSv"),l=n("q1tI"),i=n.n(l),u=n("O/l+"),d=n("Gddr"),p=n("YFqc"),m=n.n(p),f=i.a.createElement;function g(e){return f("div",{className:"single-blog-item"},f("div",{className:"post-thumb"},f(m.a,{href:"/blog-more/".concat(e.id)},f("a",null,f("img",{src:e.thumb,alt:e.title})))),f("div",{className:"post-info"},f("h6",null,f(m.a,{href:"/blog-more/".concat(e.id)},f("a",null,f("div",{dangerouslySetInnerHTML:{__html:e.title.rendered}})))),f("span",{className:"post-date"},f("i",{className:"fa fa-clock-o"}),e.date)))}var b=i.a.createElement,v=function(){return b("div",{className:"sidebar-newsletter"},b("h3",null,"Newsletter"),b("form",{action:"#",method:"post"},b("input",{type:"email",placeholder:"Your Email Address"}),b("button",{className:"btn btn-brand"},"Subscribe")))},h=n("GyP+"),y=n("obyI"),w=n("vDqi"),N=n.n(w),O=n("wd/R"),S=n.n(O),j=i.a.createElement;function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var _=function(e){Object(s.a)(n,e);var t=R(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={posts:[]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;N.a.get("".concat(Object(y.a)().apiUrl,"/wp/v2/categories?slug=blog")).then((function(t){var n=t.data,a=e.props.perPage||6;n&&n.length>0&&N.a.get("".concat(Object(y.a)().apiUrl,"/wp/v2/posts?_embed&categories=").concat(n[0].id,"&per_page=").concat(a)).then((function(t){return e.setState({posts:t.data})})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.posts;return j(u.a,{classes:"col-lg-3"},j(d.a,{classes:"single-sidebar-item-wrap"},j("img",{src:Object(h.b)("/images/banner1.jpg"),alt:"Banner"})),j(d.a,{title:"FEATURED POSTS",classes:"single-sidebar-item-wrap"},j("div",{className:"latest-blog-widget"},e.map((function(e){return j(g,{key:e.slug,id:e.slug,title:e.title,date:S()(e.date).format("ll"),thumb:Object(h.a)(e._embedded,"image")})})))),j(d.a,{classes:"single-sidebar-item-wrap"},j(v,null)))}}]),n}(i.a.Component);t.a=_},Gddr:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createElement;t.a=function(e){var t=e.title,n=e.classes,a=e.children;return r("div",{className:n||"sidebar-single"},t?r("h3",{className:"sidebar-title"},t):null,r("div",{className:"sidebar-body"},a))}},"O/l+":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createElement;t.a=function(e){var t=e.classes,n=e.children;return r("div",{className:t},r("div",{className:"sidebar-wrap mt-sm-90 mt-md-100"},n))}},"TNZ+":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n("o0o1"),r=n.n(a),s=n("HaE+"),o=n("1OyB"),c=n("vuIU"),l=n("Ji7U"),i=n("md7G"),u=n("foSv"),d=n("q1tI"),p=n.n(d),m=n("5Yp1"),f=n("UFcr"),g=n("STOe"),b=n("90Hd"),v=n("6821"),h=n("obyI"),y=n("+m56"),w=n.n(y),N=n("7evw"),O=n.n(N),S=n("zgyn"),j=n("0XRN"),R=n("5xZH"),_=p.a.createElement;function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var U=new w.a({endpoint:Object(h.a)().apiUrl}),k=function(e){Object(l.a)(n,e);var t=E(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.post;if(!e.title)return _(Error,{statusCode:404});var t="",n={url:t=window.location.href,identifier:e.slug,title:e.title.rendered};return _(p.a.Fragment,null,_(m.a,null,_(f.a,{classes:"blog-details-page-content sp-y"},_("div",{className:"col-12"},_("article",{className:"blog-post-details"},_("div",{className:"blog-post-txt-wrap"},_("div",{className:"row"},_("div",{className:"m-auto order-0 col-lg-9"},_("div",{className:"blog-post-txt"},_("h2",{className:"h3"},_("p",{dangerouslySetInnerHTML:{__html:e.title.rendered}})),_("div",{dangerouslySetInnerHTML:{__html:e.content.rendered}})),_(v.a,{title:e.title.rendered,path:t})),_(R.a,null)))),_("div",{className:"ul-top"},_(O.a.DiscussionEmbed,{shortname:"bluewolftravel",config:n})))),_(S.a,null),_(j.a,null),_(b.a,null)),_(g.a,null))}}],[{key:"getInitialProps",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.slug,a=U.posts(),e.next=4,a.slug(n).embed().then((function(e){return e[0]}));case 4:return s=e.sent,e.abrupt("return",{post:s});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(p.a.Component)},xjkF:function(e){e.exports=JSON.parse('[{"id":1,"logoSrc":"payment1.png","URL":"/"},{"id":2,"logoSrc":"payment2.png","URL":"/"},{"id":3,"logoSrc":"payment3.png","URL":"/"},{"id":4,"logoSrc":"payment4.png","URL":"/"},{"id":5,"logoSrc":"payment5.png","URL":"/"},{"id":6,"logoSrc":"payment6.png","URL":"/"}]')},ywIO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-more",function(){return n("TNZ+")}])},zgyn:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),s=n("hKmS"),o=n("YFqc"),c=n.n(o),l=n("GyP+"),i=r.a.createElement;var u=function(e){return i("div",{className:"brand-logo-item"},i(c.a,{href:"https://payment.bluewolftravel.com"},i("a",null,i("img",{src:Object(l.b)("/images/"+e.logoSrc),alt:"brands-logo"}))))},d=n("xjkF"),p=r.a.createElement;t.a=function(e){return p("div",{className:"brand-logo-area sm-top"},p("div",{className:"container"},p("div",{className:"row"},p("div",{className:"col-12 text-center"},p("div",{className:"section-title"},p("h2",null,"Make a payment")),p(s.a,{settings:{slidesToShow:4,arrows:!1,autoplay:!0,className:"brand-logo-content",responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:401,settings:{slidesToShow:1}}]}},d.map((function(e){return p(u,{key:e.id,logoSrc:e.logoSrc,URL:e.URL})})))))))}}},[["ywIO",0,2,8,1,3,4,5,6,9,11]]]);