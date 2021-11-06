import { Link } from "react-router-dom";
import "./topbar.css";
import avater from "../../img/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg"

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              خانه
            </Link>
          </li>
          <li className="topListItem">درباره ما</li>
          <li className="topListItem">پروژه ها</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              نوشتن مقاله
            </Link>
          </li>
          {user && <li className="topListItem">خروج</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={avater}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                ورود
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                ثبت نام
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
