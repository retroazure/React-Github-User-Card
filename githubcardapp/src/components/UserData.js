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
            {users.map((u)=>{
                return(
                    <section style={{border: "solid black 1px", margin: "100px", padding: '50px'}}>
                    <h1 key={u.id}>
                        {u.name}
                    </h1>
                        <h1 key={u.id}>{u.login}              
                    </h1>
                    <img key={u.id} alt="" src={u.avatar_url}>
                    </img>
                    <h1 key={u.id}>
                        Followers: {u.followers}
                    </h1>
                    <h1 key={u.id}>
                        Following: {u.following}
                    </h1>
                    </section>
                )
            })}
            </div>
        )
    }
}

export default UserData;