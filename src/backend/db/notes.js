import { v4 as uuid } from "uuid";

export const notes = [
  {
    id: uuid(),
    title: "This is title",
    note: "Lorem Ipsum is simply <strong>dummy text</strong> of the printing and \
        typesetting <em>industry</em>. Lorem Ipsum has been the industry's \
        standard dummy text ever since the 1500s, when an unknown \
        printer took a galley of type and scrambled it to make a \
        type specimen book. It has survived not only five centuries \
        but also the leap into electronic typesetting, remaining \
        essentially unchanged. It was popularised in the 1960s \
        with the release of Letraset sheets containing Lorem Ipsum \
        passages, and more recently with desktop publishing software \
        like Aldus PageMaker including versions of Lorem Ipsum.",
    color: "lightblue",
    meta: {
      time: "5:27 PM",
      date: "26/06/22",
      tags: ["work"],
      category: "home",
      pinned: true,
    },
  },
  {
    id: uuid(),
    title: "This is title2",
    note: "Lorem Ipsum is <u>simply dummy text</u> of the printing and \
        typesetting industry. Lorem Ipsum has been the industry's \
        standard dummy text ever since the 1500s, when an unknown \
        printer took a galley of type and scrambled it to make a \
        type specimen book. It has survived not only five centuries \
        but also the leap into electronic typesetting, remaining \
        essentially unchanged. It was popularised in the 1960s \
        with the release of Letraset sheets containing Lorem Ipsum \
        passages, and more recently with desktop publishing software \
        like Aldus PageMaker including versions of Lorem Ipsum.",
    color: "blanchedalmond",
    meta: {
      time: "5:35 PM",
      date: "26/06/22",
      tags: ["chores"],
      category: "home",
      pinned: true,
    },
  },
  {
    id: uuid(),
    title: "This is title3",
    note: "Lorem Ipsum is <u>simply dummy text</u> of the printing and \
        typesetting industry. Lorem Ipsum has been the industry's \
        standard dummy text ever since the 1500s, when an unknown \
        printer took a galley of type and scrambled it to make a \
        type specimen book. It has survived not only five centuries \
        but also the leap into electronic typesetting, remaining \
        essentially unchanged. It was popularised in the 1960s \
        with the release of Letraset sheets containing Lorem Ipsum \
        passages, and more recently with desktop publishing software \
        like Aldus PageMaker including versions of Lorem Ipsum.",
    color: "#3DED97",
    meta: {
      time: "5:35 PM",
      date: "26/06/22",
      tags: ["shopping"],
      category: "home",
      pinned: true,
    },
  },
];
