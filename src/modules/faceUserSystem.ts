@Component("trackUserSlerp")
export class TrackUserSlerp {
  fraction: number = 0
}

let currentCameraPosition = new Vector3()

// Rotates robot to face the user during interaction
export function addFaceUserSystem(dummyTarget: Entity) {
  class FaceUserSystem implements ISystem {
    private robotGroup: ComponentGroup = engine.getComponentGroup(
      TrackUserSlerp
    )

    update(dt: number) {
      for (let robot of this.robotGroup.entities) {
        let transform = robot.getComponent(Transform)
        let trackUserSlerp = robot.getComponent(TrackUserSlerp)
        
        // Check if player moves
        if(!currentCameraPosition.equals(Camera.instance.position)) {
          // Update current camera position
          currentCameraPosition.copyFrom(Camera.instance.position)
          trackUserSlerp.fraction = 0
        }

        dummyTarget.getComponent(Transform).lookAt(Camera.instance.position)

        trackUserSlerp.fraction += dt / 12

        if (trackUserSlerp.fraction < 1) {
          transform.rotation = Quaternion.Slerp(
            robot.getComponent(Transform).rotation,
            dummyTarget.getComponent(Transform).rotation,
            trackUserSlerp.fraction
          )
        }
      }
    }
  }

  engine.addSystem(new FaceUserSystem())
}
