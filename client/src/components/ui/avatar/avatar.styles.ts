import { getRandomNumberFromRange } from '@helpers/get-random-number-from-range'
import type { AvatarColorsVariant } from './avatar.types'

const colorsVariants: AvatarColorsVariant[] = [
  {
    bgColor: 'bg-indigo-400',
    letterColor: 'text-white'
  },
  {
    bgColor: 'bg-blue-600',
    letterColor: 'text-white'
  },
  {
    bgColor: 'bg-red-400',
    letterColor: 'text-white'
  },
  {
    bgColor: 'bg-orange-400',
    letterColor: 'text-white'
  },
  {
    bgColor: 'bg-amber-400',
    letterColor: 'text-white'
  },
  {
    bgColor: 'bg-green-500',
    letterColor: 'text-white'
  },
  {
    bgColor: 'bg-fuchsia-400',
    letterColor: 'text-white'
  },
  {
    bgColor: 'bg-rose-400',
    letterColor: 'text-white'
  }
]

function getRandomColorsVariant(): AvatarColorsVariant {
  const randomIndex = getRandomNumberFromRange(0, colorsVariants.length)
  return (
    colorsVariants[randomIndex] ?? {
      bgColor: 'bg-gray-200',
      letterColor: 'text-gray-500'
    }
  )
}

export function getAvatarColors(hasImage: boolean): AvatarColorsVariant {
  if (hasImage) {
    return {
      bgColor: 'bg-gray-100',
      letterColor: 'text-gray-100'
    }
  }

  return getRandomColorsVariant()
}
