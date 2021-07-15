(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(8),o=(n(0),n(184)),a={id:"testing-overview",title:"Introduction"},s={unversionedId:"testing/testing-overview",id:"testing/testing-overview",isDocsHomePage:!1,title:"Introduction",description:"Litho provides a variety of tools to write different types of tests. This page provides",source:"@site/../docs/testing/testing-overview.mdx",slug:"/testing/testing-overview",permalink:"/docs/testing/testing-overview",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/testing-overview.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Flipper Plugins",permalink:"/docs/devtools/flipper-plugins"},next:{title:"Getting Started",permalink:"/docs/testing/unit-testing"}},c=[{value:"Unit Testing",id:"unit-testing",children:[]},{value:"End-to-End Testing",id:"end-to-end-testing",children:[]},{value:"Android Studio",id:"android-studio",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Litho provides a variety of tools to write different types of tests. This page provides\na brief overview of them."),Object(o.b)("h2",{id:"unit-testing"},"Unit Testing"),Object(o.b)("p",null,"Litho provides a suite of helpers to make unit testing easier. Learn about the\nsetup with our JUnit Rules and AssertJ helpers in ",Object(o.b)("a",{parentName:"p",href:"unit-testing"},"Unit Testing Basics"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"subcomponent-testing"},Object(o.b)("strong",{parentName:"a"},"Sub-Component Testing")),": A common way to test components\nis by testing assertions on the component hierarchy; ",Object(o.b)("em",{parentName:"p"},"i.e. find components that are\nexpected to be present or absent in the component tree"),". The sub-component APIs provide\nutilities method to easily write such tests.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Prop Matching"),": Provides APIs to write tests for asserting the prop\nvalues set on the components in the hierarchy."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"prop-matching"},Object(o.b)("strong",{parentName:"a"},"Matching @Prop"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"injectprop-matching"},Object(o.b)("strong",{parentName:"a"},"Matching @InjectProp"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"testing-treeprops"},Object(o.b)("strong",{parentName:"a"},"Matching @TreeProp"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"event-handler-testing"},Object(o.b)("strong",{parentName:"a"},"EventHandler Testing"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"sections-testing"},Object(o.b)("strong",{parentName:"a"},"Section Testing")),": Section hierarchies can be tested similarly\nusing the SectionComponentTestHelper and SubSection APIs."))),Object(o.b)("h2",{id:"end-to-end-testing"},"End-to-End Testing"),Object(o.b)("p",null,"Litho also provides utilities for writing end-to-end tests with powered by Espresso. Learn\nmore in the ",Object(o.b)("a",{parentName:"p",href:"espresso-testing"},"Litho Espresso")," section."),Object(o.b)("h2",{id:"android-studio"},"Android Studio"),Object(o.b)("p",null,"To run unit tests in Android Studio please ",Object(o.b)("a",{parentName:"p",href:"tests-in-android-studio"},"follow this guide"),"."))}l.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||o;return n?i.a.createElement(m,s(s({ref:t},p),{},{components:n})):i.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);