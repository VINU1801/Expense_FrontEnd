// import Header from "./components/Header"
import User from "./components/user"
import Counter from "./components/counter"
import ProductCart from "./components/ProductCard"
import ProductCard from "./components/ProductCard"
// const User = (props) =>{
//   console.log(props)
//   // const firstname="tony"
//   // const lastname="stark"
  
// return (
//   <>
//   <h2>{props.firstname} {props.lastname}</h2>
// <h2>name:hello</h2>
//   <h2>age:{props.age}</h2>

//   </>
//   )
// }
// const Header =()=>{
//   return(
  
//     <div class="header">
//   <ul>
//     <li>logo</li>
    
//    <li>hone</li>
//    <li>about</li>
//    <li>contact</li> 
//    </ul>
//    </div>
//   )
// }
const products=[{
  img:"https://m.media-amazon.com/images/I/7127zAYkCDL._SL1440_.jpg",
  title:"bag1",
  desc:"this bag is good bag",
  price:"$100",
  strickeprice:"250"
},{
  img:"https://m.media-amazon.com/images/I/7127zAYkCDL._SL1440_.jpg",
  title:"bag1",
  desc:"this bag is good bag",
  price:"$100",
  strickeprice:"250"
},{
  img:"https://m.media-amazon.com/images/I/7127zAYkCDL._SL1440_.jpg",
  title:"bag1",
  desc:"this bag is good bag",
  price:"$100",
  strickeprice:"250"
},{
  img:"https://m.media-amazon.com/images/I/7127zAYkCDL._SL1440_.jpg",
  title:"bag1",
  desc:"this bag is good bag",
  price:"$100",
  strickeprice:"250"
}
]
const Home =()=> {
  const age = 40
  const firstname="tony"
  const lastname="stark"
  return (
    <>
   
    {/* <Header/> */}
    <h1>App component</h1>
    <p>gvcghvgvddcvsdgc</p>
    <User age={age} firstname={firstname} lastname={lastname}/>
    {/* <Counter/> */}
    
    <div className="product-list">
    {
      products.map((item)=>
      {
        return(
        <ProductCard key={item.title} {...item}/>
        )
      })
    }
    </div>
    </>
  )
}
export default Home;