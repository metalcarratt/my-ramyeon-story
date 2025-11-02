export const ImgElem = ({path}: {path: string}) => {
  const imgSrc = `${import.meta.env.BASE_URL}${path}`;

  return (
    <img className="imgElem" src={imgSrc}/>
  );
}