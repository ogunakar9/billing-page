import SubscriptionSection from "./subscription";
import OrderSection from "./order";
import "./styles.scss";

const Billing = () => {
  return (
    <div className="billing">
      <span className="billing__title">Billing</span>
      <div className="billing__sections">
        <OrderSection />
        <SubscriptionSection />
      </div>
    </div>
  );
};

export default Billing;
