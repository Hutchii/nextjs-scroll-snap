import Image from "next/future/image";

export default function Slide({ data }) {
  return (
    <div className="box">
      <Image
        src={`/images/image-${data.id + 1}.jpg`}
        alt="Tennis"
        width={600}
        height={700}
        quality={80}
        priority
      />
      <h1>{data.title}</h1>
      <p className="quote">{data.quote}</p>
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="author"
      >
        author &#8594;
      </a>
    </div>
  );
}
