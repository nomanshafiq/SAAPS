import React, { Component } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import DeleteIcon from "@material-ui/icons/Delete";
import firebase from "../../Config/firebase";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Table from "../../components/Table/Table";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";

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
class NewsList extends Component {
  state = {
    datasource:[]
  };
  componentDidMount() {
    this.getInitialData()
    }
    getInitialData=async()=>{
      const that=this
      var axios = require('axios');
      var config = {
        method: 'get',
        url: 'https://sappss.herokuapp.com/news/get_news',
        headers: { }
      };
      
      axios(config)
      .then(function ({data:response}) {
        const {data,error,success}=response
     
        if(success)
        {
          that.setState({ datasource:data });
        }
        else{
          alert(error)
        }
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className="cardTitleWhite">News Table</h4>
            </CardHeader>
            <CardBody>
              <div className="MainDiv">
                <div className="container">
                  <table id="example" class="display table">
                    <thead class="thead-dark">
                      <tr className="table_content">
                        {/* <th>Sr.No</th> */}
                        <th>Image</th>
                        <th>Date</th>
                        <th>Topic</th>
                        <th>Heading</th>
                        <th>Small Description</th>
                        <th>Large Description</th>                      
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.datasource.map((entry) => (
                        <tr key={entry.id} style={{wordBreak:"break-word"}}>
                       
                          <td>
                            <img
                              style={{
                                border: "1px solid #ddd",
                                borderRadius: "4px",
                                adding: "5px",
                                width: "150px",
                              }}
                              src={entry.image}
                              className="img-fluid img-thumbnail"
                              alt="new"
                            />
                          </td>
                          <td>{entry.date}</td>
                          <td>{entry.topic}</td>
                          <td>{entry.heading}</td>
                          <td>{entry.details}</td>
                          <td>{entry.long_details}</td>
                          {/* <td>
                            <DeleteIcon
                              onClick={() => this.handleRemove(entry.id)}
                            />
                          </td> */}
                        </tr>
                      ))}
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

export default NewsList;
