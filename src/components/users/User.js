import React, { Component } from 'react';
import UserItem from './UserItem'

class User extends Component {
    state = {
        listOfUsers: [
            {
                id    : 1,
                name  : 'Justin Aquino',
                status: 'Online'
            },
            {
                id    : 2,
                name  : 'Desiree Ramos',
                status: 'Offline'
            }
        ]
    }
    render(){
        return(
            <div>
                {this.state.listOfUsers.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

export default User
