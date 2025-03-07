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

const CoProducersDetails = () => {
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
      viewInvestor: "View ",
      status: "Actively Rasi...",
      startDate:"02/19/2025",
      totalRaised:"$45,000",
      action: (
        <div className={Styles.CoProducersDetailsTableActionContainer}>
          <EditOutlinedIcon className={Styles.CoProducersDetailsTableActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.CoProducersDetailsTableActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.CoProducersDetailsTableActionDeleteIcon}
          />
        </div>
      ),
    
    },
        {
            no: "33",
          projectName: "ABC Project",
          viewInvestor: "View ",
          status: "Actively Rasi...",
          startDate:"02/19/2025",
          totalRaised:"$45,000",
          action: (
            <div className={Styles.CoProducersDetailsTableActionContainer}>
              <EditOutlinedIcon className={Styles.CoProducersDetailsTableActionEditIcon} />
              <RemoveRedEyeOutlinedIcon
                className={Styles.CoProducersDetailsTableActionViewIcon}
              />
              <DeleteOutlineOutlinedIcon
                className={Styles.CoProducersDetailsTableActionDeleteIcon}
              />
            </div>
          ),
        
        },
        {
          no: "33",
        projectName: "ABC Project",
        viewInvestor: "View ",
        status: "Actively Rasi...",
        startDate:"02/19/2025",
        totalRaised:"$45,000",
        action: (
          <div className={Styles.CoProducersDetailsTableActionContainer}>
            <EditOutlinedIcon className={Styles.CoProducersDetailsTableActionEditIcon} />
            <RemoveRedEyeOutlinedIcon
              className={Styles.CoProducersDetailsTableActionViewIcon}
            />
            <DeleteOutlineOutlinedIcon
              className={Styles.CoProducersDetailsTableActionDeleteIcon}
            />
          </div>
        ),
      
      },
     
      ];
    
      const tableHead = {
        no: "No",
        projectName: "Project Name",
        viewInvestor: "View Investor",
        status: "Status",
        startDate:"Start Date",
        totalRaised:"Total Raised",
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
    <div className={Styles.CoProducersDetailsMainConatiner}>
      <HeaderPage />
      <div className={Styles.CoProducersDetailsContainer}>
        <div className={Styles.CoProducersDetailsNavConatiner}>
          <div className={Styles.CoProducersDetailsNavImageConatiner}>
            <img
              src={InvestorsImage}
              alt="InvestorsImage"
              className={Styles.CoProducersDetailsNavConatinerImg}
            />
            <p className={Styles.CoProducersDetailsNavImageConatinerText}>
              Co-Producers
            </p>
          </div>
          <CalendarMonthOutlinedIcon
            className={Styles.CoProducersDetailsNavConatinerIcon}
          />
        </div>
        <div className={Styles.CoProducersDetailsTitleConatiner}>
          <p className={Styles.CoProducersDetailsTitleConatinerText}>Christin Stew</p>
          <button className={Styles.CoProducersDetailsTitleConatinerButton}>
            Add Co-Producers
          </button>
        </div>
        <div className={Styles.CoProducersDetailsTabsAndNotesContainer}>
          <div className={Styles.CoProducersDetailsTabs}>
            <div className={Styles.CoProducersDetailsTabsContainer}>
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
                  <div className={Styles.CoProducersDetailsTabDetailsContainer}>
                    <div className={Styles.CoProducersDetailsTabDetailsHeader}>
                      <p className={Styles.CoProducersDetailsTabDetailsHeaderText}>
                       Co-Producers Info
                      </p>
                      <EditOutlinedIcon
                        className={
                          Styles.CoProducersDetailsTabDetailsHeaderEditIcon
                        }
                      />
                    </div>
                    <div className={Styles.CoProducersDetailsInformationContianer}>
                      <div className={Styles.CoProducersDetailsInformationContent}>
                        <div className={ Styles.CoProducersDetailsInformationDetailsCard}   >
                          <p   className={  Styles.CoProducersDetailsInformationDetailsCardText }  >Co-Producer Name</p>
                          <p  className={  Styles.CoProducersDetailsInformationDetailsCardTextdata}  >Christin Stew </p>
                        </div>
                        <div className={Styles.CoProducersDetailsInformationDetailsCard} >
                          <p className={Styles.CoProducersDetailsInformationDetailsCardText}> Email </p>
                          <p className={Styles.CoProducersDetailsInformationDetailsCardTextdata}>stew@gmail.com </p>
                        </div>
                      </div>

                      <div className={Styles.CoProducersDetailsInformationContent}>
                        <div className={ Styles.CoProducersDetailsInformationDetailsCard}   >
                          <p   className={  Styles.CoProducersDetailsInformationDetailsCardText }  > Phone</p>
                          <p  className={  Styles.CoProducersDetailsInformationDetailsCardTextdata}  >205 555-4567</p>
                        </div>
                        <div className={Styles.CoProducersDetailsInformationDetailsCard} >
                          <p className={Styles.CoProducersDetailsInformationDetailsCardText}> Legal Entity  </p>
                          <p className={Styles.CoProducersDetailsInformationDetailsCardTextdata}>Lorem ipsum dolor sit amet, consectetuer ut</p>
                        </div>
                      </div>
                      <div className={Styles.CoProducersDetailsInformationContent}>
                        <div className={ Styles.CoProducersDetailsInformationDetailsCard}   >
                          <p   className={  Styles.CoProducersDetailsInformationDetailsCardText }  >Street Address</p>
                          <p  className={  Styles.CoProducersDetailsInformationDetailsCardTextdata}  >Lorem ipsum dolor sit amet, consectetuer ut</p>
                        </div>
                        <div className={Styles.CoProducersDetailsInformationDetailsCard} >
                          <p className={Styles.CoProducersDetailsInformationDetailsCardText}> City </p>
                          <p className={Styles.CoProducersDetailsInformationDetailsCardTextdata}>Argo</p>
                        </div>
                      </div>
                      <div className={Styles.CoProducersDetailsInformationContent}>
                        <div className={ Styles.CoProducersDetailsInformationDetailsCard}   >
                          <p   className={  Styles.CoProducersDetailsInformationDetailsCardText }  > State</p>
                          <p  className={  Styles.CoProducersDetailsInformationDetailsCardTextdata}  >Alabama</p>
                        </div>
                        <div className={Styles.CoProducersDetailsInformationDetailsCard} >
                          <p className={Styles.CoProducersDetailsInformationDetailsCardText}> Zip Code </p>
                          <p className={Styles.CoProducersDetailsInformationDetailsCardTextdata}>35004</p>
                        </div>
                      </div>
                      <div className={Styles.CoProducersDetailsInformationContent}>
                        <div className={ Styles.CoProducersDetailsInformationDetailsCard}   >
                          <p   className={  Styles.CoProducersDetailsInformationDetailsCardText }  > Totla Allocation</p>
                          <p  className={  Styles.CoProducersDetailsInformationDetailsCardTextdata}  >$25,000.00</p>
                        </div>
                        <div className={Styles.CoProducersDetailsInformationDetailsCard} >
                          <p className={Styles.CoProducersDetailsInformationDetailsCardText}>Status</p>
                          <p className={Styles.CoProducersDetailsInformationDetailsCardTextdata}>Still Raising</p>
                        </div>
                      </div>
                      <div className={Styles.CoProducersDetailsInformationContent}>
                        <div className={ Styles.CoProducersDetailsInformationDetailsCard}   >
                          <p   className={  Styles.CoProducersDetailsInformationDetailsCardText }  > Total Raised</p>
                          <p  className={  Styles.CoProducersDetailsInformationDetailsCardTextdata}  >$25,000.00</p>
                        </div>
                        <div className={Styles.CoProducersDetailsInformationDetailsCard} >
                          <p className={Styles.CoProducersDetailsInformationDetailsCardText}>Entitlememnt</p>
                          <p className={Styles.CoProducersDetailsInformationDetailsCardTextdata}>$26,000.00</p>
                        </div>
                      </div>
                      <div className={Styles.CoProducersDetailsInformationContent}>
                        <div className={Styles.CoProducersDetailsInformationDetailsCard} >
                          <p className={Styles.CoProducersDetailsInformationDetailsCardText}>General Comments</p>
                          <p className={Styles.CoProducersDetailsInformationDetailsCardTextdata}>Lorem ipsum dolor sit amet, consectetuer ut</p>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                <div>
                <div className={Styles.CoProducersDetailsPageInvestorTableHeaderButtonContainer}>
                        <button className={Styles.CoProducersDetailsPageInvestorTableHeaderButton} >Add New</button>
                </div>
                <div className={Styles.CoProducersDetailsPageInvestorTabsContainerTable}>
                  <table>
                    <thead>
                      <tr>{headRow()}</tr>
                    </thead>
                    <tbody className="trhover">{tableData()}</tbody>
                  </table>
                  <div className={Styles.CoProducersDetailsPageInvesotrTablePagination}>
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

          <div className={Styles.CoProducersDetailsPartiesAndNotesContainer}>
            <div
              className={
                Styles.CoProducersDetailsPartiesAndNotesContentMainContainer
              }
            >
              <div className={Styles.CoProducersDetailsPartiesAndNotesContent}>
                <div
                  className={Styles.CoProducersDetailsPartiesAndNotesContentHeader}
                >
                  <img src={PartiesImage} alt="PartiesImage" />
                  <p
                    className={
                      Styles.CoProducersDetailsPartiesAndNotesContentHeaderText
                    }
                  >
                    Party's Project
                  </p>
                </div>
                <ExpandMoreOutlinedIcon
                  className={Styles.CoProducersDetailsPAtiesAndNotesIcon}
                  onClick={() => HandleCahngePatiesAndNotes()}
                />
              </div>
              {partiesAndNotesOpen === true ? (
                <div className={Styles.CoProducersDetailsPartiesContainer}>
                  <p className={Styles.CoProducersDetailsPartiesContainerText}>
                    ABC Project 
                  </p>
                  <div className={Styles.CoProducersDetailsPartiesContent}>
                    <p className={Styles.CoProducersDetailsPartiesContentTitle}>
                      Status
                    </p>
                    <p className={Styles.CoProducersDetailsPartiesContentText}>
                      Investing In Deal
                    </p>
                  </div>
                  <div className={Styles.CoProducersDetailsPartiesContent}>
                    <p className={Styles.CoProducersDetailsPartiesContentTitle}>
                      Final Amount
                    </p>
                    <p className={Styles.CoProducersDetailsPartiesContentText}>
                      $50,974
                    </p>
                  </div>
                  <div className={Styles.CoProducersDetailsPartiesContent}>
                    <p className={Styles.CoProducersDetailsPartiesContentTitle}>
                      Invesment Method
                    </p>
                    <p className={Styles.CoProducersDetailsPartiesContentText}>
                      SVP
                    </p>
                  </div>
                  <p className={Styles.CoProducersDetailsPartiesContainerText}>
                    ABC Project 
                  </p>
                  <div className={Styles.CoProducersDetailsPartiesContent}>
                    <p className={Styles.CoProducersDetailsPartiesContentTitle}>
                      XXX Project
                    </p>
                    <p className={Styles.CoProducersDetailsPartiesContentText}>
                      Investing In Deal
                    </p>
                  </div>
                  <div className={Styles.CoProducersDetailsPartiesContent}>
                    <p className={Styles.CoProducersDetailsPartiesContentTitle}>
                      Final Amount
                    </p>
                    <p className={Styles.CoProducersDetailsPartiesContentText}>
                      $25,000,00
                    </p>
                  </div>
                  <div className={Styles.CoProducersDetailsPartiesContent}>
                    <p className={Styles.CoProducersDetailsPartiesContentTitle}>
                      Invesment Method
                    </p>
                    <p className={Styles.CoProducersDetailsPartiesContentText}>
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
                Styles.CoProducersDetailsPartiesAndNotesContentMainContainer
              }
            >
              <div className={Styles.CoProducersDetailsPartiesAndNotesContent}>
                <div
                  className={Styles.CoProducersDetailsPartiesAndNotesContentHeader}
                >
                  <img src={NotesImage} alt="NotesImage" />
                  <p
                    className={
                      Styles.CoProducersDetailsPartiesAndNotesContentHeaderText
                    }
                  >
                    Notes
                  </p>
                </div>
                <ExpandMoreOutlinedIcon
                  className={Styles.CoProducersDetailsPAtiesAndNotesIcon}
                  onClick={() => HandleCahngeNotes()}
                />
              </div>
              {notesOpen === true ? (
                <div className={Styles.CoProducersDetailsPartiesContainer}>
                  <p className={Styles.CoProducersDetailsPartiesContainerText}>
                    Call With Robin
                  </p>
                  <div className={Styles.CoProducersDetailsPartiesContent}>
                    <p className={Styles.CoProducersDetailsPartiesContentTitle}>
                      Note
                    </p>
                    <p className={Styles.CoProducersDetailsPartiesContentText}>
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
export default CoProducersDetails;
