import Star from "./Star";


const Rating = ({arr,handleRatingPoint}) => {
    // let arr=[1,2,3,4,5,6,7,8,9,10];
  return (
    <div style={{}}>
    {arr.map((ele,i)=>{
        return (
        <div key={i} style={{display:"flex"}}>
        
        <input type="checkbox" value={ele.value} onChange={()=>handleRatingPoint(ele.value)} />
    <label> <Star star={ele.id}/></label>
       
        </div>
        )
    })}

   
   
{/*   
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option> */}

    </div>
  )
}

export default Rating