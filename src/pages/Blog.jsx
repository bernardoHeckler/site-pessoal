import React from "react";
import Card from "../components/Card";
import BlogData from "../data/BlogData";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <Card />
      <main className="blog-container">
        <section className="blog-section">
          <div className="linha">
            <h2>{BlogData.titulo}</h2>
            <div className="barra"></div>
          </div>
          <div className="linha">
            {BlogData.posts.map((post) => (
              <section key={post.id} className="blog-informacao">
                <img
                  src={post.imagem}
                  alt={`Imagem do post: ${post.titulo}`}
                />
                <div className="text">
                  <p className="infoData">{post.categoria} - {post.data}</p>
                  <h4 className="tituloData">{post.titulo}</h4>
                  <p className="descricao">
                    {post.descricao}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;