_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{F1OY:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("HaE+"),c=n("1OyB"),s=n("vuIU"),i=n("Ji7U"),l=n("md7G"),u=n("foSv"),p=n("q1tI"),d=n.n(p),g=n("5Yp1"),m=n("zgyn"),f=n("0XRN"),v=n("90Hd"),b=n("STOe"),y=n("lXAN"),h=n("UFcr"),N=n("NpLs"),w=n("GyP+"),S=n("obyI"),_=n("+m56"),O=n.n(_),R=d.a.createElement;function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var U=new O.a({endpoint:Object(S.a)().apiUrl}),j=function(e){Object(i.a)(n,e);var t=k(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.page;if(!e.title)return R(Error,{statusCode:404});var t=e.acf,n=t.content,a=t.cover_image;return R(d.a.Fragment,null,R(g.a,null,R(y.a,{bgImg:a||Object(w.b)("/images"+N.a),title:R("p",{dangerouslySetInnerHTML:{__html:e.title.rendered}}),content:n||""}),R(h.a,{classes:"sm-top service-details-wrapper"},R("div",{className:"col-lg-12"},R("div",{className:"service-details-content"},R("div",{className:"post-content"},R("div",{dangerouslySetInnerHTML:{__html:e.content.rendered}}))))),R(m.a,null),R(f.a,{classes:"sp-top"}),R(v.a,null)),R(b.a,null))}}],[{key:"getInitialProps",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=U.pages(),e.next=3,t.slug("golden-eagle").embed().then((function(e){return e[0]}));case 3:return n=e.sent,e.abrupt("return",{page:n});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),n}(d.a.Component);t.default=j},UFcr:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createElement;t.a=function(e){var t=e.classes,n=e.children;return r("div",{className:"page-content-wrapper ".concat(t)},r("div",{className:"container"},r("div",{className:"row"},n)))}},lXAN:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=r.a.createElement;t.a=function(e){var t=e.bgImg;return o(r.a.Fragment,null,o("div",{className:"page-header-area bg-img",style:{backgroundImage:"url(".concat(t,")")}}))}},xhMx:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/golden-eagle",function(){return n("F1OY")}])},xjkF:function(e){e.exports=JSON.parse('[{"id":1,"logoSrc":"payment1.png","URL":"/"},{"id":2,"logoSrc":"payment2.png","URL":"/"},{"id":3,"logoSrc":"payment3.png","URL":"/"},{"id":4,"logoSrc":"payment4.png","URL":"/"},{"id":5,"logoSrc":"payment5.png","URL":"/"},{"id":6,"logoSrc":"payment6.png","URL":"/"}]')},zgyn:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("hKmS"),c=n("YFqc"),s=n.n(c),i=n("GyP+"),l=r.a.createElement;var u=function(e){return l("div",{className:"brand-logo-item"},l(s.a,{href:"https://payment.bluewolftravel.com"},l("a",null,l("img",{src:Object(i.b)("/images/"+e.logoSrc),alt:"brands-logo"}))))},p=n("xjkF"),d=r.a.createElement;t.a=function(e){return d("div",{className:"brand-logo-area sm-top"},d("div",{className:"container"},d("div",{className:"row"},d("div",{className:"col-12 text-center"},d("div",{className:"section-title"},d("h2",null,"Make a payment")),d(o.a,{settings:{slidesToShow:4,arrows:!1,autoplay:!0,className:"brand-logo-content",responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:401,settings:{slidesToShow:1}}]}},p.map((function(e){return d(u,{key:e.id,logoSrc:e.logoSrc,URL:e.URL})})))))))}}},[["xhMx",0,2,1,3,4,5]]]);