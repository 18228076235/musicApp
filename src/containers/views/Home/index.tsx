import React from 'react'
import {ComponentRxt} from '@utils/reactExt'
import {Button} from 'antd'
import CNIcon,{IconTypes} from 'components/CNIcon'
import './index.scss'
class Home extends ComponentRxt{
    render(){
        return <div className="home"><CNIcon type={IconTypes.LOGO}/>Home3338888<CNIcon type={IconTypes.LOADING}/><Button>haha</Button><div className="y"> lllll</div></div>
    }
}

export default Home