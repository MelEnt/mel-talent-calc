import type { Tree } from '../../types'

export const retribution: Tree = {
  specIcon: 'spell_holy_auraoflight.webp',
  name: 'Retribution',
  backgroundImage:
    'src/assets/images/paladin/background-paladin-retribution.webp',
  talents: [
    {
      id: 'spell_holy_fistofjustice',
      ranks: [
        'Increases the attack power bonus of your Blessing of Might by 4%.',
        'Increases the attack power bonus of your Blessing of Might by 8%.',
        'Increases the attack power bonus of your Blessing of Might by 12%.',
        'Increases the attack power bonus of your Blessing of Might by 16%.',
        'Increases the attack power bonus of your Blessing of Might by 20%.',
      ],
      row: 0,
      name: 'Improved Blessing of Might',
      col: 1,
      maxPoints: 5,
      icon: 'spell_holy_fistofjustice.webp',
      points: 0,
    },
    {
      id: 'spell_frost_windwalkon',
      ranks: [
        'Reduces the mana cost of your Judgement and Seal spells by 3%.',
        'Reduces the mana cost of your Judgement and Seal spells by 6%.',
        'Reduces the mana cost of your Judgement and Seal spells by 9%.',
        'Reduces the mana cost of your Judgement and Seal spells by 12%.',
        'Reduces the mana cost of your Judgement and Seal spells by 15%.',
      ],
      row: 0,
      name: 'Benediction',
      col: 2,
      maxPoints: 5,
      icon: 'spell_frost_windwalkon.webp',
      points: 0,
    },
    {
      id: 'spell_holy_righteousfury',
      ranks: [
        'Decreases the cooldown of your Judgement spell by 1 sec.',
        'Decreases the cooldown of your Judgement spell by 2 sec.',
      ],
      row: 1,
      name: 'Improved Judgement',
      col: 0,
      maxPoints: 2,
      icon: 'spell_holy_righteousfury.webp',
      points: 0,
    },
    {
      id: 'spell_holy_holysmite',
      ranks: [
        'In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all spells and attacks made against that target by an additional 1%.',
        'In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all spells and attacks made against that target by an additional 2%.',
        'In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all spells and attacks made against that target by an additional 3%.',
      ],
      row: 1,
      name: 'Improved Seal of the Crusader',
      col: 1,
      maxPoints: 3,
      icon: 'spell_holy_holysmite.webp',
      points: 0,
    },
    {
      id: 'ability_parry',
      ranks: [
        'Increases your Parry chance by 1%.',
        'Increases your Parry chance by 2%.',
        'Increases your Parry chance by 3%.',
        'Increases your Parry chance by 4%.',
        'Increases your Parry chance by 5%.',
      ],
      row: 1,
      name: 'Deflection',
      col: 2,
      maxPoints: 5,
      icon: 'ability_parry.webp',
      points: 0,
    },
    {
      id: 'spell_holy_vindication',
      ranks: [
        "Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by 5% for 15 seconds.",
        "Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by 10% for 15 seconds.",
        "Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by 15% for 15 seconds.",
      ],
      row: 2,
      name: 'Vindication',
      col: 0,
      maxPoints: 3,
      icon: 'spell_holy_vindication.webp',
      points: 0,
    },
    {
      id: 'spell_holy_retributionaura',
      ranks: [
        'Increases your chance to get a critical strike with melee weapons by 1%.',
        'Increases your chance to get a critical strike with melee weapons by 2%.',
        'Increases your chance to get a critical strike with melee weapons by 3%.',
        'Increases your chance to get a critical strike with melee weapons by 4%.',
        'Increases your chance to get a critical strike with melee weapons by 5%.',
      ],
      row: 2,
      name: 'Conviction',
      col: 1,
      maxPoints: 5,
      icon: 'spell_holy_retributionaura.webp',
      points: 0,
    },
    {
      id: 'ability_warrior_innerrage',
      ranks: [
        "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage.  Persists for 0.5 seconds when swapping to any other Seal.  Lasts 30 seconds.\n\nUnleashing this Seal's energy will judge an enemy, instantly causing 157.5 Holy damage, 316 if the target is stunned or incapacitated.",
      ],
      row: 2,
      name: 'Seal of Command',
      col: 2,
      maxPoints: 1,
      icon: 'ability_warrior_innerrage.webp',
      points: 0,
      abilityData: {
        leftSide: ['65 Mana', 'Instant'],
      },
    },
    {
      id: 'spell_holy_persuitofjustice',
      ranks: [
        "Reduces the chance you'll be hit by spells by 1% and increases movement and mounted movement speed by 5%.  This does not stack with other movement speed increasing effects.",
        "Reduces the chance you'll be hit by spells by 2% and increases movement and mounted movement speed by 10%.  This does not stack with other movement speed increasing effects.",
        "Reduces the chance you'll be hit by spells by 3% and increases movement and mounted movement speed by 15%.  This does not stack with other movement speed increasing effects.",
      ],
      row: 2,
      name: 'Pursuit of Justice',
      col: 3,
      maxPoints: 3,
      icon: 'spell_holy_persuitofjustice.webp',
      points: 0,
    },
    {
      id: 'spell_holy_eyeforaneye',
      ranks: [
        "All spell criticals against you cause 15% of the damage taken to the caster as well.  The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
        "All spell criticals against you cause 30% of the damage taken to the caster as well.  The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
      ],
      row: 3,
      name: 'Eye for an Eye',
      col: 0,
      maxPoints: 2,
      icon: 'spell_holy_eyeforaneye.webp',
      points: 0,
    },
    {
      id: 'spell_holy_auraoflight',
      ranks: [
        'Increases the damage done by your Retribution Aura by 25%.',
        'Increases the damage done by your Retribution Aura by 50%.',
      ],
      row: 3,
      name: 'Improved Retribution Aura',
      col: 2,
      maxPoints: 2,
      icon: 'spell_holy_auraoflight.webp',
      points: 0,
    },
    {
      id: 'spell_holy_crusade',
      ranks: [
        'Increases all damage caused against Humanoids, Demons, Undead and Elementals by 1%.',
        'Increases all damage caused against Humanoids, Demons, Undead and Elementals by 2%.',
        'Increases all damage caused against Humanoids, Demons, Undead and Elementals by 3%.',
      ],
      row: 3,
      name: 'Crusade',
      col: 3,
      maxPoints: 3,
      icon: 'spell_holy_crusade.webp',
      points: 0,
    },
    {
      id: 'inv_hammer_04',
      ranks: [
        'Increases the damage you deal with two-handed melee weapons by 2%.',
        'Increases the damage you deal with two-handed melee weapons by 4%.',
        'Increases the damage you deal with two-handed melee weapons by 6%.',
      ],
      row: 4,
      name: 'Two-Handed Weapon Specialization',
      col: 0,
      maxPoints: 3,
      icon: 'inv_hammer_04.webp',
      points: 0,
    },
    {
      id: 'sanctity_aura',
      ranks: [
        'Increases Holy damage done by party and raid members within 30 yards by 10%.  Players may only have one Aura on them per Paladin at any one time.',
      ],
      row: 4,
      name: 'Sanctity Aura',
      col: 2,
      maxPoints: 1,
      icon: 'spell_holy_mindvision.webp',
      points: 0,
      abilityData: {
        leftSide: ['Instant'],
      },
    },
    {
      id: 'spell_holy_mindvision',
      ranks: [
        'The amount of damage caused by targets affected by Sanctity Aura is increased by 1%.',
        'The amount of damage caused by targets affected by Sanctity Aura is increased by 2%.',
      ],
      row: 4,
      name: 'Improved Sanctity Aura',
      col: 3,
      maxPoints: 2,
      requires: {
        id: 'sanctity_aura',
        points: 1,
      },
      icon: 'spell_holy_mindvision.webp',
      points: 0,
    },
    {
      id: 'ability_racial_avatar',
      ranks: [
        'Gives you a 1% bonus to Physical and Holy damage you deal for 30 seconds after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.',
        'Gives you a 2% bonus to Physical and Holy damage you deal for 30 seconds after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.',
        'Gives you a 3% bonus to Physical and Holy damage you deal for 30 seconds after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.',
        'Gives you a 4% bonus to Physical and Holy damage you deal for 30 seconds after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.',
        'Gives you a 5% bonus to Physical and Holy damage you deal for 30 seconds after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.',
      ],
      row: 5,
      name: 'Vengeance',
      col: 1,
      maxPoints: 5,
      requires: {
        id: 'spell_holy_retributionaura',
        points: 5,
      },
      icon: 'ability_racial_avatar.webp',
      points: 0,
    },
    {
      id: 'sanctified_judgement',
      ranks: [
        'Gives your Judgement spell a 33% chance to return 80% of the mana cost of the judged seal.',
        'Gives your Judgement spell a 66% chance to return 80% of the mana cost of the judged seal.',
        'Gives your Judgement spell a 100% chance to return 80% of the mana cost of the judged seal.',
      ],
      row: 5,
      name: 'Sanctified Judgement',
      col: 2,
      maxPoints: 3,
      icon: 'spell_holy_righteousfury.webp',
      points: 0,
    },
    {
      id: 'sanctified_seals',
      ranks: [
        'Increases your chance to critically hit with all spells and melee attacks by 1% and reduces the chance your Seals will be dispelled by 33%.',
        'Increases your chance to critically hit with all spells and melee attacks by 2% and reduces the chance your Seals will be dispelled by 66%.',
        'Increases your chance to critically hit with all spells and melee attacks by 3% and reduces the chance your Seals will be dispelled by 100%.',
      ],
      row: 6,
      name: 'Sanctified Seals',
      col: 0,
      maxPoints: 3,
      icon: 'spell_holy_holysmite.webp',
      points: 0,
    },
    {
      id: 'spell_holy_prayerofhealing',
      ranks: [
        'Puts the enemy target in a state of meditation, incapacitating them for up to 6 seconds.  Any damage caused will awaken the target.  Only works against Humanoids.',
      ],
      row: 6,
      name: 'Repentance',
      col: 1,
      maxPoints: 1,
      icon: 'spell_holy_prayerofhealing.webp',
      points: 0,
      abilityData: {
        leftSide: ['60 Mana', 'Instant'],
        rightSide: [
          '20 yd range',
          '1 min cooldown',
        ],
      },
    },
    {
      id: 'spell_holy_divinepurpose',
      ranks: [
        'Melee and ranged critical strikes against you cause 4% less damage.',
        'Melee and ranged critical strikes against you cause 7% less damage.',
        'Melee and ranged critical strikes against you cause 10% less damage.',
      ],
      row: 6,
      name: 'Divine Purpose',
      col: 2,
      maxPoints: 3,
      icon: 'spell_holy_divinepurpose.webp',
      points: 0,
    },
    {
      id: 'spell_holy_fanaticism',
      ranks: [
        'Increases the critical strike chance of all Judgements capable of a critical hit by 3% and reduces threat caused by all actions by 6% except when under the effects of Righteous Fury.',
        'Increases the critical strike chance of all Judgements capable of a critical hit by 6% and reduces threat caused by all actions by 12% except when under the effects of Righteous Fury.',
        'Increases the critical strike chance of all Judgements capable of a critical hit by 9% and reduces threat caused by all actions by 18% except when under the effects of Righteous Fury.',
        'Increases the critical strike chance of all Judgements capable of a critical hit by 12% and reduces threat caused by all actions by 24% except when under the effects of Righteous Fury.',
        'Increases the critical strike chance of all Judgements capable of a critical hit by 15% and reduces threat caused by all actions by 30% except when under the effects of Righteous Fury.',
      ],
      row: 7,
      name: 'Fanaticism',
      col: 1,
      maxPoints: 5,
      requires: {
        id: 'spell_holy_prayerofhealing',
        points: 1,
      },
      icon: 'spell_holy_fanaticism.webp',
      points: 0,
    },
    {
      id: 'spell_holy_crusaderstrike',
      ranks: [
        'An instant strike that causes 75% weapon damage as Holy and refreshes all Judgements on the target.',
      ],
      row: 8,
      name: 'Crusader Strike',
      col: 1,
      maxPoints: 1,
      icon: 'spell_holy_crusaderstrike.webp',
      points: 0,
      abilityData: {
        leftSide: ['8% of base Mana', 'Instant'],
        rightSide: [
          'Melee Range',
          '6 sec cooldown',
        ],
        bottom: ['Requires Melee Weapon'],
      },
    },
  ],
}
