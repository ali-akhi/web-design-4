import "./header.css";
import banner from "../../img/nordwood-themes-kRNZiGKtz48-unsplash.jpg";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Ali & Kourosh</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src={banner}
        alt=""
      />
    </div>
  );
}
