/* 	Made with love by KLCiS Voucher System
	https://klinternetservices.com
	https://facebook.com/mr.partingtime
*/


document.addEventListener("DOMContentLoaded", function () {
    function isInMiniBrowser() {
        const ua = navigator.userAgent.toLowerCase();
        return (
            ua.includes("wv") ||
            ua.includes("fb") ||
            ua.includes("instagram") ||
            ua.includes("twitter") ||
            ua.includes("snapchat") ||
            ua.includes("line") ||
            ua.includes("wechat") ||
            ua.includes("tiktok")
        );
    }

    function openInBrowser() {
        const url = window.location.href;

        if (navigator.userAgent.match(/(iPhone|iPad|iPod)/i)) {
            window.location = `googlechrome://${url.replace(/^https?:\/\//, "")}`;
            setTimeout(() => {
                window.location = `https://${url.replace(/^https?:\/\//, "")}`; 
            }, 500);
        } else if (navigator.userAgent.match(/android/i)) {
            window.location = `googlechrome://${url.replace(/^https?:\/\//, "")}`;
            setTimeout(() => {
                window.location = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=org.mozilla.firefox;end;`; 
            }, 500);
            setTimeout(() => {
                window.location = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.microsoft.emmx;end;`; 
            }, 1000);
            setTimeout(() => {
                window.location = `https://${url}`;
            }, 1500);
        } else {
            window.location.href = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.android.chrome;end;`;
            setTimeout(() => {
                window.location.href = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.microsoft.emmx;end;`; 
            }, 500);
            setTimeout(() => {
                window.location.href = `https://${url}`;
            }, 1000);
        }
    }

    if (isInMiniBrowser()) {
        // Create a popup container
        let popup = document.createElement("div");
        popup.id = "browserPopup";
        popup.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0, 0, 0, 0.8); display:flex; justify-content:center; align-items:center; flex-direction:column; color:white; text-align:center; z-index:9999;";

        let message = document.createElement("div");
        message.innerHTML = `
            <h2 style="margin-bottom: 15px;">Open in Browser</h2>
            <p style="margin-bottom: 20px;">For best experience, please open this page in Chrome, Safari, Firefox, or Edge.</p>
        `;

        let button = document.createElement("button");
        button.innerText = "Open in Browser";
        button.style = "padding:10px 20px; background:#007bff; color:white; font-size:16px; border:none; border-radius:5px; cursor:pointer;";
        button.onclick = openInBrowser;

        let closeButton = document.createElement("button");
        closeButton.innerText = "Close";
        closeButton.style = "margin-top:10px; padding:5px 15px; background:#ccc; color:black; font-size:14px; border:none; border-radius:5px; cursor:pointer;";
        closeButton.onclick = function () {
            document.body.removeChild(popup);
        };

        popup.appendChild(message);
        popup.appendChild(button);
        popup.appendChild(closeButton);
        document.body.appendChild(popup);
    }
});
