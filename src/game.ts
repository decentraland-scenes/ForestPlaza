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

// sounds

Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, true, (e) => {
  log(`pos: `, Camera.instance.feetPosition)
  log(`rot: `, Camera.instance.rotation)
  // if(e.hit){
  //   console.log(
  //     'ENT: ',  engine.entities[e.hit.entityId],
  //     'POS:', engine.entities[e.hit.entityId].getComponent(Transform)
  //   )
  // }
})
