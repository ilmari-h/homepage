import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import highlight from "rehype-highlight";
import html from "rehype-stringify";

const postsPath = path.join(process.cwd(), "blog");

export function getSortedBlogPosts() {
  const fileNames = fs.readdirSync(postsPath);

  const posts = fileNames.map((fileName) => {
    // Assume file has ".md" ending
    const name = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsPath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    // Use gray-matter to parse the post metadata section
    //const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      name,
      ...matterResult.data,
    };
  });

  return posts.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostNames() {
  const fileNames = fs.readdirSync(postsPath);
  return fileNames.map((fileName) => {
    return {
      params: {
        name: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
export async function readMdFile(filename) {
  const filePath = path.join(postsPath, filename);
  const file = fs.readFileSync(filePath, "utf8");

  // Parse metadata part
  const matterResult = matter(file);

  const processor = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(highlight, { subset: ["rust"] })
    .use(html);

  const processingResult = await processor.process(matterResult.content);
  const convertedHtml = processingResult.toString();

  return {
    html: convertedHtml,
    ...matterResult.data,
  };
}
