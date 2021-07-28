import React, { Component, Fragment } from 'react';
import Header from './Header';
import Content from './Content';

export default class extends Component { // default 쓰고있어서 class명 안적어도 된다.
    render(){
        return (
            <Fragment>
                <Header />
                <Content />
            </Fragment>
        )
    }
}