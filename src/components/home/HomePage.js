import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component{
    render(){
        return(
            <div className="well">
                <h2>E Learning</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="about" className="btn btn-primary">Learn more..</Link>
            </div>
        );
    }
};

export default HomePage;