import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { testimonials } from "./data";

const ScrollingTestimonials = () => {
  return (
    <Container>
      <Section>
        <Title>Testimonials</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </Subtitle>
      </Section>

      <TestimonialWrapper>
        <GradientLeft />

        <FlexContainer>
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
        </FlexContainer>

        <FlexContainer>
          <TestimonialList list={testimonials.middle} duration={75} />
          <TestimonialList list={testimonials.middle} duration={75} />
          <TestimonialList list={testimonials.middle} duration={75} />
        </FlexContainer>

        <FlexContainer>
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
        </FlexContainer>

        <GradientRight />
      </TestimonialWrapper>
    </Container>
  );
};

const TestimonialList = ({ list, duration = 5, reverse = false }) => {
  return (
    <TestimonialListContainer
      initial={{ translateX: reverse ? "100%" : "-100%" }}
      animate={{ translateX: reverse ? "-100%" : "100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {list.map((testimonial) => (
        <TestimonialCard key={testimonial.id}>
          <TestimonialImage src={testimonial.img} />
          <TestimonialContent>
            <TestimonialName>{testimonial.name}</TestimonialName>
            <TestimonialTitle>{testimonial.title}</TestimonialTitle>
            <TestimonialInfo>{testimonial.info}</TestimonialInfo>
          </TestimonialContent>
          <QuotationMark>"</QuotationMark>
        </TestimonialCard>
      ))}
    </TestimonialListContainer>
  );
};

const TestimonialListContainer = styled(motion.div)`
  display: flex;
  gap: 16px;
  padding: 0 8px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  background-color: #020617;
  padding: 3rem 0;
  font-family: "Poppins", sans-serif;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

const Title = styled.h3`
  color: #e5e7eb;
  font-size: 2.25rem;
  font-weight: 600;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #d1d5db;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
  max-width: 24rem;
  margin: 8px auto;
`;

const TestimonialWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  padding: 1rem;
`;

const GradientLeft = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 6rem;
  background: linear-gradient(to right, #1f2937, transparent);
  z-index: 10;
`;

const GradientRight = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 6rem;
  background: linear-gradient(to left, #1f2937, transparent);
  z-index: 10;
`;

const TestimonialCard = styled.div`
  display: grid;
  grid-template-columns: 7rem 1fr;
  width: 500px;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 11rem;
  object-fit: cover;
`;

const TestimonialContent = styled.div`
  background-color: #1f2937;
  color: #e5e7eb;
  padding: 1rem;
`;

const TestimonialName = styled.span`
  display: block;
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
`;

const TestimonialTitle = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const TestimonialInfo = styled.span`
  display: block;
  font-size: 0.875rem;
  color: #9ca3af;
`;

const QuotationMark = styled.span`
  font-size: 3rem;
  position: absolute;
  top: 2px;
  right: 2px;
  color: #4b5563;
`;

export default ScrollingTestimonials;
