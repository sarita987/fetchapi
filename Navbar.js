import './index.css';




const data=[
    {
        image:"https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg",
        name:"abcd"

    },
    {
         image:"https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg",
         name:"hk khahlj"

    },
    {
        image:"https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg",
        name:"hkk hahlj"

   },
   {
    image:"https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg",
    name:"jgytdhg"

},
{
    image:"https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg",
    name:" eygjvn hkkhahlj"

},
    
]


function Navbar(){



    // const [card, setCard]=([])

  const display=data.map((value)=>{

    return(

   

<div className='nav'>
  <h1>{value.name}</h1>
  <img src={value.image}/> 
</div>

   
  
  //map bracket close
)}

)
return(
    <>

    {/* <div className='n-wrapper'>
<div className='n-left'>
    <div className='n-name'>Andrew</div>
    <span>toggle</span>
</div>
<div className='n-right'>
    <div className='n-list'>
        <ul style={{listStyleType:'none'}}>
            <li>home</li>
            <li>service</li>
            <li>Expriences</li>
            <li>portfolio</li>
            <li>Testimonials</li>

        </ul>
    </div>
    <button className='button n-button'>contact us</button>
</div>
</div> */}
    {
        display
    }
    </>
)

}
export default Navbar;
