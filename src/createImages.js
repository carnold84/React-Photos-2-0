import Image from './components/Image';

export const createImages = (data, prefix) => {
  // loop through data and create an Image element for each one
  let items = data.map((item) => {
    let image_url = undefined;

    // check if photos exist
    if (item.photos !== undefined && item.photos.length > 0) {
      // store image url of first photo if it's album (has a photos attribute)
      image_url = item.photos[0].url;
    } else if (item.url !== undefined) {
      // no photos attribute so it's a photo
      image_url = item.url;
    }

    // create Image element
    return (
      <Image
        id={item.id}
        imageUrl={image_url}
        isAnimated={false}
        key={item.id}
        title={item.title}
        to={`${process.env.PUBLIC_URL}/${prefix}/${item.id}`}
      />
    );
  });

  return items;
};
