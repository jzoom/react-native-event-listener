
import React,{Component} from 'react';
import {DeviceEventEmitter} from 'react-native'

export default class Listener extends Component{

    componentDidMount(){
        this.event = DeviceEventEmitter.addListener(this.props.event,
             this.props.onEvent);
    }

    componentWillUnmount(){
        if(this.event){
            this.event.remove();
            this.event = undefined;
        }
    }

    render(){
        return this.props.children;
    }
}