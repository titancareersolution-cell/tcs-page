import React from "react";
import { useParams, Link } from "react-router-dom";
import { courseAreas, renderIcon } from "./courseAreas";
import "./Services.css";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courseAreas.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="services-page">
        <div className="services-content">
          <section className="services-section">
            <h2>Course not found</h2>
            <Link className="cta-button" to="/services">
              Back to Services
            </Link>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="services-page">
      <div className="services-content">
        <section
          className="services-section-card"
          style={{ textAlign: "center" }}
        >
          <div className="service-card-icon" style={{ margin: "0 auto" }}>
            {renderIcon(course.icon)}
          </div>
          <h1 style={{ marginTop: 12 }}>{course.title}</h1>
          <p
            className="service-card-content"
            style={{ margin: "0 auto", maxWidth: 820 }}
          >
            {course.description}
          </p>
          <div style={{ marginTop: 16 }}>
            <Link className="cta-button" to="/services#course-areas">
              Back to Course Areas
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetail;
