import * as React from 'react';

export const EmailTemplate = ({
  name, email, jobType, jobDescription
}) => (
  <div>
    <h2>Contact Information</h2>
    <h3>Name: {name}!</h3>
    <h3>Email: {email}</h3>

    <h2>Job Information</h2>
    <h3>Type: {jobType}</h3>
    <h3>Description:</h3>
    <p>{jobDescription}</p>
  </div>
);
