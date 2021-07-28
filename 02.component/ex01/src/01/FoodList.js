import React, { Component } from 'react';
import ListItem from './ListItem';

export default class extends Component{
    constructor() {
        super(...argument);
        this.foods = [
            {name: 'Bread', quantity: 10},
            {name: 'Egg', quantity: 20},
            {name: 'Milk', quantity: 50}
        ]
    }
    render(){
        return (
            <ul>
                <ListItem name='Bread' quantity='10'/>
                <ListItem name='Egg' quantity='11'/>
                <ListItem name='Milk' quantity='20'/>
                <ListItem name='Carrot'quantity='25'/>
            </ul>
        );
    }
};