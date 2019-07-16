import React from 'react'
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
const Login = Loadable({
    loader:()=>import('@view/Login'),
    loading: Loading
})
class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/path' component={Page}/>
                </Switch>
            </Router>
        )
    }
}
export default App