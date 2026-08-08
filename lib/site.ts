import fs from "fs";
import path from "path";


export function getSite(host: string) {


  const filePath = path.join(
    process.cwd(),
    "data/sites.txt"
  );


  const list = fs
    .readFileSync(filePath, "utf8")
    .split("\n")
    .map(item => item.trim())
    .filter(Boolean);



  let subdomain = host.split(".")[0];


  let number = parseInt(subdomain);



  if (isNaN(number)) {

    number = 1;

  }



  let index = (number - 1) % list.length;



  const item = list[index].split("|");



  return {

    title: item[0] || "默认标题",

    keywords: item[1] || "默认关键词",

    description: item[2] || "默认描述"

  };


}
