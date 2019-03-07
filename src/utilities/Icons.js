import React from 'react'

const getViewBox = name => {
  switch (name) {
    case 'upvote':
      return '0 0 24 24'
    case 'user':
      return '0 0 24 24'
    case 'dropdown':
      return '0 0 24 24'
    default:
      return '0 0 32 32'
  }
}

const getPath = (name, props) => {
  switch (name) {
    case 'upvote':
      return (
        <path
          {...props}
          d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
        />
      )
    case 'user':
      return (
        <path
          {...props}
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        />
      )
    case 'dropdown':
      return (
        <React.Fragment>
          <path
            {...props}
            d="m 7,11.212051 4.999999,-5.0000008 5,5.0000008 z"
          />
          <path {...props} d="m 7,12.788 4.999998,5 5,-5 z" />
        </React.Fragment>
      )
    default:
      return <path />
  }
}

const Icon = ({
  name = '',
  style = {},
  fill = '#000',
  viewBox = '',
  width = '100%',
  className = '',
  height = '100%',
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
)

export default Icon
