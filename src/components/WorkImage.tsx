import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const isExternalLink = Boolean(props.link && !props.link.startsWith("/"));
  const img = <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />;
  const arrow = (
    <div className="work-link">
      <MdArrowOutward />
    </div>
  );

  return (
    <div className="work-image">
      {props.link ? (
        isExternalLink ? (
          <a
            className="work-image-in"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor={"disable"}
          >
            {arrow}
            {img}
          </a>
        ) : (
          <Link className="work-image-in" href={props.link} data-cursor={"disable"}>
            {arrow}
            {img}
          </Link>
        )
      ) : (
        <div className="work-image-in" data-cursor={"disable"}>
          {img}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
