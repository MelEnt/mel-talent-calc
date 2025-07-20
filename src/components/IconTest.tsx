import { Icon } from './Icon'

export const IconTest = () => {
  const testIcons = [
    'ability_warrior_innerrage.webp',
    'spell_nature_purge.webp',
    'ability_rogue_eviscerate.webp',
    'classicon_warrior.webp',
    'classicon_hunter.webp'
  ]

  return (
    <div className="p-4">
      <h2 className="text-white text-xl mb-4">Sprite Sheet Test</h2>
      <div className="flex gap-4 flex-wrap">
        {testIcons.map((iconName) => (
          <div key={iconName} className="flex flex-col items-center">
            <Icon name={iconName} size={64} />
            <span className="text-white text-xs mt-1">{iconName}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
