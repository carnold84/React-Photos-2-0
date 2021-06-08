import Image from './components/Image';

export const createImages = (data, prefix) => {
  // loop through data and create an Image element for each one
  let items = data.map((item) => {
    let height = undefined;
    let imageUrl = undefined;
    let width = undefined;

    // check if photos exist
    if (item.photos !== undefined && item.photos.length > 0) {
      // store image url of first photo if it's album (has a photos attribute)
      imageUrl = item.photos[0].thumbUrl;
      height = item.photos[0].height;
      width = item.photos[0].width;
    } else if (item.url !== undefined) {
      // no photos attribute so it's a photo
      imageUrl = item.thumbUrl;
      height = item.height;
      width = item.width;
    }

    // create Image element
    return (
      <Image
        alt={item.title}
        height={height}
        id={item.id}
        imageUrl={imageUrl}
        key={item.id}
        subTitle={item.location}
        title={item.title}
        to={`${process.env.PUBLIC_URL}/${prefix}/${item.id}`}
        width={width}
      />
    );
  });

  return items;
};
