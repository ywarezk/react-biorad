import Message from './Message';
import {mount} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../../redux/reducer';
import * as chai from 'chai';


describe('<Message />', function() {
    let messageWrapper;
    let store;

    beforeEach(functio)

    // create the store
    beforeEach(function() {
        store = createStore(reducer, {
            message: 'hello from tests'
        })
    });

    // mount the component
    beforeEach(function() {
        const div = document.createElement('div');
        messageWrapper = mount(
            (<Provider store={store}>
                <Message />
            </Provider>)
            , {attachTo: div});
        document.body.appendChild(div);
    });

    it.only('make sure the message if from the state', function() {
        chai.expect(messageWrapper.find('h1').text()).to.equal('hello from tests');
    });

    it.only('click the button verify text change', function() {
        messageWrapper.find('button').simulate('click');
        setTimeout(() => {
            chai.expect(messageWrapper.find('h1').text()).to.equal('I changed the message');
        });

    });

});