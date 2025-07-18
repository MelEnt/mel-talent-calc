import type { Tree } from '../../types'

export const destruction: Tree = {
  specIcon: 'spell_shadow_rainoffire.webp',
  name: 'Destruction',
  backgroundImage:
    'src/assets/images/warlock/background-warlock-destruction.webp',
  talents: [
    {
      id: 'spell_shadow_shadowbolt',
      ranks: [
        'Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 4% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 seconds.',
        'Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 8% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 seconds.',
        'Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 12% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 seconds.',
        'Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 16% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 seconds.',
        'Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 20% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 seconds.',
      ],
      row: 0,
      name: 'Improved Shadow Bolt',
      col: 1,
      maxPoints: 5,
      icon: 'spell_shadow_shadowbolt.webp',
      points: 0,
    },
    {
      id: 'spell_fire_windsofwoe',
      ranks: [
        'Reduces the Mana cost of your Destruction spells by 1%.',
        'Reduces the Mana cost of your Destruction spells by 2%.',
        'Reduces the Mana cost of your Destruction spells by 3%.',
        'Reduces the Mana cost of your Destruction spells by 4%.',
        'Reduces the Mana cost of your Destruction spells by 5%.',
      ],
      row: 0,
      name: 'Cataclysm',
      col: 2,
      maxPoints: 5,
      icon: 'spell_fire_windsofwoe.webp',
      points: 0,
    },
    {
      id: 'spell_shadow_deathpact',
      ranks: [
        'Reduces the casting time of your Shadow Bolt and Immolate spells by 0.1 sec and your Soul Fire spell by 0.4 sec.',
        'Reduces the casting time of your Shadow Bolt and Immolate spells by 0.2 sec and your Soul Fire spell by 0.8 sec.',
        'Reduces the casting time of your Shadow Bolt and Immolate spells by 0.3 sec and your Soul Fire spell by 1.2 sec.',
        'Reduces the casting time of your Shadow Bolt and Immolate spells by 0.4 sec and your Soul Fire spell by 1.6 sec.',
        'Reduces the casting time of your Shadow Bolt and Immolate spells by 0.5 sec and your Soul Fire spell by 2 sec.',
      ],
      row: 1,
      name: 'Bane',
      col: 1,
      maxPoints: 5,
      icon: 'spell_shadow_deathpact.webp',
      points: 0,
    },
    {
      id: 'spell_fire_fire',
      ranks: [
        'Gives your Destruction spells a 2% chance to daze the target for 5 seconds.',
        'Gives your Destruction spells a 4% chance to daze the target for 5 seconds.',
        'Gives your Destruction spells a 6% chance to daze the target for 5 seconds.',
        'Gives your Destruction spells a 8% chance to daze the target for 5 seconds.',
        'Gives your Destruction spells a 10% chance to daze the target for 5 seconds.',
      ],
      row: 1,
      name: 'Aftermath',
      col: 2,
      maxPoints: 5,
      icon: 'spell_fire_fire.webp',
      points: 0,
    },
    {
      id: 'spell_fire_firebolt',
      ranks: [
        "Reduces the casting time of your Imp's Firebolt spell by 0.25 sec and decreases its mana cost by 20%. When your Imp's Firebolt critically hits, you have a 50% chance to gain Impish Fire, increasing the initial damage of your next single target Fire spell by 10%.",
        "Reduces the casting time of your Imp's Firebolt spell by 0.5 sec and decreases its mana cost by 40%. When your Imp's Firebolt critically hits, you have a 100% chance to gain Impish Fire, increasing the initial damage of your next single target Fire spell by 10%.",
      ],
      row: 2,
      name: 'Improved Firebolt',
      col: 0,
      maxPoints: 2,
      icon: 'spell_fire_firebolt.webp',
      points: 0,
    },
    {
      id: 'spell_shadow_curse',
      ranks: [
        "Reduces the cooldown of your Succubus' Lash of Pain spell by 3 sec.",
        "Reduces the cooldown of your Succubus' Lash of Pain spell by 6 sec.",
      ],
      row: 2,
      name: 'Improved Lash of Pain',
      col: 1,
      maxPoints: 2,
      icon: 'spell_shadow_curse.webp',
      points: 0,
    },
    {
      id: 'spell_fire_flameshock',
      ranks: [
        'Increases the critical strike chance of your Destruction spells by 1%.',
        'Increases the critical strike chance of your Destruction spells by 2%.',
        'Increases the critical strike chance of your Destruction spells by 3%.',
        'Increases the critical strike chance of your Destruction spells by 4%.',
        'Increases the critical strike chance of your Destruction spells by 5%.',
      ],
      row: 2,
      name: 'Devastation',
      col: 2,
      maxPoints: 5,
      icon: 'spell_fire_flameshock.webp',
      points: 0,
    },
    {
      id: 'spell_shadow_scourgebuild',
      ranks: [
        'Instantly blasts the target for 135 Shadow damage.  If the target dies within 5 seconds of Shadowburn, and yields experience or honor, the caster gains a Soul Shard.',
      ],
      row: 2,
      name: 'Shadowburn',
      col: 3,
      maxPoints: 1,
      icon: 'spell_shadow_scourgebuild.webp',
      points: 0,
      abilityData: {
        leftSide: ['105 Mana', 'Instant'],
        rightSide: [
          '20 yd range',
          '15 sec cooldown',
        ],
        bottom: ['Reagents: Soul Shard'],
      },
    },
    {
      id: 'spell_fire_lavaspawn',
      ranks: [
        'Gives you a 35% chance to resist interruption caused by damage while casting or channeling any Destruction spell.',
        'Gives you a 70% chance to resist interruption caused by damage while casting or channeling any Destruction spell.',
      ],
      row: 3,
      name: 'Intensity',
      col: 0,
      maxPoints: 2,
      icon: 'spell_fire_lavaspawn.webp',
      points: 0,
    },
    {
      id: 'spell_shadow_corpseexplode',
      ranks: [
        'Increases the range of your Destruction spells by 10% and reduces threat caused by Destruction spells by 5%.',
        'Increases the range of your Destruction spells by 20% and reduces threat caused by Destruction spells by 10%.',
      ],
      row: 3,
      name: 'Destructive Reach',
      col: 1,
      maxPoints: 2,
      icon: 'spell_shadow_corpseexplode.webp',
      points: 0,
    },
    {
      id: 'spell_fire_soulburn',
      ranks: [
        'Increases the critical strike chance of your Searing Pain spell by 4%.',
        'Increases the critical strike chance of your Searing Pain spell by 7%.',
        'Increases the critical strike chance of your Searing Pain spell by 10%.',
      ],
      row: 3,
      name: 'Improved Searing Pain',
      col: 3,
      maxPoints: 3,
      icon: 'spell_fire_soulburn.webp',
      points: 0,
    },
    {
      id: 'spell_fire_volcano',
      ranks: [
        'Gives your Rain of Fire, Hellfire, and Soul Fire spells a 13% chance to stun the target for 3 seconds. This chance is spread across the duration of Hellfire and Rain of Fire.',
        'Gives your Rain of Fire, Hellfire, and Soul Fire spells a 26% chance to stun the target for 3 seconds. This chance is spread across the duration of Hellfire and Rain of Fire.',
      ],
      row: 4,
      name: 'Pyroclasm',
      col: 0,
      maxPoints: 2,
      icon: 'spell_fire_volcano.webp',
      points: 0,
    },
    {
      id: 'spell_fire_immolation',
      ranks: [
        'Increases the initial damage of your Immolate spell by 5%.',
        'Increases the initial damage of your Immolate spell by 10%.',
        'Increases the initial damage of your Immolate spell by 15%.',
        'Increases the initial damage of your Immolate spell by 20%.',
        'Increases the initial damage of your Immolate spell by 25%.',
      ],
      row: 4,
      name: 'Improved Immolate',
      col: 1,
      maxPoints: 5,
      icon: 'spell_fire_immolation.webp',
      points: 0,
    },
    {
      id: 'spell_shadow_shadowwordpain',
      ranks: [
        'Increases the critical strike damage bonus of your Destruction spells by 100%.',
      ],
      row: 4,
      name: 'Ruin',
      col: 2,
      maxPoints: 1,
      requires: {
        id: 'spell_fire_flameshock',
        points: 5,
      },
      icon: 'spell_shadow_shadowwordpain.webp',
      points: 0,
    },
    {
      id: 'spell_shadow_shadowfury',
      ranks: [
        'Shadowfury is unleashed, causing 156 Shadow damage and stunning all enemies within 8 yds for 3 seconds.',
      ],
      row: 4,
      name: 'Shadowfury',
      col: 3,
      maxPoints: 1,
      icon: 'spell_shadow_shadowfury.webp',
      points: 0,
      abilityData: {
        leftSide: ['440 Mana', '0.5 sec cast'],
        rightSide: [
          '30 yd range',
          '20 sec cooldown',
        ],
      },
    },
    {
      id: 'spell_shadow_netherprotection',
      ranks: [
        'After being hit with a Shadow or Fire spell, you have a 10% chance to become immune to Shadow and Fire spells for 4 seconds.',
        'After being hit with a Shadow or Fire spell, you have a 20% chance to become immune to Shadow and Fire spells for 4 seconds.',
        'After being hit with a Shadow or Fire spell, you have a 30% chance to become immune to Shadow and Fire spells for 4 seconds.',
      ],
      row: 5,
      name: 'Nether Protection',
      col: 0,
      maxPoints: 3,
      icon: 'spell_shadow_netherprotection.webp',
      points: 0,
    },
    {
      id: 'spell_fire_selfdestruct',
      ranks: [
        'Increases the damage done by your Fire spells by 2% and reduces the cast time of your Incinerate spell by 2%.',
        'Increases the damage done by your Fire spells by 4%, and reduces the cast time of your Incinerate spell by 4%.',
        'Increases the damage done by your Fire spells by 6%, and reduces the cast time of your Incinerate spell by 6%.',
        'Increases the damage done by your Fire spells by 8%, and reduces the cast time of your Incinerate spell by 8%.',
        'Increases the damage done by your Fire spells by 10%, and reduces the cast time of your Incinerate spell by 10%.',
      ],
      row: 5,
      name: 'Emberstorm',
      col: 2,
      maxPoints: 5,
      icon: 'spell_fire_selfdestruct.webp',
      points: 0,
    },
    {
      id: 'spell_fire_playingwithfire',
      ranks: [
        'Increases your critical strike chance with spells by an additional 1% and gives you a 8% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%.  This effect lasts 8 seconds and will not occur more than once every 8 seconds.',
        'Increases your critical strike chance with spells by an additional 2% and gives you a 16% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%.  This effect lasts 8 seconds and will not occur more than once every 8 seconds.',
        'Increases your critical strike chance with spells by an additional 3% and gives you a 25% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%.  This effect lasts 8 seconds and will not occur more than once every 8 seconds.',
      ],
      row: 6,
      name: 'Backlash',
      col: 0,
      maxPoints: 3,
      icon: 'spell_fire_playingwithfire.webp',
      points: 0,
    },
    {
      id: 'spell_fire_fireball',
      ranks: [
        'Ignites a target that is already afflicted by your Immolate, dealing 272 Fire damage and consuming the Immolate spell.',
      ],
      row: 6,
      name: 'Conflagrate',
      col: 1,
      maxPoints: 1,
      requires: {
        id: 'spell_fire_immolation',
        points: 5,
      },
      icon: 'spell_fire_fireball.webp',
      points: 0,
      abilityData: {
        leftSide: ['165 Mana', 'Instant'],
        rightSide: [
          '30 yd range',
          '10 sec cooldown',
        ],
      },
    },
    {
      id: 'spell_shadow_soulleech_3',
      ranks: [
        'Gives your Shadow Bolt, Shadowburn, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 10% chance to return health equal to 20% of the damage caused.',
        'Gives your Shadow Bolt, Shadowburn, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 20% chance to return health equal to 20% of the damage caused.',
        'Gives your Shadow Bolt, Shadowburn, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 30% chance to return health equal to 20% of the damage caused.',
      ],
      row: 6,
      name: 'Soul Leech',
      col: 2,
      maxPoints: 3,
      icon: 'spell_shadow_soulleech_3.webp',
      points: 0,
    },
    {
      id: 'spell_shadow_shadowandflame',
      ranks: [
        'Your Shadow Bolt and Incinerate spells gain an additional 4% of your bonus spell damage effects.',
        'Your Shadow Bolt and Incinerate spells gain an additional 8% of your bonus spell damage effects.',
        'Your Shadow Bolt and Incinerate spells gain an additional 12% of your bonus spell damage effects.',
        'Your Shadow Bolt and Incinerate spells gain an additional 16% of your bonus spell damage effects.',
        'Your Shadow Bolt and Incinerate spells gain an additional 20% of your bonus spell damage effects.',
      ],
      row: 7,
      name: 'Shadow and Flame',
      col: 1,
      maxPoints: 5,
      icon: 'spell_shadow_shadowandflame.webp',
      points: 0,
    },
    {
      id: 'spell_shadow_psychicscream',
      ranks: [
        'When activated, sacrifices your summoned demon to grant you an effect that lasts 1800 seconds.  The effect is canceled if any Demon is summoned.\n\nImp: Increases your Fire damage by 15%.\n\nVoidwalker: Restores 2% of total health every 4 seconds.\n\nSuccubus: Increases your Shadow damage by 15%.\n\nFelhunter: Restores 3% of total mana every 4 seconds.\n\nFelguard: Increases your Shadow damage by 10% and restores 2% of total mana every 4 seconds.',
      ],
      row: 8,
      name: 'Demonic Sacrifice',
      col: 1,
      maxPoints: 1,
      requires: {
        id: 'spell_shadow_shadowandflame',
        points: 5,
      },
      icon: 'spell_shadow_psychicscream.webp',
      points: 0,
      abilityData: {
        leftSide: ['Instant'],
      },
    },
  ],
}
