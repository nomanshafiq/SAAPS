import React, { useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// @material-ui/icons
import NewsList from "../Dashboard/NewsList";
import { app } from "../../Config/firebase";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

// core components
import { db } from "../../Config/firebase";
import UploadImage from "./Imageupload";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
// import Table from "views/JobApplicants/node_modules/components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "../../components/Card/Card";
import Button from "components/CustomButtons/Button.js";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "components/Card/CardFooter.js";
import "../Dashboard/Dashboard.css";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import "../UserProfile/UserProfile.css";
// const useStyles = makeStyles(styles);

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function Dashboard() { 
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState(""); 
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [long_details, setLong_details] = useState("");
  const [file, setfile] = useState("");
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      // var axios = require("axios");
      // var FormData = require("form-data");
      // var fs = require("fs");
      var data = new FormData();
      data.append("image", file);
      data.append("date", date);
      data.append("heading", heading);
      data.append("details", details);
      data.append("long_details", long_details);
      data.append("topic", topic);

      var config = {
        method: "post",
        url: "https://sappss.herokuapp.com/news/add_news",
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwM2YzMzkwNjM5ZGU2MDkyODA1Y2JiNiIsImVtYWlsIjoic2FhcHNfYWRtaW5AZ21haWwuY29tIiwiaXNfQWRtaW4iOnRydWUsImlhdCI6MTYxNDc1Njc4NCwiZXhwIjoxNjUwNzU2Nzg0fQ.9_ApijuVTS9bqlnE1z_OtU9o8F3n54kOD41XZ61dnU4",
          // ...data.getHeaders()
        },
        data: data,
      };

      axios(config)
        .then(function ({ data: response }) {
          const { data, error, success } = response;
          if (success) {
            alert(data);
            resetstate();
          } else {
            alert(error);
          }
        })
        .catch(function (error) {
          alert("Hit error" + error);
          console.log(error);
        });
    } catch (error) {
      alert("Error" + error);
    }
  };
  const resetstate = async (e) => {
    setDate("");
    setTopic("");
    setfile("");
    setLong_details("");
    setDetails("");
    setHeading("");
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={12}>
          <Card>
            <CardHeader color="success" stats icon>
              <form onSubmit={submitHandler}>
                <div className="_margins">
                  <TextField
                    id="date"
                    label="Date"
                    fullWidth
                    type="date"
                    defaultValue="2021-03-04"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>

                <div className="_margins">
                  <TextField
                    id="outlined-textarea"
                    label="Topics"
                    variant="outlined"
                    fullWidth
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>
                <div className="_margins">
                  <TextField
                    id="outlined-textarea"
                    label="Heading"
                    variant="outlined"
                    fullWidth
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                  />
                </div>
                <div className="_margins">
                  <TextField
                    id="outlined-multiline-static"
                    label=" Small Discription"
                    multiline
                    rows={2}
                    variant="outlined"
                    fullWidth
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>
                <div className="_margins">
                  <TextField
                    id="outlined-multiline-static"
                    label=" Large Discription"
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                    value={long_details}
                    onChange={(e) => setLong_details(e.target.value)}
                  />
                </div>
                {/* <div className="_margins">
                  <input type="file" id="myFile" name="filename" />
                </div> */}

                <UploadImage
                  getUrl={(url) => {
                    console.log("Image Url", url);
                    if (url) {
                      // alert(JSON.stringify(url))
                      setfile(url);
                    }
                  }}
                />

                <div className="_margins">
                  <Button
                    className="makeStyles-button-56 makeStyles-primary-59"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </CardHeader>
          </Card>
          <NewsList />
        </GridItem>
      </GridContainer>
    </div>
  );
}
