import { handleQuests } from './quests'

let plaza = new Entity()
plaza.addComponent(new GLTFShape('models/ForestPlaza.glb'))
plaza.addComponent(
  new Transform({
    position: new Vector3(160, 0, 160),
  })
)

engine.addEntity(plaza)

handleQuests()
