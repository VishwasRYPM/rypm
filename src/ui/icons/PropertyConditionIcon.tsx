import React from 'react';

interface PropertyConditionIconProps {
  width?: number;
  height?: number;
  className?: string;
    color?: string;
    //  style?: React.CSSProperties; 
}

const PropertyConditionIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
    color = '#001D3D' ,
//   style = {},
}: PropertyConditionIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<path d="M6.375 10.9704V17.6562H17.625V10.9704" stroke="black" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<mask id="mask0_2494_12419" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
<path d="M4 4H20V20H4V4Z" fill="white"/>
</mask>
<g mask="url(#mask0_2494_12419)">
<path d="M9.1875 6.84195V4.46867H7V8.30029L9.1875 6.84195Z" stroke="black" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0426 11.2487L12.0001 7.22039L5.9576 11.2487C5.52681 11.5359 4.94475 11.4195 4.65756 10.9887C4.37035 10.5579 4.48675 9.97583 4.91756 9.68865L11.4801 5.31365C11.795 5.10371 12.2052 5.10371 12.5201 5.31365L19.0826 9.68865C19.5134 9.97583 19.6298 10.5579 19.3426 10.9887C19.0554 11.4195 18.4733 11.5359 18.0426 11.2487Z" stroke="black" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.375 4.46875H9.8125" stroke="black" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5312 17.6562H4.46875V19.5312H19.5312V17.6562Z" stroke="black" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8125 11.7188C14.1221 11.7188 13.5625 11.1591 13.5625 10.4688H10.4375C10.4375 11.1591 9.87784 11.7188 9.1875 11.7188V13.3285C9.1875 15.2001 10.2897 16.8961 12 17.6562C13.7103 16.8961 14.8125 15.2001 14.8125 13.3285V11.7188Z" stroke="black" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.1047 13.1329L11.5579 14.6797L10.895 14.0168" stroke="black" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
   
)};

export default PropertyConditionIcon;