import { Button, Group } from '@mantine/core'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <Group justify="space-between" h="100%">
        <div>Twitch Manager Logo</div>
        <Group visibleFrom="sm">
          <Button>Log in</Button>
        </Group>
      </Group>
    </header>
  )
}
