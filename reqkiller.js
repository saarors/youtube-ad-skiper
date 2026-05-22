(function() {
    const originalFetch = window.fetch;

    window.fetch = function(input, init) {
        const url = typeof input === 'string' ? input : (input.url || input);
        const method = (init && init.method) || 'GET';
        
        console.warn(`%c [יירוט בקשה] מנסה לצאת בקשת ${method} לכתובת:`, 'background: #222; color: #bada55; padding: 2px 5px;', url);

        const isApproved = confirm(`🚨 נעצרה בקשת רשת!\n\nמתודה: ${method}\nכתובת: ${url}\n\nלחץ "אישור" כדי לאשר את השליחה, או "ביטול" כדי לחסום אותה.`);

        if (isApproved) {
            console.log(`%c ✅ הבקשה אושרה על ידי המשתמש ונשלחה.`, 'color: green; font-weight: bold;');
            return originalFetch(input, init);
        } else {
            console.error(`%c ❌ הבקשה נחסמה ויורטה על ידי המשתמש.`, 'color: red; font-weight: bold;');
            return Promise.reject(new TypeError("Failed to fetch (Blocked by Console Proxy)"));
        }
    };

    console.log("%c 🚀 מערכת יירוט בקשות הרשת פעילה בקונסול! כל בקשת fetch מעתה תדרוש אישור.", "color: cyan; font-weight: bold; font-size: 14px;");
})();
