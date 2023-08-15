import React, { ComponentProps, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { tv } from 'tailwind-variants'
import { FiAward, FiGithub } from 'react-icons/fi'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export function Footer() {
  const Info = ({ children, className, ...props }: ComponentProps<'a'>) => {
    const style = tv({
      base: /*tw:*/ 'flex items-center gap-2 text-xl sm:text-lg underline-offset-4 hover:underline w-full'
    })
    return (
      <a className={style(className)} target="_blank" {...props}>
        {children}
      </a>
    )
  }

  const Section = ({ children }: { children: ReactNode }) => (
    <section className="flex flex-col gap-2 sm:gap-0">{children}</section>
  )

  return (
    <footer className="mt-28 flex flex-col flex-wrap items-center justify-center gap-10 p-5 sm:flex-row md:gap-14">
      <div className="w-14 overflow-hidden rounded-2xl shadow-lg">
        <Link href="/">
          <Image
            src="/icon.png"
            width={192}
            height={192}
            alt="Noisekun"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <Section>
        <Info href="https://github.com/dos-shaman">
          by <span className="font-bold">dos-shaman</span>
        </Info>
      </Section>
    </footer>
  )
}
