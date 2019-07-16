import React, { PureComponent } from 'react'
import CNIcon, { IconTypes } from 'components/CNIcon'
import { inject, observer } from 'mobx-react'
import './index.scss'

interface IOption {
  title: string
  icon: IconTypes
}
interface IState {
  headConfig: {
    base: IOption[]
    main: IOption[]
  }
}

interface IProps {
  globalStore?: IGlobalStore.GlobalStore
}
@inject('globalStore')
@observer
export default class Header extends PureComponent<IProps, IState> {
  readonly state: IState = {
    headConfig: {
      base: [
        { title: '返回', icon: IconTypes.BACK },
        { title: '来源', icon: IconTypes.SOURCE },
        { title: '分类', icon: IconTypes.CATEGORY },
        { title: '搜索', icon: IconTypes.SEARCH }
      ],
      main: [
        {
          title: '期刊',
          icon: IconTypes.VOL_SOLID
        },
        {
          title: '单曲',
          icon: IconTypes.SINGLE
        },
        {
          title: '文章',
          icon: IconTypes.ARTICLE
        }
      ]
    }
  }

  render() {
    const { headConfig } = this.state
    const { globalStore } = this.props
    return (
      <div className="header flex_sb">
        <ul className="flex">
          {headConfig.base.map((item: IOption) => (
            <li
              onClick={() => globalStore.changeTab(item.title)}
              key={item.title}
              className={`${globalStore.activeTab === item.title &&
                'header_active'} header_item mr-20`}
            >
              <CNIcon type={item.icon} />
              <p className="title">{item.title}</p>
            </li>
          ))}
        </ul>
        <div className="flex header_logo">
          <CNIcon type={IconTypes.LOGO} className="mr-10" />
          <CNIcon type={IconTypes.LUOO} />
        </div>
        <ul className="flex">
          {headConfig.main.map((item: IOption) => (
            <li
              onClick={() => globalStore.changeTab(item.title)}
              key={item.title}
              className={`${globalStore.activeTab === item.title &&
                'header_active'} header_item mr-20`}
            >
              <CNIcon type={item.icon} />
              <p className="title">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
