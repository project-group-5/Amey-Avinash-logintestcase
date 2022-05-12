import {useState} from 'react'
function MyComponent()
{
    const [num1,setNum1]=useState(0)
    const [num2,setNum2]=useState(0)
    const [num3,setNum3]=useState(0)
    const[errmsg,setErrmsg]=useState('')
  return (<>
    Enter First Number<br/>
    <input type='text' onChange={(e)=>{
        setNum1(e.target.value)
    }}  /><br/>
    Enter second Number <br/>
    <input type='text' onChange={(e)=>{
      try{
        if(e.target.value==0)
        {
          throw new Error("invalid value")
        }
      }
      catch(exception )
      {
        console.log(exception )
        setErrmsg(exception)
      } 
    }}/>
    <input type='button' value="calculate" onClick={()=>{
         let res=num1/num2
         setNum3(res)
    }} /><br/>
   {num3}    
   {errmsg}
  </>)
}
export default MyComponent