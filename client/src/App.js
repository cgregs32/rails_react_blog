import React from 'react';
import { Segment } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';

const App = () => (
  <Segment>
    <Navbar />
    <BlogForm />
    <BlogList />
  </Segment>
)

export default App;
