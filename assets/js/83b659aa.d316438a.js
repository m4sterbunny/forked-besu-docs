"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[46742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(86010);const a={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(87462),o=n(67294),a=n(86010),l=n(12466),s=n(16550),i=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=m(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,c]=h({queryString:n,groupId:r}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,p.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=i??u;return d({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,a]),tabValues:a}}var b=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==s&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,a.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=f(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",k.tabList)},o.createElement(y,(0,r.Z)({},e,t)),o.createElement(g,(0,r.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return o.createElement(v,(0,r.Z)({key:String(t)},e))}},79766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(74866),l=n(85162);const s={title:"Use OpenTelemetry",sidebar_position:6,description:"Collect Besu information with the OpenTelemetry Collector",tags:["private networks"]},i="Use OpenTelemetry",c={unversionedId:"private-networks/how-to/monitor/opentelemetry",id:"version-23.7.3/private-networks/how-to/monitor/opentelemetry",title:"Use OpenTelemetry",description:"Collect Besu information with the OpenTelemetry Collector",source:"@site/versioned_docs/version-23.7.3/private-networks/how-to/monitor/opentelemetry.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/opentelemetry",permalink:"/23.7.3/private-networks/how-to/monitor/opentelemetry",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/how-to/monitor/opentelemetry.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1700172558,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:6,frontMatter:{title:"Use OpenTelemetry",sidebar_position:6,description:"Collect Besu information with the OpenTelemetry Collector",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Splunk",permalink:"/23.7.3/private-networks/how-to/monitor/splunk"},next:{title:"Use Chainlens Explorer",permalink:"/23.7.3/private-networks/how-to/monitor/chainlens"}},p={},u=[{value:"Install OpenTelemetry Collector",id:"install-opentelemetry-collector",level:2},{value:"Setting up and running OpenTelemetry with Besu",id:"setting-up-and-running-opentelemetry-with-besu",level:2}],m={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-opentelemetry"},"Use OpenTelemetry"),(0,o.kt)("p",null,"You can use the OpenTelemetry monitoring and tracing service to gather node metrics and traces. To enable OpenTelemetry to access Hyperledger Besu, use the ",(0,o.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/cli/options#metrics-enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"--metrics-enabled"))," and ",(0,o.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/cli/options#metrics-protocol"},(0,o.kt)("inlineCode",{parentName:"a"},"--metrics-protocol=opentelemetry"))," options. Use ",(0,o.kt)("a",{parentName:"p",href:"https://splunk.com"},"Splunk")," to visualize the collected data. A ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/splunk/splunk-connect-for-ethereum/tree/master/examples/besu-sync"},"Besu Sync example")," is available."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use OpenTelemetry to monitor the sync time of your Besu node and show where time is spent internally and over the JSON-RPC interface."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://wiki.hyperledger.org/display/BESU/2021-01-19+Office+Hours+Notes"},"This office hours recording")," shows examples of monitoring Hyperledger Besu.")),(0,o.kt)("h2",{id:"install-opentelemetry-collector"},"Install OpenTelemetry Collector"),(0,o.kt)("p",null,"Download and install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/releases"},"OpenTelemetry Collector"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also install exporters that send system metrics to OpenTelemetry to monitor non-Besu-specific items such as disk and CPU usage. The OpenTelemetry Collector can connect to additional applications, and may be deployed in Kubernetes environments as a daemonset.")),(0,o.kt)("h2",{id:"setting-up-and-running-opentelemetry-with-besu"},"Setting up and running OpenTelemetry with Besu"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure OpenTelemetry to accept data from Besu. For example, use the following configuration for your ",(0,o.kt)("inlineCode",{parentName:"p"},"otel-collector-config.yml")," file, and send data to Splunk and Splunk APM:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="otel-collector-config.yml"',title:'"otel-collector-config.yml"'},'receivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nexporters:\n  splunk_hec/traces:\n    # Splunk HTTP Event Collector token.\n    token: "11111111-1111-1111-1111-1111111111113"\n    # URL to a Splunk instance to send data to.\n    endpoint: "https://<SPLUNK INSTANCE>:8088/services/collector"\n    # Optional Splunk source: https://docs.splunk.com/Splexicon:Source\n    source: "besu:traces"\n    # Optional Splunk source type: https://docs.splunk.com/Splexicon:Sourcetype\n    sourcetype: "otlp"\n    # Splunk index, optional name of the Splunk index targeted.\n    index: "traces"\n    # Maximum HTTP connections to use simultaneously when sending data. Defaults to 100.\n    max_connections: 20\n    # Whether to disable gzip compression over HTTP. Defaults to false.\n    disable_compression: false\n    # HTTP timeout when sending data. Defaults to 10s.\n    timeout: 10s\n    # Whether to skip checking the certificate of the HEC endpoint when sending data over HTTPS. Defaults to false.\n    # For this demo, we use a self-signed certificate on the Splunk docker instance, so this flag is set to true.\n    insecure_skip_verify: true\n  splunk_hec/metrics:\n    # Splunk HTTP Event Collector token.\n    token: "11111111-1111-1111-1111-1111111111113"\n    # URL to a Splunk instance to send data to.\n    endpoint: "https://<SPLUNK INSTANCE>:8088/services/collector"\n    # Optional Splunk source: https://docs.splunk.com/Splexicon:Source\n    source: "besu:metrics"\n    # Optional Splunk source type: https://docs.splunk.com/Splexicon:Sourcetype\n    sourcetype: "prometheus"\n    # Splunk index, optional name of the Splunk index targeted.\n    index: "metrics"\n    # Maximum HTTP connections to use simultaneously when sending data. Defaults to 100.\n    max_connections: 20\n    # Whether to disable gzip compression over HTTP. Defaults to false.\n    disable_compression: false\n    # HTTP timeout when sending data. Defaults to 10s.\n    timeout: 10s\n    # Whether to skip checking the certificate of the HEC endpoint when sending data over HTTPS. Defaults to false.\n    # For this demo, we use a self-signed certificate on the Splunk docker instance, so this flag is set to true.\n    insecure_skip_verify: true\n  # Traces\n  sapm:\n    access_token: "${SPLUNK_ACCESS_TOKEN}"\n    endpoint: "https://ingest.${SPLUNK_REALM}.signalfx.com/v2/trace"\n  # Metrics + Events\n  signalfx:\n    access_token: "${SPLUNK_ACCESS_TOKEN}"\n    realm: "${SPLUNK_REALM}"\n\nprocessors:\n  batch:\n\nextensions:\n  health_check:\n  pprof:\n  zpages:\n\nservice:\n  extensions: [pprof, zpages, health_check]\n  pipelines:\n    traces:\n      receivers: [otlp]\n      exporters: [splunk_hec/traces, sapm]\n      processors: [batch]\n    metrics:\n      receivers: [otlp]\n      exporters: [splunk_hec/metrics, signalfx]\n      processors: [batch]\n')),(0,o.kt)("p",{parentName:"li"},"It is easiest to run the OpenTelemetry collector with Docker with the following command:"),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  -v ./otel-collector-config.yml:/etc/otel/config.yaml \\\n  -e SPLUNK_ACCESS_TOKEN=<access token> \\\n  -e SPLUNK_REALM=<realm> \\\n  -p 4317:4317 \\\n  otel/opentelemetry-collector-contrib:latest\n"))),(0,o.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  -v ./otel-collector-config.yml:/etc/otel/config.yaml \\\n  -e SPLUNK_ACCESS_TOKEN=abcdefg654 \\\n  -e SPLUNK_REALM=us1 \\\n  -p 4317:4317 \\\n  otel/opentelemetry-collector-contrib:latest\n")))),(0,o.kt)("p",{parentName:"li"},"You can also refer to this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/splunk/splunk-connect-for-ethereum/blob/989dc2ccae7d8235bf3ce2a83a18cf0cd1713294/examples/besu-sync/full-sync/docker-compose.yaml"},"Docker-compose example"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start Besu with the ",(0,o.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/cli/options#metrics-enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"--metrics-enabled"))," and ",(0,o.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/cli/options#metrics-protocol"},(0,o.kt)("inlineCode",{parentName:"a"},"--metrics-protocol=opentelemetry"))," options. For example, run the following command to start a single node:"),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'OTEL_EXPORTER_OTLP_ENDPOINT=https://<host>:<port> besu --network=dev --miner-enabled --miner-coinbase <COINBASE ADDRESS> --rpc-http-cors-origins="all" --rpc-http-enabled --metrics-enabled --metrics-protocol=opentelemetry\n'))),(0,o.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'OTEL_EXPORTER_OTLP_ENDPOINT=https://localhost:4317 besu --network=dev --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --rpc-http-enabled --metrics-enabled --metrics-protocol=opentelemetry\n')))),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-specification/blob/8f7cdb73618a0b3afa9532b8f8103d719e352781/specification/sdk-environment-variables.md"},"OpenTelemetry SDK")," mandates how to configure the OpenTelemetry gRPC client, so data flows to the collector from Besu."),(0,o.kt)("p",{parentName:"li"},"You can use the following environment variables:"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OTEL_EXPORTER_OTLP_ENDPOINT"),(0,o.kt)("td",{parentName:"tr",align:null},"OpenTelemetry Collector endpoint, of the form ",(0,o.kt)("inlineCode",{parentName:"td"},"https://host:port"),". The default value is ",(0,o.kt)("inlineCode",{parentName:"td"},"https://localhost:4317")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OTEL_EXPORTER_OTLP_INSECURE"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to allow insecure connections for OpenTelemetry data. False by default."),(0,o.kt)("td",{parentName:"tr",align:null},"No")))))),(0,o.kt)("p",null,"*","[APM]",": Application Performance Monitoring"))}h.isMDXComponent=!0}}]);