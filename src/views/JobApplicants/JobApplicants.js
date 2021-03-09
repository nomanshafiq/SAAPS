import React, { Component } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
// core components
import firebase from "../../Config/firebase";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

class JobApplicants extends Component {
  state = {};
  //   constructor(props) {
  //     super(props);

  //     this.state = { data: [] };
  //   }

  //   async componentDidMount() {
  //     let data = [];
  //     let querySnapshot = await firebase
  //       .firestore()
  //       .collection("Career_info")
  //       .get();
  //     // console.log(querySnapshot);
  //     querySnapshot.forEach(function (doc) {
  //       if (doc.exists) {

  //         let obj = doc.data();
  //         obj["id"] = doc.id;
  //         data.push(obj);
  //       } else {
  //         return false;
  //       }
  //     });
  //     // console.log('data',data)
  //     this.setState({ data: data });

  //   }
  //  async handleRemove(id) {

  //     await firebase.firestore().collection("Career_info").doc(id).delete();
  //     let {data}=this.state
  //     let a=data.filter((i)=>i.id!=id)
  //     this.setState({data : a });

  // }

  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className="">Subscriber List</h4>
            </CardHeader>
            <CardBody>
              <div className="MainDiv">
                <div className="container">
                  <table id="example" class="display table">
                    <thead class="thead-dark">
                      <tr className="table_content">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Country</th>
                        <th>Age</th>
                        <th>Profession</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {this.state.data.map((entry) => (
                        <tr key={entry.id}>
                          <td>{entry.name}</td>
                          <td>{entry.email}</td>
                          <td><a href={entry.url} download><CloudDownload/></a></td>
                      
                         
                          <td>< DeleteIcon onClick={()=>this.handleRemove(entry.id)} /></td>
                        </tr>
                      ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default JobApplicants;
