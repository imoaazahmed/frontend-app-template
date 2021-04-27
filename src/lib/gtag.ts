declare const window: any;
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type Event = { action: string; category: string; label: string; value: string };

export const event = ({ action, category, label, value }: Event) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// HOW TO USE
// ----------
// [1] - Set your NEXT_PUBLIC_GA_ID in .env.local file
//
// [2] - Import "gtag" into your component
// import * as gtag from '@lib/gtag'
//
// [3] - Call the event function when you do something
// gtag.event({
//     action: 'submit_form',
//     category: 'Contact',
//     label: this.state.message,
// })
