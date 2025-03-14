import FutureFarmingSection from "../FutureFarmingSection";
import "./style.css";

function UrbanFoodNews() {
  return (
    <div className="news-card-container1">
      <div className="news-container">
        <p className="main-heading-style">News</p>
        <div className="news-card-container">
          <div className="green-line-separator" />
          <div className="image-container2">
            <img src="/assets/image_262a9bf7.png" alt="" className="border-box-image" />
          </div>
        </div>
      </div>
      <div className="news-article-card">
        <div className="full-width-container">
          <p className="futuristic-heading">
            Bringing Food Production
            <br />
            Back To Cities
          </p>
          <p className="golden-text1">July 5, 2022</p>
        </div>
        <FutureFarmingSection />
      </div>
    </div>
  );
}

export default UrbanFoodNews;
