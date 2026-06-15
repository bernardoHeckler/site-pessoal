import Card from "../components/Card";
import BlogData from "../data/BlogData";
import "./Blog.css";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <div id="animated-background"></div>
      <Card />
      <main className="blog-container">
        <section className="blog-section">
          <div className="linha blog-header">
            <h2>{BlogData.titulo}</h2>
            <div className="barra"></div>
            <p>{BlogData.descricao}</p>
          </div>
          <div className="linha-posts">
            {BlogData.posts.map((post) => (
              <article key={post.id} className="blog-informacao">
                <img src={post.imagem} alt={`Imagem do post: ${post.titulo}`} />
                <div className="blog-post-content">
                  <p className="infoData">
                    {post.categoria} - <time dateTime={post.dateTime}>{post.data}</time>
                  </p>
                  <h4 className="tituloData">{post.titulo}</h4>
                  <p className="descricao">{post.descricao}</p>
                  <div className="blog-tags" aria-label={`Tags de ${post.titulo}`}>
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Blog;
