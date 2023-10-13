import React from "react";
import "./about.css";

const Military = () => {
  return (
    <section id="military" className="military-section">
      <div className="container">
        <h1 className="military-h1">My Military Journey</h1>
        <p className="reserve-info">Currently serving in the Army Reserves with a Military Police unit and holding a secret clearance (Shh! It's a secret 😉).</p>

        <div className="award-table">
          <div className="award-section">
            <h2>Accomplishments</h2>
            <ul>
              <li>🏆 [Your accomplishment here]</li>
              <li>🎖️ [Another accomplishment]</li>
              <li>🌟 [Yet another accomplishment]</li>
            </ul>
          </div>

          <div className="award-section">
            <h2>Roles & Responsibilities</h2>
            <ul>
              <li>🔰 [Your role or responsibility here]</li>
              <li>🛡️ [Another role or responsibility]</li>
              <li>⚔️ [Yet another role or responsibility]</li>
            </ul>
          </div>

          <div className="award-section">
            <h2>Lessons Learned</h2>
            <ul>
              <li>📘 [A lesson you learned]</li>
              <li>📙 [Another lesson]</li>
              <li>📗 [It's easier to prevent things than to wait until your health gets bad! Use your body while you can!]</li>
            </ul>
          </div>

          <div className="award-section">
            <h2>Takeaways</h2>
            <ul>
              <li>💡 [A key takeaway from your service]</li>
              <li>🔍 [Another takeaway]</li>
              <li>🚀 [Yet another takeaway]</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Military;
