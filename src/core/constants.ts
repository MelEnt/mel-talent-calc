import type { ClassName } from './types'

export const CLASS_COLORS: Record<
  ClassName,
  string
> = {
  warrior: '#613000', // Tan
  paladin: '#F48CBA', // Pink
  hunter: '#AAD372', // Pistachio
  rogue: '#FFF468', // Yellow
  priest: '#FFFFFF', // White
  shaman: '#0070DD', // Blue
  mage: '#3FC7EB', // Light Blue
  warlock: '#8788EE', // Purple
  druid: '#FF7C0A', // Orange
}

export const CLASS_NAMES = [
  'druid',
  'hunter',
  'mage',
  'paladin',
  'priest',
  'rogue',
  'shaman',
  'warlock',
  'warrior',
] as const
