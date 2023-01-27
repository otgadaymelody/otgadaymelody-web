import React, { FC } from 'react'
import './BlockBackground.css'

interface BlockBackground extends React.AllHTMLAttributes<HTMLDivElement> {}

const BlockBackground: FC<BlockBackground> = (props) => {
  return (
    <div className={['block-background', props.className].join(' ')}>
      {props.children}
   </div>
  )
}

export default BlockBackground