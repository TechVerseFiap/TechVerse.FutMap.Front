export default function CustomCutoutShape({ className = "", ...props }) {
  const pathData = "M79.9893 0C80.011 0.0280118 110.971 39.9935 109.977 40C108.977 40 104.979 40 104.979 45C99.9805 105 10.0193 105 5.02148 45C5.02147 40 2.02245 40 0.0234375 40C-0.970694 39.9937 29.9911 0.0253322 30.0107 0H79.9893Z";

  return <path d={pathData} className={className} {...props} />;
};
