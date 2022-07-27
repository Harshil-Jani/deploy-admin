import * as React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import "../app.css"
export default () => (
    // <Card>
    //     <CardHeader title="Education Registry"/>
    //     <CardContent>This is your <b> Registry</b>.</CardContent>
    // </Card>
    <Card sx={{ height: "80vh" , alignItems : "center"}}>
        <CardHeader title="Educational Registry" />
        <CardContent>This is your <b>Educational Registry</b>.</CardContent>
        <div className="pic">
        <img src="https://images.shiksha.com/mediadata/images/articles/1598380914phpd2lW3E.jpeg"/>
        </div>
    </Card>
);