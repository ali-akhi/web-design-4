import Post from "../post/Post";
import "./posts.css";
import img1 from "../../img/marcel-friedrich-XC_28Kk25F0-unsplash.jpg";
import img2 from "../../img/firmbee-com-gcsNOsPEXfs-unsplash (1).jpg";
import img3 from "../../img/pavel-herceg-zWOQD6fFCBs-unsplash.jpg";
import img4 from "../../img/cookie-the-pom-siNDDi9RpVY-unsplash.jpg";
import img5 from "../../img/ben-gAe1pHGc6ms-unsplash.jpg";

export default function Posts() {
  return (
    <div className="posts">
      <Post img= {img1} />
      <Post img={img5} />
      <Post img={img4}/>
      <Post img={img2}/>
      <Post img={img3}/>
    </div>
  );
}
