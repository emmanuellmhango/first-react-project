import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe ('Snapshot testing', ()=> {
  test('Testing Home component', ()=> {
    const tree = renderer.create(<Home/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});