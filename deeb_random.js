//Pulls Images
const image_array = [
  "dog1.JPG",
  "dog2.JPG",
  "dog3.JPG",
  "dog4.JPG",
];

const randomImage = () => {
    random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
    selected_image = image_array[random_index];

  // Display the image
  document.getElementById('image_shower').src = `imgs/${selected_image}`
};
