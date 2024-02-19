/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";
const imageAltText = "A desk with a plant, earpods, a locked smartphone, a pencil and a spectacle";

import bgimage from "../images/projects.avif";
const bgimageAltText = "blue water colour background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
    {
        title: "BookFlow Web App",
        description:
          "BookFlow is a library management app that allows users to seamlessly manage book borrowing and returns using QR code scanning. \
          This app aims to provide an efficient way to interact with library resources without the need for direct librarian involvement.",
        url: "https://github.com/qaidjoharj53/Bookflow-app",
      },
      {
        title: "Blood Bridge",
        description:
          "Our full-stack website project simplifies the process of blood donation, making it accessible to everyone. \
          With its responsive design and user-friendly interface, Blood Bridge empowers donors and recipients alike.",
        url: "https://github.com/qaidjoharj53/Blood-Bridge",
      },
      {
        title: "Unicorn Runner",
        description:
          "Unicorn Runner is an exciting and whimsical game created using Scratch, inspired by the classic Chrome's Dino Game. \
          In this alternate version, you'll guide a magnificent white unicorn horse through a magical landscape, jumping over trees and escaping bats that serve as hurdles. Get ready for a fun and enchanting adventure!",
        url: "https://github.com/qaidjoharj53/Projects/tree/main/Unicorn%20Runner",
      },
      {
        title: "My CV",
        description:
          "Alpha Microsoft Student Ambassador | Postman Student Expert | Cyber-Security Enthusiast | AI/ML | Hactoberfest'23 || BTech'26 Student",
        url: "../images/CV.pdf",
      },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
        <img className="background" src={bgimage} alt={bgimageAltText} />
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", paddingTop: "3rem" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", borderRadius: "400px" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
