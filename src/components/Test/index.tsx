import * as React from 'react'
import {Button} from 'antd'
import {ComponentRxt} from '../../utils/reactExt'

export default class Test extends ComponentRxt{
    showMsg=()=>{
        this.$message.success('ok')
    }
    render(){
        return <div><Button onClick={this.showMsg}>123</Button>test</div>
    }
}

