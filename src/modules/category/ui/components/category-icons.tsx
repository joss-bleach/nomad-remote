import { type FC } from "react";

interface IconProps {
  className?: string;
  isActive?: boolean;
}

export const BeachfrontIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.9142 3.75C14.5474 3.75 14.25 4.04738 14.25 4.41421V4.5H12.75V4.41421C12.75 3.21895 13.719 2.25 14.9142 2.25C15.4882 2.25 16.0387 2.47801 16.4445 2.88388L17.5 3.93934L18.0555 3.38388C18.4613 2.97801 19.0118 2.75 19.5858 2.75C20.781 2.75 21.75 3.71895 21.75 4.91421V5H20.25V4.91421C20.25 4.54738 19.9526 4.25 19.5858 4.25C19.4096 4.25 19.2407 4.31998 19.1161 4.44454L18.2405 5.32015C18.4087 5.27418 18.5845 5.25 18.7639 5.25C19.8608 5.25 20.75 6.13919 20.75 7.23607V7.5H19.25V7.23607C19.25 6.96762 19.0324 6.75 18.7639 6.75C18.5798 6.75 18.4115 6.85402 18.3292 7.01869L18.296 7.08503C18.5639 8.17957 18.5434 9.3282 18.2322 10.4175L17.8585 11.7253C17.7865 11.9772 17.75 12.238 17.75 12.5H16.25C16.25 12.0986 16.3059 11.6992 16.4162 11.3132L16.7899 10.0054C17.0669 9.03585 17.0445 8.00519 16.7256 7.04856L16.5534 6.5319C16.4973 6.36355 16.3397 6.25 16.1623 6.25C15.9346 6.25 15.75 6.43458 15.75 6.66228V7H14.25V6.66228C14.25 5.60616 15.1062 4.75 16.1623 4.75L16.1895 4.75019L15.3839 3.94454C15.2593 3.81998 15.0904 3.75 14.9142 3.75Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 8.5C3 9.05228 3.44772 9.5 4 9.5V11.5C4 12.6046 4.89543 13.5 6 13.5H11C12.1046 13.5 13 12.6046 13 11.5L13 9.5C13.5523 9.5 14 9.05228 14 8.5C14 5.73858 11.7614 3.5 9 3.5H8C5.23858 3.5 3 5.73858 3 8.5ZM12.4646 8H4.53544C4.77806 6.30385 6.23676 5 8 5H9C10.7632 5 12.2219 6.30385 12.4646 8ZM5.5 9.5H11.5V11.5C11.5 11.7761 11.2761 12 11 12H9.25V11C9.25 10.5858 8.91421 10.25 8.5 10.25C8.08579 10.25 7.75 10.5858 7.75 11V12H6C5.72386 12 5.5 11.7761 5.5 11.5V9.5Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M2 17.6655V15.9959C2.03757 15.9983 2.07535 15.9995 2.11328 15.9995C2.526 15.9974 2.92039 15.8535 3.21089 15.5904C3.83788 15.0225 4.64598 14.75 5.43613 14.75C6.22627 14.75 7.03437 15.0225 7.66136 15.5904C7.95401 15.8555 8.3521 15.9995 8.76814 15.9995C9.18418 15.9995 9.58227 15.8555 9.87492 15.5904C10.5019 15.0225 11.31 14.75 12.1002 14.75C12.8903 14.75 13.6984 15.0225 14.3254 15.5904C14.618 15.8555 15.0161 15.9995 15.4322 15.9995C15.8482 15.9995 16.2463 15.8555 16.5389 15.5904C17.1659 15.0225 17.974 14.75 18.7642 14.75C19.5543 14.75 20.3624 15.0225 20.9894 15.5904C21.2575 15.8333 21.6142 15.9745 21.9921 15.9965V17.6639C21.2355 17.641 20.4704 17.3681 19.871 16.8251C19.5783 16.5601 19.1802 16.416 18.7642 16.416C18.3481 16.416 17.95 16.5601 17.6574 16.8251C17.0304 17.3931 16.2223 17.6655 15.4322 17.6655C14.642 17.6655 13.8339 17.3931 13.2069 16.8251C12.9143 16.5601 12.5162 16.416 12.1002 16.416C11.6841 16.416 11.286 16.5601 10.9934 16.8251C10.3664 17.3931 9.55828 17.6655 8.76814 17.6655C7.97799 17.6655 7.16989 17.3931 6.54291 16.8251C6.25026 16.5601 5.85217 16.416 5.43613 16.416C5.02008 16.416 4.62199 16.5601 4.32934 16.8251C3.70236 17.3931 2.89426 17.6655 2.10411 17.6655H2.06237C2.04815 17.6655 2.04094 17.6657 2.03499 17.6658C2.02645 17.666 2.02048 17.6662 2 17.6655Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M2 21.9155V20.2459C2.03757 20.2483 2.07535 20.2495 2.11328 20.2495C2.526 20.2474 2.92039 20.1035 3.21089 19.8404C3.83788 19.2725 4.64598 19 5.43613 19C6.22627 19 7.03437 19.2725 7.66136 19.8404C7.95401 20.1055 8.3521 20.2495 8.76814 20.2495C9.18418 20.2495 9.58227 20.1055 9.87492 19.8404C10.5019 19.2725 11.31 19 12.1002 19C12.8903 19 13.6984 19.2725 14.3254 19.8404C14.618 20.1055 15.0161 20.2495 15.4322 20.2495C15.8482 20.2495 16.2463 20.1055 16.5389 19.8404C17.1659 19.2725 17.974 19 18.7642 19C19.5543 19 20.3624 19.2725 20.9894 19.8404C21.2575 20.0833 21.6142 20.2245 21.9921 20.2465V21.9139C21.2355 21.891 20.4704 21.6181 19.871 21.0751C19.5783 20.8101 19.1802 20.666 18.7642 20.666C18.3481 20.666 17.95 20.8101 17.6574 21.0751C17.0304 21.6431 16.2223 21.9155 15.4322 21.9155C14.642 21.9155 13.8339 21.6431 13.2069 21.0751C12.9143 20.8101 12.5162 20.666 12.1002 20.666C11.6841 20.666 11.286 20.8101 10.9934 21.0751C10.3664 21.6431 9.55828 21.9155 8.76814 21.9155C7.97799 21.9155 7.16989 21.6431 6.54291 21.0751C6.25026 20.8101 5.85217 20.666 5.43613 20.666C5.02008 20.666 4.62199 20.8101 4.32934 21.0751C3.70236 21.6431 2.89426 21.9155 2.10411 21.9155H2.06237C2.04834 21.9155 2.04114 21.9157 2.03524 21.9158C2.02669 21.916 2.02049 21.9162 2 21.9155Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export const CountrysideIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 10.75H7.67158C9.55226 10.75 11.3609 11.4491 12.75 12.7033V9.81066L12.0303 10.5303L10.9697 9.46967L12.75 7.68934V4.5H14.25V6.18934L14.5555 5.88388C15.6294 4.80994 17.3706 4.80994 18.4445 5.88388L22.0303 9.46967L20.9697 10.5303L20.25 9.81066V12.25H22V13.75H16C13.6044 13.75 11.3145 14.6872 9.61059 16.3436C11.4393 16.679 13.1966 17.3297 14.8037 18.2672L14.9228 18.3367C17.0709 19.5897 19.5131 20.25 22 20.25V21.75C19.2476 21.75 16.5445 21.0192 14.167 19.6324L14.0479 19.5629C12.5227 18.6732 10.8483 18.0684 9.10659 17.7781L7.74182 17.5506C6.54128 17.3506 5.32626 17.25 4.10916 17.25H2V15.75H4.10916C5.35799 15.75 6.60477 15.8491 7.83776 16.0464L7.97228 15.8927C8.88991 14.844 9.9924 13.9979 11.2099 13.386C10.1847 12.652 8.94886 12.25 7.67158 12.25H2V10.75H5.75V9.45015C5.37497 9.64186 4.95011 9.75 4.5 9.75H3.5V8.25H4.5C5.19036 8.25 5.75 7.69036 5.75 7V6.45015C5.37497 6.64186 4.95011 6.75 4.5 6.75H3.5V5.25H4.5C5.19036 5.25 5.75 4.69036 5.75 4V3H7.25V4C7.25 4.69036 7.80964 5.25 8.5 5.25H9.5V6.75H8.5C8.04989 6.75 7.62503 6.64186 7.25 6.45015V7C7.25 7.69036 7.80964 8.25 8.5 8.25H9.5V9.75H8.5C8.04989 9.75 7.62503 9.64186 7.25 9.45015V10.75ZM18.75 8.31066V12.25H17.25V10H15.75V12.2529C15.2443 12.2648 14.7431 12.3124 14.25 12.3945V8.31066L15.6161 6.94454C16.1043 6.45639 16.8957 6.45639 17.3839 6.94454L18.75 8.31066Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export const LakefrontIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 12.25V7.44909C2.75 6.94922 2.96376 6.47321 3.33736 6.14112L6.87131 2.99984C7.50859 2.43337 8.46136 2.40864 9.12716 2.94128L13.0932 6.11413C13.5083 6.44623 13.75 6.94902 13.75 7.48065V12.25H17.25V9.45015C16.875 9.64186 16.4501 9.75 16 9.75H15V8.25H16C16.6904 8.25 17.25 7.69036 17.25 7V6.45015C16.875 6.64186 16.4501 6.75 16 6.75H15V5.25H16C16.6904 5.25 17.25 4.69036 17.25 4V3H18.75V4C18.75 4.69036 19.3096 5.25 20 5.25H21V6.75H20C19.5499 6.75 19.125 6.64186 18.75 6.45015V7C18.75 7.69036 19.3096 8.25 20 8.25H21V9.75H20C19.5499 9.75 19.125 9.64186 18.75 9.45015V12.25H22V13.75H2V12.25H2.75ZM7.86785 4.12095C7.95889 4.04003 8.095 4.03649 8.19012 4.11259L12.1562 7.28543C12.2155 7.33287 12.25 7.4047 12.25 7.48065V12.25H10.75V10C10.75 9.0335 9.9665 8.25 9 8.25H7.5C6.5335 8.25 5.75 9.0335 5.75 10V12.25H4.25V7.44909C4.25 7.37768 4.28054 7.30968 4.33391 7.26224L7.86785 4.12095ZM9.25 10V12.25H7.25V10C7.25 9.86193 7.36193 9.75 7.5 9.75H9C9.13807 9.75 9.25 9.86193 9.25 10Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M2 15.9959V17.6655C2.02048 17.6662 2.02645 17.666 2.03499 17.6658C2.04094 17.6657 2.04815 17.6655 2.06237 17.6655H2.10411C2.89426 17.6655 3.70236 17.3931 4.32934 16.8251C4.62199 16.5601 5.02008 16.416 5.43613 16.416C5.85217 16.416 6.25026 16.5601 6.54291 16.8251C7.16989 17.3931 7.97799 17.6655 8.76814 17.6655C9.55828 17.6655 10.3664 17.3931 10.9934 16.8251C11.286 16.5601 11.6841 16.416 12.1002 16.416C12.5162 16.416 12.9143 16.5601 13.2069 16.8251C13.8339 17.3931 14.642 17.6655 15.4322 17.6655C16.2223 17.6655 17.0304 17.3931 17.6574 16.8251C17.95 16.5601 18.3481 16.416 18.7642 16.416C19.1802 16.416 19.5783 16.5601 19.871 16.8251C20.4704 17.3681 21.2355 17.641 21.9921 17.6639V15.9965C21.6142 15.9745 21.2575 15.8333 20.9894 15.5904C20.3624 15.0225 19.5543 14.75 18.7642 14.75C17.974 14.75 17.1659 15.0225 16.5389 15.5904C16.2463 15.8555 15.8482 15.9995 15.4322 15.9995C15.0161 15.9995 14.618 15.8555 14.3254 15.5904C13.6984 15.0225 12.8903 14.75 12.1002 14.75C11.31 14.75 10.5019 15.0225 9.87492 15.5904C9.58227 15.8555 9.18418 15.9995 8.76814 15.9995C8.3521 15.9995 7.95401 15.8555 7.66136 15.5904C7.03437 15.0225 6.22627 14.75 5.43613 14.75C4.64598 14.75 3.83788 15.0225 3.21089 15.5904C2.92039 15.8535 2.526 15.9974 2.11328 15.9995C2.07535 15.9995 2.03757 15.9983 2 15.9959Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M2 20.2459V21.9155C2.02049 21.9162 2.02669 21.916 2.03524 21.9158C2.04113 21.9157 2.0484 21.9155 2.06237 21.9155H2.10411C2.89426 21.9155 3.70236 21.6431 4.32934 21.0751C4.62199 20.8101 5.02008 20.666 5.43613 20.666C5.85217 20.666 6.25026 20.8101 6.54291 21.0751C7.16989 21.6431 7.97799 21.9155 8.76814 21.9155C9.55828 21.9155 10.3664 21.6431 10.9934 21.0751C11.286 20.8101 11.6841 20.666 12.1002 20.666C12.5162 20.666 12.9143 20.8101 13.2069 21.0751C13.8339 21.6431 14.642 21.9155 15.4322 21.9155C16.2223 21.9155 17.0304 21.6431 17.6574 21.0751C17.95 20.8101 18.3481 20.666 18.7642 20.666C19.1802 20.666 19.5783 20.8101 19.871 21.0751C20.4704 21.6181 21.2355 21.891 21.9921 21.9139V20.2465C21.6142 20.2245 21.2575 20.0833 20.9894 19.8404C20.3624 19.2725 19.5543 19 18.7642 19C17.974 19 17.1659 19.2725 16.5389 19.8404C16.2463 20.1055 15.8482 20.2495 15.4322 20.2495C15.0161 20.2495 14.618 20.1055 14.3254 19.8404C13.6984 19.2725 12.8903 19 12.1002 19C11.31 19 10.5019 19.2725 9.87492 19.8404C9.58227 20.1055 9.18418 20.2495 8.76814 20.2495C8.3521 20.2495 7.95401 20.1055 7.66136 19.8404C7.03437 19.2725 6.22627 19 5.43613 19C4.64598 19 3.83788 19.2725 3.21089 19.8404C2.92039 20.1035 2.526 20.2474 2.11328 20.2495C2.07535 20.2495 2.03757 20.2483 2 20.2459Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export const HouseboatIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.25C10.6409 2.25 9.51209 3.23592 9.28974 4.53156C5.76097 5.44999 3.09869 8.51573 2.78169 12.25H2V13.75H22V12.25H21.2183C20.9013 8.51573 18.239 5.44999 14.7103 4.53156C14.4879 3.23592 13.3591 2.25 12 2.25ZM12 3.75C11.5845 3.75 11.2163 3.95273 10.9891 4.26467C11.1581 4.25494 11.3285 4.25 11.5 4.25H12.5C12.6715 4.25 12.8419 4.25494 13.0109 4.26467C12.7837 3.95273 12.4155 3.75 12 3.75ZM19.7117 12.25C19.3364 8.59833 16.2508 5.75 12.5 5.75H11.5C7.74918 5.75 4.66362 8.59833 4.28832 12.25H19.7117Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8489 15.2905C18.2476 14.2882 16.9626 13.9388 15.9365 14.4985L14.1664 15.464C13.94 14.7597 13.2795 14.25 12.5 14.25H6C5.0335 14.25 4.25 15.0335 4.25 16V18.2792C4.25 19.0325 4.732 19.7012 5.4466 19.9394L8.79804 21.0566C10.2448 21.5388 11.8238 21.4266 13.1878 20.7446L17.9548 18.3611C19.0903 17.7934 19.5021 16.3791 18.8489 15.2905ZM12.75 16V16.2366L12.3124 16.4753C11.9819 16.6555 11.6115 16.75 11.235 16.75H9V18.25H11.235C11.8625 18.25 12.4799 18.0926 13.0307 17.7921L16.6548 15.8153C16.9747 15.6409 17.3752 15.7498 17.5627 16.0622C17.7663 16.4016 17.6379 16.8425 17.284 17.0195L12.517 19.403C11.5088 19.9071 10.3417 19.99 9.27238 19.6336L5.92094 18.5164C5.81886 18.4824 5.75 18.3868 5.75 18.2792V16C5.75 15.8619 5.86193 15.75 6 15.75H12.5C12.6381 15.75 12.75 15.8619 12.75 16Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export const TropicalIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.803 3.00478C16.2767 2.98235 15.7655 3.03937 15.2809 3.16519L15.2706 3.16066L15.267 3.16883C13.9438 3.51636 12.8203 4.37724 12.1332 5.53406C11.1556 4.00387 9.41057 3.02303 7.46624 3.11063C4.56773 3.24121 2.32388 5.69678 2.45447 8.5953L3.95295 8.52778C3.88488 7.01694 4.71975 5.67454 5.98045 5.02271C5.45681 5.77239 5.10964 6.74083 5.25541 7.94958L6.74462 7.76999C6.55974 6.23691 7.6259 5.22968 8.5302 4.69669C8.76065 4.74862 8.98341 4.82185 9.19618 4.91429C9.00965 5.12071 8.84968 5.35479 8.71754 5.61829C8.40401 6.24346 8.26881 6.99048 8.25016 7.84339L9.74981 7.87617C9.76572 7.14829 9.88052 6.64534 10.0584 6.29073C10.157 6.09407 10.2814 5.92982 10.4405 5.79094C10.8636 6.24165 11.1775 6.79789 11.3374 7.41881C11.459 8.16132 11.5206 8.8653 11.5305 9.53209C10.0366 8.25414 7.88324 7.87099 5.96897 8.72622C3.31988 9.90974 2.1318 13.0167 3.31532 15.6658L4.68485 15.0539C4.12071 13.7912 4.31075 12.3829 5.06178 11.3342C5.08026 12.3507 5.26301 13.5629 5.82914 14.6952L7.17079 14.0244C6.46604 12.6149 6.50926 10.979 6.63084 10.0738C6.99264 9.91835 7.36578 9.8242 7.73848 9.78689C7.66487 10.1871 7.66015 10.5963 7.68965 10.9798C7.75951 11.888 8.03439 12.8349 8.28845 13.597L9.71147 13.1226C9.4655 12.3848 9.24038 11.5817 9.18524 10.8648C9.15658 10.4923 9.17691 10.1873 9.2387 9.94236C10.1191 10.2198 10.8941 10.8189 11.3753 11.6677C11.0878 13.3949 10.4299 14.8101 9.61516 15.9483C8.18213 17.95 6.2383 19.1279 4.87491 19.6098H2V21.1098H22V19.6098H18.1933C18.2305 19.4118 18.25 19.2078 18.25 18.9995C18.25 17.0988 16.6537 15.6098 14.75 15.6098C12.8463 15.6098 11.25 17.0988 11.25 18.9995C11.25 19.2078 11.2695 19.4118 11.3067 19.6098H8.03476C9.01533 18.9096 10.0006 17.9867 10.8348 16.8214C11.8976 15.3369 12.7051 13.4723 12.9527 11.2029C13.3888 10.5366 14.0182 10.0489 14.7302 9.78114C14.8195 10.0047 14.8459 10.272 14.8156 10.6044C14.7626 11.1881 14.5461 11.8501 14.2885 12.6226L15.7116 13.097L15.7266 13.0518C15.9657 12.335 16.239 11.5153 16.3095 10.7402C16.3451 10.3481 16.331 9.94371 16.2299 9.551C16.5976 9.5717 16.9674 9.64842 17.3272 9.78561C17.4718 10.5072 17.6119 11.9591 16.8292 13.5244L18.1709 14.1952C18.7588 13.0193 18.9333 11.8957 18.9396 10.987C19.7353 12.0293 19.9451 13.465 19.3628 14.7414L20.7275 15.364C21.913 12.7655 20.7675 9.69805 18.169 8.51261C16.4252 7.71704 14.4701 7.97131 13.0144 9.01005C13.0002 8.71974 12.9774 8.42395 12.9455 8.12264L12.9509 8.12239C12.9463 8.01969 12.9387 7.91781 12.9283 7.81682C12.9841 7.23748 13.1733 6.69974 13.4639 6.23313C13.4908 6.27268 13.5164 6.31384 13.5407 6.35669C13.7368 6.70158 13.8776 7.19788 13.9313 7.92394L15.4272 7.81321C15.3643 6.96243 15.1904 6.22344 14.8448 5.61543C14.7464 5.44242 14.6361 5.28345 14.5142 5.13798C14.7174 4.99916 14.9351 4.88032 15.1644 4.78416C16.0526 5.29453 17.0251 6.2195 16.9269 7.66161L18.4235 7.76349C18.5187 6.36535 17.9782 5.31911 17.2824 4.56687C19.0385 4.90548 20.3292 6.48725 20.2508 8.32788L21.7494 8.39177C21.8711 5.53826 19.6565 3.12643 16.803 3.00478ZM14.75 17.1098C13.6162 17.1098 12.75 17.9845 12.75 18.9995C12.75 19.2131 12.7873 19.4183 12.8565 19.6098H16.6435C16.7127 19.4183 16.75 19.2131 16.75 18.9995C16.75 17.9845 15.8838 17.1098 14.75 17.1098Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export const VineyardsIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1471 3.73546L12.25 4.11488V5.04534C13.0965 5.20082 13.8073 5.74389 14.1918 6.48376C14.6347 6.17864 15.1715 6 15.75 6C17.2688 6 18.5 7.23122 18.5 8.75C18.5 9.53802 18.1686 10.2486 17.6375 10.75C18.1686 11.2514 18.5 11.962 18.5 12.75C18.5 13.6591 18.0588 14.4652 17.3789 14.9659C17.4583 15.1788 17.5 15.437 17.5 15.75C17.5 17.2688 16.2688 18.5 14.75 18.5C14.6575 18.5 14.5697 18.4954 14.4865 18.4865C14.4954 18.5697 14.5 18.6575 14.5 18.75C14.5 20.2688 13.2688 21.5 11.75 21.5C10.2312 21.5 9 20.2688 9 18.75C9 18.6575 9.00457 18.5697 9.0135 18.4865C8.93029 18.4954 8.84253 18.5 8.75 18.5C7.23122 18.5 6 17.2688 6 15.75C6 15.4444 6.04984 15.191 6.14184 14.981C5.45015 14.4816 5 13.6684 5 12.75C5 11.962 5.33144 11.2514 5.86253 10.75C5.33144 10.2486 5 9.53801 5 8.75C5 7.23122 6.23122 6 7.75 6C8.32852 6 8.86531 6.17864 9.30822 6.48376C9.61417 5.89499 10.1268 5.43085 10.75 5.18747V4.41488L9.14708 4.73546L8.85291 3.26459L13.8529 2.26459L14.1471 3.73546ZM11.75 9C12.4404 9 13 8.44036 13 7.75C13 7.05964 12.4404 6.5 11.75 6.5C11.0596 6.5 10.5 7.05964 10.5 7.75C10.5 8.44036 11.0596 9 11.75 9ZM13 15.75C13 16.4404 12.4404 17 11.75 17C11.0596 17 10.5 16.4404 10.5 15.75C10.5 15.0596 11.0596 14.5 11.75 14.5C12.4404 14.5 13 15.0596 13 15.75ZM10.8847 18.5458C11.1165 18.5138 11.4013 18.5 11.75 18.5C12.0987 18.5 12.3835 18.5138 12.6153 18.5458C12.8116 18.5729 12.9294 18.6078 12.9936 18.6338C12.9971 18.6609 13 18.699 13 18.75C13 19.4404 12.4404 20 11.75 20C11.0596 20 10.5 19.4404 10.5 18.75C10.5 18.699 10.5029 18.6609 10.5064 18.6338C10.5706 18.6078 10.6884 18.5729 10.8847 18.5458ZM11.75 13C12.4404 13 13 12.4404 13 11.75C13 11.0596 12.4404 10.5 11.75 10.5C11.0596 10.5 10.5 11.0596 10.5 11.75C10.5 12.4404 11.0596 13 11.75 13ZM14.5 12.75C14.5 12.0596 15.0596 11.5 15.75 11.5C16.4404 11.5 17 12.0596 17 12.75C17 13.4404 16.4404 14 15.75 14C15.0596 14 14.5 13.4404 14.5 12.75ZM17 8.75C17 9.44036 16.4404 10 15.75 10C15.0596 10 14.5 9.44036 14.5 8.75C14.5 8.05964 15.0596 7.5 15.75 7.5C16.4404 7.5 17 8.05964 17 8.75ZM9 8.75C9 9.44036 8.44036 10 7.75 10C7.05964 10 6.5 9.44036 6.5 8.75C6.5 8.05964 7.05964 7.5 7.75 7.5C8.44036 7.5 9 8.05964 9 8.75ZM6.5 12.75C6.5 12.0596 7.05964 11.5 7.75 11.5C8.44036 11.5 9 12.0596 9 12.75C9 13.4404 8.44036 14 7.75 14C7.05964 14 6.5 13.4404 6.5 12.75ZM9 15.75C9 16.0987 8.98623 16.3835 8.95423 16.6153C8.92714 16.8116 8.89215 16.9294 8.86618 16.9936C8.83905 16.9971 8.80104 17 8.75 17C8.05964 17 7.5 16.4404 7.5 15.75C7.5 15.699 7.5029 15.6609 7.50636 15.6338C7.57056 15.6078 7.68841 15.5729 7.88465 15.5458C8.11652 15.5138 8.40127 15.5 8.75 15.5C8.8423 15.5 8.92417 15.501 8.99713 15.5029C8.99904 15.5758 9 15.6577 9 15.75ZM14.5 15.75C14.5 16.0987 14.5138 16.3835 14.5458 16.6154C14.5729 16.8116 14.6078 16.9295 14.6338 16.9936C14.6609 16.9971 14.699 17 14.75 17C15.4404 17 16 16.4404 16 15.75C16 15.6758 15.996 15.62 15.991 15.5795C15.9494 15.5683 15.8908 15.5554 15.8109 15.5436C15.6124 15.5141 15.3511 15.5 15 15.5C14.7873 15.5 14.6273 15.5053 14.506 15.5142C14.5024 15.5785 14.5 15.6564 14.5 15.75Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export const HistoricalIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H9C9.41421 8.25 9.75 8.58579 9.75 9C9.75 9.41421 9.41421 9.75 9 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M14.5 11.25C14.0858 11.25 13.75 11.5858 13.75 12C13.75 12.4142 14.0858 12.75 14.5 12.75H15.5C15.9142 12.75 16.25 12.4142 16.25 12C16.25 11.5858 15.9142 11.25 15.5 11.25H14.5Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 4.5C4.25 3.80964 4.80964 3.25 5.5 3.25H6.5C7.19036 3.25 7.75 3.80964 7.75 4.5V5.75H8.25V4.5C8.25 3.80964 8.80964 3.25 9.5 3.25H10.5C11.1904 3.25 11.75 3.80964 11.75 4.5V5.75H12.25V4.5C12.25 3.80964 12.8096 3.25 13.5 3.25H14.5C15.1904 3.25 15.75 3.80964 15.75 4.5V7.75649C15.8967 7.82609 16.0358 7.91726 16.1626 8.02999L20.25 11.6632V19C20.25 19.9665 19.4665 20.75 18.5 20.75L6 20.75C5.0335 20.75 4.25 19.9665 4.25 19V4.5ZM5.75 19V17.75H6.5C6.91421 17.75 7.25 17.4142 7.25 17C7.25 16.5858 6.91421 16.25 6.5 16.25H5.75V12.75H7C7.41421 12.75 7.75 12.4142 7.75 12C7.75 11.5858 7.41421 11.25 7 11.25H5.75V4.75H6.25V6C6.25 6.69036 6.80964 7.25 7.5 7.25H8.5C9.19036 7.25 9.75 6.69036 9.75 6V4.75H10.25V6C10.25 6.69036 10.8096 7.25 11.5 7.25H12.5C13.1904 7.25 13.75 6.69036 13.75 6V4.75H14.25V7.75649C14.1033 7.82609 13.9642 7.91726 13.8374 8.02999L9.75 11.6632V14.25H9C8.58579 14.25 8.25 14.5858 8.25 15C8.25 15.4142 8.58579 15.75 9 15.75H9.75V19C9.75 19.0849 9.75604 19.1683 9.76772 19.25H6C5.86193 19.25 5.75 19.1381 5.75 19ZM14.8339 9.1511C14.9286 9.0669 15.0714 9.0669 15.1661 9.1511L18.75 12.3368V19C18.75 19.1381 18.6381 19.25 18.5 19.25H17.25V16.5C17.25 15.2574 16.2426 14.25 15 14.25C13.7574 14.25 12.75 15.2574 12.75 16.5V19.25H11.5C11.3619 19.25 11.25 19.1381 11.25 19V12.3368L14.8339 9.1511ZM15.75 16.5V19.25H14.25V16.5C14.25 16.0858 14.5858 15.75 15 15.75C15.4142 15.75 15.75 16.0858 15.75 16.5Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export const LuxuryIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.25C10.6409 2.25 9.51209 3.23592 9.28974 4.53156C5.76097 5.44999 3.09869 8.51573 2.78169 12.25H2V13.75H22V12.25H21.2183C20.9013 8.51573 18.239 5.44999 14.7103 4.53156C14.4879 3.23592 13.3591 2.25 12 2.25ZM12 3.75C11.5845 3.75 11.2163 3.95273 10.9891 4.26467C11.1581 4.25494 11.3285 4.25 11.5 4.25H12.5C12.6715 4.25 12.8419 4.25494 13.0109 4.26467C12.7837 3.95273 12.4155 3.75 12 3.75ZM19.7117 12.25C19.3364 8.59833 16.2508 5.75 12.5 5.75H11.5C7.74918 5.75 4.66362 8.59833 4.28832 12.25H19.7117Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8489 15.2905C18.2476 14.2882 16.9626 13.9388 15.9365 14.4985L14.1664 15.464C13.94 14.7597 13.2795 14.25 12.5 14.25H6C5.0335 14.25 4.25 15.0335 4.25 16V18.2792C4.25 19.0325 4.732 19.7012 5.4466 19.9394L8.79804 21.0566C10.2448 21.5388 11.8238 21.4266 13.1878 20.7446L17.9548 18.3611C19.0903 17.7934 19.5021 16.3791 18.8489 15.2905ZM12.75 16V16.2366L12.3124 16.4753C11.9819 16.6555 11.6115 16.75 11.235 16.75H9V18.25H11.235C11.8625 18.25 12.4799 18.0926 13.0307 17.7921L16.6548 15.8153C16.9747 15.6409 17.3752 15.7498 17.5627 16.0622C17.7663 16.4016 17.6379 16.8425 17.284 17.0195L12.517 19.403C11.5088 19.9071 10.3417 19.99 9.27238 19.6336L5.92094 18.5164C5.81886 18.4824 5.75 18.3868 5.75 18.2792V16C5.75 15.8619 5.86193 15.75 6 15.75H12.5C12.6381 15.75 12.75 15.8619 12.75 16Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export const CitiesIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5306 3.77181C11.7808 2.83824 12.7404 2.28422 13.674 2.53437L17.5377 3.56964C18.4712 3.81979 19.0252 4.77938 18.7751 5.71295L18.3869 7.16184C18.3649 7.24384 18.3374 7.32292 18.305 7.39878L20.0125 7.8563L19.6243 9.30519L18.8999 9.11109L18.3823 11.0429L19.1067 11.237L18.7185 12.6859L17.994 12.4918L17.347 14.9066L18.0714 15.1007L17.6832 16.5496L16.9588 16.3555L16.3117 18.7703L17.0361 18.9645L16.6479 20.4133L15.9235 20.2192L15.8479 20.5014H22V22.0014H2V20.5014H6.01277L6.74719 17.7605L6.02272 17.5663L6.41095 16.1174L7.13542 16.3116L7.78247 13.8967L7.058 13.7026L7.44623 12.2537L8.1707 12.4479L8.81775 10.033L8.09328 9.83892L8.48151 8.39003L9.20598 8.58415L9.72361 6.65231L8.9991 6.45818L9.38733 5.00929L11.0948 5.46681C11.1047 5.38491 11.1204 5.3027 11.1424 5.22069L11.5306 3.77181ZM11.1725 7.04054L10.6549 8.97238L11.6208 9.2312L12.1384 7.29936L11.1725 7.04054ZM13.5873 7.68759L13.0697 9.61943L14.5186 10.0077L15.0362 8.07582L13.5873 7.68759ZM16.4851 8.46405L15.9675 10.3959L16.9334 10.6547L17.451 8.72286L16.4851 8.46405ZM16.5452 12.1036L15.5792 11.8448L14.9322 14.2596L15.8981 14.5184L16.5452 12.1036ZM15.5099 15.9673L14.544 15.7085L13.8969 18.1233L14.8628 18.3821L15.5099 15.9673ZM14.4746 19.831L8.19608 18.1487L7.56568 20.5014H14.295L14.4746 19.831ZM8.58431 16.6998L9.55024 16.9586L10.1973 14.5438L9.23136 14.285L8.58431 16.6998ZM9.61959 12.8361L10.5855 13.0949L11.2326 10.6801L10.2666 10.4213L9.61959 12.8361ZM12.6815 11.0683L12.0344 13.4831L13.4833 13.8714L14.1303 11.4565L12.6815 11.0683ZM13.0951 15.3203L11.6462 14.932L10.9991 17.3468L12.448 17.7351L13.0951 15.3203ZM13.2857 3.98326C13.1524 3.94752 13.0153 4.02667 12.9795 4.16003L12.5913 5.60892C12.5556 5.74229 12.6347 5.87937 12.7681 5.91511L16.6318 6.95038C16.7652 6.98612 16.9022 6.90697 16.938 6.77361L17.3262 5.32472C17.3619 5.19135 17.2828 5.05427 17.1494 5.01853L13.2857 3.98326Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export const CoworkingIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.75 9.5C15.75 9.08579 16.0858 8.75 16.5 8.75H17.5C17.9142 8.75 18.25 9.08579 18.25 9.5C18.25 9.91421 17.9142 10.25 17.5 10.25H16.5C16.0858 10.25 15.75 9.91421 15.75 9.5Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M16.5 11.25C16.0858 11.25 15.75 11.5858 15.75 12C15.75 12.4142 16.0858 12.75 16.5 12.75H17.5C17.9142 12.75 18.25 12.4142 18.25 12C18.25 11.5858 17.9142 11.25 17.5 11.25H16.5Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M9.25 9.5C9.25 9.08579 9.58579 8.75 10 8.75H11C11.4142 8.75 11.75 9.08579 11.75 9.5C11.75 9.91421 11.4142 10.25 11 10.25H10C9.58579 10.25 9.25 9.91421 9.25 9.5Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M10 6.25C9.58579 6.25 9.25 6.58579 9.25 7C9.25 7.41421 9.58579 7.75 10 7.75H11C11.4142 7.75 11.75 7.41421 11.75 7C11.75 6.58579 11.4142 6.25 11 6.25H10Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H11C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M7 8.75C6.58579 8.75 6.25 9.08579 6.25 9.5C6.25 9.91421 6.58579 10.25 7 10.25H8C8.41421 10.25 8.75 9.91421 8.75 9.5C8.75 9.08579 8.41421 8.75 8 8.75H7Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M6.25 7C6.25 6.58579 6.58579 6.25 7 6.25H8C8.41421 6.25 8.75 6.58579 8.75 7C8.75 7.41421 8.41421 7.75 8 7.75H7C6.58579 7.75 6.25 7.41421 6.25 7Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75H8C8.41421 12.75 8.75 12.4142 8.75 12C8.75 11.5858 8.41421 11.25 8 11.25H7Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 4.5C3.25 3.5335 4.0335 2.75 5 2.75H13C13.9665 2.75 14.75 3.5335 14.75 4.5V6.25H19C19.9665 6.25 20.75 7.0335 20.75 8V19C20.75 19.9665 19.9665 20.75 19 20.75H5C4.0335 20.75 3.25 19.9665 3.25 19V4.5ZM14.75 19.25V7.75H19C19.1381 7.75 19.25 7.86193 19.25 8V19C19.25 19.1381 19.1381 19.25 19 19.25H14.75ZM13.25 4.5V19.25H11.75V16.5C11.75 15.5335 10.9665 14.75 10 14.75H8C7.0335 14.75 6.25 15.5335 6.25 16.5V19.25H5C4.86193 19.25 4.75 19.1381 4.75 19V4.5C4.75 4.36193 4.86193 4.25 5 4.25H13C13.1381 4.25 13.25 4.36193 13.25 4.5ZM7.75 19.25H10.25V16.5C10.25 16.3619 10.1381 16.25 10 16.25H8C7.86193 16.25 7.75 16.3619 7.75 16.5V19.25Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export const WindmillIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7175 5.65683L15.5355 2.47485L12 6.01039L8.46447 2.47485L5.28249 5.65683L8.81802 9.19237L5.28249 12.7279L7.2015 14.6469L6.77098 16.656L5.92715 19.75H2V21.25H22V19.75H18.0728L17.229 16.656L16.7985 14.6469L18.7175 12.7279L15.182 9.19237L18.7175 5.65683ZM15.535 15.9093L12 12.3743L8.46504 15.9093L8.42774 16.0834H15.5723L15.535 15.9093ZM12 8.13171L15.5355 4.59617L16.5962 5.65683L13.0607 9.19237L16.5962 12.7279L15.5355 13.7886L12 10.253L8.46447 13.7886L7.40381 12.7279L10.9393 9.19237L7.40381 5.65683L8.46447 4.59617L12 8.13171ZM7.48194 19.75L8.07285 17.5834H15.9272L16.5181 19.75H7.48194Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export const CreativeSpaceIcon: FC<IconProps> = ({ className, isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1416 2.7709C18.7718 2.03791 17.7252 2.03818 17.3558 2.77136L15.5 6.45456C15.5 7.15973 15.7867 7.79793 16.25 8.25891V19.75C16.25 20.8546 17.1454 21.75 18.25 21.75C19.3546 21.75 20.25 20.8546 20.25 19.75V8.25891C20.7133 7.79793 21 7.15973 21 6.45456L19.1416 2.7709ZM18.75 8.98305C18.6531 8.99426 18.5545 9.00002 18.4545 9.00002H18.0455C17.9455 9.00002 17.8469 8.99426 17.75 8.98305V19.75C17.75 20.0261 17.9739 20.25 18.25 20.25C18.5261 20.25 18.75 20.0261 18.75 19.75V8.98305ZM19.4618 6.73571L18.2491 4.33196L17.0381 6.73539C17.1608 7.17639 17.5653 7.50002 18.0455 7.50002H18.4545C18.9345 7.50002 19.339 7.17655 19.4618 6.73571Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        d="M3.25 12C3.25 6.61522 7.61522 2.25 13 2.25H15V3.75H13C8.44365 3.75 4.75 7.44365 4.75 12C4.75 16.5563 8.44365 20.25 13 20.25H15V21.75H13C7.61522 21.75 3.25 17.3848 3.25 12Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 4.25C11.2574 4.25 10.25 5.25736 10.25 6.5C10.25 7.74264 11.2574 8.75 12.5 8.75C13.7426 8.75 14.75 7.74264 14.75 6.5C14.75 5.25736 13.7426 4.25 12.5 4.25ZM11.75 6.5C11.75 6.08579 12.0858 5.75 12.5 5.75C12.9142 5.75 13.25 6.08579 13.25 6.5C13.25 6.91421 12.9142 7.25 12.5 7.25C12.0858 7.25 11.75 6.91421 11.75 6.5Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25 9.5C6.25 8.25736 7.25736 7.25 8.5 7.25C9.74264 7.25 10.75 8.25736 10.75 9.5C10.75 10.7426 9.74264 11.75 8.5 11.75C7.25736 11.75 6.25 10.7426 6.25 9.5ZM8.5 8.75C8.08579 8.75 7.75 9.08579 7.75 9.5C7.75 9.91421 8.08579 10.25 8.5 10.25C8.91421 10.25 9.25 9.91421 9.25 9.5C9.25 9.08579 8.91421 8.75 8.5 8.75Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 12.25C7.25736 12.25 6.25 13.2574 6.25 14.5C6.25 15.7426 7.25736 16.75 8.5 16.75C9.74264 16.75 10.75 15.7426 10.75 14.5C10.75 13.2574 9.74264 12.25 8.5 12.25ZM7.75 14.5C7.75 14.0858 8.08579 13.75 8.5 13.75C8.91421 13.75 9.25 14.0858 9.25 14.5C9.25 14.9142 8.91421 15.25 8.5 15.25C8.08579 15.25 7.75 14.9142 7.75 14.5Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 17.5C10.25 16.2574 11.2574 15.25 12.5 15.25C13.7426 15.25 14.75 16.2574 14.75 17.5C14.75 18.7426 13.7426 19.75 12.5 19.75C11.2574 19.75 10.25 18.7426 10.25 17.5ZM12.5 16.75C12.0858 16.75 11.75 17.0858 11.75 17.5C11.75 17.9142 12.0858 18.25 12.5 18.25C12.9142 18.25 13.25 17.9142 13.25 17.5C13.25 17.0858 12.9142 16.75 12.5 16.75Z"
        fill={isActive ? "#09090b" : "#71717A"}
      />
    </svg>
  );
};

export interface CategoryIconProps {
  category: string;
  className?: string;
  isActive?: boolean;
}

const categoryIconMap = {
  beachfront: BeachfrontIcon,
  countryside: CountrysideIcon,
  lakefront: LakefrontIcon,
  houseboat: HouseboatIcon,
  tropical: TropicalIcon,
  vineyards: VineyardsIcon,
  historical: HistoricalIcon,
  luxury: LuxuryIcon,
  cities: CitiesIcon,
  coworking: CoworkingIcon,
  windmill: WindmillIcon,
  "creative-space": CreativeSpaceIcon,
} as const;

export type CategoryType = keyof typeof categoryIconMap;

export const CategoryIcon: FC<CategoryIconProps> = ({
  category,
  className,
  isActive = false,
}) => {
  const normalizedCategory = category
    .toLowerCase()
    .replace(/\s+/g, "-") as CategoryType;
  const Icon = categoryIconMap[normalizedCategory] ?? CitiesIcon;

  return <Icon className={className} isActive={isActive} />;
};
