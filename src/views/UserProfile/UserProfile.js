import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
// core components
import { app } from "../../Config/firebase";
import TestimonialTable from "../UserProfile/TestimonialTable";
import DeleteIcon from "@material-ui/icons/Delete";
import UploadDoc from "../../views/UserProfile/UploadImg";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "components/Card/CardFooter.js";
import { db } from "../../Config/firebase";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import "../UserProfile/UserProfile.css";
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};
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

export default function UserProfile() {
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [long_details, setLong_details] = useState("");
  const [file, setfile] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      var data = new FormData();
      data.append("date", date);
      data.append("heading", heading);
      data.append("details", details);
      data.append("long_details", long_details);
      data.append("topic", topic);
      data.append("image", file);

      var config = {
        method: "post",
        url: "https://sappss.herokuapp.com/webinar/add_webinar",
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwM2YzMzkwNjM5ZGU2MDkyODA1Y2JiNiIsImVtYWlsIjoic2FhcHNfYWRtaW5AZ21haWwuY29tIiwiaXNfQWRtaW4iOnRydWUsImlhdCI6MTYxNDc1Njc4NCwiZXhwIjoxNjUwNzU2Nzg0fQ.9_ApijuVTS9bqlnE1z_OtU9o8F3n54kOD41XZ61dnU4",
          // '': '',
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
        <GridItem xs={12} sm={10} md={12}>
          <Card>
            <CardHeader color="success" stats icon>
              <form onSubmit={(e) => submitHandler(e)}>
                <div className="_margins">
                  <TextField
                    id="date"
                    label="Date"
                    type="date"
                    fullWidth
                    defaultValue="2017-05-24"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className="_margins">
                  <TextField
                    id="outlined-multiline-static"
                    label="Heading"
                    fullWidth
                    variant="outlined"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>
                <div className="_margins">
                  <TextField
                    id="outlined-multiline-static"
                    label="Heading"
                    fullWidth
                    variant="outlined"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                  />
                </div>
                <div className="_margins">
                  <TextField
                    id="outlined-multiline-static"
                    label="Small Discription"
                    multiline
                    rows={2}
                    fullWidth
                    variant="outlined"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>
                <div className="_margins">
                  <TextField
                    id="outlined-multiline-static"
                    label="Small Discription"
                    multiline
                    rows={6}
                    fullWidth
                    variant="outlined"
                    value={long_details}
                    onChange={(e) => setLong_details(e.target.value)}
                  />
                </div>
                <UploadDoc
                  getUrl={(url) => {
                    console.log("Image Url", url);
                    if (url) {
                      // alert(JSON.stringify(url))
                      setfile(url);
                    }
                  }}
                />
                {/* <div className="_margins">
                  <div>
                    <input type="file" name="doc" />
                  </div>
                </div> */}
                <div className="_margins">
                  <Button variant="contained" color="primary" type="submit">
                    Save
                  </Button>
                </div>
              </form>
            </CardHeader>
          </Card>

          <TestimonialTable />
        </GridItem>
      </GridContainer>
    </div>
  );
}
