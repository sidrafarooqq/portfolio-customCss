'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const Projects = () => {
  const route = useRouter();
  
  return (
    <div className="projects-page">
      <div className="text-center">
        <p className="text-lg mb-8 pt-7">
          Command-Line Interface (CLI) Projects
          <br />
          Below are some of the CLI-based projects I ve developed, 
          <br />showcasing my skills.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Calculator */}
        <div className="flex items-center">
          <a
            href="https://www.npmjs.com/package/s6ra3_calculator"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/s6ra3_calculator
          </a>
        </div>
        {/* Number Guessing Game */}
        <div className="flex items-center">
          <a
            href="https://www.npmjs.com/package/sidra_farooq_cli_number_guessing"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/sidra_farooq_cli_number_guessing
          </a>
        </div>
        {/* ATM */}
        <div className="flex items-center">
          <a
            href="https://www.npmjs.com/package/sidra_cli_atm"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/sidra_cli_atm
          </a>
        </div>
        {/* Todo List */}
        <div className="flex items-center">
          <a
            href="https://www.npmjs.com/package/siddz123-todooo-app"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/siddz123-todooo-app
          </a>
        </div>
        {/* Word Counter */}
        <div className="flex items-center">
          <a
            href="https://www.npmjs.com/package/sd_word_counter"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/sd_word_counter
          </a>
        </div>
        {/* Countdown Timer */}
        <div className="flex items-center">
          <a
            href="https://www.npmjs.com/package/sid_countdown_timer"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/sid_countdown_timer
          </a>
        </div>
        {/* Adventure Game */}
        <div className="flex items-center">
          <a
            href="https://www.npmjs.com/package/sid_adventure_game"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/sid_adventure_game
          </a>
        </div>
        {/* Amazon Website */}
        <div className="flex items-center">
          <a
            href="https://github.com/sidrafarooqq/portfolio.git"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/sidrafarooqq/portfolio.git
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;