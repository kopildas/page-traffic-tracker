# Page Traffic Tracker

## Overview

**Page Traffic Tracker** simplifies website traffic tracking by providing easy-to-use hooks and components for React applications. With this package, users can effortlessly monitor the overall traffic on their website and obtain detailed statistics for individual URLs.

Key features of Page Traffic Tracker include:

- **URL Tracking Component**: The `TrackUrl` component allows you to track the traffic for all URLs directly within your React components.
- **Overall Traffic Monitoring**: Use the `usePageTraffic` hook to retrieve total views, today's views, and average views for the entire website.
- **URL-Specific Traffic Analysis**: Use the `useUrlTraffic` hook to fetch traffic data for a specific URL, including total views, today's views, and average views.

## Installation

To install Page Traffic Tracker, use `npm`:

Copy code

```javascript
npm install page-traffic-tracker
```

## Usage

### 1. Collect UUID

Before using Page Traffic Tracker, you need to collect a UUID (Universally Unique Identifier) from [this website](https://pageview-tracker.vercel.app/). This UUID will be used to track the traffic on your website.

[![url=https://ibb.co/T0hW2cb](https://i.ibb.co/jw4JfhW/image.png)](https://pageview-tracker.vercel.app/)

### 2. Import Hooks

Import the necessary hooks from Page Traffic Tracker into your React components or custom hooks:

```javascript
import { TrackUrls, usePageTraffic, useUrlTraffic } from "page-traffic-tracker";
```

### 3. Track URL

Use the `TrackUrl` component into the `App.jsx` to track the traffic for Urls. And also pass the generated secure `id` as a props into this component.

```javascript
<TrackUrl id={id} />
```

### 4. Retrieve Overall Traffic Data

Use the `usePageTraffic` hook to retrieve overall traffic data for the website. And also pass the generated secure `id` as an argument, which allows the hook to retrieve data specific to that page or resource.

```javascript
const { totalViews, todayViews, averageView, allUrls } = usePageTraffic(id);
```

Understanding the Data:

- **totalViews:** This holds the total visits to the whole website.
- **todayViews:** This holds the number of Visits to the same website on the current day.
- **averageView:** This stores the average views per visit for that particular website.
- **allUrls:** An array containing URLs associated with the retrieved data (linked URLs or different versions).

### 5. Retrieve URL-Specific Traffic Data

Use the `useUrlTraffic` hook to retrieve traffic data for a specific URL. And also pass the generated secure `id` and `url` as arguments into this hooks.

```javascript
const { totalUrlViews, todayUrlViews, averageUrlView } = useUrlTraffic(id, url);
```
Understanding the Data:

- **totalUrlViews:** This holds the total visits to the specific URL.
- **todayUrlViews:** This holds the number of visits to the same URL on the current day.
- **averageUrlView:** This stores the average views per visit for that specific URL.

## Example

###### 1. First initialize the `TrackUrls` component into the `APP.jsx` to track all the urls

```javascript
import { TrackUrls } from "page-traffic-tracker";

function App() {
  const id = "Your generated secure user id from https://pageview-tracker.vercel.app/";

  return (
    <div className="w-screen h-auto flex flex-col  bg-shades-1">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <TrackUrls id={id} />;
      </Router>
    </div>
  );
}
```

###### 2. Then use those `usePageTraffic` and `useUrlTraffic` hooks to retrieve the urls all traffic data.

```javascript
import { usePageTraffic, useUrlTraffic } from "page-traffic-tracker";

const MyComponent = () => {
  const id = "Your generated secure user id from https://pageview-tracker.vercel.app/";
  const { totalViews, todayViews, averageView, allUrls } = usePageTraffic( id );

  const url = "/";
  const { totalUrlViews, todayUrlViews, averageUrlView } = useUrlTraffic( id, url );

  return (
    <div>
      <h2>Overall Traffic</h2>
      <p>Total Views: {totalViews}</p>
      <p>Today's Views: {todayViews}</p>
      <p>Average Views: {averageView}</p>
      <p>All urls: </p>
      <ul>
        {allUrls.map((url) => (
          <li key={url}>{url}</li>
        ))}
      </ul>

      <h2>URL-Specific Traffic</h2>
      <p>Total Views: {totalUrlViews}</p>
      <p>Today's Views: {todayUrlViews}</p>
      <p>Average Views: {averageUrlView}</p>
    </div>
  );
};
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
