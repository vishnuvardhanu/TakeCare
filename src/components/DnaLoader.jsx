import React from 'react'
import { DNA } from 'react-loader-spinner'

function DnaLoader() {
  return (
        <DNA
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        />
  )
}

export default DnaLoader