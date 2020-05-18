import { addFaceUserSystem } from "./modules/faceUserSystem"
import { addRobots } from "./modules/robotBuilder"
import resources from "./resources"

// Base scene
const baseScene = new Entity()
baseScene.addComponent(resources.models.standard.baseScene)
baseScene.addComponent(new Transform())
engine.addEntity(baseScene)

// Dummy target
const dummyTarget = new Entity()
dummyTarget.addComponent(new PlaneShape())
dummyTarget.addComponent(new Transform())

addFaceUserSystem(dummyTarget)
addRobots(dummyTarget)


