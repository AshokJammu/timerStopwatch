 import React from 'react'
import Header from './Header'
import Timer from './Timer'
import Stopwatch from './Stopwatch'


 class Wrapper extends React.Component{
     constructor(props){
         super(props)
         this.state={
            isActive: "timer"
         }
     }

     toggleActive = cont =>{
         this.setState({
             isActive:cont
         })
     }
     render(){
         const {isActive} = this.state
         return(
             <>
             <div style={{
                 margin:"10%",
                 flex:1,
                 outline:"1px solid black"
             }}>

                <h3>Wrapper</h3>
                <Header toggle = {this.toggleActive}/>
                {isActive ==="timer" && <Timer/>}
                {isActive ==="stopwatch" && <Stopwatch/>}
                 
             </div>
             </>
         )
     }
 }

 export default Wrapper