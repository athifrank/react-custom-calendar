import React from 'react'

class Validation extends React.Component{
    state={
        pin:"",
        pinError:{
          err:false,
          msg:""
        },
        zip:null,
        lastname:""
    }
    pinValid=(e)=>{
       this.setState({pin:e.target.value,pinError:{err:false,msg:""}})
    }

    lastname=(e)=>{
        let letters = /^[A-Za-z ]+$/;
        if(e.target.value.match(letters))
        {
        console.log('accepted')
        return true;
        }
        else
        {
            console.log('not accepted')
        return false;
        }
    }

    zip=(e)=>{
        let letters = /^[0-9]{1,5}$/;
        if(e.target.value.match(letters))
        {
        console.log('accepted')
        return true;
        }
        else
        {
            console.log('not accepted')
        return false;
        }
    }

    ValidationFunc=()=>{
        const {pin }=this.state;

        let valid=true;

        if(pin ==="" || pin===undefined){
            this.setState({pinError:{err:true,msg:"Please enter the pin"}})
            valid=false
        }else{
            if(pin.length < 12 || pin.length >15){
                this.setState({pinError:{err:true,msg:"Please enter the valid pin"}})
                valid=false
            }else{
                this.setState({pinError:{err:false,msg:""}})
                valid=true
            }
        }
        return valid;
    }
    
    verifyFunc=()=>{
      if(this.ValidationFunc()){
          alert('api call')
      }else{
        alert('wrong call')
      }
    }
    render(){
        const {pinError:{err,msg}}=this.state
        return(
            <div>
                <input type="text" placeholder="pin number" onChange={this.pinValid}/><br/>
                {
                  err ? <span>{msg}</span>:null
                }
                <input type="text" placeholder="last name" onChange={this.lastname}/><br/>

                <input type="text" placeholder="zip code" onChange={this.zip}/>
                <br/>
                <button onClick={this.verifyFunc}>Verify</button>
            </div>
        )
    }
} 

export default Validation;