export interface AvatarColorsVariant {
  bgColor: string
  letterColor: string
}

export type Props = (WithImage | WithoutImage) & {
  size: Size
}

interface WithImage {
  imagePath: string
  firstLoginLetter?: never
}

interface WithoutImage {
  firstLoginLetter: string
  imagePath?: never
}

type Size = 'large' | 'medium' | 'small'
