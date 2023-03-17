import React, { useEffect } from "react";
import { getTime } from "../../services/timeService";

export default function Time() {
  const [time, setTime] = React.useState();
  useEffect(() => {
    getTime().then((datetime) => setTime(datetime));
  }, []);
  return <>CSR Time: {time}</>;
}
