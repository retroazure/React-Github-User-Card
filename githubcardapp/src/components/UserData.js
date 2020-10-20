import React from 'react';

class UserData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        console.log("component mounted");
        fetch('https://api.github.com/users/arvidn')
        .then(res => res.json())
        .then((result)=>{
            this.setState({
                users:[result],
            })
            console.log(result);
        })
        .catch(error => console.log("Error"))
    }

    render(){
        console.log("rendered");
        const { users } = this.state;
        return(
            <div>
            {users.map((u, index)=>{
                return(
                    <div style={{border: "solid black 1px", margin: "100px"}}>
                    <h1 key={index}>
                        {u.name}
                    </h1>
                        <h1 key={index}>{u.login}              
                    </h1>
                    <img src={u.avatar_url}>
                    </img>
                    <h1 key={index}>
                        Followers: {u.followers}
                    </h1>
                    <h1 key={index}>
                        Following: {u.following}
                    </h1>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default UserData;