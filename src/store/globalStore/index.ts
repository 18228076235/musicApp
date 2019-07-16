import {observable, action} from 'mobx'

export class GlobalStore{
    @observable  activeTab:string = '';
    @action 
    changeTab=(title:string)=>{
        this.activeTab = title
    }

}

export default new GlobalStore()