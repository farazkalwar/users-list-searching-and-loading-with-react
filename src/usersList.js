import React from 'react'

class UsersList extends React.Component {
    render() {
        const searchText = this.props.searchText;
        const rows = [];
    
        this.props.users.forEach((user) => {
          if (user.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) return;
          rows.push( <li key={user.id.toString()}>{user.name}</li> );
        });
    
        return (
            <ul>
                {rows}
            </ul>
        );
      }
}

export default UsersList