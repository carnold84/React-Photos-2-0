import Image from './components/Image';

const IMAGE_BASE = 'https://res.cloudinary.com/carnold/image/upload';
const IMAGE_ID = 'v1622797875/react-photos';

export const createImages = (data, prefix) => {
  // loop through data and create an Image element for each one
  let items = data.map((item) => {
    let image_url = undefined;

    // check if photos exist
    if (item.photos !== undefined && item.photos.length > 0) {
      // store image url of first photo if it's album (has a photos attribute)
      image_url = `${IMAGE_BASE}/w_300/${IMAGE_ID}/${item.photos[0].url}`;
    } else if (item.url !== undefined) {
      // no photos attribute so it's a photo
      image_url = `${IMAGE_BASE}/w_300/${IMAGE_ID}/${item.url}`;
    }

    // create Image element
    return (
      <Image
        id={item.id}
        imageUrl={image_url}
        isAnimated={true}
        key={item.id}
        subTitle={item.location}
        title={item.title}
        to={`${process.env.PUBLIC_URL}/${prefix}/${item.id}`}
      />
    );
  });

  return items;
};
