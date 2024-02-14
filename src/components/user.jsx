const User = (props) =>{
    console.log(props)
    // const firstname="tony"
    // const lastname="stark"
    
  return (
    <>
    <h2>{props.firstname} {props.lastname}</h2>
  <h2>name:hello</h2>
    <h2>age:{props.age}</h2>
  
    </>
    )
  }
  export default User