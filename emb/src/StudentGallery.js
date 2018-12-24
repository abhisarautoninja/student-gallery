import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


const StudentGallery = ({data, getTotalMarks}) => 
(<Grid>
    <Row className="show-grid">
    {Object.keys(data).map(key => (
        <Col xs={12} md={6} lg={4}>
            <Link to={{pathname: `/student/${key}/${JSON.stringify(data[key].marks)}`}}>
                <div className="card">
                    <div className="container">
                    <h4>
                        <b>{data[key].name}</b>
                    </h4>
                    <p>{data[key].name}</p>
                    <p>
                        {getTotalMarks(data[key])}
                    </p>
                    </div>
                </div>
            </Link>
        </Col>
    ))}
    </Row>
</Grid>);
export default (StudentGallery);
