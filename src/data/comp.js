import img1 from "../assets/img/logo.png";
import poster from "../assets/img/Lomba/poster.jpg"
import uiux from "../assets/img/Lomba/uiux.jpg"
import dance from "../assets/img/Lomba/dance.jpg"
import esport from "../assets/img/Lomba/esport.jpg"
import akustik from "../assets/img/Lomba/akustik.jpg"
import tari from "../assets/img/Lomba/tari.jpg"
import vidkref from "../assets/img/Lomba/vidkref.jpg"
import moment from 'moment';

function getCurrentTime() {
  return moment().format('DD MMM YYYY');
};

const compdata = [
  {
    imgSrc: poster,
    category: "Nasional",
    lokasi:'Online',
    title: "Poster",
    time: "21 September - 7 Oktober 2023",
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
    info :{
      detail : ['Pendaftaran','Pelaksanaan Lomba','Pengumpulan Karya','Penilaian Karya','Pengumuman Pemenang'],
      agenda :['1 - 20 September 2023', '21 September - 7 Oktober 2023', '8 - 10 Oktober 2023', '11 Oktober - 9 November 2023', '11 November 2023'],
    },
    biaya:'Rp. 30.000/Tim',
    juara :{
      j1:'Juara 1 : Uang Pembinaan + Sertifikat',
      j2:'Juara 2 : Uang Pembinaan + Sertifikat',
      j3:'Juara 3 : Uang Pembinaan + Sertifikat',
      jfav:'Juara Favorit : Sertifikat',
    },
    link :{
      lomba: 'https://bit.ly/LombaNasionalINSEVENT2023',
      guidebook :'https://bit.ly/POSTER_INSEVENT2023'
    }
  },
  {
    imgSrc: vidkref,
    category: "Nasional",
    lokasi:'Online',
    title: "Video Kreatif",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
    info :{
      detail : ['Pendaftaran','Pelaksanaan dan Pengumpulan','Posting Karya','Penilaian Karya','Pengumuman Pemenang'],
      agenda :['1 - 20 September 2023', '21 September - 20 Oktober 2023', '21 - 24 Oktober 2023', '25 Oktober - 8 November 2023', '11 November 2023'],
    },
    biaya:'',
    juara :{
      j1:'Juara 1 :Uang Pembinaan + Sertifikat',
      j2:'Juara 2 : Uang Pembinaan + Sertifikat',
      j3:'Juara 3 : Uang Pembinaan + Sertifikat',
      jfav:'Juara Favorit : Sertifikat',
    },
    link :{
      lomba: 'https://bit.ly/LombaNasionalINSEVENT2023',
      guidebook :'https://bit.ly/VIDKREF_INSEVENT2023'
    }
  },
  {
    imgSrc: uiux,
    category: "Nasional",
    lokasi:'Online',
    title: "UI UX",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
    info :{
      detail : ['Pendaftaran','Pengumpulan Karya','Pengumuman Peserta Final','Technical Meeting Final','Presentasi Peserta Final', "Pengumuman Pemenang"],
      agenda :['1 - 20 September 2023', '21 September - 15 Oktober 2023', '25 Oktober 2023', '26 Oktober 2023', '4 - 5 November 2023','11 November 2023'],
    },
    biaya:'',
    juara :{
      j1:'Juara 1 :Uang Pembinaan + Sertifikat',
      j2:'Juara 2 : Uang Pembinaan + Sertifikat',
      j3:'Juara 3 : Uang Pembinaan + Sertifikat',
      jfav:'Juara Favorit : Sertifikat',
    },
    link :{
      lomba: 'https://bit.ly/LombaNasionalINSEVENT2023',
      guidebook :'https://bit.ly/UIUX_INSEVENT2023'
    }
  },
  {
    imgSrc: esport,
    category: "Regional",
    lokasi:'Soon',
    title: "Mobile Legends",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
    info :{
      detail : ['Pendaftaran','Technical Meeting','64 Besar','32 Besar','16 dan 8 Besar','Semi Final','Bronze dan Final', 'Penyerahan Simbolis'],
      agenda :['23 September - 20 Oktober 2023', '30 Oktober 2023', '1 November 2023', '2 November 2023', '3 November 2023','4 November 2023','5 November 2023','11 November 2023'],
    },
    biaya:'',
    juara :{
      j1:'Juara 1 : Uang Pembinaan + Sertifikat',
      j2:'Juara 2 : Uang Pembinaan + Sertifikat',
      j3:'Juara 3 : Uang Pembinaan + Sertifikat',
      MvP:'MVP : Sertifikat',
    },
    link :{
      lomba: 'https://bit.ly/LombaNasionalINSEVENT2023',
      guidebook :'https://bit.ly/ESPORT_INSEVENT2023'
    }
  },
  {
    imgSrc: dance,
    category: "Regional",
    lokasi:'Soon',
    title: "Modern Dance",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
    info :{
      detail : ['Pendaftaran','Technical Meeting','Pelaksanaan Lomba','Pengumuman Pemenang'],
      agenda :['23 September - 6 Oktober 2023', '7 November 2023', '10 November 2023', '10 November 2023'],
    },
    biaya:'',
    juara :{
      j1:'Juara 1 :Uang Pembinaan + Sertifikat',
      j2:'Juara 2 : Uang Pembinaan + Sertifikat',
      j3:'Juara 3 : Uang Pembinaan + Sertifikat',
      jfav:'Juara Favorit : Sertifikat',
    },
    link :{
      lomba: 'https://bit.ly/LombaNasionalINSEVENT2023',
      guidebook :'https://bit.ly/MODERNDANCE_INSEVENT2023'
    }
  },
  {
    imgSrc: tari,
    category: "Regional",
    lokasi:'Soon',
    title: "Tari Tradisional",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
    info :{
      detail : ['Pendaftaran','Technical Meeting','Pelaksanaan Lomba','Pengumuman Pemenang','Perform Offline Pemenang'],
      agenda :['23 September - 6 Oktober 2023', '7 November 2023', '10 November 2023', '10 November 2023','11 November 2023'],
    },
    biaya:'',
    juara :{
      j1:'Juara 1 :Uang Pembinaan + Sertifikat',
      j2:'Juara 2 : Uang Pembinaan + Sertifikat',
      j3:'Juara 3 : Uang Pembinaan + Sertifikat',
      jfav:'Juara Favorit : Sertifikat',
    },
    link :{
      lomba: 'https://bit.ly/LombaNasionalINSEVENT2023',
      guidebook :'https://bit.ly/TARITRADISIONAL_INSEVENT2023'
    }
  },
  {
    imgSrc: akustik,
    category: "Regional",
    lokasi:'Soon',
    title: "Akustik",
    time: getCurrentTime(),
    description: `ini deskripsi lombanya`,
    readMore: "/competition",
    paragraf1: `ini deskripsi lombanya`,
    info :{
      detail : ['Pendaftaran', 'Pengumpulan video','Pengumuman Pemenang', 'Penyerahan Simbolis dan Perform'],
      agenda :['23 September - 6 Oktober 2023', '10 Oktober - 2 November 2023', '8 November 2023','11 November 2023'],
    },
    biaya:'',
    juara :{
      j1:'Juara 1 :Uang Pembinaan + Sertifikat',
      j2:'Juara 2 : Uang Pembinaan + Sertifikat',
      j3:'Juara 3 : Uang Pembinaan + Sertifikat',
      jfav:'Juara Favorit : Sertifikat',
    },
    link :{
      lomba: 'https://bit.ly/LombaNasionalINSEVENT2023',
      guidebook :'https://bit.ly/AKUSTIK_INSEVENT2023'
    }
  },
];

export default compdata;
