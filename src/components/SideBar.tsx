import React from "react";

export default function Sidebar() {
    const location = window.location.pathname;
    const route=location.split('/')[1];
    return (

        <div className="flex h-full">
            <div className="flex flex-col h-full p-3 bg-gray-800 shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold text-white">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm" style={{
                                backgroundColor: route === '' ? '#2563EB' : ''
                            }}>
                                <a
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >

                                    <span className="text-gray-100">Contact</span>
                                </a>
                            </li>
                            <li className="rounded-sm" style={{
                                backgroundColor: route === 'charts' ? '#2563EB' : ''
                            }}>
                                <a
                                    href="/charts"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100">Graph</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
