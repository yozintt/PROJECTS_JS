// Criar um banco de dados, com videos
// criar uma funçao para criar um  video com {nome, tempo, id}
// criar uma funçao para editar o video
// criar uma funçao para deletar o video
// criar uma funçao para listar todos os videos
// criar uma funçao para listar videos por id

const dataBase = [
  {
    name: "Video 1",
    time: 22.5,
    id: 1,
  },
  {
    name: "Video 2",
    time: 20.0,
    id: 2,
  },
  {
    name: "Video 3",
    time: 11.5,
    id: 3,
  },
  {
    name: "Video 4",
    time: 8.0,
    id: 4,
  },
];

const createVideos = (name, time) => {
  dataBase.push({ name: name, time: time, id: dataBase.length + 1 });
};

const editVideos = (name, time, id) => {
  const newVideo = { name: name, time: time, id: id };

  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].id === id) {
      dataBase[i] = newVideo;
    }
  }
};

const showVideoById = (id) => {
  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].id === id) {
      return dataBase[i];
    }
  }
};

const deleteVideo = (id) => {
  const deletedVideo = dataBase.pop();
  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].id === id) {
      dataBase[i] = deletedVideo;
    }
  }
};

const showAllVideos = () => {
  return dataBase;
};

const videos = {
  create: createVideos,
  edit: editVideos,
  delete: deleteVideo,
  list: showAllVideos,
  get: showVideoById,
};

videos.create("Video 5", 5.5);
console.log(videos.list());
videos.edit("Video Q", 12.4, 2);
console.log(videos.get(2));
videos.delete(5);
console.log(videos.list());
