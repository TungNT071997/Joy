import image from '../../../assets/img/image';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Header() {
  return (
    <header>
      <div className={cx('Wrapper')}>
        <div className={cx('inner')}>
          <img src={image.logo} className={cx('logo')} alt="Company Logo" />
          <nav className={cx('list-menu')}>
            <ul>
              <li>
                <Link to="/">TRANG CHỦ</Link>
              </li>
              <li>
                <Link to="/wedding-dresses">VÁY CƯỚI</Link>
              </li>
              <li>
                <Link to="/makeup">MAKE UP</Link>
              </li>
              <li>
                <Link to="/price-list">BẢNG GIÁ</Link>
              </li>
            </ul>
          </nav>
          <div>
            <button className={cx('contact')}>Liên Hệ</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
