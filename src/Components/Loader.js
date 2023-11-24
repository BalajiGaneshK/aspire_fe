import { ProgressBar } from "react-loader-spinner";

function Loader(props) {
  const { width, height } = props;
  return (
    <ProgressBar
      height={height}
      width={width}
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#0C365A"
      barColor="#01D167"
    />
  );
}

export default Loader;
