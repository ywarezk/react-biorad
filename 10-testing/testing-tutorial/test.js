// import React from 'react';
import * as chai from 'chai';
import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './src/index.css';

Enzyme.configure({ adapter: new Adapter() });

// describe('Test', function() {
//     this.timeout(60000);

//     // describe()

//     // before(function() {

//     // });

//     // beforeEach(function(){

//     // })

//     // afterEach(function() {

//     // });

//     // after(function() {});

//     it('a single test', function() {        
//         const div = (<div></div>);
//         chai.expect(true).to.be.true;
//     });
// })

function importAll (r) {
    r.keys().forEach(r);
}
  
importAll(
    require.context('./src', true, /\.test\.js$/)
);

// describe('my first test', function() {
//     it('expect', function() {
//         chai.expect(true).to.equal(true);
//     })
// });