import React from "react";

type IconStarProps = {
  size?: number;
  color?: string;
  backgroundColor?: string;
} & React.HtmlHTMLAttributes<HTMLOrSVGElement>;

const IconStar: React.FC<IconStarProps> = ({
  size = 24,
  color = "var(--yellow)", //EBCC34
  backgroundColor = "none",
  ...props
}) => {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={backgroundColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7327 5.69972C11.2366 4.62627 12.7634 4.62627 13.2673 5.69973L14.4639 8.2488C14.6621 8.67101 15.0575 8.96679 15.5185 9.03765L18.3088 9.4665C19.4347 9.63955 19.8937 11.0132 19.0978 11.8283L16.9938 13.9832C16.6833 14.3012 16.5422 14.7479 16.6138 15.1866L17.0978 18.154C17.286 19.3076 16.0614 20.1702 15.0386 19.6046L12.6775 18.2989C12.2559 18.0658 11.7441 18.0658 11.3225 18.2989L8.96143 19.6046C7.93864 20.1702 6.71405 19.3076 6.9022 18.1541L7.38621 15.1866C7.45777 14.7479 7.31672 14.3012 7.00617 13.9832L4.90217 11.8283C4.10634 11.0132 4.56525 9.63955 5.6912 9.4665L8.48145 9.03765C8.94245 8.96679 9.33789 8.67101 9.53609 8.2488L10.7327 5.69972Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconStar;
