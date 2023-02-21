import { SVGProps } from 'react';

function CommentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.3333 3.99992H12.6666V9.33325C12.6666 9.69992 12.3666 9.99992 12 9.99992H3.99998V10.6666C3.99998 11.3999 4.59998 11.9999 5.33331 11.9999H12L14.6666 14.6666V5.33325C14.6666 4.59992 14.0666 3.99992 13.3333 3.99992ZM11.3333 7.33325V2.66659C11.3333 1.93325 10.7333 1.33325 9.99998 1.33325H2.66665C1.93331 1.33325 1.33331 1.93325 1.33331 2.66659V11.3333L3.99998 8.66658H9.99998C10.7333 8.66658 11.3333 8.06659 11.3333 7.33325Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default CommentIcon;
