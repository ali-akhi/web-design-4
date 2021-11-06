import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              موزیک
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              شخصی
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            مشاهده پروژه های انجام شده
          </Link>
        </span>
        <hr />
        <span className="postDate">۱ ساعت قبل</span>
      </div>
      <p className="postDesc">
      اگر فریلنسر هستی یا توانایی انجام کپارسکدرز با استفاده از سیستم مالی گروگذاری وجه امنیت مالی طرفین را تضمین می کند. این به این معنی است که شما پس از اطمینان از انجام صحیح پروژه حتما هزینه انجام کار را دریافت می کنید.ارهای سفارش داده شده از جانب خریداران رو داری می تونی اقدام به کسب در آمد از پارسکدرز کنی. از تایپ و ترجمه گرفته تا طراحی گرافیکی، برنامه نویسی و پیاده سازی سیستم های بزرگ.
      </p>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
    </div>
  );
}
