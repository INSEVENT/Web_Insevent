import img1 from "../assets/logo.png";
import moment from 'moment';

function getCurrentTime() {
  return moment().format('DD MMM YYYY');
};

const cardData = [
  {
    imgSrc: img1,
    title: "Competition",
    time: getCurrentTime(),
    description: `INSEVENT mempersembahkan berbagai lomba kreatif yang menarik. Dalam kesempatan ini, 
    INSEVENT akan menyajikan rangkaian kompetisi yang beragam, menantang, dan memberikan kesempatan bagi peserta untuk mengekspresikan bakat serta kreativitasnya 
    dalam berbagai bidang.
    Selain memberikan kesempatan bagi para peserta untuk mengekspresikan bakat dan kreativitasnya, 
    INSEVENT juga bertekad untuk menghadirkan pengalaman kompetisi yang mengesankan. `,
    readMore: "/competition",
    comp1: `Poster`,
    comp2: `UI/UX`,
    comp3: `E-Sport (Mobile Legend)`,
    comp4: `Dance`,
    comp5: `Band`,
    comp6: `Video Kreatif`,
  },

  {
    imgSrc: img1,
    title: "Talkshow",
    time: getCurrentTime(),
    description:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
    readMore: "/talkshow",
    paragraf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
  },

  {
    imgSrc: img1,
    title: "Pameran",
    time: getCurrentTime(),
    description:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
    readMore: "/pameran",
    paragraf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
  },

  {
    imgSrc: img1,
    title: "Bazar",
    time: getCurrentTime(),
    description:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
    readMore: "/bazar",
    paragraf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
  },
  {
    imgSrc: img1,
    title: "Charity",
    time: getCurrentTime(),
    description:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
    readMore: "/bazar",
    paragraf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
  },
  
];

export default cardData;
