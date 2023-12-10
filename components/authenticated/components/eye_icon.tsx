import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


export function EnableIcon(props: any) {
  let status = props.status;
  
  return status ? <VisibilityIcon /> : <VisibilityOffIcon />;
}
