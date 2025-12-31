// TradingViewWidget.tsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(
        () => {
            if (!container.current) return;

            // Create script element
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "autosize": true,
          "symbol": "OANDA:XAUUSD",
          "interval": "1",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com",
          "backgroundColor": "#0A0F1C",
          "gridColor": "rgba(242, 242, 242, 0.06)",
          "hide_side_toolbar": false,
          "hide_top_toolbar": false,
          "hide_legend": false,
          "save_image": true,
          "details": true,
          "hotlist": true
        }`;

            // Re-mount logic: Ensure we don't duplicate and keep the widget div
            const widgetDiv = container.current.querySelector('.tradingview-widget-container__widget');
            if (widgetDiv) {
                widgetDiv.innerHTML = '';
                container.current.appendChild(script);
            }

            return () => {
                // Cleanup script on unmount
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            };
        },
        []
    );

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
            <div className="tradingview-widget-container__widget" style={{ flex: 1, width: "100%" }}></div>
        </div>
    );
}

export default memo(TradingViewWidget);
