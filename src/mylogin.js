function Login(){
    const [userId,setUserId]=useState('')
    const [password,setPassword]=useState('')
    const [status,setStatus]=useState('')
    const [message,setMessage]=useState('')
    const [emailError,setEmailError]=useState('')
    const [passworderror,setPasswordError]=useState('')
    const navigate=useNavigate()

//  setUserId(e)
//  {
//      let id=e.target.value
//      var exp=String(id).toLowerCase().match(/\S+@\S+\.\S+/)
//      if(exp){
//          this.setState({userId:e.target.value})
//          this.setState({emailError:''})
//      }
//      else{
//          this.setState({emailError:'email id is not right format'})
//      }
//  }
//  setPassword(e)
//  {
//      let pass=e.target.value
//      if(pass.length<3){
//          this.setState({passworderror:'password should be more than 3 characters'})
//          return
//      }
//      else {
//          this.setState({password:e.target.value})
//          this.setState({passworderror:''})
//      }
    return(<>
      <Avatar alt="image" src={pic} sx={{position:"relative",
           left:100,top:-50,
          width:100,height:100}}/>
     <TextField sx={{postion:'realtive',left:50}}
                   helperText="Please enter your Email"
                   id="demo-helper-text-misaligned"
                   label="Email"  data-testid="useremail" 
                       onChange={(e)=>{
                        let id=e.target.value
                        var exp=String(id).toLowerCase().match(/\S+@\S+\.\S+/)
                        if(exp){
                            setUserId(e.target.value)
                            setEmailError('')
                        }
                        else{
                            setEmailError('email id is not right format')
                        }
                 }}/>
                 <span style={{color:'red'}}>{emailError}</span><br/>
      <TextField style={{postion:'relative',top:10,left:50,color:'ButtonText'}}
                 helperText="Please enter Password"
                 id="demo-helper-text-misaligned"
                 label="Password" data-testid="password"
            onChange={(e)=>{
                let pass=e.target.value
                if(pass.length<3){
                    setPasswordError('password should be more than 3 characters')
                    // return
                }
                else {
                    setPassword(e.target.value)
                    setPasswordError('')
                }
                   setPassword(e.target.value)
            }}  />
            <span style={{color:'red',left:10}}>{passworderror}</span><br/>
            <br/>
             <Button variant='contained'          
             style={{postion:'relative',top:20,left:120,width:25,height:20}}
                data-testid="submitctrl" 
                onClick={()=>{
                    axios.get(`http://localhost:8081/finduser/${userId}`)
                         .then((res)=>{
                             var data=res.data
                             if(data.role==="user")
                             {
                                 if(userId!==null || password!==null){
                                     if(data.userEmail===userId && data.password===password )
                                     {
                                         sessionStorage.setItem('username',data.userEmail)
                                         
                                 navigate("/home")        
                                     }
                                     else
                                     {
                                         setStatus("invalid details")
                                     }
                                    }
                                     else
                                     {
                                         setStatus('All fields Should be filled')
                                     }
                             }
                             else if(data.role==='admin'){
                                if(data.userEmail===userId && data.password===password )
                                {
                                    sessionStorage.setItem('username',data.userEmail)   
                            navigate("/User")        
                                }
                                else
                                {
                                    setStatus("invalid details")
                                }
                             }
                             else
                             {
                                 setStatus("not an Admin!!!")
                             }
                            })
                        }} >Login</Button><br/>
                        <label data-testid='msglbl'></label>
                        {message}
                        {status}   
</>)
}
export default Login;