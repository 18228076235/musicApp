import React, { SFC } from 'react'
import './index.scss'

interface IProps {
  url?: string
}

const CNBackground: SFC<IProps> = ({
  url = require('@static/fake-bg.jpg')
}) => {
  return (
    <div className="cn_background">
      <div
        className="cn_background_img"
        style={{ backgroundImage: `url(${url})` }}
      />
    </div>
  )
}

export default CNBackground
