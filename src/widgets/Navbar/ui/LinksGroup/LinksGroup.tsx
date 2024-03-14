import * as React from 'react'
import { NavbarGroup } from '../NavbarGroup'
import { NavbarLink } from '../NavbarLink'

type LinksGroupProps =
  | {
      readonly label: string
      readonly icon: React.FC<any>
      readonly initiallyOpen?: boolean
      readonly links: ReadonlyArray<{ label: string; link: string }>
    }
  | {
      readonly label: string
      readonly icon: React.FC<any>
      readonly link: string
    }

export function LinksGroup(props: LinksGroupProps) {
  const hasLinks = 'links' in props

  return hasLinks ? (
    <NavbarGroup
      label={props.label}
      icon={props.icon}
      initiallyOpen={props.initiallyOpen ?? false}
      links={props.links}
    />
  ) : (
    <NavbarLink label={props.label} icon={props.icon} link={props.link} />
  )
}
