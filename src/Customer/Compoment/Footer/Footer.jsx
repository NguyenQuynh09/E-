import React from "react";
import { Grid, Typography } from "@mui/material";
import { Button } from "@headlessui/react";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Công ty{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              chúng tôi{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Facebook{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Instagram{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Cộng đồng{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              chúng tôi{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Facebook{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Instagram{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Thông tin liên hệ   {" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              chúng tôi{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Facebook{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Instagram{" "}
            </Button>
          </div>
        </Grid>
        <Grid className='pt-20' item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 E-store. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            D/C: 828 Sư Vạn Hạnh.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icon made by {' '}
            <Link href="https://www.facebook.com/quynhduunaruto" color="inherit" underline="always">
            Freepik
            </Link>{' '}
            from{' '}
            <Link href="https://github.com/NguyenQuynh09"  color="inherit" underline="always">
            www.github.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
