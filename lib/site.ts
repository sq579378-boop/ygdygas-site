import fs from "fs";
import path from "path";


function hash(str: string) {

  let hash = 0;

  for (let i = 0; i < str.length; i++) {

    hash =
      (hash << 5) -
      hash +
      str.charCodeAt(i);

    hash |= 0;

  }

  return Math.abs(hash);

}



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



  if (list.length === 0) {

    return {

      title: "默认标题",

      keywords: "默认关键词",

      description: "默认描述"

    };

  }



  // 根据域名固定随机

  const index =
    hash(host) % list.length;



  const item =
    list[index].split("|");



  return {

    title: item[0] || "默认标题",

    keywords: item[1] || "默认关键词",

    description: item[2] || "默认描述"

  };


}
