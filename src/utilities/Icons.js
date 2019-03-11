import React from 'react'

const getViewBox = name => {
  switch (name) {
    case 'upvote':
      return '0 0 24 24'
    case 'user':
      return '0 0 24 24'
    case 'dropdown':
      return '0 0 24 24'
    case 'check':
      return '0 0 24 24'
    case 'write':
      return '-15682 -13973 24 24'
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
    case 'check':
      return (
        <path
          {...props}
          d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
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
    case 'write':
      return (
        <React.Fragment>
          <g transform="translate(-16008.59 -14705.982)">
            <path
              {...props}
              d="M.011,20.355C-.008,20.335,0,3.755.018,3.538A1.871,1.871,0,0,1,1.4,1.89l.141-.041,3.626-.005c2.494,0,3.633,0,3.645.014a11.5,11.5,0,0,1-.9.933L7,3.707l-2.554,0-2.553.005L1.889,10.17l0,6.454.912-.912.91-.911,6.481,0,6.481-.005.005-3.205,0-3.205.914-.914c.534-.534.923-.909.933-.9s.019,1.169.019,4.218c0,3.619,0,4.227-.026,4.353a1.859,1.859,0,0,1-1.5,1.5c-.132.023-.979.026-6.713.026H3.743L1.911,18.5C.9,19.509.068,20.34.052,20.349a.063.063,0,0,1-.029.008A.02.02,0,0,1,.011,20.355Zm7.6-9.18c-.639,0-1.169-.005-1.175-.012s-.012-.535-.012-1.175V8.823L9.85,5.4c1.881-1.881,3.432-3.42,3.446-3.42.036,0,2.325,2.29,2.325,2.325,0,.014-1.539,1.566-3.422,3.448l-3.42,3.42Zm7.5-8.687c-.63-.63-1.148-1.16-1.148-1.174s.268-.294.6-.622c.7-.694.692-.691.972-.691s.264-.019,1.19.911a8.337,8.337,0,0,1,.837.886.522.522,0,0,1,.042.273c0,.282.016.261-.685.965-.329.331-.611.6-.627.6S15.746,3.119,15.114,2.487Z"
              transform="translate(329.256 734.849)"
            />
          </g>
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
