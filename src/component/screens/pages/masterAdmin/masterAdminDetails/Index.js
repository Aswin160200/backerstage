import React, { useState } from "react";
import Styles from "./Index.module.css";
import HeaderPage from "../../header/Header";
import AdminIcon from "../../../../assets/images/AdminIcon.png";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import InsertPageBreakOutlinedIcon from "@mui/icons-material/InsertPageBreakOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
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


const MasterAdminDetails = () => {
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [role, setRole] = useState("");

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className={Styles.MasterAdminDetailsMainContainer}>
      <HeaderPage />
      <div className={Styles.MasterAdminDetails}>
        <div className={Styles.MasterAdminDetailsCantainer}>
          <div className={Styles.MasterAdminDetailsImageAndTextContent}>
            <img src={AdminIcon} alt="AdminIcon" />
            <p className={Styles.MasterAdminDetailsText}>Admin User</p>
          </div>
        </div>
        <div className={Styles.MasterAdminDetailsNavContainer}>
          <p className={Styles.MasterAdminDetailsNavContainerText}>
            Christin Stew
          </p>
          <button
            className={Styles.MasterAdminDetailsNavContainerButton}
            onClick={() => handleOpen()}
          >
            Add User
          </button>
        </div>

        <div className={Styles.MasterAdminDetailsTabAndNotesContainer}>
          <div className={Styles.MasterAdminDetailsPageTabsContainer}>
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
                <div className={Styles.MasterAdminDetailsTabDetailsContainer}>
                  <div className={Styles.MasterAdminDetailsTabDetailsHeader}>
                    <p
                      className={Styles.MasterAdminDetailsTabDetailsHeaderText}
                    >
                      Login Info
                    </p>
                    <EditOutlinedIcon
                      className={
                        Styles.MasterAdminDetailsTabDetailsHeaderEditIcon
                      }
                      onClick={()=> handleOpenEdit()}
                    />
                  </div>
                  <div
                    className={Styles.MasterAdminDetailsInformationContianer}
                  >
                    <div
                      className={Styles.MasterAdminDetailsInformationContent}
                    >
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          Username
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
                          }
                        >
                          Christin Stew
                        </p>
                      </div>
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          password
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
                          }
                        >
                          ********
                        </p>
                      </div>
                    </div>
                    <div className={Styles.MasterAdminDetailsTabDetailsHeader}>
                      <p
                        className={
                          Styles.MasterAdminDetailsTabDetailsHeaderTextLoginInfo
                        }
                      >
                        User Info
                      </p>
                    </div>
                    <div
                      className={Styles.MasterAdminDetailsInformationContent}
                    >
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          Producer Name
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
                          }
                        >
                          Christin Stew
                        </p>
                      </div>
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          Email
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
                          }
                        >
                          stew@gmail.com
                        </p>
                      </div>
                    </div>
                    <div
                      className={Styles.MasterAdminDetailsInformationContent}
                    >
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          Phone
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
                          }
                        >
                          205 555-4567
                        </p>
                      </div>
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          Legal Entity
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
                          }
                        >
                          Lorem ipsum dolor sit amet, consectetuer ut
                        </p>
                      </div>
                    </div>
                    <div
                      className={Styles.MasterAdminDetailsInformationContent}
                    >
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          Street Address
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
                          }
                        >
                          Lorem ipsum dolor sit amet, consectetuer ut
                        </p>
                      </div>
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          City
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
                          }
                        >
                          Argo
                        </p>
                      </div>
                    </div>
                    <div
                      className={Styles.MasterAdminDetailsInformationContent}
                    >
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          State
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
                          }
                        >
                          Alabama
                        </p>
                      </div>
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          Zip Code
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
                          }
                        >
                          35004
                        </p>
                      </div>
                    </div>
                    <div
                      className={Styles.MasterAdminDetailsInformationContent}
                    >
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          Role
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
                          }
                        >
                          Admin
                        </p>
                      </div>
                      <div
                        className={
                          Styles.MasterAdminDetailsInformationDetailsCard
                        }
                      >
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardText
                          }
                        >
                          Status
                        </p>
                        <p
                          className={
                            Styles.MasterAdminDetailsInformationDetailsCardTextdata
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
          <div className={Styles.MasterAdminDetailsModelPopupContainer}>
            <div className={Styles.MasterAdminDetailsModelPopupHeader}>
              <p className={Styles.MasterAdminDetailsModelPopupHeaderText}>
                Add User
              </p>
              <CloseOutlinedIcon
                onClick={() => handleClose()}
                className={Styles.MasterAdminDetailsModelPopupHeaderTextIcon}
              />
            </div>
            <div className={Styles.MasterAdminDetailsTitleContainer}>
              <p className={Styles.MasterAdminDetailsTitle}>Login Info</p>
            </div>
            <div className={Styles.MasterAdminDetailsInputContainer}>
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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

              <div className={Styles.MasterAdminDetailsTitleContainer}>
                <p className={Styles.MasterAdminDetailsTitle}>User Info</p>
              </div>
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
                    Email
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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
                    Phone
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
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
                    Street
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

              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>City</p>

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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
                    State
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
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
                    Status
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
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>Role</p>

                  {/* <InputStyled
                      id="outlined-basic"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname" */}
                  {/* // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })} */}
                  {/* /> */}
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>MasterAdmin</MenuItem>
                    <MenuItem value={20}>Admin</MenuItem>
                    <MenuItem value={30}>Producers</MenuItem>
                  </SelectStyled>
                </div>
              </div>
            </div>
            <div className={Styles.MasterAdminDetailsButtonContainer}>
              <button
                className={Styles.MasterAdminDetailsCancelButton}
                onClick={() => handleClose()}
              >
                Cancel
              </button>
              <button
                className={Styles.MasterAdminDetailsSubmitButton}
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
          <div className={Styles.MasterAdminDetailsModelPopupContainer}>
            <div className={Styles.MasterAdminDetailsModelPopupHeader}>
              <p className={Styles.MasterAdminDetailsModelPopupHeaderText}>
                Edit User
              </p>
              <CloseOutlinedIcon
                onClick={() => handleCloseEdit()}
                className={Styles.MasterAdminDetailsModelPopupHeaderTextIcon}
              />
            </div>
            <div className={Styles.MasterAdminDetailsTitleContainer}>
              <p className={Styles.MasterAdminDetailsTitle}>Login Info</p>
            </div>
            <div className={Styles.MasterAdminDetailsInputContainer}>
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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

              <div className={Styles.MasterAdminDetailsTitleContainer}>
                <p className={Styles.MasterAdminDetailsTitle}>User Info</p>
              </div>
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
                    Email
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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
                    Phone
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
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
                    Street
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

              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>City</p>

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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
                    State
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
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
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
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>
                    Status
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
              <div className={Styles.MasterAdminDetailsInputContent}>
                <div className={Styles.MasterAdminDetailsInputCart}>
                  <p className={Styles.MasterAdminDetailsInputCartText}>Role</p>

                  {/* <InputStyled
                      id="outlined-basic"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname" */}
                  {/* // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })} */}
                  {/* /> */}
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>MasterAdmin</MenuItem>
                    <MenuItem value={20}>Admin</MenuItem>
                    <MenuItem value={30}>Producers</MenuItem>
                  </SelectStyled>
                </div>
              </div>
            </div>
            <div className={Styles.MasterAdminDetailsButtonContainer}>
              <button
                className={Styles.MasterAdminDetailsCancelButton}
                onClick={() => handleCloseEdit()}
              >
                Cancel
              </button>
              <button
                className={Styles.MasterAdminDetailsSubmitButton}
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
export default MasterAdminDetails;
