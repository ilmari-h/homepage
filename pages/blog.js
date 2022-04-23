import pstyles from "../styles/Page.module.scss";
import styles from "../styles/Blog.module.scss";
import { useState, useEffect } from "react";
import Page from "../src/renderPage";
import { getSortedBlogPosts } from "../src/blogPosts";

export async function getStaticProps() {
  const allPostsData = getSortedBlogPosts();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Page sidebar={true}>
      <div className={pstyles.contentPage}>
        <h1>Posts</h1>
        <p>
          Articles about programming related topics that serve as personal notes
          and hopefully also make for an interesting or educational read.
          {/*TODO: add some filters for topics*/}
        </p>
        <section>
          {allPostsData.map((post) => (
            <a
              key={`bp-${post.name}`}
              className={styles.blogPostLink}
              href={`/blog/${post.name}`}
            >
              <div>{post.title}</div>
              <dd>{post.date}</dd>
            </a>
          ))}
        </section>
      </div>
    </Page>
  );
}
