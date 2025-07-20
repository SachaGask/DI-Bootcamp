import { Fragment } from "react";

const Article = ({ title, body }) => (
  <article>
    <h2>{title}</h2>
    <p>{body}</p>
  </article>
);

export default Article;