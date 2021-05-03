import React from 'react';
import PropTypes from 'prop-types';

/*
    This a functionial stateless component because... 
        - it is a function
        - it has no state!
    Everything is being passed through props...
    Why did I think it was more complicated...
*/
function UserItem({user:{name, status}}){
    return(
        <div>
            {name}: {status}
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
