import React from 'react';
import renderer from 'react-test-render';
import App from '../App';
import babel from 'babel';
jest.mock('babel');
describe("The app is running", ()=>{
    it('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON()
    expect(tree).toMatchSnapshot()
    })
    xit("The data handles correctly in the state", ()=>{
    const tree = redender.create(
    <App state={this.state={FirstName: "Hi"}}/>).toJSON();

        expect(tree).toMatchSnapshot();
    })
})