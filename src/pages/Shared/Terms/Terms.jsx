import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="container text-center py-5">
      <h2>Website Terms and Conditions</h2>
      <article className="my-5 text-start">
        <p>
          Website terms and conditions (also known as "terms of use" or "terms
          of service") are a set of rules and guidelines that govern the use of
          a website. These terms and conditions typically outline the website's
          rules, policies, and limitations, and establish the legal agreement
          between the website owner and its users.
        </p>

        <p>
          The terms and conditions of a website can cover a wide range of
          topics, including user conduct, intellectual property rights,
          disclaimers and limitations of liability, payment and billing
          policies, and privacy policies. It is important for website owners to
          clearly articulate these policies to users in order to establish
          expectations and minimize potential legal disputes.
        </p>

        <p>
          In addition to outlining the website's policies and rules, website
          terms and conditions may also specify the jurisdiction and applicable
          law that governs the agreement, and provide information about how
          disputes will be resolved. This information is typically included in a
          "dispute resolution" or "governing law" section of the terms and
          conditions.
        </p>

        <p>
          Overall, website terms and conditions are an important legal document
          that help protect both the website owner and its users. By clearly
          defining the rights and responsibilities of each party, website terms
          and conditions can help minimize misunderstandings and potential legal
          disputes.
        </p>
      </article>
      <Link to="/register">
        <Button variant="danger" className="px-4 py-2 fw-semibold">
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default Terms;
