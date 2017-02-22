import {combineReducers} from 'redux';
import courses from './CourseReducer';

const rootReducer=combineReducers({
    courseState : courses
});

export default rootReducer;