"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[88548],{31214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(85893),s=n(11151);const o={title:"Production",sidebar_position:6,description:"Deploying Besu Helm Charts for production on a Kubernetes cluster",tags:["private networks"]},i="Deploy for production",a={id:"private-networks/tutorials/kubernetes/production",title:"Production",description:"Deploying Besu Helm Charts for production on a Kubernetes cluster",source:"@site/versioned_docs/version-24.1.0/private-networks/tutorials/kubernetes/production.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/production",permalink:"/private-networks/tutorials/kubernetes/production",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/private-networks/tutorials/kubernetes/production.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1706814058,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:6,frontMatter:{title:"Production",sidebar_position:6,description:"Deploying Besu Helm Charts for production on a Kubernetes cluster",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Maintenance",permalink:"/private-networks/tutorials/kubernetes/maintenance"},next:{title:"Configure Kubernetes mode in NAT manager",permalink:"/private-networks/tutorials/kubernetes/nat-manager"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Check that you can connect to the cluster with <code>kubectl</code>",id:"check-that-you-can-connect-to-the-cluster-with-kubectl",level:3},{value:"Deploy the network",id:"deploy-the-network",level:3},{value:"Best practices",id:"best-practices",level:2},{value:"Multi-cluster support",id:"multi-cluster-support",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"deploy-for-production",children:"Deploy for production"}),"\n",(0,r.jsx)(t.p,{children:"You can deploy Besu for production on a Kubernetes cluster."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Clone the ",(0,r.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-kubernetes",children:"Quorum-Kubernetes"})," repository"]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"/private-networks/tutorials/kubernetes/cluster",children:"running Kubernetes cluster"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"Kubectl"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm3"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["To get things production-ready, we'll use the same charts, and set a few of the values in the ",(0,r.jsx)(t.code,{children:"cluster"})," map as in the ",(0,r.jsx)(t.a,{href:"#deploy-the-network",children:"Deploy"})," section."]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"The following tutorial ONLY supports AWS and Azure currently. Other cloud providers will be added in time."})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["We recommend using AWS RDS or Azure PostgreSQL in High Availability mode for any Tessera nodes that you use. The templates don't include that functionality. They can be provisioned with CloudFormation or Azure Resource Manager, respectively. Once created, please specify the connection details to the ",(0,r.jsx)(t.code,{children:"values.yml"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"deploy",children:"Deploy"}),"\n",(0,r.jsxs)(t.h3,{id:"check-that-you-can-connect-to-the-cluster-with-kubectl",children:["Check that you can connect to the cluster with ",(0,r.jsx)(t.code,{children:"kubectl"})]}),"\n",(0,r.jsxs)(t.p,{children:["Once you have a ",(0,r.jsx)(t.a,{href:"/private-networks/tutorials/kubernetes/cluster",children:"cluster running"}),", verify ",(0,r.jsx)(t.code,{children:"kubectl"})," is connected to cluster with:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'kubectl version\nClient Version: version.Info{Major:"1", Minor:"23", GitVersion:"v1.23.1", GitCommit:"86ec240af8cbd1b60bcc4c03c20da9b98005b92e", GitTreeState:"clean", BuildDate:"2021-12-16T11:41:01Z", GoVersion:"go1.17.5", Compiler:"gc", Platform:"linux/amd64"}\nServer Version: version.Info{Major:"1", Minor:"22", GitVersion:"v1.22.3", GitCommit:"c92036820499fedefec0f847e2054d824aea6cd1", GitTreeState:"clean", BuildDate:"2021-10-27T18:35:25Z", GoVersion:"go1.16.9", Compiler:"gc", Platform:"linux/amd64"}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"deploy-the-network",children:"Deploy the network"}),"\n",(0,r.jsxs)(t.p,{children:["For the rest of this tutorial we use Helm charts. After you have cloned the ",(0,r.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-kubernetes",children:"Quorum-Kubernetes"})," repository, change the directory to ",(0,r.jsx)(t.code,{children:"helm"})," for the rest of this tutorial."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd helm\n"})}),"\n",(0,r.jsx)(t.p,{children:"Each helm chart has the following keys that must be set."}),"\n",(0,r.jsxs)(t.p,{children:["Specify either ",(0,r.jsx)(t.code,{children:"aws"})," or ",(0,r.jsx)(t.code,{children:"azure"})," for the ",(0,r.jsx)(t.code,{children:"cluster.provider"}),". Additionally, set ",(0,r.jsx)(t.code,{children:"cloudNativeServices: true"})," and ",(0,r.jsx)(t.code,{children:"reclaimPolicy: Retain"})," so that it looks like the following for AWS:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cluster:\n  provider: aws  # choose from: aws | azure\n  cloudNativeServices: true # set to true to use Cloud Native Services (SecretsManager and IAM for AWS; KeyVault & Managed Identities for Azure)\n  reclaimPolicy: Retain # set to either Retain or Delete; note that PVCs and PVs will still exist after a 'helm delete'. Setting to Retain will keep volumes even if PVCs/PVs are deleted in kubernetes. Setting to Delete will remove volumes from EC2 EBS when PVC is deleted\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Follow the steps outlined in the ",(0,r.jsx)(t.a,{href:"/private-networks/tutorials/kubernetes/charts",children:"deploy charts"})," tutorial to deploy the network."]}),"\n",(0,r.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,r.jsx)(t.p,{children:"The most important thing is to plan your network out on paper first and then test it in a Dev cluster to make sure connectivity works with your applications and you get the required throughput in transactions per second (TPS). We also recommend you test the entire process, from provisioning infrastructure to updating nodes on a Dev cluster, prior to launching your production network."}),"\n",(0,r.jsx)(t.p,{children:"By default, the cloud Kubernetes clusters take care of availability and do multi-zones within a region. The scheduler also ensures that deployments are spread out across zones. Where possible, we recommend you use multiple bootnodes and static nodes to speed up peering."}),"\n",(0,r.jsxs)(t.p,{children:["You can connect to APIs and services outside the cluster normally, but connecting into your network (such as adding an on-premise node to the network) might require more configuration. Please check the ",(0,r.jsx)(t.a,{href:"/private-networks/tutorials/kubernetes/#limitations",children:"limitations"})," and use CNI where possible. To connect an external node to your cluster, the easiest way is to use a VPN as seen in the following ",(0,r.jsx)(t.a,{href:"#multi-cluster-support",children:"multi-cluster"})," setup."]}),"\n",(0,r.jsx)(t.p,{children:"Finally, we recommend setting up monitoring and alerting from the beginning, so you can get early warnings of issues rather than after failure. We have a monitoring chart which uses Grafana and you can use it with Alertmanager to create alerts or alternatively alert via Cloudwatch or Azure Monitoring."}),"\n",(0,r.jsx)(t.h2,{id:"multi-cluster-support",children:"Multi-cluster support"}),"\n",(0,r.jsx)(t.p,{children:"When CNI is used, multi-cluster support is simple, but you have to cater for cross-cluster DNS names. Ideally, you want to create two separate VPCs (or VNets) and make sure they have different base CIDR blocks so that IP addresses don't conflict. Once done, peer the VPCs together and update the subnet route table, so they are effectively a giant single network."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"multi-cluster",src:n(62822).Z+"",width:"1151",height:"591"})}),"\n",(0,r.jsxs)(t.p,{children:["When you ",(0,r.jsx)(t.a,{href:"/private-networks/tutorials/kubernetes/cluster",children:"spin up clusters"}),", use ",(0,r.jsx)(t.a,{href:"/private-networks/tutorials/kubernetes/#limitations",children:"CNI"})," and CIDR blocks to match the subnet's CIDR settings. Then deploy the genesis chart on one cluster and copy across the genesis file and static nodes config maps. Depending on your DNS settings, they might be fine as is, or they might need to be actual IP addresses. That is, you can provision cluster B only after cluster A has Besu nodes up and running."]}),"\n",(0,r.jsx)(t.p,{children:"Deploy the network on cluster A, and then on cluster B. Besu nodes on cluster A should work as expected, and Besu nodes on cluster B should use the list of peers provided to communicate with the nodes on cluster A."}),"\n",(0,r.jsx)(t.p,{children:"Keeping the list of peers on the clusters live and up to date can be challenging, so we recommend using the cloud service provider's DNS service such as Route 53 or Azure DNS and adapting the charts to create entries for each node when it comes up."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},62822:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kubernetes-3-eb071f2ad027b1e11e96e3c4f68a745a.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);