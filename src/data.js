export const DATA = {
  id: 'dsh-rhinitis',
  name: '慢性鼻炎',
  prefix: 'rhinitis',
  label: '慢性鼻炎',
  defaultEeriness: 2,
  gain: 0.4,
  flareChance: 0.25,
  flareGain: 18,
  triggerWeight: 1,
  flareWeight: 0.9,
  reliefs: [
    { id: 'spray', label: '喷鼻剂', relief: 26, minutes: 30, calm: 8 },
    { id: 'rinse', label: '盐水洗鼻', relief: 22, minutes: 35, calm: 6 },
    { id: 'steam', label: '热水蒸汽', relief: 14, minutes: 20, calm: 5 },
  ],
  body: {
    stiff: '鼻子又开始不通，说话得张口换气。',
    ache: '一边鼻子完全堵着，另一边半通；说话带鼻音，自己听着都闷。',
    flare: '两边都堵死了，只能张嘴呼吸；一句话要换两次气。',
  },
  voice: {
    base: '允许鼻音重、句子比平时短；说长句时中间断一次去换气。别把"闷"演成撒娇。',
    flare: '允许一句话断成两截、允许吸一下鼻子再继续说；不要描述鼻涕。',
  },
}
