import { Text, Title } from '@mantine/core'
import Image, { StaticImageData } from 'next/image'

export const Intro = ({
  title,
  description,
  imageUrl,
  imageAlt,
}: {
  title: React.ReactNode
  description: React.ReactNode
  imageUrl: string | StaticImageData
  imageAlt: string
}) => {
  return (
    <div className="p-4 pt-0 sm:pt-16">
      <div className="py-4 flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div>
          <Title>{title}</Title>
          <Text size="xl">{description}</Text>
        </div>
        <Image
          className="rounded-full"
          src={imageUrl}
          alt={imageAlt}
          width={160}
          height={160}
        />
      </div>
    </div>
  )
}
