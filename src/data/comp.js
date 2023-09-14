import img1 from "../assets/logo.png";
import moment from 'moment';

function getCurrentTime() {
  return moment().format('DD MMM YYYY');
};

const compdata = [
  {
    imgSrc: img1,
    category: "Nasional",
    title: "Poster",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
  },
  {
    imgSrc: img1,
    category: "Nasional",
    title: "Video Kreatif",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
  },
  {
    imgSrc: img1,
    category: "Nasional",
    title: "UI UX",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
  },
  {
    imgSrc: img1,
    category: "Regional",
    title: "Mobile Legends",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
  },
  {
    imgSrc: img1,
    category: "Regional",
    title: "Modern Dance",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
  },
  {
    imgSrc: img1,
    category: "Regional",
    title: "Tari Tradisional",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
  },
  {
    imgSrc: img1,
    category: "Regional",
    title: "Akustik",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
  },
];

export default compdata;
