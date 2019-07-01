import React from 'react'
import {hot} from 'react-hot-loader'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Loadable from 'react-loadable'
import {Spin} from 'antd'

function Loading(){
    return <Spin/>
}
const Home=Loadable({
    loader:()=>import('@view/Home'),
    loading: Loading
})
const Page = Loadable({
    loader:()=>import('@view/page'),
    loading: Loading
})
@hot(module)
class App extends React.Component{
    render(){
        console.log(66666666)
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/path' component={Page}/>
                </Switch>
            </Router>
        )
    }
}
export default App