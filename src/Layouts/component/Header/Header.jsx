import image from "../../../assets/img/image";
import classNames from "classnames/bind";
import styles from "./Header.scss";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("Wrapper")}>
      <div className={cx("inner")}>
        <img src={image.logo} className={cx("logo")} />
        <div className={cx("list-menu")}>
          <ul>
            <li>TRANG CHỦ</li>
            <li>VÁY CƯỚI</li>
            <li>MAKE UP</li>
            <li>BẢNG GIÁ</li>
          </ul>
        </div>
        <div>
          <button className={cx("contact")}> Liên Hệ</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
