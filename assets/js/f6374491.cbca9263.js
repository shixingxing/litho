(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(8),i=(a(0),a(184)),l={id:"state-overview",title:"State Overview"},r={unversionedId:"mainconcepts/coordinate-state-actions/state-overview",id:"mainconcepts/coordinate-state-actions/state-overview",isDocsHomePage:!1,title:"State Overview",description:"This page was moved from the old website without any change and might be updated",source:"@site/../docs/mainconcepts/coordinate-state-actions/state-overview.md",slug:"/mainconcepts/coordinate-state-actions/state-overview",permalink:"/docs/mainconcepts/coordinate-state-actions/state-overview",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/coordinate-state-actions/state-overview.md",version:"current",sidebar:"mainSidebar",previous:{title:"Layout System with Flexbox",permalink:"/docs/mainconcepts/uicomposition/flexbox-yoga"},next:{title:"Hoisting State",permalink:"/docs/mainconcepts/coordinate-state-actions/hoisting-state"}},c=[{value:"Declaring a Component State",id:"declaring-a-component-state",children:[]},{value:"Initializing a State value",id:"initializing-a-state-value",children:[]},{value:"Defining State Updates",id:"defining-state-updates",children:[]},{value:"Calling state updates",id:"calling-state-updates",children:[]},{value:"Keys and identifying components",id:"keys-and-identifying-components",children:[]},{value:"Lazy State Updates",id:"lazy-state-updates",children:[]},{value:"Immutability",id:"immutability",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Content will be updated")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This page was moved from the old website without any change and might be updated"))),Object(i.b)("p",null,"A Litho component can contain two types of data:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"props"),": passed down from parent and cannot change during a component's lifecycle."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"state"),": encapsulated and managed within the component, and is transparent to the parent.")),Object(i.b)("p",null,"States for a given Component are the union of all arguments annotated with\n",Object(i.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/annotations/State.html"},"State")," in the spec. While both Prop and\nState hold information that influences the output of the component, they are different in one\nimportant way: props get passed to the component from its parent whereas states are managed\nwithin the component."),Object(i.b)("p",null,"The initial values of states can be set using the\n",Object(i.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/annotations/OnCreateInitialState.html"},"OnCreateInitialState")," method\nand states can be updated in ",Object(i.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/annotations/OnUpdateState.html"},"OnUpdateState"),"\nmethods. Updating states in the ",Object(i.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/annotations/OnUpdateState.html"},"OnUpdateState"),"\nmethods will cause the component to invoke its\n",Object(i.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/annotations/OnCreateLayout.html"},"OnCreateLayout")," method.\nStates should be immutable since the layout can be calculated on multiple threads. Immutability of\nthe states ensures that no thread safety issues can occur in the component hierarchy."),Object(i.b)("p",null,"A common example of State usage is rendering a checkbox. The component renders different\ndrawables for the checked and unchecked states, but this is an internal detail of the checkbox\ncomponent that the parent doesn't need to be aware of."),Object(i.b)("h2",{id:"declaring-a-component-state"},"Declaring a Component State"),Object(i.b)("p",null,"You can define a State on a Component by using the @State annotation in the spec lifecycle methods, similarly to how you would define a Prop."),Object(i.b)("p",null,"Defining state elements is enabled on the lifecycle methods of Layout Specs and Mount Specs."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\npublic class CheckboxSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @State boolean isChecked) {\n\n    return Column.create(c)\n        .child(Image.create(c)\n            .drawableRes(isChecked\n                ? R.drawable.is_checked\n                : R.drawable.is_unchecked))\n        .child(Text.create(c)\n            .text("Submit")\n            .clickHandler(Checkbox.onClickedText(c)))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickedText(\n      ComponentContext c,\n      @State boolean isChecked) {\n    ...\n  }\n}\n')),Object(i.b)("h2",{id:"initializing-a-state-value"},"Initializing a State value"),Object(i.b)("p",null,"To set an initial value for a state, you have to write a method annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"@OnCreateInitialState")," in your spec."),Object(i.b)("p",null,"This is what you need to know when writing an ",Object(i.b)("inlineCode",{parentName:"p"},"@OnCreateInitialState")," method:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The first parameter must be of type ",Object(i.b)("inlineCode",{parentName:"li"},"ComponentContext"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@Prop")," parameters are allowed."),Object(i.b)("li",{parentName:"ul"},"All other parameters must have a corresponding parameter annotated with ",Object(i.b)("inlineCode",{parentName:"li"},"@State")," in the other lifecycle methods, and their type must be a ",Object(i.b)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/StateValue.html"},"StateValue")," that is parameterized with the type of the matching ",Object(i.b)("inlineCode",{parentName:"li"},"@State")," element."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@OnCreateInitialState")," methods are not mandatory. If you do not define one or if you only initialize some states, the uninitialized ones will take Java defaults."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@OnCreateInitialState")," is called only once for each component, when it first gets added to the ",Object(i.b)("inlineCode",{parentName:"li"},"ComponentTree"),". Following layout recalculations of the same ",Object(i.b)("inlineCode",{parentName:"li"},"ComponentTree")," will not call this again if the key of the component doesn't change."),Object(i.b)("li",{parentName:"ul"},"You should never need to call the ",Object(i.b)("inlineCode",{parentName:"li"},"@OnCreateInitialState")," method yourself.")),Object(i.b)("p",null,"Here's how you would initialize the checkbox state with a value passed down from the parent:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\npublic class CheckboxSpec {\n\n  @OnCreateInitialState\n  static void onCreateInitialState(\n      ComponentContext c,\n      StateValue<Boolean> isChecked,\n      @Prop boolean initChecked) {\n\n    isChecked.set(initChecked);\n  }\n}\n")),Object(i.b)("h2",{id:"defining-state-updates"},"Defining State Updates"),Object(i.b)("p",null,"You can define how a component's state or states should be updated by declaring methods annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"@OnUpdateState")," in the specs."),Object(i.b)("p",null,"You can have as many ",Object(i.b)("inlineCode",{parentName:"p"},"@OnUpdateState")," methods as you need, according to what states you want to update or what parameters your states depend on."),Object(i.b)("p",null,"Each call to an ",Object(i.b)("inlineCode",{parentName:"p"},"@OnUpdateState")," method will trigger a new layout calculation for its ComponentTree. For better performance, if there are situations that can trigger an update for multiple states, you should define an ",Object(i.b)("inlineCode",{parentName:"p"},"@OnUpdateState")," method that updates the value for all those states. Bundling them in the same update call reduces the number of new layout calculations and improves performance."),Object(i.b)("p",null,"This is what you need to know when writing an ",Object(i.b)("inlineCode",{parentName:"p"},"@OnUpdateState"),"  method:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Parameters representing the states must match the name of a parameter annotated with ",Object(i.b)("inlineCode",{parentName:"li"},"@State")," and their type must be a ",Object(i.b)("inlineCode",{parentName:"li"},"StateValue")," parameterized with the type of the matching ",Object(i.b)("inlineCode",{parentName:"li"},"@State"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@Param")," parameters are allowed. If the value of your state depends on props, you can declare them like this and pass the value of the prop when the update call is triggered."),Object(i.b)("li",{parentName:"ul"},"All other parameters must have a corresponding parameter annotated with ",Object(i.b)("inlineCode",{parentName:"li"},"@State")," in the other lifecycle methods, and their type must be a ",Object(i.b)("inlineCode",{parentName:"li"},"StateValue")," parameterized with the type of the matching ",Object(i.b)("inlineCode",{parentName:"li"},"@State")," element.")),Object(i.b)("p",null,"Here's how you would define a state update method for the checkbox:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\npublic class CheckboxSpec {\n\n  @OnUpdateState\n  static void updateCheckboxState(StateValue<Boolean> isChecked) {\n    isChecked.set(!isChecked.get());\n  }\n}\n")),Object(i.b)("p",null,"If you want to bundle multiple state updates in a single method, you would just add all those states as parameters to the same ",Object(i.b)("inlineCode",{parentName:"p"},"@OnUpdateState")," method:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@OnUpdateState\nstatic void updateMultipleStates(\n    StateValue<Boolean> stateOne,\n    StateValue<String> stateTwo,\n    @Param int someParam) {\n\n  final boolean thresholdReached = someParam > 100;\n  stateOne.set(thresholdReached);\n  stateTwo.set(thresholdReached ? "reached" : "not reached");\n}\n\n')),Object(i.b)("h2",{id:"calling-state-updates"},"Calling state updates"),Object(i.b)("p",null,"For each ",Object(i.b)("inlineCode",{parentName:"p"},"@OnUpdateState")," method in your spec, the generated component will have two methods that will delegate to the ",Object(i.b)("inlineCode",{parentName:"p"},"@OnUpdateState")," method under the hood:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a static method with the same name, which will asynchronously apply the state updates."),Object(i.b)("li",{parentName:"ul"},"a static method with the same name and a ",Object(i.b)("em",{parentName:"li"},"Sync")," suffix, which will synchronously trigger the state updates.\nBoth methods take a ",Object(i.b)("inlineCode",{parentName:"li"},"ComponentContext")," as first parameter, followed by all the parameters declared with ",Object(i.b)("inlineCode",{parentName:"li"},"@Param")," in your ",Object(i.b)("inlineCode",{parentName:"li"},"@OnUpdateState")," method.")),Object(i.b)("p",null,"Here's how you would call the state update method to update your checkbox when a user clicks it:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\npublic class CheckboxSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @State boolean isChecked) {\n\n    return Column.create(c)\n        .child(Image.create(c)\n            .drawableRes(isChecked\n                ? R.drawable.is_checked\n                : R.drawable.is_unchecked))\n        .clickHandler(Checkbox.onCheckboxClicked(c))\n        .build();\n  }\n\n  @OnUpdateState\n  static void updateCheckbox(StateValue<Boolean> isChecked) {\n    isChecked.set(!isChecked.get());\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onCheckboxClicked(ComponentContext c) {\n    Checkbox.updateCheckbox(c);\n    // Checkbox.updateCheckboxSync(c); for a sync update\n  }\n}\n")),Object(i.b)("p",null,"This is what you need to keep in mind when calling state update methods:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When calling a state update method, the ",Object(i.b)("inlineCode",{parentName:"li"},"ComponentContext")," instance passed as first parameter must always be the one that is passed down as parameter in the lifecycle method in which the update state is triggered. This context contains important information about the currently known state values and it's important for transferring these values from the old components to the new ones during new layout calculations."),Object(i.b)("li",{parentName:"ul"},"In ",Object(i.b)("inlineCode",{parentName:"li"},"LayoutSpec"),"s, you should avoid calling state update methods in ",Object(i.b)("inlineCode",{parentName:"li"},"onCreateLayout"),", unless you are absolutely certain they will happen only a deterministic, small number of times.\nEvery call to a state update method will trigger a new layout calculation on the ComponentTree, which in turn will call ",Object(i.b)("inlineCode",{parentName:"li"},"onCreateLayout")," on all its components, so it's rather easy to go into an infinite loop. You should consider whether a lazy state update (described below) wouldn't be more appropriate for your use case."),Object(i.b)("li",{parentName:"ul"},"In ",Object(i.b)("inlineCode",{parentName:"li"},"MountSpec"),"s, you should never call update state methods from ",Object(i.b)("inlineCode",{parentName:"li"},"bind")," and ",Object(i.b)("inlineCode",{parentName:"li"},"mount")," methods. If you need to update a state value in those methods, you should instead use a lazy state update, described below."),Object(i.b)("li",{parentName:"ul"},"State is a concept local to components. You cannot call a state update method from outside a component. ",Object(i.b)("a",{parentName:"li",href:"/docs/props"},"Props")," are the mechanism to update a component based on outside changes. You can read more about that ",Object(i.b)("a",{parentName:"li",href:"/docs/best-practices/props-vs-state"},"here"),".")),Object(i.b)("h2",{id:"keys-and-identifying-components"},"Keys and identifying components"),Object(i.b)("p",null,"The framework sets a key on each component, based on its type and the key of its parent. This key is used to determine which component we want to update when calling a state update and finding this component when traversing the tree."),Object(i.b)("p",null,"Components of the same type that have the same parent will be assigned the same key, so we need a way of uniquely identifying them."),Object(i.b)("p",null,"Moreover, when a Component's state or props are updated and the ",Object(i.b)("inlineCode",{parentName:"p"},"ComponentTree")," is recreated, there are situations when components are removed, added or rearranged inside the tree. Because components can be dynamic we need a way of keeping track of the components so we know, even after the ",Object(i.b)("inlineCode",{parentName:"p"},"ComponentTree")," changes, for which component to apply a state update."),Object(i.b)("p",null,"Whenever a key collision is detected in a ComponentTree, which can happen when a parent component created multiple children components of the same type, we assign a unique key on those siblings which depends on the order in which they added to the parent.\nHowever, with the current implementation, there's no easy way for us to detect that a component is the same when the order of the components in your hierarchy changes. This means that the keys that are autogenerated are not stable through component moves. If you expect your components to move around, you have to assign manual keys."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Component.Builder")," class exposes a ",Object(i.b)("inlineCode",{parentName:"p"},".key()")," method that you can call when creating a component to assign a unique key to it that will be used to identify this component."),Object(i.b)("p",null,"You should set this key whenever you have multiple children of the same component with the same type or you expect the content of your layout to be dynamic.\nThe manual key you set on a component using the ",Object(i.b)("inlineCode",{parentName:"p"},"key")," prop will always take precedence over the autogenerated one."),Object(i.b)("p",null,"The most common case when you must manually define keys for your components is creating and adding them as children in a loop:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@OnCreateLayout\nstatic Component onCreateLayout(\n    ComponentContext c,\n    @State boolean isChecked) {\n\n  final Component.Builder parent = Column.create(c);\n  for (int i = 0; i < 10; i++) {\n    parent.child(Text.create(c).key("key" +i));\n  }\n  return parent.build();\n}\n')),Object(i.b)("p",null,"If a component with key ",Object(i.b)("inlineCode",{parentName:"p"},"A")," updates its state, and later it is removed from the hierarchy and added back again with the same key ",Object(i.b)("inlineCode",{parentName:"p"},"A"),", its state will be reset to the initial value. That means that an updated state value will only persist as long as the component it belongs to is part of the ComponentTree hierarchy."),Object(i.b)("h2",{id:"lazy-state-updates"},"Lazy State Updates"),Object(i.b)("p",null,"For situations where you want to update the value of a ",Object(i.b)("inlineCode",{parentName:"p"},"State"),", but don't need to immediately trigger a new layout calculation, you can use ",Object(i.b)("strong",{parentName:"p"},"lazy state updates"),". After a lazy state update, the new state value will be visible in event handlers, but a new layout will not be triggered. Currently, the value is ",Object(i.b)("strong",{parentName:"p"},"not")," visible to other lifecycle callbacks (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"onMount"),")."),Object(i.b)("p",null,"This is useful for updating state that doesn't need to be reflected in the UI. For example, say you want to log an analytics event only the first time a Component becomes visible. If you use lazy state, you can record whether a log was sent in a lazy ",Object(i.b)("inlineCode",{parentName:"p"},"@State")," variable without causing the UI to reflow."),Object(i.b)("p",null,"To use lazy state updates, you need to set the ",Object(i.b)("inlineCode",{parentName:"p"},"canUpdateLazily")," parameter on the ",Object(i.b)("inlineCode",{parentName:"p"},"@State")," annotation to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("p",null,"For a state parameter ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," marked with ",Object(i.b)("inlineCode",{parentName:"p"},"canUpdateLazily"),", the framework will generate a static state update method named ",Object(i.b)("inlineCode",{parentName:"p"},"lazyUpdateFoo")," which takes a new value as parameter that will be set as the new value for ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),"."),Object(i.b)("p",null,"States marked as ",Object(i.b)("inlineCode",{parentName:"p"},"canUpdateLazily")," can still be used for regular state updates."),Object(i.b)("p",null,"Let's look at an example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@OnCreateLayout\nstatic Component onCreateLayout(\n    final ComponentContext c,\n    @State(canUpdateLazily = true) String foo) {\n\n  FooComponent.lazyUpdateFoo(c, "updated foo");\n  return Column.create(c)\n      .child(\n          Text.create(c)\n              .text(foo))\n      .build();\n}\n\n@OnCreateInitialState\nstatic void onCreateInitialState(\n    ComponentContext c,\n    StateValue<String> foo) {\n  foo.set("first foo");\n}\n')),Object(i.b)("p",null,"The first time FooComponent is rendered, its child ",Object(i.b)("inlineCode",{parentName:"p"},"Text")," component will display ",Object(i.b)("em",{parentName:"p"},'"first foo"'),", even if ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," is lazily updated with another value. When a regular state update or receiving new props will trigger a new layout calculation, the lazy state update will be applied and the ",Object(i.b)("inlineCode",{parentName:"p"},"Text")," will render ",Object(i.b)("em",{parentName:"p"},'"updated foo"'),"."),Object(i.b)("h2",{id:"immutability"},"Immutability"),Object(i.b)("p",null,"Because of ",Object(i.b)("a",{parentName:"p",href:"/docs/asynchronous-layout"},"background layout"),", ",Object(i.b)("inlineCode",{parentName:"p"},"State")," can be accessed at anytime by multiple threads. To ensure thread safety, ",Object(i.b)("inlineCode",{parentName:"p"},"State")," objects should be immutable (and if for some rare reason this is not possible, then at least thread safe). The simplest solution is to express your state in terms of primitives since primitives are by definition immutable."))}p.isMDXComponent=!0},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return a?o.a.createElement(u,r(r({ref:t},s),{},{components:a})):o.a.createElement(u,r({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var s=2;s<i;s++)l[s]=a[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);