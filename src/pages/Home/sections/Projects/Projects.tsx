import { Box, Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import FoodTechImg from "../../../../assets/images/FoodTech.png";

import ProjectCard, {
  type ProjectCardProps,
} from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
  }));

  const projects = [
    {
      title: "FoodTech",
      subtitle: "jul 2024 - Dez 2024",
      srcImg: FoodTechImg,
      description:
        "Our software is designed to handle orders both inside and outside the establishment. Within the software, customers can customize their orders (by adding or removing items as they wish) and send the information directly to the chef, including the table number, the customer's name, and the order with the desired ingredients. This way, the system helps with both the organization of the establishment and the efficiency of the ordering process.",
      technologies: "Technologies: Kotlin, RoomDb, SQlite",
    },
  ];
  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography
            variant="h2"
            textAlign={"center"}
            color="primary.contrastText"
          >
            Projects
          </Typography>
        </Box>
        <Grid container spacing={5} pb={3}>
          {projects.map((project: ProjectCardProps, index: number) => ( 
            <Grid size={{ md: 6 }} key={index}>
              <AnimationComponent
                moveDirection={index % 2 == 0 ? "right" : "left"}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  srcImg={project.srcImg}
                  technologies={project.technologies}
                />
              </AnimationComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
