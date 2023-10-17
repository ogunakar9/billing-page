import "./styles.scss";

const Billing = () => {
  return (
    <div className="billing">
      <span className="billing__title">Billing</span>
      <div className="billing__sections">
        <div className="billing__order">order</div>
        <div className="billing__sub">
          <span className="billing__sub__title">Your plan</span>
          <div className="billing__sub__type">
            <span className="billing__sub__type__subtitle">Pro Annual</span>
            <span className="billing__sub__type__date">
              Renews on Nov. 2021
            </span>
          </div>
          <button className="billing__sub__button">Cancel subscription</button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
