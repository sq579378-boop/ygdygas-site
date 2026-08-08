import {headers} from "next/headers";

import {getSite} from "@/lib/site";



export async function generateMetadata(){


const headerList =
await headers();



const host =
headerList.get("host")
||
"";



const site =
getSite(host);



return {

title:site.title,

description:site.description,

keywords:site.keywords

};


}




export default function RootLayout({

children

}:{

children:React.ReactNode

}){


return (

<html lang="zh-CN">

<body>

{children}

</body>

</html>

)

}
