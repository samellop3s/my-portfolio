import { Box, Card, Container, styled, Typography } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import Grid from "@mui/material/Grid";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const About: React.FC = () => {
  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));
  const skillsSet = [
    "JavaScript",
    "TypeScript",
    "React",
    "ReactNative",
    "Kotlin",
    "Git",
    "SQLoracle",
    "HTML",
    "CSS",
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box id="about" pt={5} mb={3}>
          <Typography variant="h2" textAlign="center">
            About me
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
          display="flex"
          justifyContent="center"
          pb={3}
        >
          <AnimationComponent moveDirection="right">
            <StyledCard variant="outlined">
              <WorkspacePremiumIcon />
              <Typography textAlign="center" fontWeight={600}>
                Experience
              </Typography>
              <Typography textAlign="center">1+ years</Typography>
              <Typography textAlign="center">callcenter</Typography>
            </StyledCard>
          </AnimationComponent>
          <AnimationComponent moveDirection="right">
            <StyledCard variant="outlined">
              <WorkspacePremiumIcon />
              <Typography textAlign="center" fontWeight={600}>
                Experience
              </Typography>
              <Typography textAlign="center">8+ months</Typography>
              <Typography textAlign="center">anti-fraud</Typography>
            </StyledCard>
          </AnimationComponent>
          <AnimationComponent moveDirection="left">
            <StyledCard variant="outlined">
              <SchoolIcon />
              <Typography textAlign="center" fontWeight={600}>
                Education
              </Typography>
              <Typography textAlign="center">Ads technologist</Typography>
              <Typography textAlign="center">Electronics technician</Typography>
            </StyledCard>
          </AnimationComponent>
        </Grid>
        <Box pb={1}>
          <Typography>
            Driven from an early age by a curiosity to understand how things
            work, I began my journey in technology by exploring code and small
            personal projects. Over time, this curiosity turned into dedication:
            I immersed myself in programming studies, developing skills in
            modern languages, frameworks, and market tools. My journey is marked
            by challenges I've overcome—from academic projects to complete
            applications—that have strengthened my knowledge of software,
            mobile, and web development. Today, I continue to evolve daily,
            striving to combine technique and creativity to build efficient and
            innovative solutions.
          </Typography>
        </Box>
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>
            Skills
          </Typography>
        </Box>
        <Box mb={5}>
          <Grid container spacing={3} justifyContent="center">
            {skillsSet.map((skill) => (
              <StyledCard variant="outlined">{skill}</StyledCard>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;
