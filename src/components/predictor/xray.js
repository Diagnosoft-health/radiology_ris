import React from "react";

function XrayIcon({ height, width, color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 80 80"
    >
      <path
        fill={color}
        d="M5.53.219C4.006.593 3.151 1.1 1.95 2.41.4 4.07.134 5.085.134 9.095c0 3.45 0 3.45.747 4.091a2.586 2.586 0 001.737.642c1.95-.027 2.457-1.016 2.457-4.84 0-2.486.054-2.727.668-3.315.614-.642.828-.668 3.58-.668 2.884 0 2.99-.027 3.819-.776 1.122-.989 1.149-2.406.107-3.475-.668-.669-.855-.695-3.713-.749-1.63-.027-3.446.054-4.007.214zM67.953.085c-.961.214-1.763 1.31-1.79 2.38-.026.802.134 1.15.829 1.764.854.749.935.776 3.9.776 2.991 0 3.071.026 3.606.695.48.615.56 1.096.56 3.502 0 3.663.481 4.599 2.458 4.626.668 0 1.229-.214 1.736-.642.748-.642.748-.642.748-4.09 0-4.011-.294-5.027-1.843-6.711C76.474.54 75.245.112 71.586.032c-1.683-.027-3.339 0-3.633.053zM24.574 3.427c-2.804.856-4.354 4.706-2.965 7.406 1.069 2.032 3.954 4.09 7.48 5.267 2.75.91 3.552.883 4.407-.16 1.362-1.604.614-3.342-1.79-4.144C28.394 10.7 25.35 8.775 26.15 8.24c.454-.294 1.523-.16 4.835.695 8.654 2.192 9.536 2.192 18.297-.054 4.862-1.23 6.144-1.015 3.82.669-1.256.909-2.591 1.55-4.701 2.246-2.378.802-3.126 2.54-1.763 4.144.881 1.043 1.87 1.07 4.407.16 3.82-1.363 6.438-3.208 7.453-5.24 1.068-2.059.534-4.786-1.256-6.443-1.55-1.444-4.487-1.605-8.868-.428-5.69 1.497-6.41 1.63-8.307 1.63-1.87-.026-2.938-.24-8.387-1.657-2.538-.668-5.824-.909-7.106-.535zM17.175 11.261c-1.976 1.658-3.045 6.07-2.11 8.556.828 2.165 3.072 3.876 6.304 4.785 1.87.535 5.449.99 7.826.99 1.656 0 1.897-.08 2.618-.776.828-.828.988-1.791.454-2.78-.507-.99-1.068-1.203-3.419-1.364-5.289-.374-8.067-1.123-8.948-2.38-.561-.801-.508-1.283.4-2.994 1.069-2.005 1.042-3.075-.026-3.983-1.015-.883-2.11-.883-3.099-.054zM59.86 11.315c-1.069.909-1.096 1.978-.027 3.983.908 1.738.962 2.193.4 2.995-.908 1.283-3.552 1.978-8.948 2.352-2.35.188-2.911.402-3.419 1.39-.534.99-.374 1.926.508 2.808l.801.829 3.446-.187c3.713-.187 6.731-.856 8.788-1.899 1.55-.775 3.312-2.673 3.766-4.01.534-1.63.214-4.278-.748-6.176-1.389-2.754-2.938-3.476-4.567-2.085z"
      ></path>
      <path
        fill={color}
        d="M37.556 14.229c-1.255.428-2.43 1.524-3.125 2.887-2.11 4.064-.214 19.999 2.938 24.651.374.588 1.148 1.283 1.683 1.55.881.429 1.068.429 1.896.108 2.805-1.177 4.782-7.406 5.53-17.459.427-5.989-.188-8.93-2.244-10.748-1.55-1.364-4.434-1.791-6.678-.99zm3.205 4.625c.695.455.908 1.497.908 4.305 0 4.25-1.015 11.523-1.602 11.523-.775 0-2.057-12.299-1.496-14.518.294-1.23 1.362-1.871 2.19-1.31zM1.736 20.485c-.294.134-.774.508-1.068.829-.534.588-.534.962-.534 18.715v18.127l.614.669c.347.374.935.748 1.282.829.988.267 2.43-.535 2.751-1.498.401-1.15.401-35.505 0-36.388-.294-.668-1.549-1.524-2.163-1.497-.187 0-.588.107-.882.214zM76.474 20.672c-.507.24-.962.749-1.122 1.23-.4 1.15-.4 35.105 0 36.255.32.962 1.763 1.764 2.751 1.497.348-.08.935-.455 1.283-.83l.614-.667V21.849l-.668-.642c-.881-.882-1.816-1.043-2.858-.535zM12.42 21.528c-1.442.294-2.27 1.978-2.27 4.625 0 1.818 1.149 4.331 2.564 5.561 2.298 2.032 6.01 3.182 11.059 3.422 6.838.321 8.948-.294 8.948-2.566 0-.776-.187-1.257-.614-1.684-.588-.589-.802-.616-5.209-.642-5.048-.027-7.399-.348-9.242-1.337-2.377-1.23-2.778-1.925-2.404-3.93.133-.695.133-1.524 0-1.872-.427-1.123-1.656-1.818-2.831-1.577zM66.618 21.501c-.855.16-1.79 1.283-1.79 2.139 0 .401.054 1.31.107 2.005.107 1.417-.267 1.979-1.977 3.075-1.71 1.07-4.327 1.497-9.589 1.524-4.407.026-4.781.053-5.289.588-.294.294-.614.99-.721 1.524-.134.829-.027 1.07.641 1.738.695.722 1.015.829 3.179.989 3.339.294 8.147 0 10.63-.668 5.13-1.31 8.174-4.412 8.174-8.289 0-3.235-1.282-5.026-3.365-4.625zM9.562 33.212c-1.041.588-1.415 2.112-1.015 4.384.642 3.663 2.992 6.07 7.212 7.38 3.206.962 9.59.802 15.493-.402 2.164-.427 2.644-.641 3.286-1.336.854-.963.908-1.685.213-2.861-.721-1.15-1.576-1.257-4.674-.615-5.556 1.176-11.914 1.15-14.21-.054-1.79-.909-2.512-2.032-2.512-3.85 0-1.096-.133-1.577-.587-2.112-.748-.855-2.217-1.096-3.206-.535zM68.22 33.078c-.961.374-1.442 1.337-1.442 2.834 0 1.764-.775 2.914-2.538 3.823-1.282.669-1.469.695-6.41.695-4.247-.026-5.503-.107-7.746-.615-3.126-.695-3.98-.588-4.702.562-.694 1.176-.64 1.898.24 2.887.669.749 1.07.883 4.194 1.498 4.595.909 11.887 1.042 14.424.267 3.072-.963 5.183-2.46 6.411-4.572.882-1.524 1.362-4.438.962-5.802-.454-1.497-1.923-2.192-3.392-1.577zM10.15 45.136c-.961.347-1.415 1.203-1.389 2.62.054 1.738.294 2.674 1.015 3.957.962 1.658 2.752 3.075 4.808 3.823 2.672.963 7.666.91 12.394-.107 4.194-.909 5.663-1.577 5.984-2.753.32-1.23-.24-2.46-1.336-2.915-.801-.32-1.175-.294-4.033.455-3.686.962-9.002 1.337-11.005.775-1.523-.4-2.618-1.497-2.832-2.834-.293-1.818-.72-2.567-1.629-2.94-1.015-.429-1.069-.429-1.977-.081zM67.953 45.216c-.855.374-1.282 1.176-1.576 2.86-.213 1.364-.988 2.247-2.404 2.808-1.87.695-7.292.401-11.405-.668-2.565-.642-3.286-.749-3.954-.508-.854.294-1.602 1.39-1.602 2.353 0 1.63 1.202 2.272 6.143 3.368 4.728 1.016 9.723 1.07 12.394.107 2.11-.748 3.847-2.165 4.888-3.93.561-.962.722-1.684.829-3.262.106-1.871.053-2.085-.508-2.62-.855-.775-1.816-.962-2.805-.508z"
      ></path>
      <path
        fill={color}
        d="M38.438 46.286c-.588.588-1.683 2.46-4.381 7.512-3.099 5.802-5.396 8.85-7.933 10.561-3.927 2.62-7.266 1.123-9.99-4.438-1.23-2.513-1.79-3.048-3.206-3.048-.881 0-2.243 1.364-2.243 2.246 0 1.818 2.27 5.909 4.594 8.235 2.244 2.246 3.793 2.968 6.758 3.101 2.083.08 2.644.027 4.194-.561 4.3-1.631 7.8-5.535 11.993-13.368.908-1.712 1.736-3.129 1.843-3.129.107 0 .935 1.417 1.843 3.129 4.033 7.54 7.426 11.443 11.54 13.207 1.201.535 1.896.642 4.113.642 2.404 0 2.831-.08 4.247-.775 1.896-.936 4.354-3.342 5.663-5.561 1.148-1.979 2.243-4.653 2.243-5.482 0-.962-1.309-2.245-2.324-2.272-.961-.027-2.163.642-2.404 1.337-.08.24-.507 1.23-.934 2.192-1.79 3.957-4.461 6.15-7.079 5.775-2.377-.32-5.209-2.593-7.399-5.935-.56-.856-1.255-1.872-1.496-2.246-.24-.374-1.095-1.872-1.87-3.342-3.125-5.855-4.086-7.513-4.62-7.94-.882-.696-2.378-.616-3.153.16zM1.255 66.525C.321 67.06 0 68.236 0 70.99c0 3.476.48 5.08 2.057 6.764C3.793 79.626 4.968 80 9.135 80c3.312 0 3.42-.027 4.114-.695 1.015-1.043.961-2.513-.134-3.503-.801-.722-.935-.748-3.873-.748-2.992 0-3.072-.027-3.606-.695-.48-.615-.56-1.096-.56-3.503 0-2.78-.215-3.636-1.043-4.278-.507-.4-2.137-.427-2.778-.053zM76.073 66.578c-.774.615-1.015 1.712-1.015 4.492 0 2.487-.053 2.727-.667 3.315-.615.642-.828.669-3.58.669-2.858 0-2.991.026-3.793.748-1.095.99-1.148 2.46-.133 3.503.694.668.774.695 4.247.695 3.98 0 5.182-.348 6.838-2.032 1.656-1.63 2.03-2.86 2.03-6.71 0-3.022-.053-3.45-.561-4.145-.454-.588-.801-.748-1.736-.802-.668-.053-1.362.08-1.63.267zM21.556 75.535c-1.309.802-1.39 2.834-.134 3.984.508.454 1.416.481 18.671.481H58.23l.668-.695c1.175-1.15.855-3.289-.588-3.957-.454-.214-5.903-.294-18.323-.294-16.268.026-17.737.053-18.431.481z"
      ></path>
    </svg>
  );
}

export default XrayIcon;