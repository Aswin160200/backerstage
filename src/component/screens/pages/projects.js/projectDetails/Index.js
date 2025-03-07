import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Styles from "./Index.module.css";
import { Box, Modal, Pagination, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import ProjectsImage from "../../../../assets/images/ProjectsImage.png";
import HeaderPage from "../../header/Header";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import InsertPageBreakOutlinedIcon from "@mui/icons-material/InsertPageBreakOutlined";
import { Link } from "react-router-dom";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import "rc-pagination/assets/index.css";
import { useEffect } from "react";
import { useRef } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import styled from "styled-components";
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import CoProducersTable from "./CoProducers.js/Index";
import DcoumentsPage from "./Documents/Index";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PartiesImage from "../../../../assets/images/PartiesImage.png";
import NotesImage from "../../../../assets/images/NotesImage.png";

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
  }

  const styleViewInvestorTable = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
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
const ProjectDetails = () => {
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   add Party's Project start
  const [openPartysProject, setOpenPartysProject] = useState(false);
  const handleOpenPartysProject = () => setOpenPartysProject(true);
  const handleClosePartysProject = () => setOpenPartysProject(false);

   
//   add Party's Project end

//   Add Investor Docuents start
const [openInvestorDocument, setOpenInvestorDocument] = useState(false);
const handleOpenInvestorDocument = () => setOpenInvestorDocument(true);
const handleCloseInvestorDocument = () => setOpenInvestorDocument(false);

 
//   Add Investor Docuents end

//   View Investor Docuents start
const [openViewInvestorDocument, setOpenViewInvestorDocument] = useState(false);
const handleOpenViewInvestorDocument = () => setOpenViewInvestorDocument(true);
const handleCloseViewInvestorDocument= () => setOpenViewInvestorDocument(false);

 const [partiesAndNotesOpen ,setPartiesAndNotesOpen]=useState(false);
 const [notesOpen ,setnotesOpen]=useState(false);


//   View Investor Docuents end

  //   tableData Start
  const allData = [
    {
        no: "33",
      investorname: "Mathew",
      finalAmount: "$50,974",
      status: "SPV",
      action: (
        <div className={Styles.projectTableActionContainer}>
          <EditOutlinedIcon className={Styles.ProjectTableActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.ProjectsTableActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.ProjectsTableActionDeleteIcon}
          />
        </div>
      ),
      investorsDoc:<div className={Styles.ProjectDetailsInvestorTableInvestorDocumentButtonContainer}><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentViewButton} onClick={()=> handleOpenViewInvestorDocument()}>View</button><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentUploadButton} onClick={()=> handleOpenInvestorDocument()}>Upload</button></div>,
      docs:<button className={Styles.ProjectDetailsInvestorTableInvestorDocumentGenerateButton}>Generate</button>,
    },
    {
        no: "33",
      investorname: "Mathew",
      finalAmount: "$50,974",
      status: "SPV",
      action: (
        <div className={Styles.projectTableActionContainer}>
          <EditOutlinedIcon className={Styles.ProjectTableActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.ProjectsTableActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.ProjectsTableActionDeleteIcon}
          />
        </div>
      ),
      investorsDoc:<div className={Styles.ProjectDetailsInvestorTableInvestorDocumentButtonContainer}><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentViewButton} onClick={()=> handleOpenViewInvestorDocument()}>View</button><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentUploadButton } onClick={()=> handleOpenInvestorDocument()}>Upload</button></div>,
      docs:<button className={Styles.ProjectDetailsInvestorTableInvestorDocumentGenerateButton}>Generate</button>,
    },
    {
        no: "33",
      investorname: "Mathew",
      finalAmount: "$50,974",
      status: "SPV",
      action: (
        <div className={Styles.projectTableActionContainer}>
          <EditOutlinedIcon className={Styles.ProjectTableActionEditIcon} />
          <SaveAltOutlinedIcon
            className={Styles.ProjectsTableActionDownloadIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.ProjectsTableActionDeleteIcon}
          />
        </div>
      ),
      investorsDoc:<div className={Styles.ProjectDetailsInvestorTableInvestorDocumentButtonContainer}><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentViewButton} onClick={()=> handleOpenViewInvestorDocument()}>View</button><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentUploadButton} onClick={()=> handleOpenInvestorDocument()}>Upload</button></div>,
      docs:<button className={Styles.ProjectDetailsInvestorTableInvestorDocumentGenerateButton}>Generate</button>,
    },

  
  ];

  const tableHead = {
    no: "No",
    investorname: "Investor Name",
    finalAmount: "Final Amount ",
    status: "Status",
    action: "Actions",
    investorsDoc:"Investor's Docs",
    docs:"Docs",
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

//   View investor Upload Document table data Start
  const allDataViewInvestorUpdatedDocument = [
    {
        fileName: <p><InsertPageBreakOutlinedIcon/> ABC Project Agr...</p>,
      investorname: "Mathew",
      projectName: "ABC Project",
      updatedOn: "01/19/2025",
      action: (
        <div className={Styles.projectTableActionContainer}>
          <EditOutlinedIcon className={Styles.ProjectTableActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.ProjectsTableActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.ProjectsTableActionDeleteIcon}
          />
        </div>
      ),
       },
   
   
  ];

  const tableHeadViewInvestorUpdatedDocument = {
    fileName: "File Name",
    investorname: "Investor Name",
    projectName: "Project Name",
    updatedOn: "Updated On",
    action: "Actions",
  };
 

  const countPerPageViewInvestorUpdatedDocument = 5;
  const [currentPageViewInvestorUpdatedDocument, setCurrentPageViewInvestorUpdatedDocument] = useState(1);
  const [collectionViewInvestorUpdatedDocument, setCollectionViewInvestorUpdatedDocument] = useState(
    cloneDeep(allDataViewInvestorUpdatedDocument.slice(0, countPerPageViewInvestorUpdatedDocument))
  );

  const tableRowsViewInvestorUpdatedDocument = (rowData) => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHeadViewInvestorUpdatedDocument);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableDataViewInvestorUpdatedDocument = () => {
    return collectionViewInvestorUpdatedDocument.map((key, index) => tableRowsViewInvestorUpdatedDocument({ key, index }));
  };

  const headRowViewInvestorUpdatedDocument = () => {
    return Object.values(tableHeadViewInvestorUpdatedDocument).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  //   View investor Upload Document table data  end

  const HandleCahngePatiesAndNotes=()=>{
        if(partiesAndNotesOpen === false){
            setPartiesAndNotesOpen(true)
        }
        else{
            setPartiesAndNotesOpen(false)
        }
  }

  const HandleCahngeNotes=()=>{
    if(notesOpen === false){
        setnotesOpen(true)
    }
    else{
        setnotesOpen(false)
    }
}

  return (
    <div className={Styles.ProjectDetailsMainContainer}>
      <HeaderPage />
      <div className={Styles.ProjectsDetailsNavContainer}>
        <div className={Styles.ProjectsDetailsNavContainerLeftSide}>
          <img
            src={ProjectsImage}
            alt=""
            className={Styles.ProjectsDetailsPagenavCartImg}
          />
          <p className={Styles.ProjectsDetailsPagenavCartText}>Projects</p>
        </div>
        <div className={Styles.ProjectDetailsPageNavCalenderIcon}>
          <CalendarMonthOutlinedIcon />
        </div>
      </div>
      <div className={Styles.ProjectDetailsNavCartContainer}>
        <div className={Styles.ProjectDetailsNavCartHeaderContent}>
          <p className={Styles.ProjectDetailsNavCartHeaderContentText}>
            ABC Project
          </p>
          <button className={Styles.ProjectDetailsNavCartHeaderContentButton}>
            Add Projects
          </button>
        </div>
        <div className={Styles.ProjectDetailsNavCartDetails}>
          <div className={Styles.ProjectDetailsNavCartDetailsCard}>
            <p className={Styles.ProjectDetailsNavCartDetailsCardText}>
              Start date
            </p>
            <p className={Styles.ProjectDetailsNavCartDetailsCardTextdata}>
              02/19/2025
            </p>
          </div>
          <div className={Styles.ProjectDetailsNavCartDetailsCard}>
            <p className={Styles.ProjectDetailsNavCartDetailsCardText}>
              Status
            </p>
            <p className={Styles.ProjectDetailsNavCartDetailsCardTextdata}>
              Actively Raising
            </p>
          </div>
          <div className={Styles.ProjectDetailsNavCartDetailsCard}>
            <p className={Styles.ProjectDetailsNavCartDetailsCardText}>
              Total Invested
            </p>
            <p className={Styles.ProjectDetailsNavCartDetailsCardTextdata}>
              $20,425
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.ProjectDetailsTabAndNotesContainer}>
        <div className={Styles.ProjectDetailsPageTabsContainer}>
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
                />
                <Tab
                  label={<p className={Styles.TabAddIconTExt}>Investors</p>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<p className={Styles.TabAddIconTExt}>Co-Producers</p>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<p className={Styles.TabAddIconTExt}>Documents</p>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<p className={Styles.TabAddIconTExt}>Distributions</p>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<p className={Styles.TabAddIconTExt}>Project Costs</p>}
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className={Styles.ProjectDetailsTabDetailsContainer}>
                <div className={Styles.ProjectDetailsTabDetailsHeader}>
                  <p className={Styles.ProjectDetailsTabDetailsHeaderText}>
                    Project Information
                  </p>
                  <EditOutlinedIcon
                    className={Styles.ProjectDetailsTabDetailsHeaderEditIcon}
                  />
                </div>
                <div className={Styles.ProjectDetailsInformationContianer}>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Project Name
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        ABC Project
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Status
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        Actively Raising
                      </p>
                    </div>
                  </div>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Start Date
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        02/19/2025
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Deadline
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        05/30/2026
                      </p>
                    </div>
                  </div>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Project Summary
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        Lorem ipsum dolor sit amet, consectetuer ut adipiscing
                        elit, sed diam nonumm euismod tincidunt ut laoreet
                        dolore magna aliquam era volutpat.
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        OA & Subscription Documents
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        <InsertPageBreakOutlinedIcon
                          className={
                            Styles.ProjectDetailsPageInformationDocumentICon
                          }
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={Styles.ProjectDetailsTabDetailsHeader}>
                  <p className={Styles.ProjectDetailsTabDetailsHeaderText}>
                    Project Details
                  </p>
                </div>
                <div className={Styles.ProjectDetailsInformationContianer}>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Billed Name
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        Robin pattison
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Total Capitalization
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        $98,500
                      </p>
                    </div>
                  </div>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Total Allocation
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        $100,500
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Total Raised
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        $60,000
                      </p>
                    </div>
                  </div>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        House Ticket Link
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        https://abc-project/production
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        House Ticket Comments
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        Lorem ipsum dolor sit amet, consectetuer ut{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        General Comments
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        Lorem ipsum dolor sit amet, consectetuer ut{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div>
                <div className={Styles.ProjectDetailsPageInvestorTableHeaderButtonContainer}>
                        <button className={Styles.ProjectDetailsPageInvestorTableHeaderButton} onClick={()=> handleOpenPartysProject()}>Add New</button>
                </div>
                <div className={Styles.ProjectsDetailsPageInvestorTabsContainerTable}>
                  <table>
                    <thead>
                      <tr>{headRow()}</tr>
                    </thead>
                    <tbody className="trhover">{tableData()}</tbody>
                  </table>
                  <div className={Styles.ProjectDetailsPageInvesotrTablePagination}>
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
            <TabPanel value={value} index={2} dir={theme.direction}>
                <CoProducersTable/>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
                <DcoumentsPage/>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              five
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
              six
            </TabPanel>
          </Box>
        </div>
        <div className={Styles.ProjectDetailsPartiesAndNotesContainer}>
                <div className={Styles.ProjectDetailsPartiesAndNotesContentMainContainer}> 
                    <div className={Styles.ProjectDetailsPartiesAndNotesContent}>
                    <div className={Styles.ProjectDetailsPartiesAndNotesContentHeader}>
                        <img src={PartiesImage} alt="PartiesImage"/>
                        <p className={Styles.ProjectDetailsPartiesAndNotesContentHeaderText}>Parties</p>
                    </div>
                    <ExpandMoreOutlinedIcon className={Styles.ProjectDetailsPAtiesAndNotesIcon} onClick={()=> HandleCahngePatiesAndNotes()}/>
                    </div>
                    {partiesAndNotesOpen === true ? <div className={Styles.ProjectDetailsPartiesContainer}>
                            <p className={Styles.ProjectDetailsPartiesContainerText}>Mathew</p>
                            <div className={Styles.ProjectDetailsPartiesContent}>
                                <p className={Styles.ProjectDetailsPartiesContentTitle}>Status</p>
                                <p className={Styles.ProjectDetailsPartiesContentText}>Investing In Deal</p>
                            </div>
                            <div className={Styles.ProjectDetailsPartiesContent}>
                                <p className={Styles.ProjectDetailsPartiesContentTitle}>Interested Amount</p>
                                <p className={Styles.ProjectDetailsPartiesContentText}>General</p>
                            </div>
                            <div className={Styles.ProjectDetailsPartiesContent}>
                                <p className={Styles.ProjectDetailsPartiesContentTitle}>Final Amount</p>
                                <p className={Styles.ProjectDetailsPartiesContentText}>$50,974</p>
                            </div>
                    </div>:""}
                </div>
                <div className={Styles.ProjectDetailsPartiesAndNotesContentMainContainer}> 
                <div className={Styles.ProjectDetailsPartiesAndNotesContent}> 
                    <div className={Styles.ProjectDetailsPartiesAndNotesContentHeader}>
                        <img src={NotesImage} alt="NotesImage"/>
                        <p className={Styles.ProjectDetailsPartiesAndNotesContentHeaderText}>Notes</p>
                    </div>
                    <ExpandMoreOutlinedIcon  className={Styles.ProjectDetailsPAtiesAndNotesIcon} onClick={()=> HandleCahngeNotes()}/>
                </div>
                {notesOpen === true ? <div className={Styles.ProjectDetailsPartiesContainer}>
                            <p className={Styles.ProjectDetailsPartiesContainerText}>Call With Robin</p>
                            <div className={Styles.ProjectDetailsPartiesContent}>
                                <p className={Styles.ProjectDetailsPartiesContentTitle}>Note</p>
                                <p className={Styles.ProjectDetailsPartiesContentText}>Spoke with Robin</p>
                            </div>
                    </div>:""}
                </div>
        </div>
      </div>

      <Modal
          open={openPartysProject}
          onClose={handleClosePartysProject}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupContainer}>
              <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupHeader}>
                <p className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupHeaderText}>
                  New Party's Projects
                </p>
                <CloseOutlinedIcon
                  onClick={() => handleClosePartysProject()}
                  className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupHeaderTextIcon}
                />
              </div>
              <div className={Styles.CreateProjetsdetailsAddPartysProjectTitleContainer}>
                <p className={Styles.CreateProjetsdetailsAddPartysProjectTitle}>
                  Information
                </p>
              </div>
              <div className={Styles.CreateProjetsdetailsAddPartysInputContainer}>
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Investor
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
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Project
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
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Investing Entity Name
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
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Investment Method
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
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Interested Amount
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
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                    Status
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
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                    Final Amount
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
              <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                     Documents Received
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
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Investor Comments
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
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Funds Received
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
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Investment Round
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
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                    Bonus/Perks
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
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                    Co-Producer
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
              </div>
              <div className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsButtonContainer}>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsCancelButton} onClick={()=>handleClosePartysProject()}>
                Cancel
              </button>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsSubmitButton} onClick={()=>handleClosePartysProject()}>
                Save
              </button>
            </div>
            </div>
          </Box>
        </Modal>

        <Modal
          open={openInvestorDocument}
          onClose={handleCloseInvestorDocument}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupContainer}>
              <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupHeader}>
                <p className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupHeaderText}>
                 Upload Investor's Documents
                </p>
                <CloseOutlinedIcon
                  onClick={() => handleCloseInvestorDocument()}
                  className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupHeaderTextIcon}
                />
              </div>
              <div className={Styles.CreateProjetsdetailsAddPartysProjectTitleContainer}>
                <p className={Styles.CreateProjetsdetailsAddPartysProjectTitle}>
                  Upload Summary
                </p>
                <p className={Styles.CreateProjetsdetailsAddPartysProjectText}>
                  You are going To Upload The File Named "ABC Project Agreement2.652.pdf"
                </p>
              </div>
              <div className={Styles.CreateProjetsdetailsAddPartysInputContainer}>
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      File Name
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
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Description
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
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Updated On   <CalendarMonthOutlinedIcon/>
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
               
              </div>
              <div className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsButtonContainer}>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsCancelButton} onClick={()=>handleCloseInvestorDocument()}>
                Cancel
              </button>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsSubmitButton} onClick={()=>handleCloseInvestorDocument()}>
                Upload
              </button>
            </div>
            </div>
          </Box>
        </Modal>

        <Modal
          open={openViewInvestorDocument}
          onClose={handleCloseViewInvestorDocument}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleViewInvestorTable}>
            <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupContainer}>
              <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupHeader}>
                <p className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupHeaderText}>
                 View Investor's Documents
                </p>
                <CloseOutlinedIcon
                  onClick={() => handleCloseViewInvestorDocument()}
                  className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupHeaderTextIcon}
                />
              </div>           
           
              <div className={Styles.ProjectsDetailsPageInvestorTabsContainerTable}>
                  <table>
                    <thead>
                      <tr>{headRowViewInvestorUpdatedDocument()}</tr>
                    </thead>
                    <tbody className="trhover">{tableDataViewInvestorUpdatedDocument()}</tbody>
                  </table>
                </div>

              <div className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsButtonContainer}>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsCancelButton} onClick={()=>handleCloseViewInvestorDocument()}>
                Cancel
              </button>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsSubmitButton} onClick={()=>handleCloseViewInvestorDocument()}>
                Upload
              </button>
            </div>
            </div>
          </Box>
        </Modal>
    </div>
  );
};
export default ProjectDetails;
