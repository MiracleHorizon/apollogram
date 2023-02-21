import { type FC, memo, useMemo } from 'react'
import classNames from 'classnames'

import { getAvatarColors } from './avatar.styles'
import type { Props } from './avatar.types'

const Avatar: FC<Props> = ({ size, imagePath, firstLoginLetter }) => {
  const { bgColor, letterColor } = useMemo(() => {
    return getAvatarColors(Boolean(imagePath))
  }, [imagePath])

  return (
    <div
      className={`${classNames({
        'w-[56px] h-[56px]': size === 'large',
        'w-[46px] h-[46px]': size === 'medium',
        'w-[39px] h-[39px]': size === 'small'
      })} ${bgColor} flex items-center justify-center rounded-full mr-[6px]`}
    >
      {imagePath ? (
        <img
          src={imagePath}
          className='w-full h-full object-cover rounded-full select-none'
          alt='avatar'
        />
      ) : (
        <div
          className={`${classNames({
            'text-[26px] h-[26px]': size === 'large',
            'text-[21px] h-[21px]': size === 'medium',
            'text-[17px] h-[17px]': size === 'small'
          })} ${letterColor} flex items-center justify-center`}
        >
          {firstLoginLetter}
        </div>
      )}
    </div>
  )
}

export default memo(Avatar)
