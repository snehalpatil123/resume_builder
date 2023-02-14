import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
import Navbar from "../Components/MainBar/Navbar";
import aboutCV from "../Utils/Images/aboutCV.jpg"
import Instagram   from "@mui/icons-material/Instagram";

export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume-Builder</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px">
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify"
            }}>
            Resume@Builder is a free web application where you can build your resume instantly.
            Create a professional resume in minutes with ample of templates available.
            You can also upload profile avatar to the resumes. Once you have filled the resume  fields, you get 
            a preview and download option. Click downloadto have it to your local hard drive.
            You can update your resumes which you have created earlier and delete them too.
          </Typography>
          <Stack
          sx={{
            width: "30%",
            placeSelf:"center",
          }}>
            <img
              src={aboutCV}
              alt="img"
              // style={{width:"20%", height:"10%"}}
            />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}>
           Kindly Share in your circle
          </Typography>
          <Box className="icons">
            <Instagram
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="error"
            />
            <FacebookOutlinedIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
