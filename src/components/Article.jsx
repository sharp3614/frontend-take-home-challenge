import React from "react";

const Article = ({ article }) => (
  <div className="shadow w-full p-2 rounded border border-zinc-500 flex md:flex-row items-center md:items-start flex-col gap-4">
    <figure className="w-60 h-32 rounded bg-green-100 overflow-hidden">
      <img src={article.urlToImage} className="w-full h-full" alt="..." />
    </figure>
    <div className="w-full">
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  </div>
);

export default Article;
