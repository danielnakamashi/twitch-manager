import { UnstyledButton, Group, Avatar, Text } from '@mantine/core'
import styles from './UserButton.module.scss'

export function UserButton() {
  return (
    <UnstyledButton className={styles.user}>
      <Group>
        <Avatar alt="Daniel Nakamashi" radius="xl" />
        <Text size="sm" fw={500}>
          Daniel Nakamashi
        </Text>
      </Group>
    </UnstyledButton>
  )
}
