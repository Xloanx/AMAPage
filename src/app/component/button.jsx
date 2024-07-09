'use client'
import React from 'react'
import { Button } from '@radix-ui/themes';

const IntroButton = ({platform, action, variant}) => {
  return (
    <Button size="1" variant={variant} onClick={action}>
    {platform}
  </Button>
  )
}

export default IntroButton