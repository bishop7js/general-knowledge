import React, { useState } from "react";
import Data from "../config/data.json";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const QuestionsList = () => {
  const [answer, setAnswer] = useState(10);

  const renderQuestionsList = () => {
    return Data.QuestionsList.map((item) => {
      return (
        <div>
          <Card
            sx={{
              minWidth: 275,
              backgroundColor: answer === item.id ? "#FF7C7C" : "#9BCCE8",
              marginBottom: 2,
              width: "80%",
            }}
          >
            <CardActions>
              <Button style={{color: "black", textAlign: "left"}} onClick={() => generateAnswer(item.id)} size="small">
                {answer === item.id ? item.answer : item.question}
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    });
  };

  const generateAnswer = (id) => {
    setAnswer(id);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>General knowledge</h1>
      </div>
      <div>{renderQuestionsList()}</div>
    </div>
  );
};

export default QuestionsList;
