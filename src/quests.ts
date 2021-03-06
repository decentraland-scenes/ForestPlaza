import { RemoteQuestTracker } from '@dcl/ecs-quests'
import { ProgressStatus } from 'dcl-quests-client/quests-client-amd'
import { QuestState } from 'node_modules/dcl-quests-client/index'
import { query } from '@dcl/quests-query'
import { Herb } from './herb'

export enum taskIds {
  intro = 'e173239d-13dd-48bb-9332-b30472e7941a',
  forestHerb = 'fca9b784-bfd7-453c-b51e-34dbb36415e7',
  medievalHerb = 'bee981f6-53b9-4f60-b7c7-3578a325f4fb',
  asianHerb = '8c2c4f32-590c-43ca-ba9c-03768065461a',
  catHair = '812b968f-806d-4194-86ef-35edbd6d7712',
  talkChaman = '285c92a6-84b8-4a68-a083-c8737c89d17a',
  gems = '58e29d3b-bf6e-416b-bb77-35756120ab9c',
  placeGems = 'ae33a6b2-f4d2-48f6-bed6-406a8873b556',
  caliz = 'd142506e-84da-4955-8e56-a3e0fa5ae4b5',
  outro = 'cb67b6df-990c-4bcf-82b9-175126f7a302',
}

export enum stepIds {
  forest1 = '2ba283ea-244b-4b59-9e9b-ae873a2b19e8',
  forest2 = '2678960d-f64e-4b8d-9eeb-2a5eedf58c2f',
  forest3 = 'bac43e62-00d1-491e-bc6a-0859827ea466',
  asian1 = '8a55e6db-62e5-4fd4-84dd-49acbc8b5c27',
  asian2 = 'fdc54c32-0642-48fa-91ac-fa58e3de9b52',
  asian3 = 'dba1df81-cb7b-4fa9-9689-3ba24f28689f',
  medieval1 = 'be070e38-3533-4e10-b587-9ee3636314e9',
  medieval2 = 'eab99eec-b774-49ec-beb9-27f17369078b',
  medieval3 = '20e294a2-f33d-42ed-9986-0d227fe36e35',
}

export let client: RemoteQuestTracker

export let questProg: QuestState

export async function handleQuests() {
  if (client) return
  client = await new RemoteQuestTracker('18d80de8-9367-4cf1-9eda-de3513dc316d')
  questProg = await client.getCurrentStatePromise()

  log('QUEST ', questProg)
  if (questProg.progressStatus != ProgressStatus.COMPLETED) {
    if (!query(questProg).isTaskCompleted(taskIds.forestHerb)) {
      let herb1 = new Herb(
        'models/Bush_Fantasy_01.glb',
        { position: new Vector3(1, 1, 1) },
        taskIds.forestHerb,
        stepIds.forest1,
        client
      )
    }
  }

  return client
}
