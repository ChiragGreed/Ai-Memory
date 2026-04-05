const VexaLogo = ({ size = 28, radius = 6 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="72" height="72" rx={radius} fill="#111116" />
    <polygon points="13,17 27,17 36,44 45,17 59,17 36,57" fill="#e8a930" />
    <polygon points="31,31 36,44 41,31 36,37" fill="#111116" />
    <circle cx="36" cy="57" r="5" fill="#f0eee8" />
  </svg>
);

export default VexaLogo;
