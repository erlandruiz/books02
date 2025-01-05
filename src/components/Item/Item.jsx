import "./Item.css"
export const Item = ({ title, category, price, img, stock }) => {
  return (
    <div className="item-container">
      <div className="item-image">
        <img src={img} alt={title} />
      </div>
      <div className="item-content">
        <div className="item-details">
          <span className="item-category">{category}</span>
          <span className="item-title">{title}</span>
        </div>
        <div className="item-footer">
          <span className="item-price">$ {price}</span>
          <span className="item-stock">Stock {stock}</span>
        </div>
      </div>
    </div>
  );
};
