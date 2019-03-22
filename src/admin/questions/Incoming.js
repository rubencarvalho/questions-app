import React, { useState } from 'react'
import styled from 'styled-components'

export default function Incoming({ activeIncoming }) {
  if (activeIncoming) {
    return (
      <div>
        Moderation is off. Incoming questions will automatically appear live.)
      </div>
    )
  } else {
    return null
  }
}
