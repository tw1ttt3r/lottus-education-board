import { FC } from "react";

type EditIconProps = {
  className?: string;
}

const EditIcon: FC<EditIconProps> = ({ className }: EditIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 490.008 490.008"
      version="1.1"
      viewBox="0 0 490.008 490.008"
      xmlSpace="preserve"
      className={className}
    >
      <path fill="currentColor" d="M156.7 142.865h88.6c11.5 0 20.8-9.4 20.8-20.9s-9.4-20.9-20.8-20.9h-88.6c-11.5 0-20.8 9.4-20.8 20.9 0 11.5 9.4 20.9 20.8 20.9zM266.1 223.165c0-11.5-9.4-20.9-20.8-20.9h-88.6c-11.5 0-20.8 9.4-20.8 20.9s9.4 20.9 20.8 20.9h88.6c11.5 0 20.8-9.4 20.8-20.9z"></path>
      <ellipse fill="currentColor" cx="94.2" cy="122.065" rx="20.5" ry="20.5"></ellipse>
      <ellipse fill="currentColor" cx="94.2" cy="223.165" rx="20.5" ry="20.5"></ellipse>
      <path fill="currentColor" d="M483.7 258.965l-81.3-81.3c-8.3-8.3-20.8-8.3-29.2 0l-24.3 24.2v-168.5c0-18.4-14.9-33.3-33.3-33.3H33.3c-18.4 0-33.3 15-33.3 33.3v281c0 18.4 14.9 33.3 33.3 33.3h169l-4.1 4c-2.1 3.1-4.2 6.3-5.2 10.4l-20.8 102.2c-3.9 20.1 10.4 28.2 24 25l102.1-20.9c4.2 0 7.3-2.1 10.4-5.2l175-175.1c4.2-4 11.8-15.9 0-29.1zM40 307.765v-267.7h269v201.5l-66.5 66.1H40v.1zm243.7 121.2l-65.6 13.6 13.5-65.7 155.2-155.3 53.1 52.1-156.2 155.3z"></path>
    </svg>
  );
}

export default EditIcon;
