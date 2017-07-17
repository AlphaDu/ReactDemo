import React,{Component} from 'react'
import './hoc.css'
export default class WrappedComponent extends Component{
    render(){
        return (
            <div className="wrapped">
                <p>{this.props.title}</p>
            </div>
        )
    }
}