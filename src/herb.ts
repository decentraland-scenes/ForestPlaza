import { RemoteQuestTracker } from '@dcl/RemoteQuestTracker'
import { ProgressStatus } from 'node_modules/dcl-quests-client/index'
import { progressInQuest, stepIds, taskIds } from './quests'

export class Herb extends Entity {
  private task: taskIds
  private step: stepIds
  private client: RemoteQuestTracker
  constructor(
    model: string,
    transform: TransformConstructorArgs,
    task: taskIds,
    step: stepIds,
    client: RemoteQuestTracker
  ) {
    super()
    engine.addEntity(this)
    this.addComponent(new GLTFShape(model))
    this.addComponent(new Transform(transform))
    this.task = task
    this.step = step
    this.client = client

    this.addComponent(
      new OnPointerDown(
        () => {
          this.pick()
          progressInQuest(this.task, this.step)
          //   this.client.makeProgress(this.task, {
          //     type: 'step-based',
          //     stepStatus: ProgressStatus.COMPLETED,
          //     stepId: this.step,
          //   })
        },
        {
          hoverText: 'Collect',
          distance: 4,
          button: ActionButton.POINTER,
        }
      )
    )
  }
  pick() {
    // sound
    // let collectSound = new AudioClip('collect')
    // this.addComponentOrReplace(new AudioSource(collectSound))
    // this.getComponent(AudioSource).playOnce()

    engine.removeEntity(this)
  }
}
