import React, { useEffect } from "react";

export default function useIsOnline() {
	const [isOnline, setIsOnline] = React.useState(true);

	const handleOnline = () => setIsOnline(true);
	const handleOffline = () => setIsOnline(false);
	useEffect(() => {
		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);
		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);

	return isOnline;
}
