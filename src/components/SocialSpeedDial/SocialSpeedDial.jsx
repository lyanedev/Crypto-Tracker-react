import { Link, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import FaceIcon from "@mui/icons-material/Face";

const SocialSpeedDial = () => {
  const actions = [
    { icon: <GitHubIcon />, name: "/lyanedev", link: "#" },
    { icon: <LinkedInIcon />, name: "/lyanelamara", link: "#" },
    { icon: <MailOutlineIcon />, name: "hey@lyane.dev", link: "#" },
    { icon: <LanguageIcon />, name: "www.lyane.dev/", link: "#" },
  ];

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 30, right: 30 }}
        icon={<FaceIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default SocialSpeedDial;
