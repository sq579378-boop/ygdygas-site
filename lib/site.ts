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


  const content = fs.readFileSync(
    filePath,
    "utf8"
  );


  const list = content
    .split("\n")
    .map(item => item.trim())
    .filter(Boolean);



  if (!list.length) {

    return {
      title: "默认标题",
      keywords: "默认关键词",
      description: "默认描述"
    };

  }



  const index =
    hash(host || "default") % list.length;



  const item =
    list[index].split("|");



  return {

    title:
      item[0]?.trim() || "默认标题",


    keywords:
      item[1]?.trim() || "默认关键词",


    description:
      item[2]?.trim() || "默认描述"

  };

}
