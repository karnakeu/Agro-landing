import FutureFarmingSection from "../FutureFarmingSection";
import "./style.css";

function NewsArticleSection() {
  return (
    <div className="news-card-container">
      <div className="news-section-container">
        <p className="main-title-style">News</p>
        <div className="news-container">
          <div className="green-bar-separator1" />
          <div className="image-container">
            <img src="/assets/image_262a9bf7.png" alt="" className="border-box-image" />
          </div>
        </div>
      </div>
      <div className="news-article-card">
        <div className="article-snippet">
          <p className="futuristic-heading">
            Bringing Food Production
            <br />
            Back To Cities
          </p>
          <p className="golden-text">July 5, 2022</p>
        </div>
        <FutureFarmingSection />
      </div>
    </div>
  );
}

export default NewsArticleSection;
