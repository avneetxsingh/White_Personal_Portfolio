import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 22rem;
  padding: 1.2rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;
  background: ${(props) => props.theme.body};

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 45%;
  background-size: cover;
  border-radius: 8px;
  background-position: center center;
  margin-bottom: 1rem;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;
const Title = styled.h3`
  color: inherit;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;
const Divider = styled.hr`
  border: none;
  border-top: 1.5px solid ${(props) => props.theme.text};
  margin: 0.5rem 0 1rem 0;
`;
const Date = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.7rem;
  display: block;
`;
const HashTags = styled.div`
  margin-bottom: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const Tag = styled.span`
  background: ${(props) => props.theme.text}22;
  color: inherit;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.9rem;
`;
const DescList = styled.ul`
  font-size: 0.95rem;
  margin: 0.7rem 0 0 0;
  padding-left: 1.2rem;
  line-height: 1.5;
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const ProjectsComponent = (props) => {
  const { name, tags, date, desc, imgSrc, link } = props.project;
  const descPoints = typeof desc === "string" ? desc.split("|").slice(0, 2) : [];

  return (
    <Container variants={Item}>
      <Box target="_blank" href={`${link}`}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <Divider />
        <Date>{date}</Date>
        <HashTags>
          {tags.map((t, id) => (
            <Tag key={id}>#{t}</Tag>
          ))}
        </HashTags>
        <DescList>
          {descPoints.map((point, idx) => (
            <li key={idx}>{point.trim()}</li>
          ))}
        </DescList>
      </Box>
    </Container>
  );
};

export default ProjectsComponent;
