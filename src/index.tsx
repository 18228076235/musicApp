
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import App from './containers/shared/App'
import './styles/index.scss'
import * as store from './store'
const render=()=>{
    ReactDOM.render(
        <Provider {...store}>
        <App/>
        </Provider>,
        document.querySelector('#app')
    )
}

render()