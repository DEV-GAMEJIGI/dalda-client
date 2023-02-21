import { SVGProps } from 'react';

function HeartFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.89998 13.4199C8.39331 13.8799 7.61331 13.8799 7.10665 13.4133L7.03331 13.3466C3.53331 10.1799 1.24665 8.10661 1.33331 5.51995C1.37331 4.38661 1.95331 3.29995 2.89331 2.65995C4.65331 1.45995 6.82665 2.01995 7.99998 3.39328C9.17331 2.01995 11.3466 1.45328 13.1066 2.65995C14.0466 3.29995 14.6266 4.38661 14.6666 5.51995C14.76 8.10661 12.4666 10.1799 8.96665 13.3599L8.89998 13.4199Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default HeartFilledIcon;
