import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('Snapshot testing', () => {
  test('Testing Home component', () => {
    const tree = renderer.create(<BrowserRouter>
      <NavBar />
    </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});