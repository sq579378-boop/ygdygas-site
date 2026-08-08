import fs from "fs";
import path from "path";


export function getSite(host:string){


const filePath =
path.join(
process.cwd(),
"data/sites.txt"
);



const list =
fs.readFileSync(
filePath,
"utf8"
)
.split("\n")
.filter(Boolean);



let subdomain =
host.split(".")[0];



let number =
parseInt(subdomain);



if(isNaN(number)){

number = 1;

}



// 防止超过内容数量

let index =
(number - 1) % list.length;



const item =
list[index]
.split("|");



return {

title:item[0],

keywords:item[1],

description:item[2]

};


}
