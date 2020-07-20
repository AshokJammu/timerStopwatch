import React from 'react'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const {toggle} = this.props
        return(
            <>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div onClick={()=>toggle('timer')} style={{flex:1,padding:20}}>Timer</div>
                <div onClick={()=>toggle('stopwatch')} style={{flex:1,padding:20}}>Stopwatch</div>
            </div>
                
            </>
        )
    }
}

export default Header