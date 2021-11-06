import { Link } from "react-router-dom";
import "./sidebar.css";
import profile from "../../img/nonresident-L6FmO8IIBQ8-unsplash.jpg"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">درباره ما</span>
        <img
          src={profile}
          alt=""
        />
        <p>
        اگر فریلنسر هستی یا توانایی انجام کپارسکدرز با استفاده از سیستم مالی گروگذاری وجه امنیت مالی طرفین را تضمین می کند. این به این معنی است که شما پس از اطمینان
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">دسته بندی</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              روزمره
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              موسیقی
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              ورزش
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              کار
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              یادگیری
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              فیلم 
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">دنبال کردن</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
