import React from "react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5216145945792?text=Hola!%20Me%20gustar%C3%ADa%20agendar%20una%20cita."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
                <path d="M16.04 2C8.29 2 2 8.28 2 16.02c0 2.83.74 5.58 2.15 8.02L2 30l6.17-2.1c2.36 1.29 5.02 1.98 7.87 1.98h.01c7.75 0 14.04-6.28 14.04-14.02C30.09 8.28 23.8 2 16.04 2zm8.2 20.3c-.34.95-1.96 1.84-2.72 1.96-.7.12-1.6.17-2.58-.16-.6-.19-1.37-.45-2.36-.88-4.15-1.79-6.85-5.95-7.06-6.23-.21-.29-1.68-2.24-1.68-4.27 0-2.03 1.04-3.03 1.41-3.45.37-.42.82-.52 1.09-.52.27 0 .55.01.79.02.25.01.59-.1.93.71.34.82 1.15 2.83 1.25 3.03.1.21.17.45.03.74-.13.29-.2.45-.39.69-.2.23-.41.52-.58.7-.19.19-.38.4-.17.78.2.38.88 1.45 1.9 2.35 1.31 1.17 2.42 1.54 2.8 1.72.38.19.6.16.82-.1.22-.26.94-1.1 1.19-1.48.25-.38.5-.31.84-.19.34.12 2.17 1.03 2.54 1.22.38.19.63.29.72.45.09.17.09 1.01-.25 1.96z" />
            </svg>
        </a>
    );
}
