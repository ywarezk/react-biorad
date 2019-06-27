import {mount} from 'enzyme';
import Login from './Login';
import React from 'react';
import * as chai from 'chai';
import {wait} from '@testing-library/dom';
import * as sinon from 'sinon';
import axios from 'axios';
import { MemoryRouter, Route } from 'react-router'


// <div id="stam"> #id
// <div class="stam1"> .stam1
// <div class="stam2"> <div class="son"> // .stam2 .son
// <div class="stam2 stam3"> // .stam2.stam3
// <ul> <li> // ul li
// <div hello="nadav"> div[hello="nadav"]
// .nadav > .oded // <div class="nadav"><div><div class="oded">
//

describe('<Login />', function() {
    let loginWrapper;
    let memoryRouterHistory;

    // mount login
    beforeEach(function() {
        const div = document.createElement('div');
        loginWrapper = mount((
            <MemoryRouter>
                <Route component={Login} />
                <Route render={(props) => {
                    memoryRouterHistory = props.history;
                    return null;
                }} />
            </MemoryRouter>
        ), {attachTo: div});
        document.body.appendChild(div);
    });

    function _fillForm(email, password) {
        const emailWrapper = loginWrapper.find('input[name="email"]');
        emailWrapper.getDOMNode().value = email;
        emailWrapper.simulate('change');
        const passwordWrapper = loginWrapper.find('input[name="password"]');
        passwordWrapper.getDOMNode().value = password;
        passwordWrapper.simulate('change');
        const formWrapper = loginWrapper.find('form');
        formWrapper.simulate('submit');
    }


    describe('validations', function() {

        it('email validation', async function() {
            const emailWrapper = loginWrapper.find('input[name="email"]');
            emailWrapper.getDOMNode().value = 'not valid email';
            emailWrapper.simulate('change');
            const formWrapper = loginWrapper.find('form');
            formWrapper.simulate('submit');
            await wait(() => {
                chai.expect(loginWrapper.exists('.alert.alert-danger')).to.equal(true);
            });
            loginWrapper.update();
            chai.expect(loginWrapper.find('div.alert.alert-danger').text()).to.equal('Invalid mail');
        });

        // it('success server response', async function() {
        //     const myServerStub = sinon.stub(axios, 'post').resolves({
        //         status: 200
        //     });
        //     _fillForm('yariv@nerdeez.com', '12345678');
        //     await wait(() => {
        //         loginWrapper.update();
        //         chai.expect(loginWrapper.exists('.alert')).to.equal(true);
        //     });
        //     loginWrapper.update();
        //     chai.expect(loginWrapper.find('div.alert.alert-success').text()).to.equal('Yay!');
        //     myServerStub.restore();
        // });

        it('on success moving to dashboard', function() {
            const myServerStub = sinon.stub(axios, 'post').resolves({
                status: 200
            });
            _fillForm('yariv@nerdeez.com', '12345678');
            setTimeout(() => {
                chai.expect(memoryRouterHistory.location.pathname)
                    .to.equal('/dashboard');
            });
            myServerStub.restore();
        });

        it('fail server response', async function() {
            const myServerStub = sinon.stub(axios, 'post').resolves({
                status: 401
            });
            _fillForm('yariv@nerdeez.com', '12345678');
            await wait(() => {
                loginWrapper.update();
                chai.expect(loginWrapper.exists('.alert')).to.equal(true);
            });
            loginWrapper.update();
            chai.expect(loginWrapper.find('div.alert.alert-danger').text()).to.equal('Fail!');
            myServerStub.restore();
        });





    })

    afterEach(function() {
        // loginWrapper.unmount();
    });


});