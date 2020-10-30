import theme from 'theme';

const PantryIcon = ({ fill = theme.palette.primary.contrastText }) => {
  return (
    <svg
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.14735 19.2264C7.70202 19.7216 6.83277 19.9998 6.0858 19.9998C3.51778 19.9998 0 15.4426 0 11.3827C0 7.32277 1.67125 4.44393 4.23927 4.44393C5.63232 4.44393 6.75634 4.6131 7.35656 5.32542L7.34535 5.28058C7.34535 5.28058 6.88168 3.29648 6.12351 2.87968C6.54234 2.65549 7.31784 2.02673 7.31784 2.02673C7.31784 2.02673 8.51217 3.65213 8.51217 5.28262V5.32542C9.39467 4.54788 10.4494 4.06688 12.0544 4.06688C14.6224 4.06688 16.2947 7.32277 16.2947 11.3827C16.2947 15.4426 12.6516 19.9998 10.0836 19.9998C9.33047 19.9998 8.59472 19.7308 8.14735 19.2264Z"
      fill={fill}
    />
    <path
      d="M11.3528 2.62203C10.668 3.75216 9.16287 4.09151 9.16287 4.09151C9.16287 4.09151 8.76748 2.59961 9.45229 1.4705C10.1371 0.341384 11.6412 0 11.6412 0C11.6412 0 12.0366 1.4919 11.3528 2.62203Z"
      fill={fill}
    />
  </svg>
  )
}

export default PantryIcon;
