import React, { useState } from "react";
import Styles from "./Index.module.css";
import SuperAdminHeaderPage from "../../superAdminHeader/Index";
import SubscriptionIcon from "../../../../../assets/images/SubscriptionIcon.png";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Box, Input, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: "60vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  overflowY: "scroll",
};

export const InputStyled = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-color: rgb(166, 167, 172);
    color: rgb(13, 13, 14);
    height: 46px;
    font-size: 14px;

    & fieldset {
      border-color: rgb(166, 167, 172);
    }

    &:hover fieldset {
      border-color: rgb(166, 167, 172);
    }

    &.Mui-focused fieldset {
      border-color: rgb(166, 167, 172);
      border: 1px solid rgb(166, 167, 172);
    }

    &.Mui-active fieldset {
      border-color: rgb(166, 167, 172);
    }
  }
`;

export const SelectStyled = styled(Select)`
  & .MuiOutlinedInput-root {
    height: 44px;
    font-size: 14px;
    color: rgb(13, 13, 14);
    border-radius: 6px;
    transition: border-color 0.2s ease-in-out;

    & fieldset {
      border-color: rgb(166, 167, 172);
    }

    &:hover fieldset {
      border-color: rgb(166, 167, 172);
    }

    &.Mui-disabled fieldset {
      border-color: rgb(166, 167, 172);
    }
  }
`;


const SubscriptionDetails = () => {
  const theme = useTheme();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [role, setRole] = useState(10);

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className={Styles.SubscriptionDetailsMainContainer}>
      <SuperAdminHeaderPage />
      <div className={Styles.SubscriptionDetails}>
        <div className={Styles.SubscriptionDetailsPageNav}>
          <p className={Styles.SubscriptionDetailsPageNavText}>
            <img src={SubscriptionIcon} alt="SubscriptionIcon" />
            Subscription
          </p>
        </div>
        <div className={Styles.SubscriptionDetailsTitleCart}>
          <p className={Styles.SubscriptionDetailsTitleCartText}>Christin Stew</p>
          <button
            className={Styles.SubscriptionDetailsTitleCartButton}
            onClick={() => handleOpen()}
          >
            Add Subscription
          </button>
        </div>

        <div className={Styles.SubscriptionDetailsTabAndNotesContainer}>
          <div className={Styles.SubscriptionDetailsPageTabsContainer}>
            <Box sx={{ bgcolor: "background.paper" }}>
              <AppBar
                position="static"
                sx={{ bgcolor: "#fff", borderRadius: "10px" }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                  TabIndicatorProps={{
                    sx: {
                      backgroundColor: "#2f8cff",
                      height: "2px",
                      borderRadius: "2px",
                    },
                  }}
                >
                  <Tab
                    label={<p className={Styles.TabAddIconTExt}>Details</p>}
                    {...a11yProps(0)}
                    sx={{ maxWidth: "15% !important" }}
                  />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0} dir={theme.direction}>
                <div className={Styles.SubscriptionDetailsTabDetailsContainer}>
                  <div className={Styles.SubscriptionDetailsTabDetailsHeader}>
                    <p className={Styles.SubscriptionDetailsTabDetailsHeaderText}>
                      Subscription Info
                    </p>
                    <EditOutlinedIcon
                      className={Styles.SubscriptionDetailsTabDetailsHeaderEditIcon}
                      onClick={()=> handleOpenEdit()}
                    />
                  </div>
                  <div className={Styles.SubscriptionDetailsInformationContianer}>
                    <div className={Styles.SubscriptionDetailsInformationContent}>
                      <div
                        className={Styles.SubscriptionDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardText
                          }
                        >
                          Name
                        </p>
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardTextdata
                          }
                        >
                          Christin Stew
                        </p>
                      </div>
                      <div
                        className={Styles.SubscriptionDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardText
                          }
                        >
                          Subscription Plan
                        </p>
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardTextdata
                          }
                        >
                          Premium
                        </p>
                      </div>
                    </div>
                    <div className={Styles.SubscriptionDetailsInformationContent}>
                      <div
                        className={Styles.SubscriptionDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardText
                          }
                        >From
                        </p>
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardTextdata
                          }
                        >
                          02/27/2025
                        </p>
                      </div>
                      <div
                        className={Styles.SubscriptionDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardText
                          }
                        >
                          To
                        </p>
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardTextdata
                          }
                        >
                          08/27/2025
                        </p>
                      </div>
                    </div>
                    <div className={Styles.SubscriptionDetailsInformationContent}>
                      <div
                        className={Styles.SubscriptionDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardText
                          }
                        >
                          Payment Method
                        </p>
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardTextdata
                          }
                        >
                          Credit Card
                        </p>
                      </div>
                      <div
                        className={Styles.SubscriptionDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardText
                          }
                        >
                          Status
                        </p>
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardTextdata
                          }
                        >
                          Active
                        </p>
                      </div>
                    </div>
                    <div className={Styles.SubscriptionDetailsInformationContent}>
                      <div
                        className={Styles.SubscriptionDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardText
                          }
                        >
                          Amount Paid
                        </p>
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardTextdata
                          }
                        >
                          $489.00
                        </p>
                      </div>
                      <div
                        className={Styles.SubscriptionDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardText
                          }
                        >
                          Date Of Amount Paid
                        </p>
                        <p
                          className={
                            Styles.SubscriptionDetailsInformationDetailsCardTextdata
                          }
                        >
                          02/27/2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <div className={Styles.SubscriptionDetailsModelPopupContainer}>
            <div className={Styles.SubscriptionDetailsModelPopupHeader}>
              <p className={Styles.SubscriptionDetailsModelPopupHeaderText}>
                Add Subscription
              </p>
              <CloseOutlinedIcon
                onClick={() => handleClose()}
                className={Styles.SubscriptionDetailsModelPopupHeaderTextIcon}
              />
            </div>
            <div className={Styles.SubscriptionDetailsTitleContainer}>
              <p className={Styles.SubscriptionDetailsTitle}>Subscription Info</p>
            </div>
            <div className={Styles.SubscriptionDetailsInputContainer}>
              <div className={Styles.SubscriptionDetailsInputContent}>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>Producer</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Stew</MenuItem>
                    <MenuItem value={30}>Robbin</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>Subscription Plan</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Trial</MenuItem>
                    <MenuItem value={30}>Primium</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.SubscriptionDetailsInputContent}>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>From</p>

                  <InputStyled
                    id="outlined-basic"
                    type="date"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }} // Increased max length for multiline
                    name="firstname"
                   
                    // onChange={(e) =>
                    //   setCreateInvestor({
                    //     ...createInvestor,
                    //     firstname: e.target.value,
                    //   })
                    // }
                  />
                </div>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>To</p>

                  <InputStyled
                    id="outlined-basic"
                    type="date"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.SubscriptionDetailsInputContent}>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>Payment Method</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Online</MenuItem>
                    <MenuItem value={30}>Direct Payment</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>Status</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Acitve</MenuItem>
                    <MenuItem value={30}>Inactive</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.SubscriptionDetailsInputContent}>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>
                    Amount Paid
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>Date of Amount Paid</p>

                  <InputStyled
                    id="outlined-basic"
                    type="date"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
            </div>
            <div className={Styles.SubscriptionDetailsButtonContainer}>
              <button
                className={Styles.SubscriptionDetailsCancelButton}
                onClick={() => handleClose()}
              >
                Cancel
              </button>
              <button
                className={Styles.SubscriptionDetailsSubmitButton}
                onClick={() => handleClose()}
              >
                Save
              </button>
            </div>
          </div>
        </Box>
      </Modal>


      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <div className={Styles.SubscriptionDetailsModelPopupContainer}>
            <div className={Styles.SubscriptionDetailsModelPopupHeader}>
              <p className={Styles.SubscriptionDetailsModelPopupHeaderText}>
                Edit Subscription
              </p>
              <CloseOutlinedIcon
                onClick={() => handleCloseEdit()}
                className={Styles.SubscriptionDetailsModelPopupHeaderTextIcon}
              />
            </div>
            <div className={Styles.SubscriptionDetailsTitleContainer}>
              <p className={Styles.SubscriptionDetailsTitle}>Subscription Info</p>
            </div>
            <div className={Styles.SubscriptionDetailsInputContainer}>
              <div className={Styles.SubscriptionDetailsInputContent}>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>Producer</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Stew</MenuItem>
                    <MenuItem value={30}>Robbin</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>Subscription Plan</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Trial</MenuItem>
                    <MenuItem value={30}>Primium</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.SubscriptionDetailsInputContent}>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>From</p>

                  <InputStyled
                    id="outlined-basic"
                    type="date"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }} // Increased max length for multiline
                    name="firstname"
                   
                    // onChange={(e) =>
                    //   setCreateInvestor({
                    //     ...createInvestor,
                    //     firstname: e.target.value,
                    //   })
                    // }
                  />
                </div>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>To</p>

                  <InputStyled
                    id="outlined-basic"
                    type="date"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.SubscriptionDetailsInputContent}>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>Payment Method</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Online</MenuItem>
                    <MenuItem value={30}>Direct Payment</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>Status</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Acitve</MenuItem>
                    <MenuItem value={30}>Inactive</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.SubscriptionDetailsInputContent}>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>
                    Amount Paid
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.SubscriptionDetailsInputCart}>
                  <p className={Styles.SubscriptionDetailsInputCartText}>Date of Amount Paid</p>

                  <InputStyled
                    id="outlined-basic"
                     type="date"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
            </div>
            <div className={Styles.SubscriptionDetailsButtonContainer}>
              <button
                className={Styles.SubscriptionDetailsCancelButton}
                onClick={() => handleCloseEdit()}
              >
                Cancel
              </button>
              <button
                className={Styles.SubscriptionDetailsSubmitButton}
                onClick={() => handleCloseEdit()}
              >
                Save
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default SubscriptionDetails;
