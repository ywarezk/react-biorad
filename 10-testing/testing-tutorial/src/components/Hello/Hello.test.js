import {mount} from 'enzyme';
import Hello from './Hello';
import React from 'react';
import * as chai from 'chai';


describe('<Hello />', function() {
    this.timeout(60000);
    let helloWrapper;

    // mount
    beforeEach(function() {
        const div = document.createElement('div');
        helloWrapper = mount(<Hello />, {attachTo: div});
        document.body.appendChild(div);
    });

    it('make sure we have the proper text in h1', function() {
        chai.expect(helloWrapper.find('h1').text()).to.equal('hello tests');
    });

    afterEach(function() {
        helloWrapper.unmount();
    });
    
    // beforEach(function() {

    // });


    // describe('user is logged in', function() {
    //     beforeEach(function() {
    //         // log in the user


    //     });
    // });

    // describe('user is logged in', function() {
    //     beforeEach(function() {
    //         // log out user
    //     });
    // });
});