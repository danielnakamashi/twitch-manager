import { IconGauge, IconChartArrows } from '@tabler/icons-react'

export const navbarItems = [
  { label: 'Dashboard', icon: IconGauge, link: '/' },
  {
    label: 'Pool',
    icon: IconChartArrows,
    links: [{ label: 'All', link: '/pool' }],
  },
] as const
