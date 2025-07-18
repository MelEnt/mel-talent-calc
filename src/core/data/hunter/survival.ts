import type { Tree } from '../../types'

export const survival: Tree = {
  specIcon:
    'ability_hunter_swiftstrike.webp',
  name: 'Survival',
  backgroundImage:
    'src/assets/images/hunter/background-hunter-survival.webp',
  talents: [
    {
      id: 'inv_misc_head_dragon_black',
      ranks: [
        'Increases all damage caused against Beasts, Giants and Dragonkin targets by 1% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 1%.',
        'Increases all damage caused against Beasts, Giants and Dragonkin targets by 2% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 2%.',
        'Increases all damage caused against Beasts, Giants and Dragonkin targets by 3% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 3%.',
      ],
      row: 0,
      name: 'Monster Slaying',
      col: 0,
      maxPoints: 3,
      icon: 'inv_misc_head_dragon_black.webp',
      points: 0,
    },
    {
      id: 'spell_holy_prayerofhealing',
      ranks: [
        'Increases all damage caused against Humanoid targets by 1% and increases critical damage caused against Humanoid targets by an additional 1%.',
        'Increases all damage caused against Humanoid targets by 2% and increases critical damage caused against Humanoid targets by an additional 2%.',
        'Increases all damage caused against Humanoid targets by 3% and increases critical damage caused against Humanoid targets by an additional 3%.',
      ],
      row: 0,
      name: 'Humanoid Slaying',
      col: 1,
      maxPoints: 3,
      icon: 'spell_holy_prayerofhealing.webp',
      points: 0,
    },
    {
      id: 'ability_townwatch',
      ranks: [
        'Increases the range of your ranged weapons by 2 yards.',
        'Increases the range of your ranged weapons by 4 yards.',
        'Increases the range of your ranged weapons by 6 yards.',
      ],
      row: 0,
      name: 'Hawk Eye',
      col: 2,
      maxPoints: 3,
      icon: 'ability_townwatch.webp',
      points: 0,
    },
    {
      id: 'ability_racial_bloodrage',
      ranks: [
        'Increases the critical strike chance of Raptor Strike and Mongoose Bite by 10%.',
        'Increases the critical strike chance of Raptor Strike and Mongoose Bite by 20%.',
      ],
      row: 0,
      name: 'Savage Strikes',
      col: 3,
      maxPoints: 2,
      icon: 'ability_racial_bloodrage.webp',
      points: 0,
    },
    {
      id: 'spell_nature_stranglevines',
      ranks: [
        'Gives your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap a 8% chance to entrap the target, preventing them from moving for 4 seconds.',
        'Gives your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap a 16% chance to entrap the target, preventing them from moving for 4 seconds.',
        'Gives your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap a 25% chance to entrap the target, preventing them from moving for 4 seconds.',
      ],
      row: 1,
      name: 'Entrapment',
      col: 0,
      maxPoints: 3,
      icon: 'spell_nature_stranglevines.webp',
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
      col: 1,
      maxPoints: 5,
      icon: 'ability_parry.webp',
      points: 0,
    },
    {
      id: 'ability_rogue_trip',
      ranks: [
        'Gives your Wing Clip ability a 7% chance to immobilize the target for 5 seconds.',
        'Gives your Wing Clip ability a 14% chance to immobilize the target for 5 seconds.',
        'Gives your Wing Clip ability a 20% chance to immobilize the target for 5 seconds.',
      ],
      row: 1,
      name: 'Improved Wing Clip',
      col: 2,
      maxPoints: 3,
      icon: 'ability_rogue_trip.webp',
      points: 0,
    },
    {
      id: 'spell_nature_timestop',
      ranks: [
        'Increases the duration of Freezing and Frost Trap effects by 15%, the damage of Immolation and Explosive Trap effects by 15%, and the number of snakes summoned from Snake Traps by 15%.',
        'Increases the duration of Freezing and Frost Trap effects by 30%, the damage of Immolation and Explosive Trap effects by 30%, and the number of snakes summoned from Snake Traps by 30%.',
      ],
      row: 2,
      name: 'Clever Traps',
      col: 0,
      maxPoints: 2,
      icon: 'spell_nature_timestop.webp',
      points: 0,
    },
    {
      id: 'spell_shadow_twilight',
      ranks: [
        'Increases total health by 2%.',
        'Increases total health by 4%.',
        'Increases total health by 6%.',
        'Increases total health by 8%.',
        'Increases total health by 10%.',
      ],
      row: 2,
      name: 'Survivalist',
      col: 1,
      maxPoints: 5,
      icon: 'spell_shadow_twilight.webp',
      points: 0,
    },
    {
      id: 'ability_whirlwind',
      ranks: [
        'When activated, increases your Dodge and Parry chance by 25% for 10 seconds.',
      ],
      row: 2,
      name: 'Deterrence',
      col: 2,
      maxPoints: 1,
      icon: 'ability_whirlwind.webp',
      points: 0,
      abilityData: {
        leftSide: ['Instant'],
        rightSide: ['5 min cooldown'],
      },
    },
    {
      id: 'ability_ensnare',
      ranks: [
        'Decreases the chance enemies will resist trap effects by 5%.',
        'Decreases the chance enemies will resist trap effects by 10%.',
      ],
      row: 3,
      name: 'Trap Mastery',
      col: 0,
      maxPoints: 2,
      icon: 'ability_ensnare.webp',
      points: 0,
    },
    {
      id: 'ability_kick',
      ranks: [
        'Increases hit chance by 1% and increases the chance movement impairing effects will be resisted by an additional 5%.',
        'Increases hit chance by 2% and increases the chance movement impairing effects will be resisted by an additional 10%.',
        'Increases hit chance by 3% and increases the chance movement impairing effects will be resisted by an additional 15%.',
      ],
      row: 3,
      name: 'Surefooted',
      col: 1,
      maxPoints: 3,
      icon: 'ability_kick.webp',
      points: 0,
    },
    {
      id: 'ability_rogue_feigndeath',
      ranks: [
        'Reduces the chance your Feign Death ability will be resisted by 2%.',
        'Reduces the chance your Feign Death ability will be resisted by 4%.',
      ],
      row: 3,
      name: 'Improved Feign Death',
      col: 3,
      maxPoints: 2,
      icon: 'ability_rogue_feigndeath.webp',
      points: 0,
    },
    {
      id: 'ability_hunter_survivalinstincts',
      ranks: [
        'Reduces all damage taken by 2% and increases attack power by 2%.',
        'Reduces all damage taken by 4% and increases attack power by 4%.',
      ],
      row: 4,
      name: 'Survival Instincts',
      col: 0,
      maxPoints: 2,
      icon: 'ability_hunter_survivalinstincts.webp',
      points: 0,
    },
    {
      id: 'spell_holy_blessingofstamina',
      ranks: [
        'Increases your critical strike chance with all attacks by 1%.',
        'Increases your critical strike chance with all attacks by 2%.',
        'Increases your critical strike chance with all attacks by 3%.',
      ],
      row: 4,
      name: 'Killer Instinct',
      col: 1,
      maxPoints: 3,
      icon: 'spell_holy_blessingofstamina.webp',
      points: 0,
    },
    {
      id: 'ability_warrior_challange',
      ranks: [
        "A strike that becomes active after parrying an opponent's attack.  This attack deals 40 damage and immobilizes the target for 5 seconds.  Counterattack cannot be blocked, dodged, or parried.",
      ],
      row: 4,
      name: 'Counterattack',
      col: 2,
      maxPoints: 1,
      requires: {
        id: 'ability_whirlwind',
        points: 1,
      },
      icon: 'ability_warrior_challange.webp',
      points: 0,
      abilityData: {
        leftSide: ['45 Mana', 'Instant'],
        rightSide: ['Melee Range', '5 sec cooldown']
      }
    },
    {
      id: 'ability_hunter_resourcefulness',
      ranks: [
        'Reduces the mana cost of all traps and melee abilities by 20% and reduces the cooldown of all traps by 2 sec.',
        'Reduces the mana cost of all traps and melee abilities by 40% and reduces the cooldown of all traps by 4 sec.',
        'Reduces the mana cost of all traps and melee abilities by 60% and reduces the cooldown of all traps by 6 sec.',
      ],
      row: 5,
      name: 'Resourcefulness',
      col: 0,
      maxPoints: 3,
      icon: 'ability_hunter_resourcefulness.webp',
      points: 0,
    },
    {
      id: 'spell_nature_invisibilty',
      ranks: [
        'Increases your Agility by 3%.',
        'Increases your Agility by 6%.',
        'Increases your Agility by 9%.',
        'Increases your Agility by 12%.',
        'Increases your Agility by 15%.',
      ],
      row: 5,
      name: 'Lightning Reflexes',
      col: 2,
      maxPoints: 5,
      icon: 'spell_nature_invisibilty.webp',
      points: 0,
    },
    {
      id: 'ability_hunter_thrillofthehunt',
      ranks: [
        'Gives you a 33% chance to regain 40% of the mana cost of any shot when it critically hits.',
        'Gives you a 66% chance to regain 40% of the mana cost of any shot when it critically hits.',
        'Gives you a 100% chance to regain 40% of the mana cost of any shot when it critically hits.',
      ],
      row: 6,
      name: 'Thrill of the Hunt',
      col: 0,
      maxPoints: 3,
      icon: 'ability_hunter_thrillofthehunt.webp',
      points: 0,
    },
    {
      id: 'inv_spear_02',
      ranks: [
        'A stinging shot that puts the target to sleep for 12 seconds.  Any damage will cancel the effect.  When the target wakes up, the Sting causes 300 Nature damage over 12 seconds.  Only one Sting per Hunter can be active on the target at a time.',
      ],
      row: 6,
      name: 'Wyvern Sting',
      col: 1,
      maxPoints: 1,
      requires: {
        id: 'spell_holy_blessingofstamina',
        points: 3,
      },
      icon: 'inv_spear_02.webp',
      points: 0,
      abilityData: {
        leftSide: ['115 Mana', 'Instant'],
        rightSide: [
          '35 yd range',
          '2 min cooldown',
        ],
        bottom: ['Requires Ranged Weapon'],
      },
    },
    {
      id: 'ability_rogue_findweakness',
      ranks: [
        'Your ranged criticals have a 33% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the attack power of all attackers against that target by 25% of your Agility for 7 seconds.',
        'Your ranged criticals have a 66% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the attack power of all attackers against that target by 25% of your Agility for 7 seconds.',
        'Your ranged criticals have a 100% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the attack power of all attackers against that target by 25% of your Agility for 7 seconds.',
      ],
      row: 6,
      name: 'Expose Weakness',
      col: 2,
      maxPoints: 3,
      requires: {
        id: 'spell_nature_invisibilty',
        points: 5,
      },
      icon: 'ability_rogue_findweakness.webp',
      points: 0,
    },
    {
      id: 'ability_hunter_mastertactitian',
      ranks: [
        'Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 2% for 8 seconds.',
        'Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 4% for 8 seconds.',
        'Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 6% for 8 seconds.',
        'Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 8% for 8 seconds.',
        'Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 10% for 8 seconds.',
      ],
      row: 7,
      name: 'Master Tactician',
      col: 1,
      maxPoints: 5,
      icon: 'ability_hunter_mastertactitian.webp',
      points: 0,
    },
    {
      id: 'ability_hunter_readiness',
      ranks: [
        'When activated, this ability immediately finishes the cooldown on your other Hunter abilities.',
      ],
      row: 8,
      name: 'Readiness',
      col: 1,
      maxPoints: 1,
      requires: {
        id: 'ability_hunter_mastertactitian',
        points: 5,
      },
      icon: 'ability_hunter_readiness.webp',
      points: 0,
      abilityData: {
        leftSide: ['Instant'],
        rightSide: ['5 min cooldown'],
      },
    },
  ],
}
