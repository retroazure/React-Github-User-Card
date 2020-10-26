import React from 'react';
import axios from 'axios';


class Followers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            followers : []
        }
    }

    componentDidMount(){
        axios.get("https://api.github.com/users/arvidn/followers")
        .then((res)=> 
        {
            for(let i = 0; i<10; i++){
                let data = res.data[i];

            let newFollowers = [
                {   
                    image: data.avatar_url,
                    name: data.name,
                    username: data.login,
                    url: data.html_url
                }
            ]

            this.setState({
                followers:[
                    ...this.state.followers,
                    ...newFollowers
                ]
            })
            }
        })
        .catch(()=> console.log("An Error has occurred"));
    }

    render(){
        
        return(
            <div style={{border: 'solid black 1px', margin:'100px', padding: '50px'}} className="followers">
                 {this.state.followers.map((f,i)=>{
                     console.log(f);
                     return(
                         <div style={{position: 'relative',padding: '70px',borderBottom:'solid 1px black' }}>
                            <h1 key={i}>{f.username}</h1>
                            <img key={i} src={f.image}></img>
                            <h1 key={i}>{f.url}</h1>
                         </div>
                         
                     )
                  
                })}
            </div>
        )
    }
}

export default Followers; 