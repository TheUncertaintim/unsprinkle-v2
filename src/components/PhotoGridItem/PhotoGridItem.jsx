import React from "react";
import styled from "styled-components";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const avifSrcSet =
    `${src.replace(".jpg", ".avif")} 1x,` +
    `${src.replace(".jpg", "@2x.avif")} 2x,` +
    `${src.replace(".jpg", "@3x.avif")} 3x`;
  const jpgSrcSet =
    `${src} 1x,` +
    `${src.replace(".jpg", "@2x.jpg")} 2x,` +
    `${src.replace(".jpg", "@3x.jpg")} 3x`;
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source srcSet={avifSrcSet} />
          <source srcSet={jpgSrcSet} />
          <Image alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  white-space: nowrap;
`;

const Tag = styled.li`
  display: inline;
  margin: 0 0.2em;

  overflow: hidden;
  text-overflow: ellipsis;

  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  &:first-of-type {
    margin-left: 0;
  }
`;

export default PhotoGridItem;
