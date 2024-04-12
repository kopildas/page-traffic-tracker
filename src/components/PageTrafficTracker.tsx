import * as React from 'react'
import { useTrackingPage } from '../index'

type PropsType ={
  id: string
}

//this component helps to tracking url
const TrackUrls = ({id}:PropsType) => {

  useTrackingPage(id)

  return null
}

export {TrackUrls}
