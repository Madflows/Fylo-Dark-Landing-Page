import React from "react";
import FeatureCard from "./FeatureCard";
import access from "../images/icon-access-anywhere.svg";
import security from "../images/icon-security.svg";
import collabo from "../images/icon-collaboration.svg";
import storage from "../images/icon-any-file.svg";

function Features() {
  return (
    <div className="feature-section">
      <FeatureCard
        image={access}
        title="Access your files, anywhere"
        description="The ability to use a smartphone, tablet, or computer to access your account means your file follow you everywhere."
      />
      <FeatureCard
        image={security}
        title="Security you can trust"
        description="2-factor authentication and user-controlled encryption are just a couple of the security 
        features we allow to help secure your files."
      />
      <FeatureCard
        image={collabo}
        title="Real-time collaboration"
        description="Securely share files and folders with friends, family and colleagues for live collaboration. 
        No email attachments required."
      />
      <FeatureCard
        image={storage}
        title="Store any type of file"
        description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
        file types to be securely stored and shared."
      />
    </div>
  );
}

export default Features;
