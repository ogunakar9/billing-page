import profilePic from "../../assets/profilePic.jpg";

const Profile = () => {
  return (
    <div className="content">
      <div className="content__user">
        <img src={profilePic} alt="user-profile" />
        <div className="content__user__items">
          <span className="content__user__items__title">Ildiko Gaspar</span>
          <span className="content__user__items__username">@igaspar</span>
        </div>
      </div>
      <div className="content__menu"></div>
      <div className="content__logout"></div>
    </div>
  );
};

export default Profile;
