(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],p=0,u=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"16e3":function(t,e,a){},"3ecc":function(t,e,a){"use strict";a("16e3")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("v-main",[a("v-container",{staticClass:"pb-0"},[a("AboutMe"),a("Accordion"),a("Articles")],1)],1),a("Footer")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{dark:"",dense:"","hide-on-scroll":"",color:"blue-grey darken-2 elevation-6",app:""}},[a("v-col",{staticClass:"d-flex px-0"},[a("v-icon",{staticClass:"mr-4",attrs:{large:""}},[t._v(" mdi-webhook ")]),a("v-app-bar-title",{staticClass:"align-center d-flex",domProps:{textContent:t._s("Создание web-сайтов")}}),a("v-spacer"),t._v(" "),a("v-app-bar-items",{staticClass:"hidden-sm-and-down"},t._l(t.contacts,(function(e){return a("v-btn",{key:e.id,attrs:{href:e.adress,target:"_blank",text:""}},[a("v-icon",{staticClass:"mr-2"},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.text)+" ")],1)})),1),a("v-icon",{staticClass:"hidden-md-and-up mr-3",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[t._v(" mdi-phone ")]),a("v-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[t._v(" mdi-email ")])],1)],1),a("v-navigation-drawer",{attrs:{temporary:"",fixed:"",width:"auto","overlay-opacity":"0.5",color:"blue-grey darken-3"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.contacts,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-title",[a("v-btn",{staticClass:"mb-2",attrs:{color:"primary",elevation:"9","x-large":"",href:e.adress,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1)],1)],1)],1)},o=[],c={name:"Header",data:function(){return{drawer:!1,group:null,contacts:[{id:0,text:"Позвонить",adress:"tel:+79035395558",icon:"mdi-phone"},{id:1,text:"Whatsapp",adress:"https://wa.me/79035395558",icon:"mdi-whatsapp"},{id:2,text:"E-mail",adress:"mailto:igordolgov1972@mail.ru",icon:"mdi-email"},{id:3,text:"Telegram",adress:"https://t.me/igordolgov",icon:""}]}}},l=c,d=(a("8baf"),a("2877")),p=a("6544"),u=a.n(p),m=a("40dc"),v=a("bb78"),f=a("8336"),g=a("62ad"),b=a("132d"),_=a("8860"),h=a("da13"),x=a("1baa"),y=a("5d23"),C=a("f774"),w=a("2fa4"),V=Object(d["a"])(l,i,o,!1,null,null,null),k=V.exports;u()(V,{VAppBar:m["a"],VAppBarTitle:v["a"],VBtn:f["a"],VCol:g["a"],VIcon:b["a"],VList:_["a"],VListItem:h["a"],VListItemGroup:x["a"],VListItemTitle:y["a"],VNavigationDrawer:C["a"],VSpacer:w["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-2 mb-6 text-sm-body-2"},[a("v-row",[a("v-col",{staticClass:"md-4 pb-1"},[a("v-card",{staticClass:"pa-4 d-flex grey lighten-4 about__card",attrs:{shaped:""}},[a("v-text",[a("v-card",{staticClass:"elevation-8 float-left mr-4",attrs:{"max-width":"90"}},[a("v-img",{attrs:{src:"./img/i.jpg","align-center":""}})],1),a("v-card-text",{staticClass:"ma-0 pa-0"},[a("p",{staticClass:"ma-0"},[t._v(t._s(t.greeting))]),a("p",{staticClass:"ma-0"},[t._v(t._s(t.my_name))]),t._v(" "+t._s(t.article)+" ")])],1)],1)],1),a("v-col",{staticClass:"pb-1"},[a("v-card",{staticClass:"pa-4 orange lighten-4 about__card",attrs:{shaped:""}},[a("a",{attrs:{href:t.site_1.url,target:"_blank"}},[a("v-card",{staticClass:"elevation-4 float-left mr-4",attrs:{"max-width":"140"}},[a("v-img",{attrs:{src:"./img/site_tvzavrrr.jpg"}})],1)],1),a("p",{staticClass:"article mb-0 text-caption"},[t._v(t._s(t.site_1.description))])])],1),a("v-col",{staticClass:"pb-1"},[a("v-card",{staticClass:"pa-4 mb-0 blue-grey lighten-4 about__card",attrs:{shaped:""}},[a("a",{attrs:{href:t.site_2.url,target:"_blank"}},[a("v-card",{staticClass:"elevation-4 float-left mr-4",attrs:{"max-width":"140"}},[a("v-img",{attrs:{src:"./img/site_highpass.jpg"}})],1)],1),a("p",{staticClass:"article mb-0 text-caption"},[t._v(t._s(t.site_2.description))])])],1)],1)],1)},S=[],A={name:"AboutMe",data:function(){return{greeting:"Здравствуйте!",my_name:"Меня зовут Игорь.",article:"Я разработчик сайтов. Верстаю сайты с нуля и занимаюсь настройкой готовых сайтов. Предлагаю познакомиться с технологиями и инструментами, которые я применяю для создания сайтов.",site_1:{url:"https://igordolgov.github.io/tvzavrrr/",description:"Пример неадаптивного сайта-магазина. Можно сортировать товары по цене, категории, цвету. Сайт разработан только для больших экранов. На экранах телефонов будет смотреться неудобочитаемо. Для просмотра нажмите на картинку сайта слева."},site_2:{url:"https://igordolgov.github.io/",description:"Пример адаптивного сайта для фотостудии. Сайт адаптирован под мониторы разной ширины и мобильные устройства. Рекомендую посмотреть на мониторе, уменьшая ширину окна. И следя, как элементы меняют свои размеры и положение на странице."}}}},O=A,E=(a("ea41"),a("b0af")),U=a("99d9"),M=a("adda"),J=a("0fd9"),P=Object(d["a"])(O,j,S,!1,null,null,null),I=P.exports;u()(P,{VCard:E["a"],VCardText:U["a"],VCol:g["a"],VImg:M["a"],VRow:J["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"ma-0 mb-4"},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-expansion-panels",{staticClass:"rounded-xl grey--text",attrs:{accordion:""}},t._l(t.skills,(function(e,r){return a("v-expansion-panel",{key:r,staticClass:"grey darken-4"},[a("v-expansion-panel-header",{staticClass:"grey lighten-1 mb-2 py-0 rounded-xl"},[a("h3",[t._v(t._s(e.name))])]),a("v-expansion-panel-content",[a("v-col",{staticClass:"px-0 grey darken-4",attrs:{"d-flex":"","max-width":"350"}},[a("v-card",{staticClass:"\tfloat-left mr-4 my-1 hidden-xs-only"},[a("v-img",{attrs:{width:"255",src:e.img}})],1),a("v-card-text",{staticClass:"pa-0 white--text",attrs:{"max-width":"350"}},[a("p",{staticClass:"ma-0 padless grey darken-4"},[t._v(t._s(e.description))])])],1)],1)],1)})),1)],1),a("v-col",{staticClass:"px-2 pb-0"},[a("Maps")],1)],1)},H=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text",[a("v-card",{staticClass:"maps-card"},[a("a",{attrs:{href:"https://yandex.ru/maps/?um=constructor%3A840e79013ed8dd93e8b603d551dce2683c2ede247bb84d4e6e2bf6ecd94709f5&source=constructorStatic",target:"_blank"}},[a("img",{staticClass:"maps hidden-xs-only float-left mr-5",attrs:{src:"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A840e79013ed8dd93e8b603d551dce2683c2ede247bb84d4e6e2bf6ecd94709f5&width=250&height=276&lang=ru_RU",alt:""}})])]),a("v-card-text",{staticClass:"px-0 pt-0 font-weight-light white--text"},[t._v(" "+t._s(t.about_map)+" "),a("a",{staticClass:"maps hidden-sm-and-up",attrs:{href:"https://yandex.ru/maps/?um=constructor%3A840e79013ed8dd93e8b603d551dce2683c2ede247bb84d4e6e2bf6ecd94709f5&source=constructorStatic",target:"_blank"}},[a("span",{staticClass:"yellow--text pa-1",attrs:{cursor:"pointer"}},[t._v("Пример")])])])],1)},X=[],Z={name:"Maps",data:function(){return{about_map:"Чтобы покупатели быстрее нашли Ваш магазин, Вы можете разместить на сайте изображение карты с указанием места расположения Вашего магазина и маршрута до него от автобусной остановки, станции метро или автомобильной развязки. При клике на изображение карты можно перейти на вкладку с полномасштабной картой со всеми её преимуществами: схемой метро, маршрутами от точки нахождения покупателя до вас, пробками, транспортом."}}},B=Z,F=(a("c3f0"),Object(d["a"])(B,R,X,!1,null,null,null)),W=F.exports;u()(F,{VCard:E["a"],VCardText:U["a"]});var Y={name:"Accordion",components:{Maps:W},data:function(){return{about_map:"Чтобы покупатели быстрее нашли Ваш магазин, Вы можете разместить на сайте изображение карты с указанием места расположения Вашего магазина и маршрута до него от автобусной остановки, станции метро или автомобильной развязки. При клике на изображение карты можно перейти на вкладку с полномасштабной картой со всеми её преимуществами: схемой метро, маршрутами от точки нахождения покупателя до вас, пробками, транспортом.",skills:[{id:0,name:"Web-вёрстка. Html и CSS",description:"Cверстать свой сайт можно с помощью конструкторов, которые позволяют создавать сайты без знания разработки. Также существует множество плагинов и программ. Есть даже нейросети, почти полностью автоматизирующие процесс вёрстки. Но простому пользователю, бывает сложно, да и часто некогда, самому разобраться даже с такими конструкторами. Кроме того, бесплатные версии конструкторов сайтов часто предлагают ограниченный функционал, недостаточный для осуществления всего того, что вы хотели бы видеть на вашем сайте. Поэтому наверное лучше довериться человеку с опытом в этом деле. Он учтёт все Ваши пожелания по оформлению и функционалу. От того, насколько качественно верстальщик выполнит свою работу, будет зависеть и то, как быстро сайт будет загружаться и насколько выше других он будет показан в поисковой системе. Для вёрстки сайтов вручную разработчики используют Html (язык гипертекстовой разметки) для создания разметки сайта (где и что находится) и CSS (каскадные таблицы стилей) - описание того, как это выглядит.",img:"https://tillayev-lab.uz/img/images/html&css.jpeg"},{id:1,name:"Адаптивная верстка сайта",description:"Сейчас более половины пользователей Интернета выходят в сеть с помощью мобильных устройств. Поэтому многие владельцы веб-страниц обращают свое внимание на адаптацию сайта под мобильные устройства. Полная подстройка страницы под параметры электронного устройства и указанного в нём разрешения экрана для максимального удобства пользователя — это результат применения адаптивного дизайна сайта. Самые важные и информативные блоки веб-страницы могут изменить своё положение и размер. Менее важная информация может уменьшаться и даже скрываться для освобождения места. Страница может быть полностью видоизменена для повышения удобства использования. Например, Вы можете увидеть, как этот сайт выглядит на экране Вашего телефона и на экране большого монитора",img:"https://krasnodar.gectopascal.com/wp-content/uploads/2016/11/88-2.jpg"},{id:2,name:"JavaScript",description:"Если HTML задает разметку сайта, CSS отвечает за внешний вид, то JavaScript всё это оживляет. Он способен как угодно менять веб-страницу: задавать и менять внешний вид элементов (форму, размер, цвет и т.д.), перемещать любой элемент, запросить у пользователя данные, вывести сообщение при определённом условии. Благодаря всему этому пользователь чувствует обратную связь и лучше ориентируется на странице. И наоборот, если страница скучная и трудно понять, что где находится, Ваш клиент скорее всего уйдёт туда, где всё понятно",img:"https://static.skillshare.com/uploads/video/thumbnails/4b6cbd3d4251f930d1cc7b6b431d1995/original"},{id:3,name:"Фреймворк Vue.js",description:'Vue.js (произносится "вью") позволяет разрабатывать крутые интерфейсы для сайтов и мобильных приложений, применяя язык программирования JavaScript. С помощью “реактивности” Vue.js можно создавать молниеносные интерфейсы, которые моментально грузятся и обеспечивают более хорошее впечатление от интерфейса у пользователя. В случае с обычными сайтами, рендеринг (перерисовка сайта) происходит каждый раз, когда Вы перемещаетесь по страницам. В случае с реактивными сайтами, рендеринг целого сайта происходит один раз при первом заходе на сайт. Дальше только рисуются мелкие и необходимые кусочки.',img:"https://i.ytimg.com/vi/Dk9TelHbtZk/maxresdefault.jpg"},{id:4,name:"UI библиотека Vuetify.js",description:'Многие программисты любят использовать готовые библиотеки, но есть те, кто любит придумывать велосипед, который в последствии может и не поехать). Для Vue существуют библиотеки с готовыми компонентами, которые можно использовать для разработки проектов. Такие UI (User Interface, "интерфейс пользователя") библиотеки упрощают жизнь разработчика: гарантируют работоспособность компонентов, их безупречный вид и адаптивность и ускоряют время разработки. Vuetify ("вьютифай") — наверное самая популярная библиотека. В качестве дизайн системы она использует дизайн систему Google Material Design. На борту у Vuetify около 80 готовых компонентов. Всё это гарантирует быструю разработку, красивый вид и безупречную работу сайта на всех устройствах. Кстати, этот сайт сделан именно с помощью Vuetify.',img:"https://yandex.ru/images/_crpd/5J1ptZ218/43239fKWV58/n0NT8OaG9ew240u1n5NN5THUZWFtWJ0oy0UBwOKmXPkqRnxOhvdvw2Id6cF8-c3AX_dzR_CXzQ2QgmajnZxfqJ8Ex3XlUaeoI2EcolFdw7762uu-JUaVIlpFwhU19No8u52ni1i5PhL_DK1RJCtdmRE95tEjh9WHAFovrJ8MlbTKGxQ25pVwpWegAHtdU4I_fBAhOuMLnqDXgwMYcj5CeTJY6JCR_r-efQyr3ahuG90UdOWZK4KYhUwVpSNYBtl-AxxceOdQ8OHlpse9FFSDPjMeonrqDV0sWMFA0ji6QvsyEStQkPt60PeEqd_tptzRl_slni_NWM3Nn-ZjEUoZu0Ea1bamUXTk7CSCe5SXwHp3Uex5ZAyXIt0NDRW-9wQ6fJ5rUJC-v9U1yuFaqC5U2Br1Ix0vAxBFD5cloJWEFXrOEV2wZ1XwKylgDb0fWA8-Nt6lMuxP2-pZiE_eP_YH9nZToBvb_jUad0nqW2zrldeSdmPQbUhZjocQq2ydgFB9B1YccSVTsqVhawA_VJmN-7ZUKnomhVSpWomI3zd6CnG10aNe0H6x0neJ4lJsptIYm7dtGmoMUoRHkCBl3MsU9IAd3X4qkbjjoSlPfBRcQjU70K32JQ6b6xTEDVe_98ww-pupENY2vZXxwC3draYZV5X1rRigBJXGAB9qLdeAkHqIWtZ4rB_0q2SpSXUV2kBw85Mo-i2Gm6XaD8waMLvDOHdXIVVZ_3AU8cShk-UqE9wSfS8W780VR82fZmzYBJj2zhkd9S9WM2jmJYn8l5KIv_IU4bgiSt_lkk8Kl3k3iXS_2uuQkXu7VzlLrRElLVCRln4qn2DPEkLF1ewjmM5Re8gVlHZvmzQsbeYCN1XRzfe73q24JsMeIleOTRc2don1uF4tm56-tpN2wS7Za6nVmNv5o9JmAFAEDx6nJBjGH_lK2dO0bdsyYOgkxriY0YgyeJSmearK2eWUSYnfMA"}]}}},q=Y,D=(a("3ecc"),a("cd55")),N=a("49e2"),Q=a("c865"),z=a("0393"),K=Object(d["a"])(q,T,H,!1,null,null,null),L=K.exports;u()(K,{VCard:E["a"],VCardText:U["a"],VCol:g["a"],VExpansionPanel:D["a"],VExpansionPanelContent:N["a"],VExpansionPanelHeader:Q["a"],VExpansionPanels:z["a"],VImg:M["a"],VRow:J["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mb-8 pb-4 grey darken-3",attrs:{dark:""}},[a("v-card-title",{staticClass:"blue-grey darken-2 py-2"},[a("p",{staticClass:"mb-0 text-heading-6"},[t._v("Какие бывают сайты")])]),t._l(t.articles,(function(e){return a("v-card-text",{key:e.id,staticClass:"pa-5 pb-1 pt-1 grey darken-3"},[a("h3",{staticClass:"py-2 orange--text"},[t._v(" "+t._s(e.title)+" ")]),a("p",{staticClass:"mb-0"},[t._v(t._s(e.description))])])}))],2)},$=[],tt={name:"Articles",data:function(){return{articles:[{id:0,title:"Интернет-магазин",description:"Его главное отличие — товар можно выбрать, добавить в корзину и купить прямо на месте. Для этого на сайте должна быть возможность регистрации и создания личного кабинета. Так покупатели смогут не только комфортно оплатить заказ, но и отследить его. А спустя какое-то время совершить повторную покупку. Каждому товару понадобится карточка с фото и описанием. Чтобы оплачивать заказы картой, нужно будет подключить платёжные системы. Также можно добавить возможность назначать скидки — например, чтобы устроить распродажу к празднику."},{id:1,title:"Сайт услуг",description:"Если вам не нужно продавать товары, то можно ограничиться небольшим сайтом с несколькими страницами. Такой тип подойдёт для салона красоты, кафе, медицинской клиники. На нескольких страничках будут расписаны основные услуги компании, может быть, выложен прайс-лист."},{id:2,title:"Сайт-визитка",description:"Небольшой сайт, часто одностраничник, который содержит самую основную информацию о компании и контакты. Это может быть портфолио специалиста, например юриста или фотографа. Или же презентация одной краткой и понятной услуги: соляной комнаты, солярия или даже разового мероприятия — выставки или концерта."},{id:3,title:"Сайт компании, или корпоративный сайт",description:"В отличие от визитки, состоит из нескольких страниц: меню может включать страницы второго и третьего уровня. Подходит для размещения большего количества информации. Может содержать каталог товаров, новости компании, информацию о выполненных проектах и партнёрах."}]}}},et=tt,at=Object(d["a"])(et,G,$,!1,null,null,null),rt=at.exports;u()(at,{VCard:E["a"],VCardText:U["a"],VCardTitle:U["b"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",color:"grey darken-3",padless:""}},[a("v-row",{attrs:{justify:"center","no-gutters":""}},[a("v-col",{staticClass:"blue-grey darken-3 py-1 text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Vuetify")])])],1)],1)},nt=[],it={data:function(){return{}}},ot=it,ct=a("553a"),lt=Object(d["a"])(ot,st,nt,!1,null,null,null),dt=lt.exports;u()(lt,{VCol:g["a"],VFooter:ct["a"],VRow:J["a"]});var pt={name:"App",components:{Header:k,AboutMe:I,Accordion:L,Articles:rt,Footer:dt},data:function(){return{}}},ut=pt,mt=(a("034f"),a("7496")),vt=a("a523"),ft=a("f6c4"),gt=Object(d["a"])(ut,s,n,!1,null,null,null),bt=gt.exports;u()(gt,{VApp:mt["a"],VContainer:vt["a"],VMain:ft["a"]});a("5363");var _t=a("f309");r["a"].use(_t["a"]);var ht=new _t["a"]({icons:{iconfont:"mdiSvg"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:ht,render:function(t){return t(bt)}}).$mount("#app")},"63dc":function(t,e,a){},6860:function(t,e,a){},"85ec":function(t,e,a){},"8baf":function(t,e,a){"use strict";a("6860")},b8a3:function(t,e,a){},c3f0:function(t,e,a){"use strict";a("63dc")},ea41:function(t,e,a){"use strict";a("b8a3")}});
//# sourceMappingURL=app.6cecd4cb.js.map
