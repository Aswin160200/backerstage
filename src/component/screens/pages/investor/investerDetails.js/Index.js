import React, { useState } from "react";
import Styles from "./Index.module.css";
import HeaderPage from "../../header/Header";
import InvestorsImage from "../../../../assets/images/InvestorsImage.png";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PartiesImage from "../../../../assets/images/PartiesImage.png";
import NotesImage from "../../../../assets/images/NotesImage.png";

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

const InvestorDetails = () => {
  const theme = useTheme();
  // let dispatch = useDispatch();

  // tab start
  const [searchValue, setSearchValue] = useState("");

  const [value, setValue] = useState(0);

  const [partiesAndNotesOpen, setPartiesAndNotesOpen] = useState(false);
  const [notesOpen, setnotesOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const HandleCahngePatiesAndNotes = () => {
    if (partiesAndNotesOpen === false) {
      setPartiesAndNotesOpen(true);
    } else {
      setPartiesAndNotesOpen(false);
    }
  };

  const HandleCahngeNotes = () => {
    if (notesOpen === false) {
      setnotesOpen(true);
    } else {
      setnotesOpen(false);
    }
  };


    //   tableData Start
    const allData = [
        {
            no: "33",
          projectName: "ABC Project",
          status: "Actively Raising",
          totalInvesment: "$20,425",
          action: (
            <div className={Styles.InvestorDetailsTableActionContainer}>
              <EditOutlinedIcon className={Styles.InvestorDetailsTableActionEditIcon} />
              <RemoveRedEyeOutlinedIcon
                className={Styles.InvestorDetailsTableActionViewIcon}
              />
              <DeleteOutlineOutlinedIcon
                className={Styles.InvestorDetailsTableActionDeleteIcon}
              />
            </div>
          ),
        
        },
        {
            no: "33",
          projectName: "ABC Project",
          status: "Actively Raising",
          totalInvesment: "$20,425",
          action: (
            <div className={Styles.InvestorDetailsTableActionContainer}>
              <EditOutlinedIcon className={Styles.InvestorDetailsTableActionEditIcon} />
              <RemoveRedEyeOutlinedIcon
                className={Styles.InvestorDetailsTableActionViewIcon}
              />
              <DeleteOutlineOutlinedIcon
                className={Styles.InvestorDetailsTableActionDeleteIcon}
              />
            </div>
          ),
        
        },
        {
            no: "33",
          projectName: "ABC Project",
          status: "Actively Raising",
          totalInvesment: "$20,425",
          action: (
            <div className={Styles.InvestorDetailsTableActionContainer}>
              <EditOutlinedIcon className={Styles.InvestorDetailsTableActionEditIcon} />
              <RemoveRedEyeOutlinedIcon
                className={Styles.InvestorDetailsTableActionViewIcon}
              />
              <DeleteOutlineOutlinedIcon
                className={Styles.InvestorDetailsTableActionDeleteIcon}
              />
            </div>
          ),
        
        },
        {
            no: "33",
          projectName: "ABC Project",
          status: "Actively Raising",
          totalInvesment: "$20,425",
          action: (
            <div className={Styles.InvestorDetailsTableActionContainer}>
              <EditOutlinedIcon className={Styles.InvestorDetailsTableActionEditIcon} />
              <RemoveRedEyeOutlinedIcon
                className={Styles.InvestorDetailsTableActionViewIcon}
              />
              <DeleteOutlineOutlinedIcon
                className={Styles.InvestorDetailsTableActionDeleteIcon}
              />
            </div>
          ),
        
        },
       
      ];
    
      const tableHead = {
        no: "No",
        projectName: "Project Name",
        status: "Status",
        totalInvesment: "Total Invesment",
        action: "Actions",
      };
      const countPerPage = 5;
      const [currentPage, setCurrentPage] = useState(1);
      const [collection, setCollection] = useState(
        cloneDeep(allData.slice(0, countPerPage))
      );
    
    
      const updatePage = (p) => {
        setCurrentPage(p);
        const to = countPerPage * p;
        const from = to - countPerPage;
        setCollection(cloneDeep(allData.slice(from, to)));
      };
    
      const tableRows = (rowData) => {
        const { key, index } = rowData;
        const tableCell = Object.keys(tableHead);
        const columnData = tableCell.map((keyD, i) => {
          return <td key={i}>{key[keyD]}</td>;
        });
    
        return <tr key={index}>{columnData}</tr>;
      };
    
      const tableData = () => {
        return collection.map((key, index) => tableRows({ key, index }));
      };
    
      const headRow = () => {
        return Object.values(tableHead).map((title, index) => (
          <td key={index}>{title}</td>
        ));
      };
    
      //   table data end

  return (
    <div className={Styles.InvestorDetailsMainConatiner}>
      <HeaderPage />
      <div className={Styles.InvestorDetailsContainer}>
        <div className={Styles.InvestorDetailsNavConatiner}>
          <div className={Styles.InvestorDetailsNavImageConatiner}>
            <img
              src={InvestorsImage}
              alt="InvestorsImage"
              className={Styles.InvestorDetailsNavConatinerImg}
            />
            <p className={Styles.InvestorDetailsNavImageConatinerText}>
              Investors
            </p>
          </div>
          <CalendarMonthOutlinedIcon
            className={Styles.InvestorDetailsNavConatinerIcon}
          />
        </div>
        <div className={Styles.InvestorDetailsTitleConatiner}>
          <p className={Styles.InvestorDetailsTitleConatinerText}>Investors</p>
          <button className={Styles.InvestorDetailsTitleConatinerButton}>
            Add Investors{" "}
          </button>
        </div>
        <div className={Styles.InvestorDetailsTabsAndNotesContainer}>
          <div className={Styles.InvestorDetailsTabs}>
            <div className={Styles.InvestorDetailsTabsContainer}>
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
                    <Tab
                      label={<p className={Styles.TabAddIconTExt}>Projects</p>}
                      {...a11yProps(1)}
                      sx={{ maxWidth: "15% !important" }}
                    />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <div className={Styles.InvestorDetailsTabDetailsContainer}>
                    <div className={Styles.InvestorDetailsTabDetailsHeader}>
                      <p className={Styles.InvestorDetailsTabDetailsHeaderText}>
                        Investor Details
                      </p>
                      <EditOutlinedIcon
                        className={
                          Styles.InvestorDetailsTabDetailsHeaderEditIcon
                        }
                      />
                    </div>
                    <div className={Styles.InvestorDetailsInformationContianer}>
                      <div className={Styles.InvestorDetailsInformationContent}>
                        <div className={ Styles.InvestorDetailsInformationDetailsCard}   >
                          <p   className={  Styles.InvestorDetailsInformationDetailsCardText }  > Investor Name </p>
                          <p  className={  Styles.InvestorDetailsInformationDetailsCardTextdata}  > Robin pattison  </p>
                        </div>
                        <div className={Styles.InvestorDetailsInformationDetailsCard} >
                          <p className={Styles.InvestorDetailsInformationDetailsCardText}> Email </p>
                          <p className={Styles.InvestorDetailsInformationDetailsCardTextdata}>robin@gmail.com </p>
                        </div>
                      </div>

                      <div className={Styles.InvestorDetailsInformationContent}>
                        <div className={ Styles.InvestorDetailsInformationDetailsCard}   >
                          <p   className={  Styles.InvestorDetailsInformationDetailsCardText }  > Phone</p>
                          <p  className={  Styles.InvestorDetailsInformationDetailsCardTextdata}  >205 555-4567</p>
                        </div>
                        <div className={Styles.InvestorDetailsInformationDetailsCard} >
                          <p className={Styles.InvestorDetailsInformationDetailsCardText}> Street Address </p>
                          <p className={Styles.InvestorDetailsInformationDetailsCardTextdata}>Lorem ipsum dolor sit amet, consectetuer ut</p>
                        </div>
                      </div>
                      <div className={Styles.InvestorDetailsInformationContent}>
                        <div className={ Styles.InvestorDetailsInformationDetailsCard}   >
                          <p   className={  Styles.InvestorDetailsInformationDetailsCardText }  > City</p>
                          <p  className={  Styles.InvestorDetailsInformationDetailsCardTextdata}  >Argo</p>
                        </div>
                        <div className={Styles.InvestorDetailsInformationDetailsCard} >
                          <p className={Styles.InvestorDetailsInformationDetailsCardText}> State </p>
                          <p className={Styles.InvestorDetailsInformationDetailsCardTextdata}>Alabama</p>
                        </div>
                      </div>
                      <div className={Styles.InvestorDetailsInformationContent}>
                        <div className={ Styles.InvestorDetailsInformationDetailsCard}   >
                          <p   className={  Styles.InvestorDetailsInformationDetailsCardText }  > Zip Code</p>
                          <p  className={  Styles.InvestorDetailsInformationDetailsCardTextdata}  >35004</p>
                        </div>
                        <div className={Styles.InvestorDetailsInformationDetailsCard} >
                          <p className={Styles.InvestorDetailsInformationDetailsCardText}> Accredited </p>
                          <p className={Styles.InvestorDetailsInformationDetailsCardTextdata}>Yes</p>
                        </div>
                      </div>
                      <div className={Styles.InvestorDetailsInformationContent}>
                        <div className={ Styles.InvestorDetailsInformationDetailsCard}   >
                          <p   className={  Styles.InvestorDetailsInformationDetailsCardText }  > Refferral Source</p>
                          <p  className={  Styles.InvestorDetailsInformationDetailsCardTextdata}  >none</p>
                        </div>
                        <div className={Styles.InvestorDetailsInformationDetailsCard} >
                          <p className={Styles.InvestorDetailsInformationDetailsCardText}>Date Added</p>
                          <p className={Styles.InvestorDetailsInformationDetailsCardTextdata}>january 12th,2025</p>
                        </div>
                      </div>
                      <div className={Styles.InvestorDetailsInformationContent}>
                        <div className={ Styles.InvestorDetailsInformationDetailsCard}   >
                          <p   className={  Styles.InvestorDetailsInformationDetailsCardText }  > Investor Probability</p>
                          <p  className={  Styles.InvestorDetailsInformationDetailsCardTextdata}  >12.4%</p>
                        </div>
                        <div className={Styles.InvestorDetailsInformationDetailsCard} >
                          <p className={Styles.InvestorDetailsInformationDetailsCardText}>General Comments</p>
                          <p className={Styles.InvestorDetailsInformationDetailsCardTextdata}>Lorem ipsum dolor sit amet, consectetuer ut</p>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                <div>
                <div className={Styles.InvestorDetailsPageInvestorTableHeaderButtonContainer}>
                        <button className={Styles.InvestorDetailsPageInvestorTableHeaderButton} >Add New</button>
                </div>
                <div className={Styles.InvestorDetailsPageInvestorTabsContainerTable}>
                  <table>
                    <thead>
                      <tr>{headRow()}</tr>
                    </thead>
                    <tbody className="trhover">{tableData()}</tbody>
                  </table>
                  <div className={Styles.InvestorDetailsPageInvesotrTablePagination}>
                    <Pagination
                      pageSize={countPerPage}
                      onChange={updatePage}
                      current={currentPage}
                      total={allData.length}
                    />
                  </div>
                </div>
              </div>
                </TabPanel>
              </Box>
            </div>
          </div>

          <div className={Styles.InvestorDetailsPartiesAndNotesContainer}>
            <div
              className={
                Styles.InvestorDetailsPartiesAndNotesContentMainContainer
              }
            >
              <div className={Styles.InvestorDetailsPartiesAndNotesContent}>
                <div
                  className={Styles.InvestorDetailsPartiesAndNotesContentHeader}
                >
                  <img src={PartiesImage} alt="PartiesImage" />
                  <p
                    className={
                      Styles.InvestorDetailsPartiesAndNotesContentHeaderText
                    }
                  >
                    Party's Project
                  </p>
                </div>
                <ExpandMoreOutlinedIcon
                  className={Styles.InvestorDetailsPAtiesAndNotesIcon}
                  onClick={() => HandleCahngePatiesAndNotes()}
                />
              </div>
              {partiesAndNotesOpen === true ? (
                <div className={Styles.InvestorDetailsPartiesContainer}>
                  <p className={Styles.InvestorDetailsPartiesContainerText}>
                    ABC Project 
                  </p>
                  <div className={Styles.InvestorDetailsPartiesContent}>
                    <p className={Styles.InvestorDetailsPartiesContentTitle}>
                      Status
                    </p>
                    <p className={Styles.InvestorDetailsPartiesContentText}>
                      Investing In Deal
                    </p>
                  </div>
                  <div className={Styles.InvestorDetailsPartiesContent}>
                    <p className={Styles.InvestorDetailsPartiesContentTitle}>
                      Final Amount
                    </p>
                    <p className={Styles.InvestorDetailsPartiesContentText}>
                      $50,974
                    </p>
                  </div>
                  <div className={Styles.InvestorDetailsPartiesContent}>
                    <p className={Styles.InvestorDetailsPartiesContentTitle}>
                      Invesment Method
                    </p>
                    <p className={Styles.InvestorDetailsPartiesContentText}>
                      SVP
                    </p>
                  </div>
                  <p className={Styles.InvestorDetailsPartiesContainerText}>
                    ABC Project 
                  </p>
                  <div className={Styles.InvestorDetailsPartiesContent}>
                    <p className={Styles.InvestorDetailsPartiesContentTitle}>
                      XXX Project
                    </p>
                    <p className={Styles.InvestorDetailsPartiesContentText}>
                      Investing In Deal
                    </p>
                  </div>
                  <div className={Styles.InvestorDetailsPartiesContent}>
                    <p className={Styles.InvestorDetailsPartiesContentTitle}>
                      Final Amount
                    </p>
                    <p className={Styles.InvestorDetailsPartiesContentText}>
                      $25,000,00
                    </p>
                  </div>
                  <div className={Styles.InvestorDetailsPartiesContent}>
                    <p className={Styles.InvestorDetailsPartiesContentTitle}>
                      Invesment Method
                    </p>
                    <p className={Styles.InvestorDetailsPartiesContentText}>
                      Direct To Production
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              className={
                Styles.InvestorDetailsPartiesAndNotesContentMainContainer
              }
            >
              <div className={Styles.InvestorDetailsPartiesAndNotesContent}>
                <div
                  className={Styles.InvestorDetailsPartiesAndNotesContentHeader}
                >
                  <img src={NotesImage} alt="NotesImage" />
                  <p
                    className={
                      Styles.InvestorDetailsPartiesAndNotesContentHeaderText
                    }
                  >
                    Notes
                  </p>
                </div>
                <ExpandMoreOutlinedIcon
                  className={Styles.InvestorDetailsPAtiesAndNotesIcon}
                  onClick={() => HandleCahngeNotes()}
                />
              </div>
              {notesOpen === true ? (
                <div className={Styles.InvestorDetailsPartiesContainer}>
                  <p className={Styles.InvestorDetailsPartiesContainerText}>
                    Call With Robin
                  </p>
                  <div className={Styles.InvestorDetailsPartiesContent}>
                    <p className={Styles.InvestorDetailsPartiesContentTitle}>
                      Note
                    </p>
                    <p className={Styles.InvestorDetailsPartiesContentText}>
                      Spoke with Robin
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InvestorDetails;
