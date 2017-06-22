import React,{PureComponent} from 'react'
import './node.css'
export default class Node extends PureComponent{
    constructor(props) {
        super(props);
        console.log(this.props.value + ' is created.');
    }
    componentDidMount() {
        console.log(this.props.value + ' did mount.');
    }

    componentWillUnmount() {
        console.log(this.props.value + ' will unmount.');
    }

    componentDidUpdate() {
        console.log(this.props.value + ' is updated.');
    }
    render(){
        return(
        <div className="node" data-value={this.props.value||''}>{this.props.children}</div>

        )
    }
}
const NodeCell = ({value})=>(
    <div className="node" data-name={value}><p>{value}</p></div>
);
function createNode(nodeName){

}