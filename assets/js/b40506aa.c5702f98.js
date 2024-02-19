"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[40190],{6847:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(85893),i=n(11151);const r={title:"Configure logging",sidebar_position:3,description:"Hyperledger Besu log level setting and log formatting",path:"blob/master/besu/src/main/resources/",source:"log4j2.xml",tags:["public networks","private networks"]},s="Use logging",l={id:"public-networks/how-to/monitor/logging",title:"Configure logging",description:"Hyperledger Besu log level setting and log formatting",source:"@site/versioned_docs/version-24.1.0/public-networks/how-to/monitor/logging.md",sourceDirName:"public-networks/how-to/monitor",slug:"/public-networks/how-to/monitor/logging",permalink:"/public-networks/how-to/monitor/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/public-networks/how-to/monitor/logging.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1708303603,formattedLastUpdatedAt:"Feb 19, 2024",sidebarPosition:3,frontMatter:{title:"Configure logging",sidebar_position:3,description:"Hyperledger Besu log level setting and log formatting",path:"blob/master/besu/src/main/resources/",source:"log4j2.xml",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Understand metrics",permalink:"/public-networks/how-to/monitor/understand-metrics"},next:{title:"High availability of JSON-RPC and RPC Pub/Sub APIs",permalink:"/public-networks/how-to/configure-ha/"}},a={},c=[{value:"Basic logging",id:"basic-logging",level:2},{value:"Advanced logging",id:"advanced-logging",level:2},{value:"Log rotation",id:"log-rotation",level:3}];function g(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"use-logging",children:"Use logging"}),"\n",(0,t.jsx)(o.p,{children:"Hyperledger Besu uses Log4J2 for logging and provides two methods to configure logging behavior:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"#basic-logging",children:"Basic"})," - Changes the log level."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"#advanced-logging",children:"Advanced"})," - Configures the output and format of the logs."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart",children:"Quorum Developer Quickstart"})," provides an ",(0,t.jsx)(o.a,{href:"/private-networks/how-to/monitor/elastic-stack",children:"example implementation using Elastic Stack"})," for log management."]}),"\n",(0,t.jsx)(o.h2,{id:"basic-logging",children:"Basic logging"}),"\n",(0,t.jsxs)(o.p,{children:["Use the ",(0,t.jsx)(o.a,{href:"/public-networks/reference/cli/options#logging",children:(0,t.jsx)(o.code,{children:"--logging"})})," command line option to specify logging verbosity. The ",(0,t.jsx)(o.a,{href:"/public-networks/reference/cli/options#logging",children:(0,t.jsx)(o.code,{children:"--logging"})})," option changes the volume of events displayed in the log. Valid log levels are ",(0,t.jsx)(o.code,{children:"OFF"}),", ",(0,t.jsx)(o.code,{children:"ERROR"}),", ",(0,t.jsx)(o.code,{children:"WARN"}),", ",(0,t.jsx)(o.code,{children:"INFO"}),", ",(0,t.jsx)(o.code,{children:"DEBUG"}),", ",(0,t.jsx)(o.code,{children:"TRACE"}),", ",(0,t.jsx)(o.code,{children:"ALL"}),". The default level is ",(0,t.jsx)(o.code,{children:"INFO"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"For most use cases, the basic method provides enough configurability."}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["Use the ",(0,t.jsx)(o.a,{href:"/public-networks/reference/api/#admin_changeloglevel",children:(0,t.jsx)(o.code,{children:"admin_changeLogLevel"})})," API method to change the log level while Besu is running."]})}),"\n",(0,t.jsx)(o.h2,{id:"advanced-logging",children:"Advanced logging"}),"\n",(0,t.jsxs)(o.p,{children:["You can provide your own logging configuration using the standard Log4J2 configuration mechanisms. For example, the following Log4J2 configuration is the same as the ",(0,t.jsx)(o.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/besu/src/main/resources/log4j2.xml",children:"default configuration"})," except for the exclusion of logging of stack traces for exceptions."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-xml",metastring:'title="debug.xml"',children:'<?xml version="1.0" encoding="UTF-8"?>\n<Configuration status="INFO">\n  <Properties>\n    <Property name="root.log.level">INFO</Property>\n  </Properties>\n\n  <Appenders>\n    <Console name="Console" target="SYSTEM_OUT">\n      <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSSZZZ} | %t | %-5level | %c{1} | %msg %throwable{short.message}%n" />\n    </Console>\n  </Appenders>\n  <Loggers>\n    <Root level="${sys:root.log.level}">\n      <AppenderRef ref="Console" />\n    </Root>\n  </Loggers>\n</Configuration>\n'})}),"\n",(0,t.jsxs)(o.p,{children:["To use your custom configuration, set the environment variable ",(0,t.jsx)(o.code,{children:"LOG4J_CONFIGURATION_FILE"})," to the location of your configuration file."]}),"\n",(0,t.jsxs)(o.p,{children:["If you have more specific requirements, you can create your own ",(0,t.jsx)(o.a,{href:"https://logging.apache.org/log4j/2.x/manual/configuration.html",children:"log4j2 configuration"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"For Bash-based executions, you can set the variable for only the scope of the program execution by setting it before starting Besu."}),"\n",(0,t.jsx)(o.p,{children:"To set the debug logging and start Besu connected to the Goerli testnet:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"LOG4J_CONFIGURATION_FILE=./debug.xml besu --network=goerli\n"})}),"\n",(0,t.jsx)(o.h3,{id:"log-rotation",children:"Log rotation"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart",children:"Quorum Developer Quickstart"})," logging configuration defines a ",(0,t.jsx)(o.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/b72a0f64d685c851bf8be399a8e33bbdf0e09982/files/besu/config/besu/log-config.xml",children:"log rotation to restrict the size of the log files"}),"."]})]})}function d(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>s});var t=n(67294);const i={},r=t.createContext(i);function s(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);