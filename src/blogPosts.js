import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "blog");

export function getSortedBlogPosts() {
  const fileNames = fs.readdirSync(postsPath);

  const posts = fileNames.map((fileName) => {
    // Remove ".md" from name
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
