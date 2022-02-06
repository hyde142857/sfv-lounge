import { Typography, Link } from "@mui/material";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://twitter.com/hyde142857">
        Hyde
      </Link>{' 2021-'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}