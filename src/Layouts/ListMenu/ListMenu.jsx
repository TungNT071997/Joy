import { NavLink } from "react-router-dom";
import className from "classnames/bind";
import styles from "./listMenu.scss";
const cx = classNames.bind(styles);
function ListMenu({ title, to }) {
  return (
    <NavLink className={cx("menu-item")} to={to}>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

export default ListMenu;
