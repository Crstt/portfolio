import React from "react";
import Section from "../../../components/section";

const CertificationsSection: React.FC = () => (
  <Section
    id="certifications"
    title="Certifications"
    content={[
      "CompTIA Project+",
      "AWS Certified Cloud Practitioner",
      "Microsoft Technology Associate: 98-361"
    ]}
  />
);

export default CertificationsSection;
