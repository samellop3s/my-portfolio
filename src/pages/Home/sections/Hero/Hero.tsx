import  {styled}  from "@mui/material";
import Avatar from "../../../../assets/images/profile.jpeg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
  // Example of a styled component
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: { //<= mobile
        paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: { // >=mobile
        PaddingTop: "0px",
    },
  }));

  const StyledImg = styled("img")(( {theme} ) => ({
    width: "80%",
    borderRadius: "50%",
    border: '1px solid' + theme.palette.primary.contrastText
  }));

  // Using the styled component
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }} display={"flex"} alignItems={"center"} justifyContent="center">
              <StyledImg src={Avatar} />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                Samuel F. Lopes
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">
                I'm a Mobile and software developer
              </Typography>
              <Grid container display={"flex"} justifyContent="center" pt={6} spacing={3}>
                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent="center">
                  <StyledButton onClick ={() => console.log("Download CV")}>
                    <DownloadIcon />
                    <Typography>
                        Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent="center">
                  <StyledButton onClick ={() => console.log("contact me")}>
                    <EmailIcon />
                    <Typography>
                    Contact me
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
