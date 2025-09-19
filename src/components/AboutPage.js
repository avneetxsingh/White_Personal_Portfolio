import React, { useRef } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

// 👉 VariableProximity
import VariableProximity from '../subComponents/VariableProximity';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height:100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img{
    width: 100%;
    height: auto;
  }
`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 55vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Roboto Flex', sans-serif; /* must be a variable font */
  font-style: italic;
  overflow-y: auto;
`

const AboutPage = () => {
  const containerRef = useRef(null);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton />
        <ParticleComponent theme='dark' />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>    

        <Main ref={containerRef}>
          <div>
            {/* Paragraph 1 */}
            <VariableProximity
              label="Hey there! I’m a Computer Science student at the University of Toledo who’s endlessly curious about how technology can make life easier, smarter, and more fun."
              className="variable-proximity-demo"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
              style={{ display: "block", marginBottom: "2rem" }}
            />

            {/* Paragraph 2 */}
            <VariableProximity
              label="My journey into tech started with a simple fascination for how things work, which quickly turned into a passion for coding and problem-solving. For me, coding isn’t just about writing functions — it’s about solving problems that matter to people."
              className="variable-proximity-demo"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
              style={{ display: "block", marginBottom: "2rem" }}
            />

            {/* Paragraph 3 */}
            <VariableProximity
              label="Outside of projects, I love collaborating, sharing ideas, and learning from others. If you’re someone who’s passionate about tech, creativity, or just building cool things, we already have something in common — let’s connect!"
              className="variable-proximity-demo"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
              style={{ display: "block" }}
            />
          </div>
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  )
}

export default AboutPage