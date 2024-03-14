'use client'

import { ScrollArea } from '@mantine/core'
import { navbarItems } from '../model'
import { LinksGroup } from './LinksGroup'
import styles from './Navbar.module.scss'
import { UserButton } from './UserButton'

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>Twitch Manager</div>
      <ScrollArea className={styles.links}>
        {navbarItems.map((item) => (
          <LinksGroup key={item.label} {...item} />
        ))}
      </ScrollArea>
      <div className={styles.footer}>
        <UserButton />
      </div>
    </nav>
  )
}
