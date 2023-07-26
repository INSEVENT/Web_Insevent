import img1 from "../assets/logo.png";
import moment from 'moment';

function getCurrentTime() {
  return moment().format('DD MMM YYYY');
};

const cardData = [
  {
    imgSrc: img1,
    category: "Category",
    title: "Competition",
    time: getCurrentTime(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
    readMore: "/competition",
    paragraf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
  },

  {
    imgSrc: img1,
    category: "Category",
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
    category: "Category",
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
    category: "Category",
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
];

export default cardData;
