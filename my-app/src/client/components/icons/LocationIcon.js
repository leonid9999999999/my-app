
function LocationIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 14 14" className={className}>
		<g fill="none">
			<path fill="url(#SVGDpB1CUWh)" d="M14 12.5C14 14 11.314 15 8 15s-6-1-6-2.5S4.686 10 8 10s6 1 6 2.5" />
			<path fill="url(#SVGapY1jbbM)" d="M8 1a5 5 0 0 0-5 5c0 1.144.65 2.35 1.393 3.372c.757 1.043 1.677 1.986 2.346 2.62a1.824 1.824 0 0 0 2.522 0c.669-.634 1.589-1.577 2.346-2.62C12.349 8.35 13 7.144 13 6a5 5 0 0 0-5-5" />
			<path fill="url(#SVGks6gndZT)" d="M9.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" />
			<defs>
				<linearGradient id="SVGapY1jbbM" x1=".813" x2="8.969" y1="-2.285" y2="10.735" gradientUnits="userSpaceOnUse">
					<stop stop-color="#f97dbd" />
					<stop offset="1" stop-color="#3641cc" />
				</linearGradient>
				<linearGradient id="SVGks6gndZT" x1="6.674" x2="8.236" y1="6.133" y2="7.757" gradientUnits="userSpaceOnUse">
					<stop stop-color="#fdfdfd" />
					<stop offset="1" stop-color="#fecbe6" />
				</linearGradient>
				<radialGradient id="SVGDpB1CUWh" cx="0" cy="0" r="1" gradientTransform="matrix(9.42858 -1.66659 .69563 3.93547 7.57 11.666)" gradientUnits="userSpaceOnUse">
					<stop stop-color="#7b7bff" />
					<stop offset=".502" stop-color="#a3a3ff" />
					<stop offset="1" stop-color="#ceb0ff" />
				</radialGradient>
			</defs>
		</g>
	</svg>
  );
}

export default LocationIcon;