import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ title, subtitle, cta }) => (
  <div className="text-center mb-8">
    {title && (
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        {title}
      </h1>
    )}
    {subtitle && (
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    )}
    {cta && <div className="mt-6">{cta}</div>}
  </div>
);

const PageLayout = ({ children, title, subtitle, cta, narrow = false }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div
        className={`${
          narrow ? "max-w-3xl" : "max-w-7xl"
        } mx-auto px-4 sm:px-6 lg:px-8`}>
        <PageHeader title={title} subtitle={subtitle} cta={cta} />
        <div className="bg-white rounded-2xl shadow-sm p-6">{children}</div>
      </div>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.node,
  narrow: PropTypes.bool,
};

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.node,
};

export default PageLayout;

