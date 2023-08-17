"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[57427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),u=a(16550),i=a(91980),s=a(67392),c=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,s]=b({queryString:a,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=i??m;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var h=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==u&&(m(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":u===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},16915:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const u={title:"Manage JVM memory",sidebar_position:2,description:"Besu memory management",tags:["public networks","private networks"]},i="Manage JVM memory",s={unversionedId:"public-networks/how-to/configure-jvm/manage-memory",id:"version-23.4.1/public-networks/how-to/configure-jvm/manage-memory",title:"Manage JVM memory",description:"Besu memory management",source:"@site/versioned_docs/version-23.4.1/public-networks/how-to/configure-jvm/manage-memory.md",sourceDirName:"public-networks/how-to/configure-jvm",slug:"/public-networks/how-to/configure-jvm/manage-memory",permalink:"/public-networks/how-to/configure-jvm/manage-memory",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/how-to/configure-jvm/manage-memory.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1692298666,formattedLastUpdatedAt:"Aug 17, 2023",sidebarPosition:2,frontMatter:{title:"Manage JVM memory",sidebar_position:2,description:"Besu memory management",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Pass JVM options",permalink:"/public-networks/how-to/configure-jvm/pass-jvm-options"},next:{title:"Use Java Flight Recorder",permalink:"/public-networks/how-to/configure-jvm/java-flight-recorder"}},c={},m=[{value:"Manage the heap dump",id:"manage-the-heap-dump",level:2}],p={toc:m},d="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-jvm-memory"},"Manage JVM memory"),(0,r.kt)("p",null,"You can manage Java Virtual Machine (JVM) memory usage for Besu by modifying the maximum heap size."),(0,r.kt)("p",null,"By default, the JVM uses 25% of system RAM. For example, if you have 16 GB RAM installed, the JVM uses 4 GB by default."),(0,r.kt)("p",null,"On public networks, we recommend setting the maximum heap size to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3 GB on an 8 GB RAM system."),(0,r.kt)("li",{parentName:"ul"},"5 GB on a 16 GB RAM system."),(0,r.kt)("li",{parentName:"ul"},"8 GB on a system with at least 24 GB RAM.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Setting a higher maximum heap size speeds up the sync period but doesn't have much impact after sync. Thus, we recommend setting it to 8 GB only when you have available RAM.")),(0,r.kt)("p",null,"You can set the maximum heap size using the ",(0,r.kt)("inlineCode",{parentName:"p"},"BESU_OPTS")," environment variable and the ",(0,r.kt)("inlineCode",{parentName:"p"},"-Xmx")," option. The following examples set the maximum heap size to 8 GB:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Exported environment variable example",value:"tab1",mdxType:"TabItem"},(0,r.kt)("p",null,"Set the variable for the whole shell before running Besu."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export BESU_OPTS=-Xmx8g\n"))),(0,r.kt)(l.Z,{label:"Inline environment variable example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"Set the variable only for the specific Besu command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_OPTS=-Xmx8g besu [Besu options]\n"))),(0,r.kt)(l.Z,{label:".service file example",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[Service]\n...\nEnvironment="BESU_OPTS=-Xmx8g"\nExecStart=besu [Besu options]\n...\n')))),(0,r.kt)("h2",{id:"manage-the-heap-dump"},"Manage the heap dump"),(0,r.kt)("p",null,"Heap dump file generation is disabled by default. To enable it, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"-XX:+HeapDumpOnOutOfMemoryError")," Java option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'BESU_OPTS="-XX:+HeapDumpOnOutOfMemoryError"\n')),(0,r.kt)("p",null,"When heap dump file generation is enabled, and an out-of-memory error occurs, the heap dump file is saved in the Besu runtime directory by default."),(0,r.kt)("p",null,"The heap dump file might be large and can saturate your drive. It can be up to the size of the allocated memory. For example, for 8 GB heap memory, the file can be up to 8 GB. Specify the directory where you want the dump to be saved using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-XX:HeapDumpPath")," Java option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'BESU_OPTS="-XX:HeapDumpPath=/<path>/<to>/<directory>"\n')))}b.isMDXComponent=!0}}]);