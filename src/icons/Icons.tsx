export const IconsPoint = ({
  fill,
  size,
  className,
}: {
  fill?: string;
  size?: string;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "10"}
      height={size ? size : "10"}
      viewBox="0 0 24 24"
      className={className}
    >
      <g fill="none">
        <path d="M0 0h24v24H0z" />
        <path
          fill={fill ? fill : "currentColor"}
          d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z"
        />
      </g>
    </svg>
  );
};

export const IconsArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M16.175 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.713t.3-.712L16.175 13Z"
      />
    </svg>
  );
};

export const IconsArrowB = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="m12 15l-5-5h10l-5 5Z" />
    </svg>
  );
};

export const IconSearch = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
      />
    </svg>
  );
};

export const SearchIcon2 = (props: any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const IconScale = ({ size, fill }: { size: number; fill: string }) => {
  return (
    <svg
      fill={fill}
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="text-warning"
    >
      <path
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      ></path>
      <path
        d="M18 10V6h-4M6 14v4h4"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      ></path>
    </svg>
  );
};

export const IconsArrowBB = () => {
  return (
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke="currentColor"
      ></path>
    </svg>
  );
};

export const IconFavorite = ({
  size,
  fill,
}: {
  size: number;
  fill: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-t="watchlist-svg"
      aria-labelledby="watchlist-svg"
      aria-hidden="false"
      role="img"
      width={size}
      height={size}
      fill={fill}
    >
      <title id="watchlist-svg">Favoritos</title>
      <path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path>
    </svg>
  );
};

export const IconPlayHome = ({
  size,
  fill,
}: {
  size: number;
  fill: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-t="play-svg"
      aria-labelledby="play-svg"
      aria-hidden="true"
      role="img"
      width={size ?? "20"}
      height={size ?? "20"}
      fill={fill}
    >
      <title id="play-svg">Reproducir</title>
      <path d="M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726l11.054 6.503L7 18.732l.001-13.006"></path>
    </svg>
  );
};

export const IconPlay = ({ fill, size }: { fill: string; size: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "20"}
      height={size ? size : "20"}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M20.409 9.353a2.998 2.998 0 0 1 0 5.294L7.597 21.614C5.534 22.736 3 21.276 3 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
      />
    </svg>
  );
};

export const IconFacebook = ({
  fill,
  size,
}: {
  fill: string;
  size: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"
      />
    </svg>
  );
};

export const IconYoutube = ({ fill, size }: { fill: string; size: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
      />
    </svg>
  );
};

export const IconInstagram = ({
  fill,
  size,
}: {
  fill: string;
  size: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
      />
    </svg>
  );
};

export const IconTiktok = ({ fill, size }: { fill: string; size: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g fill={fill}>
        <path d="M22.459 6.846v3.659c-.197 0-.433.04-.669.04a7.295 7.295 0 0 1-4.682-1.732v7.79a6.987 6.987 0 0 1-1.416 4.25a7.02 7.02 0 0 1-5.626 2.832a6.993 6.993 0 0 1-5.941-3.305c1.259 1.18 2.95 1.928 4.8 1.928a6.893 6.893 0 0 0 5.586-2.833c.866-1.18 1.417-2.636 1.417-4.249v-7.83c1.259 1.102 2.872 1.732 4.682 1.732c.236 0 .433 0 .669-.04v-2.36c.354.079.669.118 1.023.118h.157z" />
        <path d="M11.05 9.56v4.053a3.277 3.277 0 0 0-.866-.118c-1.732 0-3.148 1.456-3.148 3.226c0 .394.079.748.197 1.102c-.787-.59-1.338-1.535-1.338-2.597c0-1.77 1.416-3.226 3.148-3.226c.314 0 .59.04.865.118V9.521h.236c.315 0 .63 0 .905.04zm6.648-5.626c-.708-.63-1.22-1.495-1.495-2.4h.945v.551a6.25 6.25 0 0 0 .55 1.85z" />
        <path d="M21.318 6.767v2.36c-.197.04-.433.04-.669.04a7.295 7.295 0 0 1-4.682-1.73v7.79a6.987 6.987 0 0 1-1.416 4.248c-1.299 1.732-3.305 2.833-5.587 2.833c-1.85 0-3.541-.747-4.8-1.928a7.136 7.136 0 0 1-1.062-3.737c0-3.817 3.03-6.925 6.806-7.043v2.597a3.277 3.277 0 0 0-.865-.118c-1.732 0-3.148 1.455-3.148 3.226c0 1.062.512 2.046 1.338 2.597c.433 1.22 1.613 2.124 2.95 2.124c1.732 0 3.148-1.456 3.148-3.226V1.534h2.872c.276.945.787 1.77 1.495 2.4a5.397 5.397 0 0 0 3.62 2.833z" />
        <path d="M9.908 8.184V9.52c-3.777.118-6.806 3.226-6.806 7.043c0 1.377.393 2.636 1.062 3.738A7.122 7.122 0 0 1 2 15.148c0-3.896 3.148-7.043 7.003-7.043c.315 0 .63.04.905.079z" />
        <path d="M16.203 1.534h-2.872v15.187c0 1.77-1.416 3.227-3.147 3.227c-1.377 0-2.518-.866-2.951-2.125c.511.354 1.14.59 1.81.59c1.73 0 3.147-1.416 3.147-3.187V0h3.817v.079c0 .157 0 .314.039.472c0 .315.079.669.157.983zm5.115 3.777v1.417c-1.574-.315-2.911-1.377-3.659-2.794a5.11 5.11 0 0 0 3.659 1.377z" />
      </g>
    </svg>
  );
};

export const IconLink = ({ fill, size }: { fill: string; size: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill ? fill : "currentColor"}
        d="M11 17H7q-2.075 0-3.537-1.463T2 12q0-2.075 1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17z"
      />
    </svg>
  );
};
