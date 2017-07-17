import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Node from './components/node'
import {simpleHoc,refHoc} from './hoc/highOrderComponent'
import WrappedComponent from './hoc/WrappedComponent'
import StateTestComponent from './components/AsyncTestComponents'
import funcEnhancer,{increaseByFunc,increaseByNormal} from './hoc/funcEnhancer'
const SimpleHocComponent = simpleHoc(WrappedComponent);
const RefHocComponent = refHoc(WrappedComponent);
const EnhancedComponent = funcEnhancer(increaseByNormal)(StateTestComponent);
class App extends Component {
    render(){
        return (<EnhancedComponent/>)
    }
}
class Tree extends Component{
    constructor(props){
        super(props);
        this.state={
            tree:(<div></div>)
        }
    }
    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={()=>this.renderTree(1)}>tree1</button>
                    <button onClick={()=>this.renderTree(2)}>tree2</button>
                </div>
                {this.state.tree}
            </div>
        );
    }
    renderTree= (index) =>{
        switch(index){
            case 1:this.setState({tree: this.tree1()});break
            case 2:this.setState({tree: this.tree2()});break
        }
    }
    tree1 = ()=>{
        return (
            <Node value="A">
                <Node value="B">

                </Node>
                <Node value="C">
                    <Node/>
                    <Node />
                </Node>
            </Node>
        )
    }
    tree2 = ()=> {
        return (
            <Node value="A">
                <Node value="B">

                </Node>
                <Node value="C">
                    <Node />
                    <Node />
                    <Node />
                </Node>
            </Node>
        )
    }
}


export default App;
