import { Box, SxProps, Theme } from "@mui/material";
import moment from "moment";
import * as React from "react";
import { fontSizes } from "../constant/sizes";
import Text from "./Text";
interface Props {
  styles?: SxProps<Theme>;
}
const Timer = ({ styles }: Props) => {
  const futureDate = React.useMemo(() => {
    const savedDate = localStorage.getItem("futureDate");
    if (savedDate) {
      return moment(savedDate);
    } else {
      const newFutureDate = moment().add(4, "days");
      localStorage.setItem("futureDate", newFutureDate.toISOString());
      return newFutureDate;
    }
  }, []);

  const calculateTimeLeft = () => {
    const now = moment();
    const duration = moment.duration(moment(futureDate).diff(now));

    return {
      days: String(Math.floor(duration.asDays())).padStart(2, "0"),
      hours: String(duration.hours()).padStart(2, "0"),
      minutes: String(duration.minutes()).padStart(2, "0"),
      seconds: String(duration.seconds()).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [futureDate]);

  return (
    <Box sx={{ display: "flex",...styles }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", paddingInline: "1vw" }}
      >
        <Text fontSize={fontSizes.sm} fontWeight={"600"}>
          {"Day"}
        </Text>
        <Text fontSize={fontSizes.xxl} lineHeight={1} fontWeight={"600"}>
          {timeLeft.days}
        </Text>
      </Box>
      <Text fontSize={fontSizes.xxl} marginTop={"1vh"}>
        {":"}
      </Text>
      <Box
        sx={{ display: "flex", flexDirection: "column", paddingInline: "1vw" }}
      >
        <Text fontSize={fontSizes.sm} fontWeight={"600"}>
          {"Hours"}
        </Text>
        <Text fontSize={fontSizes.xxl} lineHeight={1} fontWeight={"600"}>
          {timeLeft.hours}
        </Text>
      </Box>
      <Text fontSize={fontSizes.xxl} marginTop={"1vh"}>
        {":"}
      </Text>
      <Box
        sx={{ display: "flex", flexDirection: "column", paddingInline: "1vw" }}
      >
        <Text fontSize={fontSizes.sm} fontWeight={"600"}>
          {"Minutes"}
        </Text>
        <Text fontSize={fontSizes.xxl} lineHeight={1} fontWeight={"600"}>
          {timeLeft.minutes}
        </Text>
      </Box>
      <Text fontSize={fontSizes.xxl} marginTop={"1vh"}>
        {":"}
      </Text>
      <Box
        sx={{ display: "flex", flexDirection: "column", paddingInline: "1vw" }}
      >
        <Text fontSize={fontSizes.sm} fontWeight={"600"}>
          {"Seconds"}
        </Text>
        <Text fontSize={fontSizes.xxl} lineHeight={1} fontWeight={"600"}>
          {timeLeft.seconds}
        </Text>
      </Box>
    </Box>
  );
};

export default Timer;
