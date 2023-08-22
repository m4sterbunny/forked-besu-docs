"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[42197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(n),c=r,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Use Splunk",sidebar_position:5,description:"Send Hyperledger Besu logs to Splunk"},o="Use Splunk",i={unversionedId:"private-networks/how-to/monitor/splunk",id:"version-23.4.0/private-networks/how-to/monitor/splunk",title:"Use Splunk",description:"Send Hyperledger Besu logs to Splunk",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/monitor/splunk.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/splunk",permalink:"/23.4.0/private-networks/how-to/monitor/splunk",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/monitor/splunk.md",tags:[],version:"23.4.0",lastUpdatedAt:1692685077,formattedLastUpdatedAt:"Aug 22, 2023",sidebarPosition:5,frontMatter:{title:"Use Splunk",sidebar_position:5,description:"Send Hyperledger Besu logs to Splunk"},sidebar:"privateDocSidebar",previous:{title:"Use Quorum Hibernate",permalink:"/23.4.0/private-networks/how-to/monitor/quorum-hibernate"},next:{title:"Use OpenTelemetry",permalink:"/23.4.0/private-networks/how-to/monitor/opentelemetry"}},p={},s=[{value:"Developer Quickstart with Splunk",id:"developer-quickstart-with-splunk",level:2},{value:"Splunk Connect for Ethereum Docker Compose",id:"splunk-connect-for-ethereum-docker-compose",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Steps",id:"steps",level:3},{value:"Use Splunk Enterprise as a Docker container",id:"use-splunk-enterprise-as-a-docker-container",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps-1",level:3},{value:"Run a Splunk Enterprise instance",id:"run-a-splunk-enterprise-instance",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Steps",id:"steps-2",level:3},{value:"Splunk options reference",id:"splunk-options-reference",level:2}],u={toc:s};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-splunk"},"Use Splunk"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://splunkbase.splunk.com/app/4866/"},"Splunk")," is a third-party monitoring solution compatible with Besu. A Splunk server can receive Besu logs and enable complex search, visualization, and analysis."),(0,r.kt)("p",null,"Splunk can aggregate multiple logs in one place and run complex queries without being connected to the machine running Besu to read the standard output."),(0,r.kt)("p",null,"Options for running Splunk and Besu are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#use-splunk"},"Use Splunk"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#developer-quickstart-with-splunk"},"Developer Quickstart with Splunk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#splunk-connect-for-ethereum-docker-compose"},"Splunk Connect for Ethereum Docker Compose"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#steps"},"Steps")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#use-splunk-enterprise-as-a-docker-container"},"Use Splunk Enterprise as a Docker container"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#steps-1"},"Steps")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-a-splunk-enterprise-instance"},"Run a Splunk Enterprise instance"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites-1"},"Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#steps-2"},"Steps")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#splunk-options-reference"},"Splunk options reference"))))),(0,r.kt)("h2",{id:"developer-quickstart-with-splunk"},"Developer Quickstart with Splunk"),(0,r.kt)("p",null,"To view the Quickstart network logs in Splunk:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/tutorials/quickstart"},"Start the Developer Quickstart with Besu"),", selecting Splunk monitoring."),(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8000"},"Splunk UI"),".")),(0,r.kt)("h2",{id:"splunk-connect-for-ethereum-docker-compose"},"Splunk Connect for Ethereum Docker Compose"),(0,r.kt)("p",null,"To run a development Besu node and connect it to Splunk Enterprise, use the Splunk Connect for Ethereum demonstration Docker Compose environment provided by Splunk."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker and Docker-compose"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A Splunk license is not required to use the Splunk Connect for Ethereum demonstration.")),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the Splunk Connect for Ethereum repository:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/splunk/splunk-connect-for-ethereum.git\ncd splunk-connect-for-ethereum\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the demonstration environment by following the Splunk Connect for Ethereum repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/splunk/splunk-connect-for-ethereum/tree/master/examples/besu"},"README"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Splunk enterprise takes some time to start."),(0,r.kt)("p",{parentName:"admonition"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")," and wait for the ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS")," of the 3 containers to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Up [number] seconds (healthy)"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                        COMMAND                  CREATED             STATUS                    PORTS                                                                            NAMES\n127600dd1173        splunkdlt/ethlogger:latest   "ethlogger"              53 seconds ago      Up 51 seconds (healthy)                                                                                    ethlogger\n88dfcee683c4        splunk/splunk:latest         "/sbin/entrypoint.sh\u2026"   53 seconds ago      Up 52 seconds (healthy)   8065/tcp, 8088-8089/tcp, 8191/tcp, 9887/tcp, 9997/tcp, 0.0.0.0:18000->8000/tcp   splunk\n111b0c6d6072        hyperledger/besu:1.4.4       "besu"                   53 seconds ago      Up 52 seconds (healthy)   8545-8547/tcp, 30303/tcp                                                         besu\n'))))),(0,r.kt)("h2",{id:"use-splunk-enterprise-as-a-docker-container"},"Use Splunk Enterprise as a Docker container"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/CHANGELOG.md#144"},"Besu 1.4.4")," or later ",(0,r.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/get-started/install/binary-distribution"},"installed"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A Splunk license is not required to use the trial version of the Splunk Docker image. The image is not suitable for production use and has ",(0,r.kt)("a",{parentName:"p",href:"https://www.splunk.com/"},"restrictions on daily log volume"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If running ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/get-started/install/run-docker-image"},"Besu as a Docker container"),", consider using ",(0,r.kt)("a",{parentName:"p",href:"#splunk-connect-for-ethereum-docker-compose"},"Splunk Connect for Ethereum Docker Compose")," or ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/how-to/deploy/kubernetes"},"Kubernetes")," instead of the Splunk Enterprise trial container.")),(0,r.kt)("h3",{id:"steps-1"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the Splunk Enterprise container:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n-e SPLUNK_START_ARGS=--accept-license \\\n-e SPLUNK_HEC_TOKEN=11111111-1111-1111-1111-1111111111113 \\\n-e SPLUNK_PASSWORD=changeme \\\n--rm \\\n-p8080:8000 -p8088:8088 \\\n-d \\\n--name splunk-demo \\\nsplunk/splunk:latest\n")),(0,r.kt)("p",{parentName:"li"},"Once the service is started, connect on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8080/"))," and login as the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," user with a password of ",(0,r.kt)("inlineCode",{parentName:"p"},"changeme"),"."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To follow the logs of the Splunk container:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f splunk-demo\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the Besu index:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"In the Splunk Web interface, navigate to the ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8080/en-US/manager/search/data/indexes"},"index list in the settings"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.splunk.com/Documentation/Splunk/8.0.4/Indexer/Setupmultipleindexes#Create_events_indexes"},"Create an event index")," with an Index Name of ",(0,r.kt)("inlineCode",{parentName:"li"},"besu"),"."),(0,r.kt)("li",{parentName:"ol"},"Leave other fields with the default values."),(0,r.kt)("li",{parentName:"ol"},"Save the ",(0,r.kt)("inlineCode",{parentName:"li"},"besu")," index."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run Besu. To start a Besu node running in development mode, run the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"LOGGER=Splunk \\\nSPLUNK_URL=https://localhost:8088 \\\nSPLUNK_TOKEN=11111111-1111-1111-1111-1111111111113 \\\nSPLUNK_SKIPTLSVERIFY=true \\\nbesu \\\n--network=dev \\\n--miner-coinbase=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73 \\\n--miner-enabled \\\n--logging=trace\n")),(0,r.kt)("p",{parentName:"li"},"The environment variables specified send the Besu logs to Splunk. Only ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGGER"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SPLUNK_URL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SPLUNK_TOKEN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SPLUNK_SKIPTLSVERIFY")," are required in this example. The complete list of options is in the ",(0,r.kt)("a",{parentName:"p",href:"#splunk-options-reference"},"Splunk options reference table"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Splunk Web interface, navigate to the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/en-US/app/search/search"},"search page"),". Type ",(0,r.kt)("inlineCode",{parentName:"p"},'index="besu"')," in the search field. Log events sent by Besu are displayed."),(0,r.kt)("p",{parentName:"li"},"Congratulations! You can now play with the search and other Splunk features to explore your Besu logs."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Splunk search page",src:n(52888).Z,width:"2072",height:"1436"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop Besu with ++ctrl+c++. Stop the Splunk container with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker stop splunk-demo"),"."))),(0,r.kt)("h2",{id:"run-a-splunk-enterprise-instance"},"Run a Splunk Enterprise instance"),(0,r.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.splunk.com/"},"Splunk Enterprise license")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/besu/blob/master/CHANGELOG.md#144"},"Besu 1.4.4")," or later ",(0,r.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/get-started/install/binary-distribution"},"installed"))),(0,r.kt)("h3",{id:"steps-2"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the steps in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.splunk.com/Documentation/Splunk/8.0.4/Installation"},"Splunk Enterprise documentation")," to download, install, and run Splunk Enterprise.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After logging into the Splunk Enterprise Web interface, navigate to the settings to:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.splunk.com/Documentation/Splunk/8.0.4/Data/UsetheHTTPEventCollector"},"Create an HTTP Event Collector"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.splunk.com/Documentation/Splunk/8.0.4/Indexer/Setupmultipleindexes#Create_events_indexes"},"Create an event index")," named ",(0,r.kt)("inlineCode",{parentName:"li"},"besu"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run Besu as in step 3 in ",(0,r.kt)("a",{parentName:"p",href:"#use-splunk-enterprise-as-a-docker-container"},"using Splunk on Docker"),". Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"SPLUNK_URL")," value to match the HTTP Event Collector address and port."),(0,r.kt)("p",{parentName:"li"},"You can display logs and use the search engine as in step 4 in ",(0,r.kt)("a",{parentName:"p",href:"#use-splunk-enterprise-as-a-docker-container"},"using Splunk on Docker"),"."))),(0,r.kt)("h2",{id:"splunk-options-reference"},"Splunk options reference"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LOGGER"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"Splunk")," to activate sending logs to Splunk."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"Current host. If in a Docker environment, the default value is the docker container ID. Otherwise, the default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"localhost"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPLUNK_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the Splunk HTTP Event Collector. For example, use ",(0,r.kt)("inlineCode",{parentName:"td"},"https://localhost:8088")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPLUNK_TOKEN"),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication token, usually of the form ",(0,r.kt)("inlineCode",{parentName:"td"},"11111111-1111-1111-1111-111111111111")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPLUNK_INDEX"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.splunk.com/Splexicon:Index"},"Index")," to store logs. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"besu")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPLUNK_SOURCE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.splunk.com/Splexicon:Source"},"Source of the logs"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"besu")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPLUNK_SOURCETYPE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.splunk.com/Splexicon:Sourcetype"},"Source type of the logs"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"besu")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPLUNK_BATCH_SIZE_BYTES"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of a log batch in bytes. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"65536")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPLUNK_BATCH_SIZE_COUNT"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of a log batch in number of events. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"1000")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPLUNK_BATCH_INTERVAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval at which to send log batches. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"500")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPLUNK_SKIPTLSVERIFY"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to check the Splunk instance TLS certificate when sending data. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"No")))))}k.isMDXComponent=!0},52888:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/splunk-ui-c43ce48c74291a12501d3c9a86614bd9.png"}}]);