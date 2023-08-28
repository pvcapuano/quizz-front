import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { red, green } from "@mui/material/colors";

interface AnswerProps {
  qnAnswers: {
    qnInWords: string;
    answer: number;
    selected: number;
    options: string[];
  }[];
}

export default function Answer({ qnAnswers }: AnswerProps) {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markCorrectOrNot = (qna: any, idx: number) => {
    if ([qna.answer, qna.selected].includes(idx)) {
      return { sx: { color: qna.answer === idx ? green[500] : red[500] } };
    }
  };

  return (
    <Box sx={{ mt: 5, width: "100%", maxWidth: 640, mx: "auto" }}>
      {qnAnswers.map((item, j) => (
        <Accordion
          disableGutters
          key={j}
          expanded={expanded === j}
          onChange={handleChange(j)}
          sx={{ backgroundColor: "white" }} // Set background color to white
        >
          <AccordionSummary
            expandIcon={
              <ExpandCircleDownIcon
                sx={{
                  color: item.answer === item.selected ? green[500] : red[500],
                }}
              />
            }
          >
            <Typography sx={{ width: "90%", flexShrink: 0 }}>
              {item.qnInWords}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {item.options.map((x, i) => (
                <ListItem key={i}>
                  <Typography {...markCorrectOrNot(item, i)}>
                    <b>{String.fromCharCode(65 + i) + ". "}</b>
                    {x}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
