import  {useState} from 'react'

function MyForm(props)
{
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[message,setMessage]=useState('')
    return (<div>
        <label data-testid='usernamelbl' for="username">enter user name</label><br/>
        <input type='text' id="username" data-testid="username" onChange={(e)=>{
            setUserName(e.target.value)
        }}/><br/>
        <label data-testid="passwordlbl" for="passwrd">enter password</label><br/>
        <input type='password' data-testid="passwrd" id="passwrd" onChange={(e)=>{
            setPassword(e.target.value)
        }}/><br/>
        <input typr='submit' data-testid="submitctrl" onClick={()=>{
            if(username==='vinod' && password==="vinod123")
            {
                setMessage("valid user")
            }
            else{
                setMessage("invalid user")
            }
        }}/><br/>
        <label data-testid='msglbl'>{message}</label>
    </div>)

}
export default MyForm