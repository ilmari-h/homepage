import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dotenv from "dotenv";

import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import highlight from "rehype-highlight";
import html from "rehype-stringify";

dotenv.config();

const postsPath = path.join(process.cwd(), "blog");

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

export function getSortedBlogPosts() {
  const fileNames = fs.readdirSync(postsPath);

  const posts = fileNames
    .filter((anyFile) => anyFile.endsWith(".md"))
    .map((fileName) => {
      const name = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsPath, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      // Date string to timestamp
      const dateObj = matterResult.data.date
        ? new Date(matterResult.data.date)
        : null;

      if (!dateObj || !isValidDate(dateObj)) {
        console.log(`Error, invalid date for file ${fileName}`);
      }

      return {
        name,
        ...matterResult.data,
        date: dateObj.getTime(),
      };
    });

  return posts.sort(({ date: a }, { date: b }) => b - a);
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

  const headersRegex = /<h[^>]+>(.*)<\/h[^>]+>/g;
  let headers = [...convertedHtml.matchAll(headersRegex)].map((result) => ({
    level: Number(result[0].charAt(2)),
    header: result[1],
    index: result.index,
  }));

  return {
    html: convertedHtml,
    headers,
    ...matterResult.data,
  };
}

export function getPersonalInfo() {
  return {
    myName: process.env.HOMEPAGE_MYNAME ?? "[name]",
    workingAt: process.env.HOMEPAGE_WORKINGAT ?? "[place]",
  };
}
