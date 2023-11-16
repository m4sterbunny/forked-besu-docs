"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[68069],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95901:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const s={title:"Deploy a Hyperledger Besu private network with Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes",tags:["private networks"]},o="Deploy Besu using Kubernetes",i={unversionedId:"private-networks/tutorials/kubernetes/index",id:"version-23.10.0/private-networks/tutorials/kubernetes/index",title:"Deploy a Hyperledger Besu private network with Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes",source:"@site/versioned_docs/version-23.10.0/private-networks/tutorials/kubernetes/index.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/",permalink:"/23.10.0/private-networks/tutorials/kubernetes/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.0/private-networks/tutorials/kubernetes/index.md",tags:[{label:"private networks",permalink:"/23.10.0/tags/private-networks"}],version:"23.10.0",lastUpdatedAt:1700172558,formattedLastUpdatedAt:"Nov 16, 2023",frontMatter:{title:"Deploy a Hyperledger Besu private network with Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Interact with a deployed contract",permalink:"/23.10.0/private-networks/tutorials/contracts/interact"},next:{title:"Local playground",permalink:"/23.10.0/private-networks/tutorials/kubernetes/playground"}},l={},u=[{value:"Quorum-Kubernetes",id:"quorum-kubernetes",level:2},{value:"Cloud support",id:"cloud-support",level:3},{value:"Limitations",id:"limitations",level:2},{value:"CNI",id:"cni",level:3},{value:"Multi-cluster",id:"multi-cluster",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Namespaces",id:"namespaces",level:3},{value:"Nodes",id:"nodes",level:3},{value:"Role-based access controls",id:"role-based-access-controls",level:3},{value:"Storage",id:"storage",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Ingress Controllers",id:"ingress-controllers",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-besu-using-kubernetes"},"Deploy Besu using Kubernetes"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/besu-kubernetes"},"reference implementations")," to install private networks using Kubernetes (K8s). Reference implementations are available using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/helm"},"Helm"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/roboll/helmfile"},"Helmfile"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/besu-kubernetes/tree/master/playground/kubectl"},(0,r.kt)("inlineCode",{parentName:"a"},"kubectl")),".")),(0,r.kt)("p",null,"Familiarize yourself with the reference implementations and customize them for your requirements."),(0,r.kt)("h2",{id:"quorum-kubernetes"},"Quorum-Kubernetes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-Kubernetes"},"Quorum-Kubernetes")," is a repository containing Kubernetes manifests and Helm charts that you can customize and deploy on a local cluster or in the cloud."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"We recommend starting with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/playground"},"playground")," directory and working through the example setups before moving to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/helm/"},(0,r.kt)("inlineCode",{parentName:"a"},"Helm charts"))," directory.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," directory contains charts for the various components, and each chart has a ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster")," map with features that you can toggle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cluster:\n  provider: local  # choose from: local | aws | azure\n  cloudNativeServices: false # set to true to use Cloud Native Services (SecretsManager and IAM for AWS; KeyVault & Managed Identities for Azure)\n")),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.cloudNativeServices: true")," stores keys in AWS Secrets Manager or Azure Key Vault instead of Kubernetes Secrets, and will also make use of AWS IAM or Azure Managed Identities for the pods."),(0,r.kt)("h3",{id:"cloud-support"},"Cloud support"),(0,r.kt)("p",null,"The repository's ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," charts support on-premise and cloud providers such as AWS, Azure, GCP, IBM etc. You can configure the provider in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/genesis-besu.yml"},"values.yml")," file of the respective charts by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.provider")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"aws"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"azure"),". If you use GCP, IBM etc., please set ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.provider: local")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.cloudNativeServices: false"),"."),(0,r.kt)("p",null,"The repository also contains ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/azure"},"Azure ARM templates")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/aws"},"AWS ",(0,r.kt)("inlineCode",{parentName:"a"},"eksctl")," templates")," to deploy the required base infrastructure."),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"When using multi-clusters, Kubernetes load balancers disallow TCP and UDP traffic on the same port, which inhibits discovery working natively for each pod. Use the following solutions to mitigate this limitation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disallow discovery and use static nodes to allow only TCP traffic. This isn't an issue for load balancers or exposing nodes publicly."),(0,r.kt)("li",{parentName:"ul"},"If you need to use discovery, use something such as ",(0,r.kt)("a",{parentName:"li",href:"#cni"},"CNI")," which is supported by all major cloud providers, and the cloud templates already have CNI implemented.")),(0,r.kt)("h3",{id:"cni"},"CNI"),(0,r.kt)("p",null,"With the traditional ",(0,r.kt)("inlineCode",{parentName:"p"},"kubenet")," networking mode, nodes get an IP from the virtual network subnet. Each node in turn uses NAT to configure the pods so that they reach other pods on the virtual network. This limits where they can reach but also more specifically what can reach them. For example, an external VM which must have custom routes does not scale well."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"without-CNI",src:a(14617).Z,width:"956",height:"412"})),(0,r.kt)("p",null,"CNI, on the other hand, allows every pod to get a unique IP directly from the virtual subnet which removes this restriction. Therefore, it has a limit on the maximum number of pods that can be spun up, so you must plan ahead to avoid IP exhaustion."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"with-CNI",src:a(78716).Z,width:"957",height:"404"})),(0,r.kt)("h2",{id:"multi-cluster"},"Multi-cluster"),(0,r.kt)("p",null,"You must enable ",(0,r.kt)("a",{parentName:"p",href:"#cni"},"CNI")," to use multi-cluster, or to connect external nodes to an existing Kubernetes cluster. To connect multiple clusters, they must each have different CIDR blocks to ensure no conflicts, and the first step is to peer the VPCs or VNets together and update the route tables. From that point on you can use static nodes and pods to communicate across the cluster."),(0,r.kt)("p",null,"The same setup also works to connect external nodes and business applications from other infrastructure, either in the cloud or on premise."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"multi-cluster",src:a(41679).Z,width:"1151",height:"591"})),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("h3",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"In Kubernetes, ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"namespaces")," provide a mechanism for isolating groups of resources within a single cluster. Both namespaces and resources (for example, Stateful Sets or Services) within a namespace must be unique, but resources across namespaces don't need to be."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Namespace-based scoping is not applicable for cluster-wide objects (for example, Storage Class or Persistent Volumes).")),(0,r.kt)("h3",{id:"nodes"},"Nodes"),(0,r.kt)("p",null,"Consider using Stateful Sets instead of Deployments for Besu. The term 'client node' refers to bootnode, validator and member/RPC nodes. For Besu nodes, we only use CLI arguments to keep things consistent."),(0,r.kt)("h3",{id:"role-based-access-controls"},"Role-based access controls"),(0,r.kt)("p",null,"We encourage using role-based access controls (RBACs) for access to the private key of each node, that is, only a specific pod or statefulset is allowed to access a specific secret."),(0,r.kt)("p",null,"If you need to specify a Kube configuration file for each pod, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBE_CONFIG_PATH")," variable."),(0,r.kt)("h3",{id:"storage"},"Storage"),(0,r.kt)("p",null,"We use separate data volumes to store the blockchain data. This is similar to using separate volumes to store data when using docker containers natively or docker-compose. This is done for a few reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Containers are mortal and we do not want to store data on them."),(0,r.kt)("li",{parentName:"ul"},"Kubernetes host nodes can fail and we want the chain data to persist.")),(0,r.kt)("p",null,"Ensure that you provide enough data storage capacity for all nodes on the cluster. Select the appropriate type of ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"Storage Class")," based on your cloud provider. In the templates, the size of the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims"},"volume claims")," is set to 20Gb by default; you can change this depending on your needs. If you have a different storage account than the one in the charts, you may edit those ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/charts/besu-node/templates/node-storage.yaml"},"Storage Classes"),"."),(0,r.kt)("p",null,"When using Persistent Volume Claims, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowVolumeExpansion")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". This helps keep costs low and enables growing the volume over time rather than creating new volumes and copying data across."),(0,r.kt)("h3",{id:"monitoring"},"Monitoring"),(0,r.kt)("p",null,"We recommend deploying metrics to get an overview of the network, nodes, and volumes. You can also create alerts."),(0,r.kt)("p",null,"Besu publishes metrics to Prometheus, and you can configure metrics using the kubernetes scraper configuration. We also have custom Grafana dashboards to monitor the blockchain."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Refer to ",(0,r.kt)("inlineCode",{parentName:"p"},"values/monitoring.yml")," to configure the alerts per your requirements (for example slack or email).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd helm\nhelm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo update\nhelm install monitoring prometheus-community/kube-prometheus-stack --version 34.10.0 --namespace=besu --create-namespace --values ./values/monitoring.yml --wait\nkubectl --namespace besu apply -f  ./values/monitoring/\n")),(0,r.kt)("p",null,"You can configure Besu to suit your environment. For example, use the Elastic charts to log to a file that you can parse using Logstash into an ELK cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd helm\nhelm repo add elastic https://helm.elastic.co\nhelm repo update\n# if on cloud\nhelm install elasticsearch --version 7.17.1 elastic/elasticsearch --namespace besu --create-namespace --values ./values/elasticsearch.yml\n# if local - set the replicas to 1\nhelm install elasticsearch --version 7.17.1 elastic/elasticsearch --namespace besu --create-namespace --values ./values/elasticsearch.yml --set replicas=1 --set minimumMasterNodes: 1\nhelm install kibana --version 7.17.1 elastic/kibana --namespace besu --values ./values/kibana.yml\nhelm install filebeat --version 7.17.1 elastic/filebeat  --namespace besu --values ./values/filebeat.yml\n")),(0,r.kt)("h3",{id:"ingress-controllers"},"Ingress Controllers"),(0,r.kt)("p",null,"If you require the ingress controllers for the RPC calls or the monitoring dashboards, we have provided example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/ingress/ingress-rules-besu.yml"},"rules")," that are pre-configured for common use cases. Use these as a reference and develop solutions to match your network topology and requirements."))}m.isMDXComponent=!0},14617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kubernetes-1-d999da470021bd1aba37a76fd868e18f.jpeg"},78716:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kubernetes-2-4503dd0ffbb4151254fcf515a0e5fbd2.jpeg"},41679:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kubernetes-3-eb071f2ad027b1e11e96e3c4f68a745a.png"}}]);