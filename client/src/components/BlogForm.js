import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, TextArea, Input } from 'semantic-ui-react';
import { addBlog } from '../actions/blogs';
import { incId } from '../actions/incId';

class BlogForm extends React.Component {
  state = { name: '', body: '' };

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, body } = this.state;
    const { id, dispatch } = this.props;
    const blog = { id, name, body };
    dispatch(addBlog(blog))
    dispatch(incId())
    this.setState({ name: '', body: '' })
  }



  render() {
    return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Group>
        <Form.Field name='name' value={this.state.name} control={Input}
        placeholder="Name" onChange={this.handleChange}
        />
        <Form.Field name='body' value={this.state.body} control={TextArea}
        placeholder="Body" onChange={this.handleChange}
        />
      </Form.Group>
      <Button onSubmit={this.handleSubmit}>Submit</Button>
    </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);
