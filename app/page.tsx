import {headers} from "next/headers";

import Template from "./template";

import {getSite} from "@/lib/site";



export default async function Home(){


const headerList =
await headers();



const host =
headerList.get("host")
||
"";



const site =
getSite(host);



return (

<Template

title={site.title}

keywords={site.keywords}

description={site.description}

/>

)

}
