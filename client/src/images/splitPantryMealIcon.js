import React from "react";
import { foodPantry, mealProgram, closed } from "theme/colors";

const SplitPantryMealIcon = ({ isClosed, height = "72px", width = "72px" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={width}
    height={height}
    viewBox="0 0 53 53"
    enableBackground="new 0 0 48 48"
    xmlSpace="preserve"
  >
    <g>
      <path
        fill={isClosed ? closed : foodPantry}
        d="M40.168,0c-5.625,0-11.25,0-16.874,0c0,15.999,0,32.001,0,48c3.159,0,6.321,0,9.481,0
		c1.633,0,3.266,0,4.896,0c0.418,0,0.838,0,1.256,0c0.211,0,0.42,0,0.633,0c0.104,0,0.211,0,0.316,0c0.052,0,0.107,0,0.159,0
		c0.027,0,0.052,0,0.079,0c0.013,0,0.028,0,0.041,0c0.012,0,0.021,0,0.033,0c0.338,0,0.676-0.023,1.01-0.064
		c0.35-0.045,0.697-0.112,1.038-0.2c0.374-0.101,0.743-0.224,1.099-0.374c0.365-0.156,0.719-0.339,1.057-0.545
		c0.688-0.424,1.302-0.945,1.82-1.551c0.514-0.595,0.924-1.264,1.225-1.981c0.145-0.345,0.262-0.698,0.351-1.057
		c0.086-0.345,0.145-0.698,0.179-1.051c0.016-0.174,0.027-0.351,0.03-0.527c0-0.044,0.003-0.085,0.003-0.13c0-0.023,0-0.043,0-0.067
		c0-0.023,0-0.047,0-0.07c0-0.095,0-0.191,0-0.286c0-0.383,0-0.762,0-1.145c0-0.763,0-1.525,0-2.287c0-1.525,0-3.05,0-4.574
		c0-6.064,0-12.125,0-18.189c0-1.537,0-3.07,0-4.607c0-0.383,0-0.769,0-1.151c0-0.191,0-0.382,0-0.577c0-0.012,0-0.023,0-0.036
		c0-0.012,0-0.023,0-0.035c0-0.021,0-0.044,0-0.065c0-0.044,0-0.088-0.003-0.129c-0.003-0.088-0.007-0.176-0.013-0.265
		c-0.024-0.362-0.073-0.724-0.153-1.081c-0.083-0.371-0.193-0.736-0.331-1.092c-0.286-0.724-0.686-1.404-1.186-2.01
		c-0.51-0.618-1.117-1.157-1.803-1.593c-0.334-0.215-0.688-0.403-1.056-0.565C43.1,0.536,42.731,0.403,42.354,0.3
		c-0.361-0.1-0.733-0.177-1.107-0.227C40.889,0.023,40.53,0,40.168,0z"
      />
      <path
        fill={isClosed ? closed : mealProgram}
        d="M7.832,0c5.204,0,10.405,0,15.609,0c0,15.999,0,32.001,0,48c-5.204,0-10.405,0-15.609,0
		c-1.028,0-2.048-0.194-2.997-0.571c-0.952-0.376-1.814-0.931-2.542-1.628s-1.305-1.524-1.698-2.438C0.203,42.451,0,41.477,0,40.49
		C0,29.496,0,18.504,0,7.509c0-0.986,0.203-1.963,0.596-2.873c0.393-0.913,0.97-1.74,1.698-2.437
		c0.728-0.698,1.59-1.251,2.542-1.628C5.788,0.194,6.804,0,7.832,0z"
      />
      <path
        fill="#FFFFFF"
        d="M36.332,31.304C35.932,31.75,35.149,32,34.477,32C32.166,32,29,27.898,29,24.245S30.504,18,32.815,18
		c1.254,0,2.265,0.152,2.806,0.793l-0.01-0.04c0,0-0.418-1.786-1.1-2.161c0.377-0.202,1.074-0.768,1.074-0.768
		s1.075,1.463,1.075,2.93v0.039c0.794-0.7,1.743-1.133,3.188-1.133c2.311,0,3.815,2.931,3.815,6.584S40.387,32,38.075,32
		C37.397,32,36.735,31.758,36.332,31.304z"
      />
      <path
        fill="#FFFFFF"
        d="M39.217,16.36c-0.617,1.017-1.972,1.323-1.972,1.323s-0.356-1.343,0.261-2.359
		c0.616-1.016,1.97-1.323,1.97-1.323S39.832,15.343,39.217,16.36z"
      />
      <path
        fill="#FFFFFF"
        d="M15.274,9C15.881,9,16,9.768,16,9.768c0,1.724,0,5.448,0,7.193c0,2.228-2.177,2.746-2.177,2.746v16.858
		c0,0-0.019,1.436-1.461,1.436s0.667,0-0.733,0c-1.4,0-1.426-1.436-1.426-1.436V19.707c0,0-2.203-0.502-2.203-2.738V9.734
		C8,9.734,8.017,9,8.726,9s0.72,0.026,0.72,0.734c0,0.708,0.023,5.189,0.023,5.189s0.05,0.684,0.38,0.684s0.304-0.684,0.304-0.684
		s0-4.455,0-5.189C10.154,9,10.163,9,10.889,9s0.759,0.026,0.759,0.734c0,0.708,0,5.265,0,5.265s0.026,0.658,0.354,0.658
		c0.329,0,0.362-0.708,0.362-0.708s0-4.514,0-5.231C12.364,9,12.491,9,13.15,9s0.7,0.042,0.7,0.701c0,0.659,0,5.161,0,5.161
		s-0.025,0.822,0.329,0.822c0.367,0,0.389-0.776,0.389-0.776s0.006-4.405,0.006-5.156C14.574,9,14.667,9,15.274,9z"
      />
    </g>
  </svg>
);

export default SplitPantryMealIcon;
