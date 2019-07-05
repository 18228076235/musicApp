import React from 'react'
import Header from '../Header'
import Routes from './Routes'
import { hot } from 'react-hot-loader'
import CNBackground from 'components/CNBackground'
@hot(module)
class App extends React.Component {
  render() {
    return (
      <>
        <CNBackground />
        <div className="p-20">
          <Header />
          <Routes />
        </div>
      </>
    )
  }
}
export default App
