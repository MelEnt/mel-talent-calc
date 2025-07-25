import type { Tree } from '../../types'

export const feralcombat: Tree = {
  specIcon: 'ability_racial_bearform.webp',
  name: 'Feral',
  backgroundImage:
    'src/assets/images/druid/background-druid-feral.webp',
  talents: [
    {
      id: 'ability_hunter_pet_hyena',
      ranks: [
        'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 1 Rage or Energy.',
        'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 2 Rage or Energy.',
        'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 3 Rage or Energy.',
        'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 4 Rage or Energy.',
        'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 5 Rage or Energy.',
      ],
      row: 0,
      name: 'Ferocity',
      col: 1,
      maxPoints: 5,
      icon: 'ability_hunter_pet_hyena.webp',
      points: 0,
    },
    {
      id: 'ability_druid_demoralizingroar',
      ranks: [
        'Increases the attack power reduction of your Demoralizing Roar by 8% and the damage caused by your Ferocious Bite by 3%.',
        'Increases the attack power reduction of your Demoralizing Roar by 16% and the damage caused by your Ferocious Bite by 6%.',
        'Increases the attack power reduction of your Demoralizing Roar by 24% and the damage caused by your Ferocious Bite by 9%.',
        'Increases the attack power reduction of your Demoralizing Roar by 32% and the damage caused by your Ferocious Bite by 12%.',
        'Increases the attack power reduction of your Demoralizing Roar by 40% and the damage caused by your Ferocious Bite by 15%.',
      ],
      row: 0,
      name: 'Feral Aggression',
      col: 2,
      maxPoints: 5,
      icon: 'ability_druid_demoralizingroar.webp',
      points: 0,
    },
    {
      id: 'ability_ambush',
      ranks: [
        'Increases threat caused in Bear and Dire Bear Form by 5% and reduces the chance enemies have to detect you while Prowling.',
        'Increases threat caused in Bear and Dire Bear Form by 10% and reduces the chance enemies have to detect you while Prowling.',
        'Increases threat caused in Bear and Dire Bear Form by 15% and reduces the chance enemies have to detect you while Prowling.',
      ],
      row: 1,
      name: 'Feral Instinct',
      col: 0,
      maxPoints: 3,
      icon: 'ability_ambush.webp',
      points: 0,
    },
    {
      id: 'ability_druid_bash',
      ranks: [
        'Increases the stun duration of your Bash and Pounce abilities by 0.5 sec.',
        'Increases the stun duration of your Bash and Pounce abilities by 1 sec.',
      ],
      row: 1,
      name: 'Brutal Impact',
      col: 1,
      maxPoints: 2,
      icon: 'ability_druid_bash.webp',
      points: 0,
    },
    {
      id: 'inv_misc_pelt_bear_03',
      ranks: [
        'Increases your Armor contribution from items by 4%.',
        'Increases your Armor contribution from items by 7%.',
        'Increases your Armor contribution from items by 10%.',
      ],
      row: 1,
      name: 'Thick Hide',
      col: 2,
      maxPoints: 3,
      icon: 'inv_misc_pelt_bear_03.webp',
      points: 0,
    },
    {
      id: 'spell_nature_spiritwolf',
      ranks: [
        'Increases your movement speed by 15% while outdoors in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 4%.',
        'Increases your movement speed by 30% while outdoors in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 4%.',
      ],
      row: 2,
      name: 'Feral Swiftness',
      col: 0,
      maxPoints: 2,
      icon: 'spell_nature_spiritwolf.webp',
      points: 0,
    },
    {
      id: 'ability_hunter_pet_bear',
      ranks: [
        'Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 seconds.',
      ],
      row: 2,
      name: 'Feral Charge',
      col: 1,
      maxPoints: 1,
      icon: 'ability_hunter_pet_bear.webp',
      points: 0,
      abilityData: {
        leftSide: ['5 Rage', 'Instant'],
        rightSide: [
          '8 - 25 yd range',
          '15 sec cooldown',
        ],
        bottom: [
          'Requires Bear Form, Dire Bear Form',
        ],
      },
    },
    {
      id: 'inv_misc_monsterclaw_04',
      ranks: [
        'Increases your melee critical strike chance while in Bear, Dire Bear, Cat Form, or Moonkin Form by 2%.',
        'Increases your melee critical strike chance while in Bear, Dire Bear, Cat Form, or Moonkin Form by 4%.',
        'Increases your melee critical strike chance while in Bear, Dire Bear, Cat Form, or Moonkin Form by 6%.',
      ],
      row: 2,
      name: 'Sharpened Claws',
      col: 2,
      maxPoints: 3,
      icon: 'inv_misc_monsterclaw_04.webp',
      points: 0,
    },
    {
      id: 'spell_shadow_vampiricaura',
      ranks: [
        'Reduces the energy cost of your Shred ability by 9 and the rage cost of your Lacerate ability by 1.',
        'Reduces the energy cost of your Shred ability by 18 and the rage cost of your Lacerate ability by 2.',
      ],
      row: 3,
      name: 'Shredding Attacks',
      col: 0,
      maxPoints: 2,
      icon: 'spell_shadow_vampiricaura.webp',
      points: 0,
    },
    {
      id: 'ability_hunter_pet_cat',
      ranks: [
        'Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 50% of your level.',
        'Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 100% of your level.',
        'Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 150% of your level.',
      ],
      row: 3,
      name: 'Predatory Strikes',
      col: 1,
      maxPoints: 3,
      icon: 'ability_hunter_pet_cat.webp',
      points: 0,
    },
    {
      id: 'ability_racial_cannibalize',
      ranks: [
        'Gives you a 50% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points  have a 50% chance to add an additional combo point.',
        'Gives you a 100% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points  have a 100% chance to add an additional combo point.',
      ],
      row: 3,
      name: 'Primal Fury',
      col: 2,
      maxPoints: 2,
      requires: {
        id: 'inv_misc_monsterclaw_04',
        points: 3,
      },
      icon: 'ability_racial_cannibalize.webp',
      points: 0,
    },
    {
      id: 'ability_druid_ravage',
      ranks: [
        'Increases the damage caused by your Claw, Rake, and Mangle (Cat) abilities by 10%.',
        'Increases the damage caused by your Claw, Rake, and Mangle (Cat) abilities by 20%.',
      ],
      row: 4,
      name: 'Savage Fury',
      col: 0,
      maxPoints: 2,
      icon: 'ability_druid_ravage.webp',
      points: 0,
    },
    {
      id: 'spell_nature_faeriefire',
      ranks: [
        'Decrease the armor of the target by 175 for 40 seconds.  While affected, the target cannot stealth or turn invisible.',
      ],
      row: 4,
      name: 'Faerie Fire (Feral)',
      col: 2,
      maxPoints: 1,
      icon: 'spell_nature_faeriefire.webp',
      points: 0,
      abilityData: {
        leftSide: ['30 yd range', 'Instant'],
        rightSide: ['', '6 sec cooldown'],
        bottom: [
          'Requires Cat Form, Bear Form, Dire Bear Form',
        ],
      },
    },
    {
      id: 'ability_druid_healinginstincts',
      ranks: [
        'Increases your healing spells by up to 50% of your Agility, and increases healing done to you by 10% while in Cat form.',
        'Increases your healing spells by up to 100% of your Agility, and increases healing done to you by 20% while in Cat form.',
      ],
      row: 4,
      name: 'Nurturing Instinct',
      col: 3,
      maxPoints: 2,
      icon: 'ability_druid_healinginstincts.webp',
      points: 0,
    },
    {
      id: 'spell_holy_blessingofagility',
      ranks: [
        'Increases your Intellect by 4%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your attack power is increased by 2%.',
        'Increases your Intellect by 8%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your attack power is increased by 4%.',
        'Increases your Intellect by 12%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 12% and while in Cat Form your attack power is increased by 6%.',
        'Increases your Intellect by 16%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 16% and while in Cat Form your attack power is increased by 8%.',
        'Increases your Intellect by 20%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 20% and while in Cat Form your attack power is increased by 10%.',
      ],
      row: 5,
      name: 'Heart of the Wild',
      col: 1,
      maxPoints: 5,
      requires: {
        id: 'ability_hunter_pet_cat',
        points: 3,
      },
      icon: 'spell_holy_blessingofagility.webp',
      points: 0,
    },
    {
      id: 'ability_druid_enrage',
      ranks: [
        "Increases all attributes by 1% and reduces the chance you'll be critically hit by melee attacks by 1%.",
        "Increases all attributes by 2% and reduces the chance you'll be critically hit by melee attacks by 2%.",
        "Increases all attributes by 3% and reduces the chance you'll be critically hit by melee attacks by 3%.",
      ],
      row: 5,
      name: 'Survival of the Fittest',
      col: 2,
      maxPoints: 3,
      icon: 'ability_druid_enrage.webp',
      points: 0,
    },
    {
      id: 'ability_druid_primaltenacity',
      ranks: [
        'Increases your chance to resist Stun and Fear mechanics by 5%.',
        'Increases your chance to resist Stun and Fear mechanics by 10%.',
        'Increases your chance to resist Stun and Fear mechanics by 15%.',
      ],
      row: 6,
      name: 'Primal Tenacity',
      col: 0,
      maxPoints: 3,
      icon: 'ability_druid_primaltenacity.webp',
      points: 0,
    },
    {
      id: 'leader_of_the_pack',
      ranks: [
        'While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party and raid members within 45 yards by 2%.  In addition your own melee critical chance is increased by an additional 3%.',
      ],
      row: 6,
      name: 'Leader of the Pack',
      col: 1,
      maxPoints: 1,
      icon: 'spell_nature_unyeildingstamina.webp',
      points: 0,
    },
    {
      id: 'spell_nature_unyeildingstamina',
      ranks: [
        'Your Leader of the Pack ability also causes affected targets to have a 100% chance to heal themselves for 2% of their total health when they critically hit with a melee or ranged attack.  The healing effect cannot occur more than once every 6 sec.',
        'Your Leader of the Pack ability also causes affected targets to have a 100% chance to heal themselves for 4% of their total health when they critically hit with a melee or ranged attack.  The healing effect cannot occur more than once every 6 sec.',
      ],
      row: 6,
      name: 'Improved Leader of the Pack',
      col: 2,
      maxPoints: 2,
      requires: {
        id: 'leader_of_the_pack',
        points: 1,
      },
      icon: 'spell_nature_unyeildingstamina.webp',
      points: 0,
    },
    {
      id: 'ability_druid_predatoryinstincts',
      ranks: [
        'While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 2% and your chance to avoid area effect attacks by 3%.',
        'While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 4% and your chance to avoid area effect attacks by 6%.',
        'While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 6% and your chance to avoid area effect attacks by 9%.',
        'While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 8% and your chance to avoid area effect attacks by 12%.',
        'While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 10% and your chance to avoid area effect attacks by 15%.',
      ],
      row: 7,
      name: 'Predatory Instincts',
      col: 2,
      maxPoints: 5,
      icon: 'ability_druid_predatoryinstincts.webp',
      points: 0,
    },
    {
      id: 'ability_druid_mangle2',
      ranks: [
        'Mangle the target, inflicting damage and causing the target to take additional damage from bleed effects for 12 seconds.  This ability can be used in Cat Form or Dire Bear Form.',
      ],
      row: 8,
      name: 'Mangle',
      col: 1,
      maxPoints: 1,
      requires: {
        id: 'leader_of_the_pack',
        points: 1,
      },
      icon: 'ability_druid_mangle2.webp',
      points: 0,
      abilityData: {
        leftSide: ['Instant'],
      },
    },
  ],
}
