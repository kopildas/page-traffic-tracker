import * as React from 'react'
import { useTrackingPage } from '../index'

type PropsType ={
  encryptedUUID: string
}

//this component helps to tracking url
const PageTrafficTracker = ({encryptedUUID}:PropsType) => {

  useTrackingPage(encryptedUUID)

  return null
}

export {PageTrafficTracker}
