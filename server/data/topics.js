const fp = require('lodash/fp');

const topics = [
  {
    id: 'nhac-hay-tuyen-chon',
    name: 'Nhạc hay tuyển chọn',
    color: 'blue-500',
  },
  {
    id: 'nhac-nhe',
    name: 'Nhạc nhẹ',
    color: 'yellow-500',
  },
  {
    id: 'nhac-cover',
    name: 'Nhạc Cover',
    color: 'indigo-500',
  },
  {
    id: 'nhac-edm',
    name: 'Nhạc EDM',
    color: 'red-500',
  },
  {
    id: 'nhac-buon',
    name: 'Nhạc buồn',
    color: 'purple-500',
  },
];

const topicsAsObject = fp.reduce((rs, topic) => {
  rs[topic.id] = topic;
  return rs;
}, {})(topics);

module.exports = topics;
module.exports.topicsAsObject = topicsAsObject;
