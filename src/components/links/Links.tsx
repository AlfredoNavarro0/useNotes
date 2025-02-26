interface LinkProps {
  title: string;
  link?: string;
}

interface ImageProps {
  src: string;
  alt: string;
  link?: string;
}

type LinksProps =
  | ({ tieneImagen: true } & ImageProps)
  | ({ tieneImagen: false } & LinkProps);

const ImageTrue = ({ link, src, alt }: ImageProps) => (
  <li>
    <a href={link}>
      <img src={src} alt={alt} />
    </a>
  </li>
);

const ImageFalse = ({ link, title }: LinkProps) => (
  <li>
    <a href={link}>{title}</a>
  </li>
);

const Links = (props: LinksProps) => {
  if (props.tieneImagen) {
    return <ImageTrue {...props} />;
  } else {
    return <ImageFalse {...props} />;
  }
};

export default Links;