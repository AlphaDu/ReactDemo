export default function componentFuncEnhancer(func){
    return function(SourceComponent){
        class ProxyComponent extends SourceComponent{
        }
        ProxyComponent.prototype.increase = func;
        return ProxyComponent
    }
}
export function increaseByFunc() {
    this.setState((state,prop)=>({
            count:state.count + 1
        })
    );
    this.setState((state,prop)=>({
            count:state.count + 1
        })
    );
    this.setState((state,prop)=>({
            count:state.count + 1
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