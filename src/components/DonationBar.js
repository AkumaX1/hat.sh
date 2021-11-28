import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { useState, useEffect } from "react";
import { Alert } from "@material-ui/lab";
import { getTranslations as t } from "../../locales";

export default function DonationBar() {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    handleOpen();
  };

  const handleOpen = () => {
    setTimeout(function () {
      setOpen(true);
    }, 60000);
  };

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
      >
        <Alert
          severity="info"
          action={
            <Button
              color="inherit"
              size="small"
              href="https://github.com/sh-dv/hat.sh/#donations"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <g>
                    <rect fill="#427aa6" height="11" width="4" x="1" y="11" />
                    <path
                      fill="#427aa6"
                      d="M16,3.25C16.65,2.49,17.66,2,18.7,2C20.55,2,22,3.45,22,5.3c0,2.27-2.91,4.9-6,7.7c-3.09-2.81-6-5.44-6-7.7 C10,3.45,11.45,2,13.3,2C14.34,2,15.35,2.49,16,3.25z"
                    />
                    <path
                      fill="#427aa6"
                      d="M20,17h-7l-2.09-0.73l0.33-0.94L13,16h2.82c0.65,0,1.18-0.53,1.18-1.18v0c0-0.49-0.31-0.93-0.77-1.11L8.97,11H7v9.02 L14,22l8.01-3v0C22,17.9,21.11,17,20,17z"
                    />
                  </g>
                </g>
              </svg>
            </Button>
          }
        >
          {t("donation_message")}
        </Alert>
      </Snackbar>
    </div>
  );
}