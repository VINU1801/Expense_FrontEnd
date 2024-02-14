const ProductCard = (props) =>
{return(
    <div className="ProductCart">
         <img className="Product-img" src={props.img}/>
         <div className="Product-title">{props.title}</div>
         <div className="Product-desc">{props.desc}</div>
    <div>
    <span className="price">{props.price}</span>
    <span className="strike-price">{props.strikeprice}</span>
    </div>
    </div>

)
}
export default ProductCard;
