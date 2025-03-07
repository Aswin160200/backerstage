import React, { useState } from "react";
import Styles from "./Index.module.css";
import SuperAdminHeaderPage from "../../superAdminHeader/Index";
import ProducersImageAdminView from "../../../../../assets/images/ProducersImageAdminView.png";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Box, TextField } from "@mui/material";
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
const ProducerDetails = () => {
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
    <div className={Styles.ProducerDetailsMainContainer}>
      <SuperAdminHeaderPage />
      <div className={Styles.ProducerDetails}>
        <div className={Styles.ProducerDetailsPageNav}>
          <p className={Styles.ProducerDetailsPageNavText}>
            <img src={ProducersImageAdminView} alt="ProducersImageAdminView" />
            Producers
          </p>
        </div>
        <div className={Styles.ProducerDetailsTitleCart}>
          <p className={Styles.ProducerDetailsTitleCartText}>Christin Stew</p>
          <button
            className={Styles.ProducerDetailsTitleCartButton}
            onClick={() => handleOpen()}
          >
            Add Producer
          </button>
        </div>

        <div className={Styles.ProducerDetailsTabAndNotesContainer}>
          <div className={Styles.ProducerDetailsPageTabsContainer}>
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
                <div className={Styles.ProducerDetailsTabDetailsContainer}>
                  <div className={Styles.ProducerDetailsTabDetailsHeader}>
                    <p className={Styles.ProducerDetailsTabDetailsHeaderText}>
                      Login Info
                    </p>
                    <EditOutlinedIcon
                      className={Styles.ProducerDetailsTabDetailsHeaderEditIcon}
                      onClick={()=> handleOpenEdit()}
                    />
                  </div>
                  <div className={Styles.ProducerDetailsInformationContianer}>
                    <div className={Styles.ProducerDetailsInformationContent}>
                      <div
                        className={Styles.ProducerDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardText
                          }
                        >
                          Username
                        </p>
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardTextdata
                          }
                        >
                          Christin Stew
                        </p>
                      </div>
                      <div
                        className={Styles.ProducerDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardText
                          }
                        >
                          password
                        </p>
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardTextdata
                          }
                        >
                          ********
                        </p>
                      </div>
                    </div>
                    <div className={Styles.ProducerDetailsTabDetailsHeader}>
                      <p
                        className={
                          Styles.ProducerDetailsTabDetailsHeaderTextLoginInfo
                        }
                      >
                        Producer Info
                      </p>
                    </div>
                    <div className={Styles.ProducerDetailsInformationContent}>
                      <div
                        className={Styles.ProducerDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardText
                          }
                        >
                          Producer Name
                        </p>
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardTextdata
                          }
                        >
                          Christin Stew
                        </p>
                      </div>
                      <div
                        className={Styles.ProducerDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardText
                          }
                        >
                          Email
                        </p>
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardTextdata
                          }
                        >
                          stew@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className={Styles.ProducerDetailsInformationContent}>
                      <div
                        className={Styles.ProducerDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardText
                          }
                        >
                          Phone
                        </p>
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardTextdata
                          }
                        >
                          205 555-4567
                        </p>
                      </div>
                      <div
                        className={Styles.ProducerDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardText
                          }
                        >
                          Legal Entity
                        </p>
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardTextdata
                          }
                        >
                          Lorem ipsum dolor sit amet, consectetuer ut
                        </p>
                      </div>
                    </div>
                    <div className={Styles.ProducerDetailsInformationContent}>
                      <div
                        className={Styles.ProducerDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardText
                          }
                        >
                          Street Address
                        </p>
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardTextdata
                          }
                        >
                          Lorem ipsum dolor sit amet, consectetuer ut
                        </p>
                      </div>
                      <div
                        className={Styles.ProducerDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardText
                          }
                        >
                          City
                        </p>
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardTextdata
                          }
                        >
                          Argo
                        </p>
                      </div>
                    </div>
                    <div className={Styles.ProducerDetailsInformationContent}>
                      <div
                        className={Styles.ProducerDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardText
                          }
                        >
                          State
                        </p>
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardTextdata
                          }
                        >
                          Alabama
                        </p>
                      </div>
                      <div
                        className={Styles.ProducerDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardText
                          }
                        >
                          Zip Code
                        </p>
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardTextdata
                          }
                        >
                          35004
                        </p>
                      </div>
                    </div>
                    <div className={Styles.ProducerDetailsInformationContent}>
                      <div
                        className={Styles.ProducerDetailsInformationDetailsCard}
                      >
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardText
                          }
                        >
                          Status
                        </p>
                        <p
                          className={
                            Styles.ProducerDetailsInformationDetailsCardTextdata
                          }
                        >
                          Active
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
        <Box sx={style}>
          <div className={Styles.ProducerDetailsModelPopupContainer}>
            <div className={Styles.ProducerDetailsModelPopupHeader}>
              <p className={Styles.ProducerDetailsModelPopupHeaderText}>
                Add Producers
              </p>
              <CloseOutlinedIcon
                onClick={() => handleClose()}
                className={Styles.ProducerDetailsModelPopupHeaderTextIcon}
              />
            </div>
            <div className={Styles.ProducerDetailsTitleContainer}>
              <p className={Styles.ProducerDetailsTitle}>Login Info</p>
            </div>
            <div className={Styles.ProducerDetailsInputContainer}>
              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Username
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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Password
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="lastname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, lastname: e.target.value })}
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>

              <div className={Styles.ProducerDetailsTitleContainer}>
                <p className={Styles.ProducerDetailsTitle}>Producer Info</p>
              </div>
              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Fist Name
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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Last Name
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
              </div>
              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>Email</p>

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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>Phone</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="lastname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, lastname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Legal Entity
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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>Street</p>

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
              </div>

              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>City</p>

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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>State</p>

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
              </div>
              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Zip Code
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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>Status</p>
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
                </div>
              </div>
            </div>
            <div className={Styles.ProducerDetailsButtonContainer}>
              <button
                className={Styles.ProducerDetailsCancelButton}
                onClick={() => handleClose()}
              >
                Cancel
              </button>
              <button
                className={Styles.ProducerDetailsSubmitButton}
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
        <Box sx={style}>
          <div className={Styles.ProducerDetailsModelPopupContainer}>
            <div className={Styles.ProducerDetailsModelPopupHeader}>
              <p className={Styles.ProducerDetailsModelPopupHeaderText}>
                Edit Producers
              </p>
              <CloseOutlinedIcon
                onClick={() => handleCloseEdit()}
                className={Styles.ProducerDetailsModelPopupHeaderTextIcon}
              />
            </div>
            <div className={Styles.ProducerDetailsTitleContainer}>
              <p className={Styles.ProducerDetailsTitle}>Login Info</p>
            </div>
            <div className={Styles.ProducerDetailsInputContainer}>
              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Username
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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Password
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="lastname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, lastname: e.target.value })}
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>

              <div className={Styles.ProducerDetailsTitleContainer}>
                <p className={Styles.ProducerDetailsTitle}>Producer Info</p>
              </div>
              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Fist Name
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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Last Name
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
              </div>
              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>Email</p>

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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>Phone</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="lastname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, lastname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Legal Entity
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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>Street</p>

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
              </div>

              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>City</p>

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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>State</p>

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
              </div>
              <div className={Styles.ProducerDetailsInputContent}>
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>
                    Zip Code
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
                <div className={Styles.ProducerDetailsInputCart}>
                  <p className={Styles.ProducerDetailsInputCartText}>Status</p>
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
                </div>
              </div>
            </div>
            <div className={Styles.ProducerDetailsButtonContainer}>
              <button
                className={Styles.ProducerDetailsCancelButton}
                onClick={() => handleCloseEdit()}
              >
                Cancel
              </button>
              <button
                className={Styles.ProducerDetailsSubmitButton}
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
export default ProducerDetails;
