import React, { PureComponent } from 'react'
import {Input} from 'antd'
import CNIcon, {IconTypes} from 'components/CNIcon'
// import Http from '@utils/Http'
import "./index.scss"

interface IState { }

interface IProps { }

export default class Login extends PureComponent<IProps, IState> {

   readonly state:IState  = { }
    componentDidMount(){
        // Http.getInstance().get('/login/status').then((res)=>{
        //     console.log(res)
        // })
    }
   render () {
       return (
           <div className="login">
                <h3 className="login_title">登录</h3>
                <Input allowClear placeholder="账号/邮箱" className="mb-30 mt-50"/>
                <Input allowClear placeholder='密码'/>
                <CNIcon type={IconTypes.BACK} className='login_btn'/>
           </div>
        )
   }
}