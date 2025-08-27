import React from "react";
import "./Services.css";

const Section = ({ title, children }) => (
  <section className="services-section">
    <h2>{title}</h2>
    {children}
  </section>
);

const ParentChecklist = () => {
  return (
    <div className="services-page">
      <div className="services-content">
        <section className="services-section" style={{ marginTop: 24 }}>
          <h1
            style={{
              textAlign: "center",
              marginTop: 0,
              fontSize: "2.5rem",
              color: "#333",
            }}
          >
            <span style={{ color: "#ff6b35" }}>Parent</span>{" "}
            <span style={{ color: "#0066cc" }}>Pre-Departure Checklist</span>
          </h1>
          <p
            style={{
              textAlign: "center",
              color: "#555",
              maxWidth: 900,
              margin: "16px auto 24px",
              fontSize: "1.1rem",
              lineHeight: "1.6",
            }}
          >
            A guide for parents to prepare their child and themselves for the
            study abroad journey.
          </p>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <a
              href="/pre-departure"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                backgroundColor: "#0066cc",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 8px rgba(0, 102, 204, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0052a3";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 12px rgba(0, 102, 204, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#0066cc";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 8px rgba(0, 102, 204, 0.3)";
              }}
            >
              🎓 View Students Checklist
            </a>
          </div>
          <div
            style={{
              background: "#f8f9fa",
              padding: "24px",
              borderRadius: "12px",
              margin: "24px 0",
              border: "1px solid #e9ecef",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <p
              style={{
                margin: 0,
                textAlign: "center",
                fontStyle: "italic",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              <strong>
                With Titan Career Solutions, you can rest assured that your
                children are in safe hands.
              </strong>
              TCS has a wide network of support system, colleagues, partners,
              and previous students, so, if your child needs any support, we are
              just a call away.
            </p>
            <p
              style={{
                margin: "16px 0 0 0",
                textAlign: "center",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              However, as a parent, there are certain things that you have to
              understand and accept to make sure that the transition and change
              is easy for both parties.
            </p>
          </div>
        </section>

        <Section title="Document Backups">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Keep copies (scanned & printed) of your child's passport, visa,
              admission letter, insurance, financial, and academic documents
            </li>
            <li>Store one emergency set safely at home</li>
            <li>
              Save a digital backup on Google Drive/Dropbox that both you and
              your child can access
            </li>
            <li>
              Note down expiry dates of passport, visa, and insurance so you can
              remind your child in advance
            </li>
            <li>
              But don't worry, TCS will have the backup file until the course
              duration, and also always email a complete set to the student's
              email ID.
            </li>
          </ul>
        </Section>

        <Section title="Emergency & Safety Planning">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Save embassy/consulate contacts, university helpline, and local
              guardians (if any)
            </li>
            <li>
              Teach your child step-by-step actions for emergencies – who to
              call, what documents to carry, how to ask for help
            </li>
            <li>
              Allow them to practice independence: official work, grocery
              shopping, paying bills, using public transport alone
            </li>
            <li>
              Share family medical history and emergency contacts with your
              child
            </li>
            <li>
              Encourage them to keep a small emergency kit (torch, whistle, mini
              first-aid)
            </li>
            <li>
              Watch some videos about daily life on their destination country so
              that both parents and students set their expectations correct
            </li>
          </ul>
        </Section>

        <Section title="Financial Arrangements">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Help set up international banking facilities and emergency fund
              transfers
            </li>
            <li>Be clear about tuition fee installment plans and deadlines</li>
            <li>
              Discuss a realistic monthly budget and set up an expense tracking
              system
            </li>
            <li>
              Understand the living costs and pre-plan for the first 3 months,
              revise and restructure if necessary – include rent, food, travel
              and miscellaneous funds
            </li>
            <li>Explain differences in living costs abroad vs. Nepal</li>
            <li>
              Monitor scholarship opportunities, part-time job rules, and tax
              obligations.
            </li>
            <li>Keep some backup funds in a joint account for quick access</li>
            <li>Be clear about fee installment plans and deadlines</li>
          </ul>
        </Section>

        <Section title="Health & Insurance">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Verify that your child's health and travel insurance covers the
              entire stay abroad
            </li>
            <li>
              Keep a copy of their medical records, vaccination card, and
              prescriptions
            </li>
            <li>
              Take out an additional insurance policy in Nepal (if possible)
            </li>
            <li>
              Ensure your child understands how to make a claim or seek medical
              help overseas
            </li>
            <li>
              Talk about mental health support options (university counsellor,
              hotlines)
            </li>
            <li>Do a complete health checkup before applying or departure</li>
            <li>
              Dental and Eye-care is generally expensive abroad, if there are
              any issues, try fixing them before departure
            </li>
          </ul>
        </Section>

        <Section title="Communication Plan">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Decide on regular check-in times (WhatsApp, Zoom, Email)</li>
            <li>
              Exchange alternate contact numbers (roommates, neighbors,
              relatives for both parents and student)
            </li>
            <li>Balance care with giving them independence and space</li>
            <li>Teach your child how to avoid phone/online scams</li>
            <li>
              Set up a shared family calendar to track important dates
              (deadlines, holidays, birthdays)
            </li>
          </ul>
        </Section>

        <Section title="Emotional Readiness">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Prepare yourself for less frequent contact due to time zones and
              busy schedules
            </li>
            <li>
              Encourage your child to learn daily life skills (cooking, laundry,
              budgeting, cleaning)
            </li>
            <li>
              Join parent support groups, online forums, university social
              handles to share experiences
            </li>
            <li>
              Accept that your child may go through culture shock or
              homesickness – listen, encourage, and support without overreacting
            </li>
            <li>
              Celebrate milestones (first assignment, part-time job,
              achievements) to stay connected emotionally
            </li>
            <li>
              Understand that your child is going through a major change, and
              has been doing great. Do not force or pressurize them, at least
              for the first few months
            </li>
            <li>Give them time to work on their future, it will be worth</li>
          </ul>
        </Section>

        <Section title="Legal & Academic Awareness">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Understand privacy laws (FERPA, GDPR) – universities may not share
              details without student consent
            </li>
            <li>
              Encourage your child to give proxy/consent access if they are
              comfortable
            </li>
            <li>
              Discuss attendance rules, grading systems, and academic honesty
              policies with your child
            </li>
            <li>
              Be aware of academic calendar for holidays, breaks, and possible
              visits
            </li>
          </ul>
        </Section>

        <Section title="Safety Discussions">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Talk about common scams, unsafe neighborhoods, and personal safety
            </li>
            <li>Teach your child how to use emergency numbers abroad</li>
            <li>
              Remind them about safe online behavior (cybersecurity, fraud
              prevention)
            </li>
            <li>
              Stress importance of road safety & public transport awareness
            </li>
            <li>
              Encourage them to always share travel plans (new city trips,
              late-night events) with family or friends
            </li>
            <li>Ensure they have access to emergency funds abroad</li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default ParentChecklist;
