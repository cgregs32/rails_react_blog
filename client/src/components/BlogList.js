import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';
import { Grid } from 'semantic-ui-react';
import {getBlogs} from '../actions/blogs'

class BlogList extends React.Component{
  componentDidMount(){
    this.props.dispatch(getBlogs())
  }

  render(){
    return(
      <Grid columns='equal'>
        {this.props.blogs.map(t => <Blog key={t.id} {...t} /> )}
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogList);
