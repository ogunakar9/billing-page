import "./styles.scss";
import {
  profilePic,
  apps,
  billing,
  general,
  invitations,
  logout,
  password,
} from "../../assets";

const Profile = () => {
  return (
    <div className="content">
      <div className="wrapper">
        <div className="content__user">
          <img src={profilePic} alt="user-profile" />
          <div className="content__user__item">
            <span className="content__user__item__title">Ildiko Gaspar</span>
            <span className="content__user__item__username">@igaspar</span>
          </div>
        </div>
        <div className="content__menu">
          <div className="content__menu__item">
            <img src={general} alt="general" />
            <span className="content__menu__item__text">General</span>
          </div>
          <div className="content__menu__item">
            <img src={password} alt="password" />
            <span className="content__menu__item__text">Password</span>
          </div>
          <div className="content__menu__item">
            <img src={invitations} alt="invitations" />
            <span className="content__menu__item__text">Invitations</span>
          </div>
          <div className="content__menu__item --active">
            <img src={billing} alt="billing" />
            <span className="content__menu__item__text">Billing</span>
          </div>
          <div className="content__menu__item">
            <img src={apps} alt="apps" />
            <span className="content__menu__item__text">Apps</span>
          </div>
        </div>
      </div>
      <div className="content__logout">
        <img src={logout} alt="logout" />
        <span className="content__logout__text">Log out</span>
      </div>
    </div>
  );
};

export default Profile;
