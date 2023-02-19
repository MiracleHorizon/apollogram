import { Oval } from 'react-loader-spinner'

const OvalLoader = () => (
  <div className='w-full h-full flex items-center justify-center'>
    <Oval
      color='lightskyblue'
      secondaryColor='transparent'
      strokeWidth={3}
      width={70}
      height={70}
    />
  </div>
)

export default OvalLoader
