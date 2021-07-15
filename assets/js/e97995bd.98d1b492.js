(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(8),o=(n(0),n(184)),r=n(185),l=(n(198),n(199),{id:"flexbox-yoga",title:"Layout System with Flexbox",hide_table_of_contents:!0}),c={unversionedId:"mainconcepts/uicomposition/flexbox-yoga",id:"mainconcepts/uicomposition/flexbox-yoga",isDocsHomePage:!1,title:"Layout System with Flexbox",description:"Litho uses Yoga library which is an implementation of Flexbox to measure and layout components on screen. If you have used Flexbox on the web before this should be very familiar. If you are more familiar with how Android normally performs Layout then Flexbox will remind you a lot of LinearLayout.",source:"@site/../docs/mainconcepts/uicomposition/flexbox-yoga.mdx",slug:"/mainconcepts/uicomposition/flexbox-yoga",permalink:"/docs/mainconcepts/uicomposition/flexbox-yoga",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/uicomposition/flexbox-yoga.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Mount Specs",permalink:"/docs/mainconcepts/uicomposition/mount-specs"},next:{title:"State Overview",permalink:"/docs/mainconcepts/coordinate-state-actions/state-overview"}},s=[{value:"Flexbox Attributes",id:"flexbox-attributes",children:[{value:"Layout Direction",id:"layout-direction",children:[]},{value:"Distribution Along Main Axis",id:"distribution-along-main-axis",children:[]},{value:"Distribution Along Cross Axis",id:"distribution-along-cross-axis",children:[]},{value:"Wrapping to Multiple Lines",id:"wrapping-to-multiple-lines",children:[]},{value:"Line Distribution",id:"line-distribution",children:[]}]},{value:"Yoga Playground",id:"yoga-playground",children:[]},{value:"Android Views vs. Litho with Yoga",id:"android-views-vs-litho-with-yoga",children:[]}],b={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Litho uses ",Object(o.b)("a",{parentName:"p",href:"https://yogalayout.com/"},"Yoga")," library which is an implementation of ",Object(o.b)("a",{parentName:"p",href:"https://www.w3.org/TR/css-flexbox-1/"},"Flexbox")," to measure and layout components on screen. If you have used Flexbox on the web before this should be very familiar. If you are more familiar with how Android normally performs Layout then Flexbox will remind you a lot of ",Object(o.b)("inlineCode",{parentName:"p"},"LinearLayout"),"."),Object(o.b)("h2",{id:"flexbox-attributes"},"Flexbox Attributes"),Object(o.b)("p",null,"Here you will see various attributes of FlexBox and how that applies to layout."),Object(o.b)("h3",{id:"layout-direction"},"Layout Direction"),Object(o.b)("p",null,"Flexbox is a ",Object(o.b)("strong",{parentName:"p"},"one dimensional layout model"),". This means that all elements are placed along one line. The first question is - should your elements be laid out horizontally, or vertically? The primary axis of layout is called the ",Object(o.b)("strong",{parentName:"p"},"main axis"),", and the direction perpendicular to it is called the ",Object(o.b)("strong",{parentName:"p"},"cross axis"),". For example, if you wanted your children to be laid out left to right, then the main axis would be the horizontal axis, and the cross axis would be the vertical axis."),Object(o.b)("p",null,"Litho uses special container components to define direction of the layout:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Row")," - The main axis is horizontal, and child elements are laid out left to right. If wrapping is enabled, then the next line will start under the first item on the left of the container."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Row (reverse)")," - The main axis is horizontal and elements are laid out right to left. If wrapping is enabled, then the next line will start under the first item on the right of the container."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Column")," - The main axis is vertical and child elements are laid out top to bottom. If wrapping is enabled, then the next line will start to the right of the first item on the top of the container."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Column (reverse)")," - The main axis is vertical and elements are laid out bottom to top. If wrapping is enabled, then the next line will start to the right of the first item on the bottom of the container.")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"(reverse)")," option is available through ",Object(o.b)("inlineCode",{parentName:"p"},".reverse(boolean)")," method on ",Object(o.b)("inlineCode",{parentName:"p"},"Row"),"/",Object(o.b)("inlineCode",{parentName:"p"},"Column")," objects."),Object(o.b)("img",{src:Object(r.a)("/images/litho-layout-flex-direction.png"),alt:"flex-direction"}),Object(o.b)("h3",{id:"distribution-along-main-axis"},"Distribution Along Main Axis"),Object(o.b)("p",null,"What happens if your container has more space than is necessary along the ",Object(o.b)("strong",{parentName:"p"},"main")," axis? How do you position the children across that axis? The ",Object(o.b)("inlineCode",{parentName:"p"},"justifyContent")," method specifies how the child elements are distributed across the main axis. It takes a ",Object(o.b)("inlineCode",{parentName:"p"},"YogaJustify")," enum input and has the following possible values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"FLEX_START")," ",Object(o.b)("em",{parentName:"li"},"(default)")," - Place children at the start of the container along the main axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"FLEX_END")," - Place children at the end of the container along the main axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CENTER")," - Place children in the center of the container along the main axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - Distribute extra space evenly between children."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SPACE_AROUND"),' - Distribute space evenly around each child. Note that adjacent children will have 2x space between them (because each child has its own "padding").'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SPACE_EVENLY")," - Distribute space evenly around all children.")),Object(o.b)("img",{src:Object(r.a)("/images/litho-layout-justify-content.png"),alt:"justify-content"}),Object(o.b)("h3",{id:"distribution-along-cross-axis"},"Distribution Along Cross Axis"),Object(o.b)("p",null,"What happens if the elements in your line are different heights? How do you position them along in the line? The ",Object(o.b)("inlineCode",{parentName:"p"},"alignItems")," method specifies how the container's children are distributed across the ",Object(o.b)("strong",{parentName:"p"},"cross axis"),". It takes a ",Object(o.b)("inlineCode",{parentName:"p"},"YogaAlign")," enum input and has the following possible values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"STRETCH")," ",Object(o.b)("em",{parentName:"li"},"(default)")," - Stretch the size of all elements to completely fill the line."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"FLEX_START")," - Align elements with the start of the cross axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"FLEX_END")," - Align elements with the end of the cross axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CENTER")," - Align elements with the center of the line."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BASELINE")," - Align elements with respect to their baselines.")),Object(o.b)("img",{src:Object(r.a)("/images/litho-layout-align-items.png"),alt:"align-items"}),Object(o.b)("h3",{id:"wrapping-to-multiple-lines"},"Wrapping to Multiple Lines"),Object(o.b)("p",null,"We said before that flexbox is a one dimensional layout model, and it lays out its children in one line. This is only mostly true. Flexboxes can also wrap their children onto multiple lines, much like text wraps. You specify wrapping behavior with the ",Object(o.b)("inlineCode",{parentName:"p"},"wrap")," method. This method takes a ",Object(o.b)("inlineCode",{parentName:"p"},"YogaWrap")," enum value and has 3 possible values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NO_WRAP")," ",Object(o.b)("em",{parentName:"li"},"(default)")," - There is no wrapping. Children are forced into a single line. If they cannot fit they will overflow."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"WRAP")," - Elements that overflow a single line will be moved to the next line. For example, if the main axis is horizontal, then the next line will be ",Object(o.b)("strong",{parentName:"li"},"below")," the previous line."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"WRAP_REVERSE")," - Similar to ",Object(o.b)("inlineCode",{parentName:"li"},"WRAP")," except the order of lines is reversed. For example, if the main axis is horizontal, then the next line will be ",Object(o.b)("strong",{parentName:"li"},"above")," the previous line.")),Object(o.b)("img",{src:Object(r.a)("/images/litho-layout-wrap.png"),alt:"wrap"}),Object(o.b)("h3",{id:"line-distribution"},"Line Distribution"),Object(o.b)("p",null,"When using ",Object(o.b)("inlineCode",{parentName:"p"},"WRAP")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"WRAP_REVERSE"),") for ",Object(o.b)("inlineCode",{parentName:"p"},"wrap")," method, suddenly we find ourselves with multiple lines. If our container has extra space in the cross axis direction, how do we distribute the lines in that space? We use the ",Object(o.b)("inlineCode",{parentName:"p"},"alignContent")," method to define how the lines are distributed along the cross axis. This attribute takes a ",Object(o.b)("inlineCode",{parentName:"p"},"YogaAlign")," enum value and has the following possible values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"STRETCH")," ",Object(o.b)("em",{parentName:"li"},"(default)")," - Lines are stretched evenly to fill the available space in the cross axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"FLEX_START")," - Lines are placed at the start of the cross axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"FLEX_END")," - Lines are placed at the end of the cross axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CENTER")," - Lines are placed in the center of the cross axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - Evenly distribute extra space between all lines."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SPACE_AROUND")," - Pad lines above and below with the extra space.")),Object(o.b)("img",{src:Object(r.a)("/images/litho-layout-align-content.png"),alt:"align-content"}),Object(o.b)("p",null,"For more documentation of specific Flexbox properties check out the ",Object(o.b)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga documentation")," or explore any web resources on how Flexbox works."),Object(o.b)("h2",{id:"yoga-playground"},"Yoga Playground"),Object(o.b)("p",null,"You can also use the ",Object(o.b)("a",{parentName:"p",href:"https://yogalayout.com/playground"},"Yoga Playground")," to try different layout configurations and generate corresponding Litho code."),Object(o.b)("img",{src:Object(r.a)("/images/yoga-playground.png"),alt:"Yoga Playground",className:"white-background"}),Object(o.b)("h2",{id:"android-views-vs-litho-with-yoga"},"Android Views vs. Litho with Yoga"),Object(o.b)("p",null,"Let's look at typical layout configurations in Android and how they translate to Litho with Yoga."),Object(o.b)("h4",{id:"vertically-stacked-items"},"Vertically stacked items."),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Android Views"),Object(o.b)("th",null,"Litho with Yoga")),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<LinearLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="vertical">\n    <TextView\n        android:id="@+id/text1"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Text 1" />\n    <TextView\n        android:id="@+id/text2"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Text 2" />\n</LinearLayout>\n'))),Object(o.b)("td",null,Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'Column.create(c)\n    .child(\n        Text.create(c)\n            .text("Text 1"))\n    .child(\n        Text.create(c)\n            .text("Text 2"))\n    .build();\n'))))),Object(o.b)("h4",{id:"two-items-equally-stretched-horizontally"},"Two items equally stretched horizontally."),Object(o.b)("p",null,"To achieve an effect similar to a ",Object(o.b)("inlineCode",{parentName:"p"},"LinearLayout")," with weights Flexbox provides a concept called ",Object(o.b)("inlineCode",{parentName:"p"},"flexGrow(<weight>)"),"."),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Android Views"),Object(o.b)("th",null,"Litho with Yoga")),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<LinearLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="horizontal">\n    <View\n        android:layout_width="0dp"\n        android:layout_height="match_parent"\n        android:backgroundColor="@color/red"\n        android:layout_weight="1"/>\n    <View\n        android:layout_width="0dp"\n        android:layout_height="match_parent"\n        android:backgroundColor="@color/blue"\n        android:layout_weight="1"/>\n</LinearLayout>\n'))),Object(o.b)("td",null,Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"Row.create(c)\n    .child(\n        SolidColor.create(c)\n            .color(RED)\n            .flexGrow(1))\n    .child(\n        SolidColor.create(c)\n            .color(BLUE)\n            .flexGrow(1))\n    .build();\n"))))),Object(o.b)("h4",{id:"absolutely-positioned-items"},"Absolutely positioned items"),Object(o.b)("p",null,"If you would like to overlay one view on top of the other similar to a ",Object(o.b)("inlineCode",{parentName:"p"},"FrameLayout"),", Flexbox can do that with ",Object(o.b)("inlineCode",{parentName:"p"},"positionType(ABSOLUTE)"),"."),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Android Views"),Object(o.b)("th",null,"Litho with Yoga")),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<FrameLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent">\n    <ImageView\n        android:layout_width="100dp"\n        android:layout_height="100dp"\n        android:src="@drawable/some_big_image"/>\n    <TextView\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Overlaid text"/>\n</FrameLayout>\n'))),Object(o.b)("td",null,Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'Column.create(c)\n    .child(\n        Image.create(c)\n            .drawableRes(R.drawable.some_big_image)\n            .widthDip(100)\n            .heightDip(100))\n    .child(\n        Text.create(c)\n            .text("Overlaid text")\n            .positionType(ABSOLUTE))\n    .build();\n'))))))}u.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=i,h=u["".concat(r,".").concat(p)]||u[p]||d[p]||o;return n?a.a.createElement(h,l(l({ref:t},s),{},{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},185:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var i=n(10),a=n(186);function o(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,r=o.forcePrependBaseUrl,l=void 0!==r&&r,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+b:b}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},186:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))},187:function(e,t,n){"use strict";function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}},195:function(e,t,n){"use strict";var i=n(0),a=n(196);t.a=function(){var e=Object(i.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},196:function(e,t,n){"use strict";var i=n(0),a=Object(i.createContext)(void 0);t.a=a},198:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(195),r=n(187),l=n(65),c=n.n(l);var s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,u=e.values,d=e.groupId,p=e.className,h=Object(o.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,O=Object(i.useState)(l),j=O[0],g=O[1],y=i.Children.toArray(e.children),w=[];if(null!=d){var x=m[d];null!=x&&x!==j&&u.some((function(e){return e.value===x}))&&g(x)}var v=function(e){var t=e.target,n=w.indexOf(t),i=y[n].props.value;g(i),null!=d&&(f(d,i),setTimeout((function(){var e,n,i,a,o,r,l,s;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,o=e.right,r=window,l=r.innerHeight,s=r.innerWidth,n>=0&&o<=s&&a<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case b:var i=w.indexOf(e.target)+1;n=w[i]||w[0];break;case s:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},p)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:v,onClick:v},n)}))),t?Object(i.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},199:function(e,t,n){"use strict";var i=n(0),a=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}}}]);