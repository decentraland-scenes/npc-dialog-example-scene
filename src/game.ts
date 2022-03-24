import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import resources from './resources'
import { AliceDialog, BobDialog, CharlieDialog } from './modules/dialogData'

// Base scene
const baseScene = new Entity()
baseScene.addComponent(resources.models.standard.baseScene)
baseScene.addComponent(new Transform())
engine.addEntity(baseScene)

// Alice
export const alice = new NPC(
  {
    position: new Vector3(8, 1.6, 5),
    rotation: Quaternion.Euler(0, 180, 0)
  },
  resources.models.robots.alice,
  () => {
    // animations
    alice.playAnimation('Hello', true, 2)

    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(2, () => {
        alice.playAnimation('Talk')
      })
    )
    engine.addEntity(dummyent)

    // sound
    alice.addComponentOrReplace(new AudioSource(resources.sounds.alice))
    alice.getComponent(AudioSource).playOnce()

    // dialog UI
    alice.talk(AliceDialog)
  },
  {
    faceUser: true,
    portrait: {
      path: 'images/portraits/alice.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  }
)

// // Bob
export const bob = new NPC(
  {
    position: new Vector3(5, 1.6, 11),
    rotation: Quaternion.Euler(0, 180, 0)
  },
  resources.models.robots.bob,
  () => {
    // animations
    bob.playAnimation('Hello', true, 2)

    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(2, () => {
        bob.playAnimation('Talk')
      })
    )
    engine.addEntity(dummyent)

    // sound
    bob.addComponentOrReplace(new AudioSource(resources.sounds.bob))
    bob.getComponent(AudioSource).playOnce()

    // dialog UI
    bob.talk(BobDialog)
  },
  {
    faceUser: true,
    portrait: {
      path: 'images/portraits/bob.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
      bob.playAnimation('Goodbye', true, 2)
    }
  }
)

// // Charlie
export const charlie = new NPC(
  {
    position: new Vector3(11, 1.6, 11),
    rotation: Quaternion.Euler(0, 180, 0)
  },
  resources.models.robots.charlie,
  () => {
    // animations
    charlie.playAnimation('Hello', true, 2)

    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(2, () => {
        charlie.playAnimation('Talk')
      })
    )
    engine.addEntity(dummyent)

    // sound
    charlie.addComponentOrReplace(new AudioSource(resources.sounds.charlie))
    charlie.getComponent(AudioSource).playOnce()

    // dialog UI
    charlie.talk(CharlieDialog)
  },
  {
    faceUser: true,
    portrait: {
      path: 'images/portraits/charlie.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
      charlie.playAnimation('Goodbye', true, 2)
    }
  }
)

// fixed animated rings under NPCs

const ringShape = resources.models.robots.rings

const aliceRings = new Entity()
aliceRings.addComponent(ringShape)
aliceRings.addComponent(
  new Transform({
    position: new Vector3(0, -0.65, 0)
  })
)
aliceRings.setParent(alice)

const bobRings = new Entity()
bobRings.addComponent(ringShape)
bobRings.addComponent(
  new Transform({
    position: new Vector3(0, -0.65, -0.075)
  })
)
bobRings.setParent(bob)

const charlieRings = new Entity()
charlieRings.addComponent(ringShape)
charlieRings.addComponent(
  new Transform({
    position: new Vector3(0, -0.55, -0.2)
  })
)
charlieRings.setParent(charlie)
