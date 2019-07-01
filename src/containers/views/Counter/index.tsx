import * as React from 'react'
import {observer, inject} from 'mobx-react'
import {hot} from 'react-hot-loader'
import Test from 'components/Test'
interface IProps{
    globalStore?:IGlobalStore.GlobalStore
}
@hot(module)
@inject('globalStore')
@observer
class Counter extends React.Component<IProps>{
    private increase=()=>{
        this.props.globalStore.increase()
    }
    render(){
        const {num} = this.props.globalStore
        console.log(this.props)
        return(
            <div>
                <h1>{num}</h1>
                <Test/>
                <button onClick={this.increase}>增加</button>
                <button>减少</button>
            </div>
        )
    }
}

export default Counter