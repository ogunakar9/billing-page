import "./styles.scss";
import { card } from "../../../assets";
import { capitalize, rowCreator } from "../../../helpers";
import { tableData } from "../../../utility/";

const OrderSection = () => {
  return (
    <div className="order">
      <div className="order__history">
        <span className="order__history__title">Order History</span>
        <span className="order__history__subtitle">
          Manage billing information and view receips
        </span>
      </div>
      <table className="order__table">
        <thead>
          <tr>
            {Object.keys(tableData[0])
              .filter((key) => key !== "id")
              .map((key) => {
                return <th key={key}>{capitalize(key)}</th>;
              })}
          </tr>
        </thead>
        <tbody>{rowCreator(tableData)}</tbody>
      </table>
      <div className="order__load">
        <button
          className="order__load__text"
          onClick={() => console.log("load")}
        >
          Load more
        </button>
      </div>
      <div className="order__payment">
        <span className="order__payment__title">Payment Method</span>
        <span className="order__payment__subtitle">
          Manage billing information and view receips
        </span>
      </div>
      <div className="order__card">
        <div className="order__card__info">
          <div className="order__card__info__img">
            <img src={card} alt="credit-card" />
          </div>
          <span className="order__card__info__text">Visa ending in 2255</span>
        </div>
        <button className="order__card__btn">Remove</button>
      </div>
    </div>
  );
};

export default OrderSection;
