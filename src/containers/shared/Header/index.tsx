import React, { PureComponent } from 'react'
import CNIcon, { IconTypes } from 'components/CNIcon'
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

interface IProps {}

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
    return (
      <div className="header flex_sb">
        <ul className="header_base flex">
          {headConfig.base.map((item: IOption) => (
            <li key={item.title} className="header_base_item mr-20">
              <CNIcon type={item.icon} />
              <p className="title">{item.title}</p>
            </li>
          ))}
        </ul>
        <div className="flex header_logo">
        <CNIcon type={IconTypes.LOGO} className="mr-10"/>
        <CNIcon type={IconTypes.LUOO} />
        </div>
        <ul className="header_main flex">
          {headConfig.main.map((item: IOption) => (
            <li key={item.title} className="header_main_item ml-20">
              <CNIcon type={item.icon} />
              <p className="title">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
