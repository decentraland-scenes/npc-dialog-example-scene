import { DialogWindow, ConfirmMode } from "./dialogWindow"
import { Robot, RobotID } from "./robot"
import { TrackUserSlerp } from "./faceUserSystem"
import resources from "../resources"
import utils from "../../node_modules/decentraland-ecs-utils/index"

export const robots: Robot[] = []

export function addRobots(dummyTarget: Entity) {
  const ringShape = resources.models.robots.rings

  // Alice
  const alice = new Robot(
    resources.models.robots.alice,
    new Transform({
      position: new Vector3(8, 1.6, 5),
      rotation: Quaternion.Euler(0, 180, 0),
    }),
    RobotID.Alice,
    resources.sounds.alice
  )
  robots.push(alice)
  const aliceRings = new Entity()
  aliceRings.addComponent(ringShape)
  aliceRings.addComponent(
    new Transform({
      position: new Vector3(0, -0.65, 0),
    })
  )
  aliceRings.setParent(alice)

  // Bob
  const bob = new Robot(
    resources.models.robots.bob,
    new Transform({
      position: new Vector3(5, 1.6, 11),
      rotation: Quaternion.Euler(0, 180, 0),
    }),
    RobotID.Bob,
    resources.sounds.bob
  )
  robots.push(bob)
  const bobRings = new Entity()
  bobRings.addComponent(ringShape)
  bobRings.addComponent(
    new Transform({
      position: new Vector3(0, -0.65, -0.075),
    })
  )

  bobRings.setParent(bob)

  // Charlie
  const charlie = new Robot(
    resources.models.robots.charlie,
    new Transform({
      position: new Vector3(11, 1.6, 11),
      rotation: Quaternion.Euler(0, 180, 0),
    }),
    RobotID.Charlie,
    resources.sounds.charlie
  )
  robots.push(charlie)
  const charlieRings = new Entity()
  charlieRings.addComponent(ringShape)
  charlieRings.addComponent(
    new Transform({
      position: new Vector3(0, -0.55, -0.2),
    })
  )
  charlieRings.setParent(charlie)

  // UI elements
  const canvas = new UICanvas()
  const dialogWindow = new DialogWindow(canvas)

  // Dummy entity to add a Delay component so that it doesn't clash
  // with the robots Delay component used in animations
  const dummyDelay = new Entity()
  engine.addEntity(dummyDelay)

  // ISSUE: Modules do not load when these components are refactored to be part of the Robot class
  // Add user interaction
  for (let i = 0; i < robots.length; i++) {
    robots[i].addComponent(
      new OnPointerDown(
        (): void => {
          // Added to prevent user from accidentally clicking on the robot again
          let isGoodbyePlaying = robots[i]
            .getComponent(Animator)
            .getClip("Goodbye").playing

          if (!dialogWindow.isDialogOpen && !isGoodbyePlaying) {

            // Play animation and audio
            robots[i].playHello()
            robots[i].getComponent(AudioSource).playOnce()
            dialogWindow.openDialogWindow(robots[i].robotID, 0)

            // HACK: To avoid clashing with the input subscribe PRIMARY button down event
            dummyDelay.addComponentOrReplace(
              new utils.Delay(30, () => {
                dialogWindow.isDialogOpen = true
              })
            )

            // Track user's position
            dummyTarget.getComponent(Transform).position = robots[
              i
            ].getComponent(Transform).position
            if (!robots[i].hasComponent(TrackUserSlerp))
              robots[i].addComponent(new TrackUserSlerp())
          }
        },
        {
          button: ActionButton.PRIMARY,
          hoverText: "Talk",
          distance: resources.trigger.triggerShape.radius,
        }
      )
    )
    robots[i].addComponent(
      new utils.TriggerComponent(
        resources.trigger.triggerShape, //shape
        0, //layer
        0, //triggeredByLayer
        null, //onTriggerEnter
        null, //onTriggerExit
        null, //onCameraEnter
        () => {
          log("exit trigger area")
          dialogWindow.closeDialogWindow()
        }, //onCameraExit
        false // debug
      )
    )
  }

  // Global button events for progressing the dialog
  const input = Input.instance

  input.subscribe("BUTTON_DOWN", ActionButton.POINTER, false, (): void => {
    log("LMB Clicked")
    if (dialogWindow.isDialogOpen && !dialogWindow.isQuestionPanel) {
      dialogWindow.confirmText(ConfirmMode.Next)
    }
  })

  input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, (): void => {
    log("E Key Pressed")
    if (dialogWindow.isDialogOpen && dialogWindow.isQuestionPanel) {
      dialogWindow.confirmText(ConfirmMode.Confirm)
    }
  })

  input.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, false, (): void => {
    log("F Key Pressed")
    if (dialogWindow.isDialogOpen && dialogWindow.isQuestionPanel) {
      dialogWindow.confirmText(ConfirmMode.Cancel)
    }
  })
}
