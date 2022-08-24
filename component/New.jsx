import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
function New() {
  return (
    <div className="App">
      <p className="vh-100">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
        similique, id corrupti quidem praesentium fugiat soluta necessitatibus
        quam ratione numquam dolor pariatur nostrum eius autem sint dicta
        obcaecati accusamus quasi.
      </p>
      <div
        className="head"
        style={{
          width: "fit-content",
          margin: "auto",
        }}
      >
        <h1
          style={{
            color: "green",
          }}
        >
          GeeksforGeeks
        </h1>
        <strong>React MUI TimelineDot API</strong>
      </div>

      <Timeline>
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot color="error" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Frontend Learning Path</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>HTML</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>CSS</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>Javascript</TimelineContent>
        </TimelineItem>
      </Timeline>
      <div className="vh-100"></div>
    </div>
  );
}

export default New;
