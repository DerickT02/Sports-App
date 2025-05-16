import React from 'react';
import styled from 'styled-components';

/* ---------- Styled Components ---------- */
const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--color-text);
  font-family: 'Lato', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
`;

const Content = styled.div`
  margin-top: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-primary);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
`;

const ResourceHeading = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const ResourceText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

/* ---------- Main Component ---------- */
const Resources: React.FC = () => {
  return (
    <>
      <Page>
        <Title>Resources</Title>
        <Content>
          {/* Section for Athletes */}
          <Section>
            <Subtitle>For Athletes:</Subtitle>
            <List>
              <ListItem>
                <ResourceHeading>Financial Literacy</ResourceHeading>
                <ResourceText>Workshops on managing NIL earnings.</ResourceText>
              </ListItem>
              <ListItem>
                <ResourceHeading>Brand Building</ResourceHeading>
                <ResourceText>Tools and tips for crafting your personal brand.</ResourceText>
              </ListItem>
              <ListItem>
                <ResourceHeading>Contract Review</ResourceHeading>
                <ResourceText>Guidance on understanding and negotiating contracts.</ResourceText>
              </ListItem>
            </List>
          </Section>

          {/* Section for Sponsors */}
          <Section>
            <Subtitle>For Sponsors:</Subtitle>
            <List>
              <ListItem>
                <ResourceHeading>Brand Athlete Partnerships</ResourceHeading>
                <ResourceText>Connect with athletes who align with your brand's values.</ResourceText>
              </ListItem>
              <ListItem>
                <ResourceHeading>Marketing Campaigns</ResourceHeading>
                <ResourceText>Support in creating engaging campaigns that resonate with audiences.</ResourceText>
              </ListItem>
              <ListItem>
                <ResourceHeading>Campaign Metrics</ResourceHeading>
                <ResourceText>Track the impact and success of your collaborations with athletes.</ResourceText>
              </ListItem>
            </List>
          </Section>
        </Content>
      </Page>
    </>
  );
};

export default Resources;