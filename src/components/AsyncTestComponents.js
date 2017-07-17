import React, {Component} from 'react'
import '../index.css'
import funcEnhancer from '../hoc/funcEnhancer'

export default   class NormalState extends Component {
    constructor () {
        super();
        this.state = {
            count:0
        }
    }

    render(){
        return (
            <div className="statebox">
                <div>{this.state.count}</div>
                <div>
                    <button onClick={()=>{this.increase()}}>increase</button>
                </div>
            </div>
        )
    }
}
export function increaseByFunc() {
    this.setState((state,prop)=>({
           count:state + 1
        })
    );
    this.setState((state,prop)=>({
            count:state + 1
        })
    );
    this.setState((state,prop)=>({
            count:state + 1
        })
    );
}
export function increaseByNormal () {
    this.setState({
        count:this.state.count + 1
    });
    this.setState({
        count:this.state.count + 1
    });
    this.setState({
        count:this.state.count + 1
    });
}

class FuncState extends Component {
    constructor (){
        super();
        this.state = {
            count:0
        }
    }
    increase(){
        this.setState({
            count:this.state.count + 1
        });
        this.setState({
            count:this.state.count + 1
        });
        this.setState({
            count:this.state.count + 1
        });
    }
    render(){
        return (
            <div className="statebox">
                <div></div>
                <div>
                    <button onClick={()=>{this.increaseByFunc()}}>increase</button>
                </div>
            </div>
        )
    }
}
