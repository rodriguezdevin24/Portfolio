import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectDisplay = ({ project }) => {
  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src={project.staticImage} alt={`Static image for ${project.title}`} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <Button variant="primary" href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</Button>
        <Button variant="primary" href={project.deployedLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>Deployed</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectDisplay;
