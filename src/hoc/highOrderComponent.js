import React,{Component} from 'react'
export function simpleHoc (SourceComponent){

    return class ProxyComponent extends Component{
        render(){
            return <SourceComponent {...this.props}/>
        }
    }
}

export function refHoc(SourceComponent){
    return class ProxyComponent extends Component{
        onRefed(ins){
            console.log('Ref running ' + ins);
        }
        render(){
            return <SourceComponent {...this.props} ref={this.onRefed} />
        }
    }
}
export function controlHoc(SourceComponent){
    return class Proxy extends Component{

    }
}
export function simpleIiHoc (SourceComponent) {
    return class Enhancer extends SourceComponent{
        render() {
            return super.render()
        }
    }
}