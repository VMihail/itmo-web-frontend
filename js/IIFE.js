"use strict";

(function() {
    window.addEventListener('load', function() {
        let footer = document.querySelector('footer');
        let stat = document.createElement('p');
        let performanceEntries = performance.getEntriesByType('navigation');
        let navigationEntry = performanceEntries[0];
        let pageLoadTime = navigationEntry.loadEventStart - navigationEntry.startTime;
        stat.textContent = 'Page load time: ' + pageLoadTime + 'ms';
        footer.appendChild(stat);
    });
})();