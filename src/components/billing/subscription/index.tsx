import "./styles.scss";

const SubscriptionSection = () => {
  return (
    <div className="sub">
      <span className="sub__title">Your plan</span>
      <div className="sub__type">
        <span className="sub__type__subtitle">Pro Annual</span>
        <span className="sub__type__date">Renews on Nov. 2021</span>
      </div>
      <button className="sub__button">Cancel subscription</button>
    </div>
  );
};

export default SubscriptionSection;
