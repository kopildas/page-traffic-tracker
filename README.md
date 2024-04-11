# Page Traffic Tracker

## Overview

**Page Traffic Tracker** simplifies website traffic tracking by providing easy-to-use hooks and components for React applications. With this package, users can effortlessly monitor the overall traffic on their website and obtain detailed statistics for individual URLs.

Key features of Page Traffic Tracker include:

- **Overall Traffic Monitoring**: Use the `usePageTraffic` hook to retrieve total views, today's views, and average views for the entire website.
- **URL-Specific Traffic Analysis**: Use the `useUrlTraffic` hook to fetch traffic data for a specific URL, including total views, today's views, and average views.
- **URL Tracking Component**: The `TrackUrl` component allows users to track the traffic for a particular URL directly within their React components.

## Installation

To install Page Traffic Tracker, use `npm`:

Copy code

`npm install page-traffic-tracker`

## Usage

### 1. Collect UUID

Before using Page Traffic Tracker, users need to collect a UUID (Universally Unique Identifier) from [this website](https://pageview-tracker.vercel.app/). This UUID will be used to track the traffic on their website.

[![url=https://ibb.co/T0hW2cb](https://i.ibb.co/jw4JfhW/image.png)](https://pageview-tracker.vercel.app/)

### 2. Import Hooks

Import the necessary hooks from Page Traffic Tracker into your React components or custom hooks:

```javascript
import { usePageTraffic, useUrlTraffic } from "page-traffic-tracker";
```

### 3. Retrieve Overall Traffic Data

Use the `usePageTraffic` hook to retrieve overall traffic data for the website:

```javascript
const { totalViews, todayViews, averageView } = usePageTraffic(encryptedUUID);
```

### 4. Retrieve URL-Specific Traffic Data

Use the `useUrlTraffic` hook to retrieve traffic data for a specific URL:

```javascript
const { totalViews, todayViews, averageView } = useUrlTraffic(
  encryptedUUID,
  url
);
```

### 5. Track URL

Use the `TrackUrl` component to track the traffic for a specific URL:

```javascript
import { TrackUrl } from "page-traffic-tracker";
<TrackUrl encryptedUUID={encryptedUUID} url={url} />;
```

## Example

```javascript
import { usePageTraffic, useUrlTraffic, TrackUrl } from "page-traffic-tracker";
const MyComponent = ({ encryptedUUID, url }) => {
  const { totalViews, todayViews, averageView } = usePageTraffic(encryptedUUID);
  const {
    totalViews: urlTotalViews,
    todayViews: urlTodayViews,
    averageView: urlAverageView,
  } = useUrlTraffic(encryptedUUID, url);
  return (
    <div>
      <h2>Overall Traffic</h2>
      <p>Total Views: {totalViews}</p>
      <p>Today's Views: {todayViews}</p>
      <p>Average Views: {averageView}</p>

      <h2>URL-Specific Traffic</h2>
      <p>Total Views: {urlTotalViews}</p>
      <p>Today's Views: {urlTodayViews}</p>
      <p>Average Views: {urlAverageView}</p>
      <TrackUrl encryptedUUID={encryptedUUID} url={url} />
    </div>
  );
};
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
