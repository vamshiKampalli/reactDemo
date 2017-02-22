import React from 'react';
import {connect} from 'react-redux';
class AboutPage extends React.Component{
    constructor(props){
        super(props);
    };
    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    };
    render(){
        return(
            <div>
                <h2>About</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                <h3>Courses Offered</h3>
                {this.props.courses.map(this.courseRow)}
            </div>
        );
    }
};
function mapStateToProps(store,ownProps){
    return{
        courses:store.courseState//store.courseState is from rootReducer i.e., index.js file in reducers  
    };
};
function mapDispatchToProps(dispatch){
    return{
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AboutPage);
