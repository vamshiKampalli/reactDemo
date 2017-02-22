import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as courseActions from '../../actions/CourseActions';

class CoursePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            course:{title:''}
        };
        this.onTitleChange=this.onTitleChange.bind(this);
        this.addCourse=this.addCourse.bind(this);
    };
    onTitleChange(e){
        const course=this.state.course;
        course.title=e.target.value;
        this.setState({course:course});
    };
    addCourse(){
        //alert(`title Changed ${this.state.course.title}`);
        //this.props.createCourse(this.state.course);
        this.props.actions.createCourse(this.state.course);
    };
    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    };
    render(){
        return(
            <div>
                <h3>Courses</h3>
                {this.props.courses.map(this.courseRow)}
                <h4>Add Course</h4>
                <input type="text" value={this.state.course.title} onChange={this.onTitleChange}/>
                <button type="button" onClick={this.addCourse}>Add+</button>
            </div>
        );
    };
}

function mapStateToProps(store,ownProps){
    return{
        courses:store.courseState//store.courseState is from rootReducer i.e., index.js file in reducers  
    };
};
function mapDispatchToProps(dispatch){
    return{
       // createCourse: course => dispatch(courseActions.createCourse(course))
       actions:bindActionCreators(courseActions,dispatch)
    }
};
// const connectedStateAndProps=connect(mapStateToProps,mapDispatchToProps);
// export default connectedStateAndProps(CoursePage);
export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);