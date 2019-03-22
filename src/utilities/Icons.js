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
    case 'questions':
      return '0 0 50 47'
    case 'polls':
      return '0 0 72 72'
    case 'analytics':
      return '0 0 72 72'
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
    case 'questions':
      return (
        <React.Fragment>
          <path
            {...props}
            id="Union_100"
            data-name="Union 100"
            d="M46,47h0S45.986,47,46,47Zm0,0c-.311-.022-7.644-.76-12-6H30c-4.973,0-8.9-.667-12-3-.369-.277-.276-1.63,0-2s.633-.278,1,0c2.8,2.111,6.393,3,11,3h4c.256,0,.842.8,1,1,2.538,3.252,6.6,4.442,9,5a15.882,15.882,0,0,1-3-8c-.02-.314-.271-.841,0-1,4.637-2.747,7-6.292,7-11a9.946,9.946,0,0,0-4-8c-.369-.277-1.277-1.63-1-2s1.633-.278,2,0a13.2,13.2,0,0,1,5,10c0,5.178-2.119,8.948-7,12a16.984,16.984,0,0,0,3,8c.248.247,1.144.68,1,1-.136.3-.675,1-1,1ZM30,41h0Zm0,0ZM4,39c.014,0,0,0,0,0Zm0,0c-.324,0-.864-.7-1-1-.144-.319.752-.753,1-1a16.99,16.99,0,0,0,3-8A14.684,14.684,0,0,1,0,16C0,6.983,8.975,0,20,0S40,6.983,40,16c0,8.988-8.976,17-20,17H16c-4.356,5.24-11.688,5.977-12,6ZM2,16A13.806,13.806,0,0,0,9,28c.27.16.02.686,0,1-.215,3.46-1.8,5.3-3,7,2.4-.558,6.462-1.749,9-5,.158-.2.744,0,1,0h4c10.107,0,18-6.933,18-15C38,7.906,30.107,2,20,2S2,7.906,2,16Z"
          />
        </React.Fragment>
      )
    case 'polls':
      return (
        <React.Fragment>
          <defs />
          <g transform="translate(-409 -807)">
            <path
              {...props}
              className="polls-icon"
              d="M10169.874,2017.751v-.5h43.251v.5Zm27.252-.564V1975h11.249v42.187Zm-11.25,0v-30.937h11.25v30.937Zm-11.252,0v-16.873h11.252v16.873Z"
              transform="translate(-9746.363 -1153.653)"
            />
          </g>
        </React.Fragment>
      )
    case 'analytics':
      return (
        <React.Fragment>
          <defs />
          <g transform="translate(-503 -807)">
            <g transform="translate(523.999 819.606)">
              <g transform="translate(0.001 -0.001)">
                <path
                  {...props}
                  d="M28.5,8.57A14.342,14.342,0,0,0,16.087.06,14.226,14.226,0,0,0,3.753,5.107,14.491,14.491,0,0,0,.271,17.755c.562,3.138,2.357,5.8,3.8,8.578C5.948,29.968,7.516,33.7,7.507,37.89c0,1.027.467,1.36,1.435,1.344,2.018-.033,4.042,0,6.067,0,1.981,0,3.967-.037,5.946.014,1.1.028,1.545-.387,1.519-1.5a19.012,19.012,0,0,1,1.251-6.45,64.3,64.3,0,0,1,4.422-9.205A14.512,14.512,0,0,0,28.5,8.57ZM16.93,37.46H13.068V26.134H16.93Zm9.777-16.53c-1.678,3.486-3.759,6.788-4.921,10.517a19.2,19.2,0,0,0-.9,3.579l-.1,2.277a.161.161,0,0,1-.163.156H18.481v-.394a1.594,1.594,0,0,1,0-.38V26.134H18.5V23.451c0-.588-.042-1.183-.756-1.2a.775.775,0,0,0-.845.581v1.89h-3.85v-2a.8.8,0,0,0-.81-.467c-.623.033-.768.5-.765,1.08v2.8h0V36.35a2.711,2.711,0,0,1,0,.308v.8H9.437a.1.1,0,0,1-.1-.089l-.308-2.527A25.7,25.7,0,0,0,6.571,27.42c-1.3-2.772-3-5.353-4.051-8.237C.7,14.156,1.989,9.77,5.472,5.9a13.153,13.153,0,0,1,17.162-1.68,13.369,13.369,0,0,1,5.451,8.867A12.482,12.482,0,0,1,26.707,20.93Z"
                  transform="translate(-0.001 0.001)"
                />
                <path
                  {...props}
                  d="M42.035,174.8H36.32c-.546,0-1.024-.047-1.055-.765-.03-.763.432-.894,1.052-.891H47.752c.621,0,1.085.128,1.055.891-.028.714-.5.768-1.052.765C45.845,174.792,43.941,174.8,42.035,174.8Z"
                  transform="translate(-27.035 -132.739)"
                />
                <path
                  {...props}
                  d="M45.257,188.779H40.711c-.7,0-1.307-.154-1.283-.973s.7-.679,1.239-.681h8.974c.614,0,1.216,0,1.192.868-.021.791-.574.793-1.148.789C48.209,188.774,46.732,188.779,45.257,188.779Z"
                  transform="translate(-30.227 -143.454)"
                />
                <rect
                  {...props}
                  width="14.159"
                  height="1.699"
                  rx="0.849"
                  transform="translate(7.882 40.383)"
                />
                <rect
                  {...props}
                  width="11.406"
                  height="1.699"
                  rx="0.849"
                  transform="translate(9.201 43.652)"
                />
              </g>
            </g>
          </g>
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
