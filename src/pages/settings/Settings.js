import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">ویرایش صفحه کاربری</span>
          <span className="settingsTitleDelete">پاک کردن اکانت</span>
        </div>
        <form className="settingsForm">
          <label>عکس پروفایل</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>نام کاربری</label>
          <input type="text" placeholder="Ali" name="name" />
          <label>ایمیل</label>
          <input type="email" placeholder="Ali@gmail.com" name="email" />
          <label>رمز عبور</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            ویرایش
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
