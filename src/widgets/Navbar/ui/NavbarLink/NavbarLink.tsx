import { Group, Box, ThemeIcon, rem } from '@mantine/core'
import Link from 'next/link'
import * as React from 'react'
import styles from './NavbarLink.module.scss'

type NavbarLinkProps = {
  label: string
  icon: React.FC<any>
  link: string
}

export function NavbarLink({ label, icon: Icon, link }: NavbarLinkProps) {
  return (
    <Link className={styles.link} href={link}>
      <Group justify="space-between" gap={0}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <ThemeIcon variant="light" size={30}>
            <Icon style={{ width: rem(18), height: rem(18) }} />
          </ThemeIcon>
          <Box ml="md">{label}</Box>
        </Box>
      </Group>
    </Link>
  )
}
