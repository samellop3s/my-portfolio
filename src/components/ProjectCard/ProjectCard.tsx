import { Typography, styled} from "@mui/material";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    description: string;
    srcImg: string;
    technologies: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
    title, 
    subtitle, 
    description, 
    srcImg, 
    technologies 
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: { // >=mobile
            height: "45vh",
        },
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: '0.5px solid' + theme.palette.primary.contrastText,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "10px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }));
    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} />
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
        </StyledCard>
    )
}

export default ProjectCard;