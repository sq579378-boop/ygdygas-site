export default function Template({

title,
keywords,
description

}:{

title:string,
keywords:string,
description:string

}){


return (

<div>


<h1>
{title}
</h1>


<p>
{description}
</p>


<p>
关键词：
{keywords}
</p>


</div>

)

}
