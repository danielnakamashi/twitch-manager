'use client'

import {
  UnstyledButton,
  Group,
  Box,
  ThemeIcon,
  Collapse,
  rem,
} from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'
import * as React from 'react'
import styles from './NavbarGroup.module.scss'

type NavbarGroupProps = {
  readonly label: string
  readonly icon: React.FC<any>
  readonly initiallyOpen: boolean
  readonly links: ReadonlyArray<{ label: string; link: string }>
}

export function NavbarGroup({
  label,
  icon: Icon,
  initiallyOpen,
  links,
}: NavbarGroupProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(initiallyOpen ?? false)
  const items = links.map((link) => (
    <Link className={styles.link} href={link.link} key={link.label}>
      {link.label}
    </Link>
  ))

  return (
    <>
      <UnstyledButton
        onClick={() => setIsOpen((state) => !state)}
        className={styles.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          <IconChevronRight
            className={styles.chevron}
            stroke={1.5}
            style={{
              width: rem(16),
              height: rem(16),
              transform: isOpen ? 'rotate(-90deg)' : 'none',
            }}
          />
        </Group>
      </UnstyledButton>
      <Collapse in={isOpen}>{items}</Collapse>
    </>
  )
}
