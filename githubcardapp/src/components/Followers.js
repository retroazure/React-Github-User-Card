import React from 'react';

class Followers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            followers : [],
        }
    }

    componentDidMount(){
        fetch('https://api.github.com/users/arvidn/followers')
        .then(res => res.json())
        .then((result)=> {
            this.setState({
                followers : [result],
            })
            console.log(result);
        })
        .catch(() => console.log("Error"));
    }

    render(){
        const { followers } = this.state;
        return(
            <div style={{border: 'solid black 1px', margin:'100px', padding: '50px'}} className="followers">
                 {followers.map((f, index)=>{
                    return(
                        <div>
                            <h1 style={{fontSize: '1.2rem'}} key={index}>{f[index].login}</h1>
                            <img key={index} alt="" src={f[index].avatar_url}></img>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Followers; 