import { IconTypes } from 'components/CNIcon'
import * as actionTypes from '../constants/actionTypes'

export interface IOption {
  title: string
  icon: IconTypes
}
export interface IStoreState {
  headConfig: {
    base: IOption[]
    main: IOption[]
  }
  headerActiveType: string
}

const initState = {
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
  },
  headerActiveType: ''
}

export const header = (state: IStoreState = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HEADER_TYPE:
      return {
        ...state,
        headerActiveType: action.title
      }
    default:
      return state
  }
}
