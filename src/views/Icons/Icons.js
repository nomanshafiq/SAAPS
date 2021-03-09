/*eslint-disable*/
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import Button from "components/CustomButtons/Button.js";
import CardHeader from "../../components/Card/CardHeader";

import CardBody from "../../components/Card/CardBody";
import UploadImg from "./uploadimage";
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import ActionCenterList from "./ActionCenterList"
import axios from "axios";
export default function Icons() {


  const [file, setfile] = useState("");
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      
      var data = new FormData();
      data.append("image", file);
      var config = {
        method: 'post',
        url: 'https://sappss.herokuapp.com/action_center/add_action_center',
        headers: { 
          'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwM2YzMzkwNjM5ZGU2MDkyODA1Y2JiNiIsImVtYWlsIjoic2FhcHNfYWRtaW5AZ21haWwuY29tIiwiaXNfQWRtaW4iOnRydWUsImlhdCI6MTYxNDc1Njc4NCwiZXhwIjoxNjUwNzU2Nzg0fQ.9_ApijuVTS9bqlnE1z_OtU9o8F3n54kOD41XZ61dnU4', 
          // ...data.getHeaders()
        },
        data : data
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
 
    setfile("");
  
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
      <Card>
      <CardHeader color="success" stats icon>
      <form 
      onSubmit={submitHandler}
      >
          

                <UploadImg
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
        <ActionCenterList/>
      </GridItem>
    </GridContainer>
  );
}
