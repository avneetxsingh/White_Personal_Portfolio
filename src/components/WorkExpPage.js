import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { lightTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';

import subway from '../assets/company/subway.png';
import ut from '../assets/company/ut.png';
import softage from '../assets/company/softage.png';
import kpit from '../assets/company/kpit.png';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 99vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

const ExperienceContainer = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
`;

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 1rem;
  width: 100%;
  margin: 0rem 0;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.3s ease;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`;

const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: 1rem;
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  ul, p {
    margin-left: 1rem;
  }
`;

const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: lightTheme.body,
          color: lightTheme.text,
          border: `2px solid ${lightTheme.text}`,
          transition: 'all 0.3s ease',
          fontFamily: 'Ubuntu Mono, monospace'
        }}
        contentArrowStyle={{ borderRight: `7px solid ${lightTheme.text}` }}
        location={experience.location}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <img
              src={experience.icon}
              alt={experience.company_name}
              style={{ width: '60%', height: '60%', objectFit: 'contain' }}
            />
          </div>
        }
      >
        <Main>
          <Title>{experience.title}</Title>
          <Description>
            <strong style={{ display: 'flex', justifyContent: 'center' }}>{experience.company_name}</strong>
            <p style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ fontWeight: 'bold' }}>{experience.location}</span>
              {/* <span style={{ fontWeight: 'bold' }}>{experience.date}</span> */}
            </p>
          </Description>
          <Description>
            <ul>
              {experience.points.map((point, index) => (
                <li key={`experience-point-${index}`}>{point}</li>
              ))}
            </ul>
          </Description>
        </Main>
      </VerticalTimelineElement>
    );
  };  

const experiences = [
  
{
    title: "IT Support Specialist (Level 2)",
    company_name: "The University of Toledo College of Engineering",
    icon: ut,
    iconBg: "rgba(0, 0, 0, 0.15)",
    location: "Toledo, OH",
    date: "October 2023 – Present",
    points: [
      "Delivered IT support to 500+ users by installing, configuring, and maintaining desktops, laptops, and peripherals across the engineering department.",
      "Optimized Windows/Linux environments through security patching, automation, and performance monitoring, ensuring secure and reliable operations.",
	    "Implemented proactive system monitoring and troubleshooting that reduced downtime by 30% and improved service reliability.",
	    "Collaborated with cross-functional teams to deploy applications, manage Active Directory, ensuring compliance with cybersecurity, and licensing agreements.",
    ],
},

{
  title: " Software Engineer Intern",
  company_name: "KPIT Technologies Limited",  
  icon: kpit,
  iconBg: "rgba(0, 0, 0, 0.50)",
  location: "Novi, MI",
  date: "June 2025 – August 2025",
  points: [
    "Engineered Python-based communication interfaces for DUT systems, enabling real-time power mode control and system health monitoring.",
	  "Designed and extended a scalable middleware library, adding argument parsing, error handling, and modular structures to support flexible system integration.",
	  "Enhanced system reliability by implementing robust exception handling and validation mechanisms across middleware components.",
	  "Streamlined development workflows through effective use of Git for version control, branching strategies, and collaborative task management.",
	  "Contributed to cross-functional projects, ensuring seamless integration between hardware control systems, middleware, and testing frameworks.",
  ]
},

{
  title: " Software Developer Intern",
  company_name: "KPIT Technologies Limited",  
  icon: kpit,
  iconBg: "rgba(0, 0, 0, 0.50)",
  location: "Novi, MI",
  date: "June 2024 – August 2024",
  points: [
    "Developed automated Python tools (Pandas, PyQt5) to generate middleware configuration reports, cutting manual ECU state tracking efforts by 70%.",
	  "Implemented and validated data integration workflows for ECU activation/deactivation logic, boosting diagnostic accuracy and compliance with OEM middleware standards.",
	  "Optimized ECU monitoring processes by automating repetitive reporting tasks, reducing error rates and improving consistency across test environments.",
	  "Enhanced system reliability through rigorous validation of middleware configuration data, ensuring robust communication between components.",
	  "Delivered cross-functional support by aligning automation solutions with engineering and diagnostic teams, improving overall workflow efficiency.",
  ]
  },

{
  title: "Web Developer Intern",
  company_name: "Softage Information Technology Limited",
  icon: softage,
  iconBg: "rgba(0, 0, 0, 0.15)",
  location: "Gurugram, India",
  date: "June 2023 – July 2023",
  points: [
      "Developed and maintained web applications using HTML, CSS, JavaScript, and related technologies, ensuring robust functionality and scalability.",
	    "Implemented responsive design principles and ensured cross-browser compatibility, improving user accessibility and experience across devices.",
	    "Collaborated with cross-functional engineering teams, driving a 30% reduction in system downtime and boosting overall productivity.",
	    "Participated in peer code reviews, delivering constructive feedback that enhanced code quality, maintainability, and team learning.",
	    "Contributed to continuous improvement initiatives, streamlining workflows and supporting the deployment of reliable, user-friendly applications.",
  ],
},

{
  title: "Student Manager",
  company_name: "Chartwells Higher Education Services",
  icon: subway,
  iconBg: "rgba(0, 0, 0, 0.15)",
  location: "Toledo, OH",
  date: "September 2022 – September 2023",
  points: [
    "Delivered exceptional customer service with in-depth product/menu knowledge, maintaining a consistent 4/5 satisfaction rating.",
	  "Accelerated onboarding efficiency by providing structured training, reducing new team member ramp-up time by 50%.",
	  "Fostered a collaborative, customer-first team culture, improving service quality and team performance.",
	  "Balanced leadership and frontline responsibilities, ensuring smooth daily operations while directly engaging with customers.",
	  "Enhanced team productivity by streamlining workflows, improving service speed, and reducing customer wait times.",
  ],
},
];

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent theme='light' />

        <ExperienceContainer>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </ExperienceContainer>

        <BigTitle text="EXPERIENCE" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
