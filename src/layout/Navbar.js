import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar-container">
        <div>
          <Link className="navbar-brand" to="/">
            Easy Voting!!
          </Link>
        </div>
        <div className="navbar-buttons">
          <Link className="btn" to="/adduser">
            Add Vote
          </Link>
        </div>
      </nav>
      <div className="cards-container">
        <div className="card">
          <h3 className="card-title">The Importance of Voting</h3>
          <p className="card-description">
            Voting is a fundamental right and a crucial way for individuals to express their opinions and shape the future of their communities and nations. It allows citizens to have a say in the decision-making process and elect representatives who will act on their behalf. By participating in elections, you can contribute to the democratic process and make a difference in issues that matter to you.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">The Voting Process</h3>
          <p className="card-description">
            The voting process involves several steps to ensure a fair and transparent election. It typically includes voter registration, verification of voter eligibility, the casting of votes through various methods such as in-person or mail-in ballots, and the counting and tabulation of votes. Understanding the voting process is essential to effectively exercise your right to vote and have your voice heard.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Your Vote Matters</h3>
          <p className="card-description">
            Every vote matters. Your vote can sway the outcome of an election and determine the direction of policies and governance. It is an opportunity to influence decisions that impact society, including issues like education, healthcare, infrastructure, and more. By exercising your right to vote, you play an active role in shaping the future and making a positive impact on your community.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">The Power of Democracy</h3>
          <p className="card-description">
            Democracy empowers citizens to participate in the governance of their country. Through the act of voting, individuals can express their values and priorities, hold elected officials accountable, and drive positive change. By actively engaging in the democratic process, you contribute to the collective decision-making that shapes the society we live in.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Making an Informed Choice</h3>
          <p className="card-description">
            When voting, it is essential to gather information about candidates, their policies, and their track record. Making an informed choice allows you to align your vote with your values and select candidates who best represent your interests. Take the time to research and evaluate candidates' positions on various issues to make a meaningful impact through your vote.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title"><center>Participation</center></h3>
          <p className="card-description">
          Civic participation goes beyond voting. Engaging in community activities, joining public discussions, and staying informed about local and national issues are all important aspects of being an active citizen. By participating in civic life, you can contribute to positive changes, foster dialogue, and
            </p>
        </div>
      </div>
    </div>
  );
}
