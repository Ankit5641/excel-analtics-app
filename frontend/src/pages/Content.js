import React from "react";
import "../styles/Content.css";

const chartData = [
  {
    title: "Bar Chart Overview",
    description:
      "Bar charts are useful for comparing quantities of different categories. They make it easy to see which category is the largest or smallest.",
    linkText: "Learn how to create a bar chart in Excel",
  },
  {
    title: "Line Chart Trends",
    description:
      "Line charts are ideal for showing trends over time. They're commonly used for financial, sales, and scientific data.",
    linkText: "Explore line chart examples and use cases",
  },
  {
    title: "Pie Chart Distribution",
    description:
      "Pie charts are perfect for visualizing part-to-whole relationships. Each slice shows the proportion of a category.",
    linkText: "Master pie chart formatting and design",
  },
  {
    title: "Combo Charts Explained",
    description:
      "Combo charts allow you to combine two different types of charts in one. Great for highlighting different data series with separate axes.",
    linkText: "Discover how to create a combo chart in Excel",
  },
];

const Content = () => {
  return (
    <div className="content-container">
      <h1 className="content-heading">Explore Excel Charts</h1>
      <div className="card-grid">
        {chartData.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <br/>
      <div className="footer-grid">
        <ul>
          <li>Developer: Ankit Kumar Singh</li>
          <li>© Copyright</li>
          <li>Email: ankitrajput5641@gmail.com</li>
          <li>Call me: 7979027302</li>
          <li>Thank You....!</li>
        </ul>
      </div>
    </div>
  );
};

export default Content;
