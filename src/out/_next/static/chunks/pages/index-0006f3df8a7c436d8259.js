_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"9jsH":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a),c=n("YFqc"),o=n.n(c),s=n("GyP+"),i=r.a.createElement;function l(t){return i(r.a.Fragment,null,i("div",{className:t.cols?t.cols:"col-md-6 col-lg-4"},i("div",{className:"blog-item"},t.thumb?i("figure",{className:"blog-thumb"},i(o.a,{href:Object(s.b)("/blog-more/".concat(t.id))},i("a",null,i("img",{src:t.thumb,alt:t.title})))):null,i("div",{className:"blog-content"},i("h2",{className:"h6"},i(o.a,{href:Object(s.b)("/blog-more/".concat(t.id))},i("a",null,i("div",{dangerouslySetInnerHTML:{__html:t.title.rendered}})))),i("div",{dangerouslySetInnerHTML:{__html:t.excerpt.rendered}}),i("div",{className:"blog-meta"},i(o.a,{href:Object(s.b)("/blog-more/".concat(t.id))},i("a",null,"By: ",t.postBy)),i(o.a,{href:Object(s.b)("/blog-more/".concat(t.id))},i("a",null,t.date)))))))}},RNiq:function(t,e,n){"use strict";n.r(e);var a=n("o0o1"),r=n.n(a),c=n("HaE+"),o=n("1OyB"),s=n("vuIU"),i=n("Ji7U"),l=n("md7G"),u=n("foSv"),f=n("q1tI"),d=n.n(f),p=n("+m56"),m=n.n(p),v=n("5Yp1"),g=n("wx14"),h=n("hKmS"),b=n("YFqc"),y=n.n(b),O=n("GyP+"),N=n("wg/h"),j=d.a.createElement,w={arrows:!0,dots:!1,nextArrow:j((function(t){var e=t.className,n=t.onClick;return j("button",{className:e,onClick:n},j("i",{className:"fa fa-angle-right"}))}),null),prevArrow:j((function(t){var e=t.className,n=t.onClick;return j("button",{className:e,onClick:n},j("i",{className:"fa fa-angle-left"}))}),null),responsive:[{breakpoint:500,settings:{arrows:!1,dots:!0}}]},_=function(t){var e=t.sliders;return j("div",{className:"slider-area"},j(h.a,{settings:w},e.map((function(t){return j("div",{key:t.id},j("div",{className:"slider-item",style:{backgroundImage:"url(".concat(Object(O.a)(t._embedded,"image"),")")}},j("div",{className:"container"},j("div",{className:"row"},j("div",{className:"col-xl-7"},j("div",{className:"slider-content"},j("h2",null,t.title.rendered),j(y.a,{href:"/tour-category/"+t.slug},j("a",{className:"btn btn-brand"},t.acf.explore))))))))}))))},R=function(t){return j(N.a,null,(function(e){var n=e.apiUrl;return j(_,Object(g.a)({},t,{apiUrl:n}))}))},k=n("JX7q"),x=n("rePB"),S=d.a.createElement,U=function(t){var e=t.classes,n=t.children;return S("div",{className:e},n)},B=n("vDqi"),D=n.n(B),I=d.a.createElement;function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(u.a)(t);if(e){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var T=function(t){Object(i.a)(n,t);var e=P(n);function n(t){var a;return Object(o.a)(this,n),a=e.call(this,t),Object(x.a)(Object(k.a)(a),"getData",(function(){var t=a.props.apiUrl;D.a.get("".concat(t,"/wp/v2/categories?slug=festivals")).then((function(e){var n=e.data;n&&n.length>0&&D.a.get("".concat(t,"/wp/v2/posts?_embed&categories=").concat(n[0].id)).then((function(t){a.setState({posts:t.data})})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)}))})),a.state={posts:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(t){this.props.apiUrl!==t.apiUrl&&this.getData()}},{key:"render",value:function(){var t=this.state.posts;return I("div",{className:"about-area-wrapper sm-top"},I("div",{className:"container"},t.map((function(t){return I("div",{key:t.slug,className:"row align-items-lg-center"},I("div",{className:"col-md-6 col-lg-5"},I("img",{src:Object(O.a)(t._embedded,"image"),alt:t.title.rendered})),I("div",{className:"col-md-6 col-lg-7"},I(U,{classes:"festival-content"},I("h6",null,I("div",{dangerouslySetInnerHTML:{__html:t.title.rendered}})),I("h2",null,t.acf.heading),I("span",{className:"festival-since"},t.acf.since),I("p",null,t.acf.text),I(y.a,{href:Object(O.b)("tour-category/mongolia")},I("a",{className:"btn-festival"},t.acf.btntext," ",I("i",{className:"fa fa-angle-double-right"}))))))}))))}}]),n}(d.a.Component),E=function(t){return I(N.a,null,(function(e){var n=e.apiUrl;return I(T,Object(g.a)({},t,{apiUrl:n}))}))},M=d.a.createElement;function q(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(u.a)(t);if(e){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var C=function(t){Object(i.a)(n,t);var e=q(n);function n(t){var a;return Object(o.a)(this,n),a=e.call(this,t),Object(x.a)(Object(k.a)(a),"getData",(function(){var t=a.props.apiUrl;D.a.get("".concat(t,"/wp/v2/categories?slug=features")).then((function(e){var n=e.data;n&&n.length>0&&D.a.get("".concat(t,"/wp/v2/posts?_embed&categories=").concat(n[0].id)).then((function(t){return a.setState({posts:t.data})})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)}))})),a.state={posts:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(t){this.props.apiUrl!==t.apiUrl&&this.getData()}},{key:"render",value:function(){var t=this.state.posts;return M("div",{className:"feature-area-wrapper sp-top"},M("div",{className:"container"},M("div",{className:"row mtn-sm-60 mtn-md-5"},t.map((function(t){return M("div",{key:t.slug,className:"col-md-4"},M("div",{className:"icon-box-item"},M("div",{className:"icon-box__icon"},M("img",{src:Object(O.a)(t._embedded,"image"),alt:t.title})),M("div",{className:"icon-box__info"},M("h5",null,t.title.rendered),M("div",{dangerouslySetInnerHTML:{__html:t.content.rendered}}))))})))))}}]),n}(d.a.Component),H=function(t){return M(N.a,null,(function(e){var n=e.apiUrl;return M(C,Object(g.a)({},t,{apiUrl:n}))}))},L=n("YJjo"),G=n("obyI"),F=n("SGeH"),J=d.a.createElement;function Y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(u.a)(t);if(e){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var z=function(t){Object(i.a)(n,t);var e=Y(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={posts:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;D.a.get("".concat(Object(G.a)().apiUrl,"/wp/v2/categories?slug=tours")).then((function(e){var n=e.data,a=t.props.perPage||10;n&&n.length>0&&D.a.get("".concat(Object(G.a)().apiUrl,"/wp/v2/posts?_embed&categories=").concat(n[0].id,"&per_page=").concat(a)).then((function(e){return t.setState({posts:e.data})})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this.state.posts;return J("div",{className:"service-area-wrapper sm-top-wt"},J("div",{className:"service-area-top",style:{backgroundImage:'url("'.concat(Object(O.b)("/images/ub_city.png"),'")')}},J("div",{className:"container"},J("div",{className:"row"},J("div",{className:"col-lg-6 col-xl-5 m-auto text-center"},J(L.a,{variant:"light",title:"Join Fixed Departures",heading:"We travel delicious memory for every guest"}))))),J("div",{className:"service-content-area"},J("div",{className:"container"},J("div",{className:"row mtn-30"},t.map((function(t){return J(F.a,{key:t.id,slug:t.slug,title:t.title.rendered,discount:t.acf.discount,price:t.acf.price,theme:t.acf.theme,duration:t.acf.duration,groupSize:t.acf.group_size,thumb:Object(O.a)(t._embedded,"image")})}))))))}}]),n}(d.a.Component),A=d.a.createElement;function X(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(u.a)(t);if(e){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var W={slidesToShow:1,arrows:!1,dots:!0,className:"testimonial-content--3 testimonial-grid",responsive:[{breakpoint:991,settings:{slidesToShow:1}}]},K=function(t){Object(i.a)(n,t);var e=X(n);function n(t){var a;return Object(o.a)(this,n),a=e.call(this,t),Object(x.a)(Object(k.a)(a),"getData",(function(){var t=a.props.apiUrl;D.a.get("".concat(t,"/wp/v2/categories?slug=testimonials")).then((function(e){var n=e.data;n&&n.length>0&&D.a.get("".concat(t,"/wp/v2/posts?_embed&categories=").concat(n[0].id)).then((function(t){return a.setState({posts:t.data})})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)}))})),a.state={posts:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(t){this.props.apiUrl!==t.apiUrl&&this.getData()}},{key:"render",value:function(){var t=this.state.posts;return A("div",{className:"testimonial-area bg-offwhite sp-y sm-top"},A("div",{className:"container"},A("div",{className:"row"},A("div",{className:"col-lg-6 m-auto text-center"},A(L.a,{title:"TESTIMONIALS",heading:"Our Customers <br/>Love what we do"}))),A("div",{className:"row align-items-center"},A("div",{className:"col-lg-11 m-auto"},A("div",{className:"testimonial-content-wrap m-0 pl-0"},A(h.a,{settings:W},t.map((function(t){return A("div",{key:t.slug},A("div",{className:"testimonial-item testimonial-item--3"},A("div",{className:"testimonial-thumb"},A("img",{src:Object(O.a)(t._embedded,"image"),alt:t.title.rendered}),A("h5",{className:"client-name"},t.title.rendered)),A("div",{className:"testimonial-txt"},A("img",{src:Object(O.b)("/img/icons/quote.png"),alt:"quote-icon"}),A("div",{dangerouslySetInnerHTML:{__html:t.content.rendered}}))))}))))))))}}]),n}(d.a.Component),V=function(t){return A(N.a,null,(function(e){var n=e.apiUrl;return A(K,Object(g.a)({},t,{apiUrl:n}))}))},Q=n("9jsH"),Z=n("wd/R"),$=n.n(Z),tt=d.a.createElement;function et(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(u.a)(t);if(e){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var nt=function(t){Object(i.a)(n,t);var e=et(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={posts:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;D.a.get("".concat(Object(G.a)().apiUrl,"/wp/v2/categories?slug=blog")).then((function(e){var n=e.data,a=t.props.perPage||6;n&&n.length>0&&D.a.get("".concat(Object(G.a)().apiUrl,"/wp/v2/posts?_embed&categories=").concat(n[0].id,"&per_page=").concat(a)).then((function(e){return t.setState({posts:e.data})})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this.state.posts;return tt(d.a.Fragment,null,tt("div",{className:"blog-area-wrapper sm-top"},tt("div",{className:"container"},tt("div",{className:"row"},tt("div",{className:"col-12 text-center"},tt(L.a,{title:"OUR BLOG",heading:"Latest update <br> from our blog post"}))),tt("div",{className:"row mtn-35"},t.map((function(t){return tt(Q.a,{key:t.id,id:t.slug,title:t.title,excerpt:t.excerpt,postBy:Object(O.a)(t._embedded,"author").name,date:$()(t.date).format("ll")})}))))))}}]),n}(d.a.Component),at=n("zgyn"),rt=n("0XRN"),ct=n("90Hd"),ot=n("STOe"),st=n("V+x5"),it=d.a.createElement;function lt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(u.a)(t);if(e){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var ut=function(t){Object(i.a)(n,t);var e=lt(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.sliders;return it(d.a.Fragment,null,it(v.a,{title:"Bluewolf"},it(R,{sliders:t}),it(E,null),it(H,null),it(z,{perPage:6}),it(V,null),it(st.a,null),it(nt,{perPage:3}),it(at.a,null),it(rt.a,null),it(ct.a,null)),it(ot.a,null))}}],[{key:"getInitialProps",value:function(){var t=Object(c.a)(r.a.mark((function t(e){var n,a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new m.a({endpoint:Object(G.a)().apiUrl}),t.next=3,n.categories().slug("sliders").embed().then((function(t){return t[0]}));case 3:if(!(a=t.sent)){t.next=9;break}return t.next=7,n.posts().categories(a.id).perPage(40).embed();case 7:return c=t.sent,t.abrupt("return",{sliders:c,sliderCategory:a});case 9:return t.abrupt("return",{sliderCategory:a});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),n}(d.a.Component);e.default=ut},SGeH:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("OBgu"),o=n("C0oF"),s=n("GyP+"),i=n("YFqc"),l=n.n(i),u=r.a.createElement;e.a=function(t){return u("div",{key:t.price,className:"col-md-6 col-lg-4"},u("div",{className:"service-item"},u("figure",{className:"service-thumb"},t.discount?u("span",{className:"discount"},t.discount," "):"",u(l.a,{href:Object(s.b)("/tour-more/".concat(t.slug))},u("a",null,u("img",{src:t.thumb,alt:t.title}))),u("h4",null,t.price),u("figcaption",{className:"service-txt"},u("h5",null,u("div",{className:"nowrap-text",dangerouslySetInnerHTML:{__html:t.title}})))),u("div",{className:"service-content"},u("div",{className:"service-content-inner"},u("h5",null,u(l.a,{href:Object(s.b)("/tour-more/".concat(t.slug))},u("a",{className:"stretched-link"},u("div",{dangerouslySetInnerHTML:{__html:t.title}})))),u(c.a,{classes:"price-list"},u(o.a,null,"Price: ",t.price),u(o.a,null,"Theme: ",t.theme),u(o.a,null,"Duration: ",t.duration),u(o.a,null,"Group size: ",t.groupSize))))))}},"V+x5":function(t,e,n){"use strict";var a=n("1OyB"),r=n("vuIU"),c=n("JX7q"),o=n("Ji7U"),s=n("md7G"),i=n("foSv"),l=n("rePB"),u=n("q1tI"),f=n.n(u),d=n("YJjo"),p=n("hKmS"),m=n("GyP+"),v=n("YFqc"),g=n.n(v),h=(n("vDqi"),n("obyI"),f.a.createElement);function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(i.a)(t);if(e){var r=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var y={slidesToShow:2,slidesToScroll:2,arrows:!1,autoplay:!0,speed:500,dots:!0,className:"tour-content-wrap slick-dots--light mtn-md-5",responsive:[{breakpoint:576,settings:{slidesToShow:1}}]},O=function(t){Object(o.a)(n,t);var e=b(n);function n(t){var r;return Object(a.a)(this,n),r=e.call(this,t),Object(l.a)(Object(c.a)(r),"render",(function(){var t=r.props.sliders;return t?h("div",{className:"tour-area-wrapper bg-img sp-y",style:{backgroundImage:"url(".concat(Object(m.b)("/images/blue.jpg"),")")}},h("div",{className:"container-fluid"},h("div",{className:"row align-items-center"},h("div",{className:"col-lg-4"},h(d.a,{variant:"light",title:"Mongolian festivals",heading:"DESTINATIONS",text:"<strong>Blue Wolf</strong> Travel provides clients with the most comprehensive range of professional eco-travel services in western Mongolia. As the largest tour company in western Mongolia, Blue Wolf offers many advantages that have set them apart and lead to recently being honored by the Mongolian Tourism Board as one of Mongolia's best tour operators."})),h("div",{className:"col-lg-8"},h(p.a,{settings:r.state.setting},t.map((function(t){return h("div",{key:t.slug,className:"destination-item"},h("figure",{className:"tours-pic"},h(g.a,{href:"".concat(Object(m.b)("/tour-category/"+t.slug))},h("a",null,h("img",{src:t.acf.slider_image,alt:t.title.rendered})))),h("div",{className:"tours-info"},h("h5",null,h(g.a,{href:"".concat(Object(m.b)("/tour-category/"+t.slug))},h("a",null,t.title.rendered)))))}))))))):null})),r.state={setting:[]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.sliders&&this.props.sliders.length<3&&(y.slidesToShow=this.posts.sliders.length),this.setState({setting:y})}}]),n}(f.a.Component);e.a=O},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},wx14:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return a}))}},[["vlRD",0,2,8,1,3,4,5,6,7,9]]]);