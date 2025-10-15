"use client";

import { useEffect } from "react";

export default function GoogleReview() {
    useEffect(() => {
        // Cek apakah script Elfsight sudah ada
        if (!document.getElementById("elfsight-platform-script")) {
            const script = document.createElement("script");
            script.id = "elfsight-platform-script";
            script.src = "https://elfsightcdn.com/platform.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="w-[90%] lg:w-3/4 m-auto flex justify-center py-10 bg-white">
            <div
                className="elfsight-app-9095de94-9ea3-4322-83f3-7cec792691b4"
                data-elfsight-app-lazy
            ></div>
        </div>
    );
}
