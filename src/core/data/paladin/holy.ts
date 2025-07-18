import type { Tree } from '../../types'

export const holy: Tree = {
  specIcon: 'spell_holy_holybolt.webp',
  name: 'Holy',
  backgroundImage:
    'src/assets/images/paladin/background-paladin-holy.webp',
  talents: [
    {
      id: 'ability_golemthunderclap',
      ranks: [
        'Increases your total Strength by 2%.',
        'Increases your total Strength by 4%.',
        'Increases your total Strength by 6%.',
        'Increases your total Strength by 8%.',
        'Increases your total Strength by 10%.',
      ],
      row: 0,
      name: 'Divine Strength',
      col: 1,
      maxPoints: 5,
      icon: 'ability_golemthunderclap.webp',
      points: 0,
    },
    {
      id: 'spell_nature_sleep',
      ranks: [
        'Increases your total Intellect by 2%.',
        'Increases your total Intellect by 4%.',
        'Increases your total Intellect by 6%.',
        'Increases your total Intellect by 8%.',
        'Increases your total Intellect by 10%.',
      ],
      row: 0,
      name: 'Divine Intellect',
      col: 2,
      maxPoints: 5,
      icon: 'spell_nature_sleep.webp',
      points: 0,
    },
    {
      id: 'spell_arcane_blink',
      ranks: [
        'Gives your Flash of Light and Holy Light spells a 14% chance to not lose casting time when you take damage.',
        'Gives your Flash of Light and Holy Light spells a 28% chance to not lose casting time when you take damage.',
        'Gives your Flash of Light and Holy Light spells a 42% chance to not lose casting time when you take damage.',
        'Gives your Flash of Light and Holy Light spells a 56% chance to not lose casting time when you take damage.',
        'Gives your Flash of Light and Holy Light spells a 70% chance to not lose casting time when you take damage.',
      ],
      row: 1,
      name: 'Spiritual Focus',
      col: 1,
      maxPoints: 5,
      icon: 'spell_arcane_blink.webp',
      points: 0,
    },
    {
      id: 'ability_thunderbolt',
      ranks: [
        'Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 3%.',
        'Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 6%.',
        'Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 9%.',
        'Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 12%.',
        'Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 15%.',
      ],
      row: 1,
      name: 'Improved Seal of Righteousness',
      col: 2,
      maxPoints: 5,
      icon: 'ability_thunderbolt.webp',
      points: 0,
    },
    {
      id: 'spell_holy_holybolt',
      ranks: [
        'Increases the amount healed by your Holy Light and Flash of Light spells by 4%.',
        'Increases the amount healed by your Holy Light and Flash of Light spells by 8%.',
        'Increases the amount healed by your Holy Light and Flash of Light spells by 12%.',
      ],
      row: 2,
      name: 'Healing Light',
      col: 0,
      maxPoints: 3,
      icon: 'spell_holy_holybolt.webp',
      points: 0,
    },
    {
      id: 'spell_holy_auramastery',
      ranks: [
        'Increases the radius of your Auras to 40 yards.',
      ],
      row: 2,
      name: 'Aura Mastery',
      col: 1,
      maxPoints: 1,
      icon: 'spell_holy_auramastery.webp',
      points: 0,
    },
    {
      id: 'spell_holy_layonhands',
      ranks: [
        'Gives the target of your Lay on Hands spell a 15% bonus to their armor value from items for 120 seconds.  In addition, the cooldown for your Lay on Hands spell is reduced by 10 min.',
        'Gives the target of your Lay on Hands spell a 30% bonus to their armor value from items for 120 seconds.  In addition, the cooldown for your Lay on Hands spell is reduced by 20 min.',
      ],
      row: 2,
      name: 'Improved Lay on Hands',
      col: 2,
      maxPoints: 2,
      icon: 'spell_holy_layonhands.webp',
      points: 0,
    },
    {
      id: 'spell_holy_unyieldingfaith',
      ranks: [
        'Increases your chance to resist Fear and Disorient effects by an additional 5%.',
        'Increases your chance to resist Fear and Disorient effects by an additional 10%.',
      ],
      row: 2,
      name: 'Unyielding Faith',
      col: 3,
      maxPoints: 2,
      icon: 'spell_holy_unyieldingfaith.webp',
      points: 0,
    },
    {
      id: 'spell_holy_greaterheal',
      ranks: [
        'After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 20% chance to gain mana equal to 75% of the base cost of the spell.',
        'After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 40% chance to gain mana equal to 75% of the base cost of the spell.',
        'After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 60% chance to gain mana equal to 75% of the base cost of the spell.',
        'After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 80% chance to gain mana equal to 75% of the base cost of the spell.',
        'After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 100% chance to gain mana equal to 75% of the base cost of the spell.',
      ],
      row: 3,
      name: 'Illumination',
      col: 1,
      maxPoints: 5,
      icon: 'spell_holy_greaterheal.webp',
      points: 0,
    },
    {
      id: 'spell_holy_sealofwisdom',
      ranks: [
        'Increases the effect of your Blessing of Wisdom spell by 10%.',
        'Increases the effect of your Blessing of Wisdom spell by 20%.',
      ],
      row: 3,
      name: 'Improved Blessing of Wisdom',
      col: 2,
      maxPoints: 2,
      icon: 'spell_holy_sealofwisdom.webp',
      points: 0,
    },
    {
      id: 'spell_holy_divineprovidence',
      ranks: [
        'When your Holy Light, Flash of Light, or Holy Shock spells heal a target to full health, 3 nearby injured allies will be healed by an amount equal to 10% of the healing effect.',
        'When your Holy Light, Flash of Light, or Holy Shock spells heal a target to full health, 3 nearby injured allies will be healed by an amount equal to 20% of the healing effect.',
      ],
      row: 3,
      name: 'Overwhelming Light',
      col: 3,
      maxPoints: 2,
      icon: 'spell_holy_divineprovidence.webp',
      points: 0,
    },
    {
      id: 'spell_holy_pureofheart',
      ranks: [
        'Increases your resistance to Curse and Disease effects by 5%.',
        'Increases your resistance to Curse and Disease effects by 10%.',
        'Increases your resistance to Curse and Disease effects by 15%.',
      ],
      row: 4,
      name: 'Pure of Heart',
      col: 0,
      maxPoints: 3,
      icon: 'spell_holy_pureofheart.webp',
      points: 0,
    },
    {
      id: 'spell_holy_heal',
      ranks: [
        'When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance.',
      ],
      row: 4,
      name: 'Divine Favor',
      col: 1,
      maxPoints: 1,
      requires: {
        id: 'spell_holy_greaterheal',
        points: 5,
      },
      icon: 'spell_holy_heal.webp',
      points: 0,
      abilityData: {
        leftSide: ['3% of base Mana', 'Instant'],
        rightSide: ['', '2 min cooldown'],
      },
    },
    {
      id: 'spell_holy_healingaura',
      ranks: [
        'Increases the critical effect chance of your Holy Light, Seal of Light, and Judgement of Light spells by 2%, and reduces the threat generated by Judgement of Light by 33%.',
        'Increases the critical effect chance of your Holy Light, Seal of Light, and Judgement of Light spells by 4%, and reduces the threat generated by Judgement of Light by 67%.',
        'Increases the critical effect chance of your Holy Light, Seal of Light, and Judgement of Light spells by 6%, and reduces the threat generated by Judgement of Light by 100%.',
      ],
      row: 4,
      name: 'Sanctified Light',
      col: 2,
      maxPoints: 3,
      icon: 'spell_holy_healingaura.webp',
      points: 0,
    },
    {
      id: 'spell_holy_purifyingpower',
      ranks: [
        'Reduces the mana cost of your Cleanse, Purify and Consecration spells by 5% and increases the critical strike chance of your Exorcism and Holy Wrath spells by 10%. Additionally, hitting an enemy with Exorcism or Holy Wrath increases the critical effect chance of your next healing spell by 30%.',
        'Reduces the mana cost of your Cleanse, Purify and Consecration spells by 10% and increases the critical strike chance of your Exorcism and Holy Wrath spells by 20%. Additionally, hitting an enemy with Exorcism or Holy Wrath increases the critical effect chance of your next healing spell by 60%.',
      ],
      row: 5,
      name: 'Purifying Power',
      col: 0,
      maxPoints: 2,
      icon: 'spell_holy_purifyingpower.webp',
      points: 0,
    },
    {
      id: 'spell_holy_power',
      ranks: [
        'Increases the critical effect chance of your Holy spells by 1%.',
        'Increases the critical effect chance of your Holy spells by 2%.',
        'Increases the critical effect chance of your Holy spells by 3%.',
        'Increases the critical effect chance of your Holy spells by 4%.',
        'Increases the critical effect chance of your Holy spells by 5%.',
      ],
      row: 5,
      name: 'Holy Power',
      col: 2,
      maxPoints: 5,
      icon: 'spell_holy_power.webp',
      points: 0,
    },
    {
      id: 'spell_holy_lightsgrace',
      ranks: [
        'Gives your Holy Light spell a 33% chance to reduce the cast time of your next Holy Light spell by 0.5 sec.  This effect lasts 15 seconds.',
        'Gives your Holy Light spell a 66% chance to reduce the cast time of your next Holy Light spell by 0.5 sec.  This effect lasts 15 seconds.',
        'Gives your Holy Light spell a 100% chance to reduce the cast time of your next Holy Light spell by 0.5 sec.  This effect lasts 15 seconds.',
      ],
      row: 6,
      name: "Light's Grace",
      col: 0,
      maxPoints: 3,
      icon: 'spell_holy_lightsgrace.webp',
      points: 0,
    },
    {
      id: 'spell_holy_searinglight',
      ranks: [
        'Blasts the target with Holy energy, causing 277 Holy damage to an enemy, or 351 healing to an ally.',
      ],
      row: 6,
      name: 'Holy Shock',
      col: 1,
      maxPoints: 1,
      requires: {
        id: 'spell_holy_heal',
        points: 1,
      },
      icon: 'spell_holy_searinglight.webp',
      points: 0,
      abilityData: {
        leftSide: ['335 Mana', 'Instant'],
        rightSide: [
          '20 yd range',
          '15 sec cooldown',
        ],
      },
    },
    {
      id: 'spell_holy_blessedlife',
      ranks: [
        'All attacks against you have a 4% chance to cause half damage, and your resistances are increased by 4.',
        'All attacks against you have a 7% chance to cause half damage, and your resistances are increased by 8.',
        'All attacks against you have a 10% chance to cause half damage, and your resistances are increased by 12.',
      ],
      row: 6,
      name: 'Blessed Life',
      col: 2,
      maxPoints: 3,
      icon: 'spell_holy_blessedlife.webp',
      points: 0,
    },
    {
      id: 'spell_holy_holyguidance',
      ranks: [
        'Increases your spell damage and healing by 7% of your total Intellect.',
        'Increases your spell damage and healing by 14% of your total Intellect.',
        'Increases your spell damage and healing by 21% of your total Intellect.',
        'Increases your spell damage and healing by 28% of your total Intellect.',
        'Increases your spell damage and healing by 35% of your total Intellect.',
      ],
      row: 7,
      name: 'Holy Guidance',
      col: 1,
      maxPoints: 5,
      icon: 'spell_holy_holyguidance.webp',
      points: 0,
    },
    {
      id: 'spell_holy_divineillumination',
      ranks: [
        'Increases the casting speed of all Paladin spells by 50% for 15 seconds.  Causes Forebearance, preventing the use of Divine Shield, Divine Protection, Hand of Protection again for 60 seconds.',
      ],
      row: 8,
      name: 'Divine Illumination',
      col: 1,
      maxPoints: 1,
      icon: 'spell_holy_divineillumination.webp',
      points: 0,
      abilityData: {
        leftSide: ['Instant'],
        rightSide: ['3 min cooldown'],
      },
    },
  ],
}
