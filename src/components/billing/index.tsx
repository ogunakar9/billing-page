import SubscriptionSection from "./subscription";
import "./styles.scss";

const Billing = () => {
  return (
    <div className="billing">
      <span className="billing__title">Billing</span>
      <div className="billing__sections">
        <div className="billing__order">order</div>
        <SubscriptionSection />
      </div>
    </div>
  );
};

export default Billing;
