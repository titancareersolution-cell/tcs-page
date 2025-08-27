import React from "react";
import "./Services.css";

const Section = ({ title, children }) => (
  <section className="services-section">
    <h2>{title}</h2>
    {children}
  </section>
);

const PreDeparture = () => {
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
            <span style={{ color: "#ff6b35" }}>Students</span>{" "}
            <span style={{ color: "#0066cc" }}>Departure Checklist</span>
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
            A detailed, destination‑neutral guide for students traveling abroad
            for higher education. Please note that this is a generic checklist,
            only as a guide to students.
          </p>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <a
              href="/parent-checklist"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                backgroundColor: "#ff6b35",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 8px rgba(255, 107, 53, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#e55a2b";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 12px rgba(255, 107, 53, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#ff6b35";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 8px rgba(255, 107, 53, 0.3)";
              }}
            >
              📋 View Parents Checklist
            </a>
          </div>
        </section>

        <Section title="Essential Documents (Carry in Cabin Bag)">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Passport with valid Student Visa/Entry Clearance</li>
            <li>
              University Offer / Admission Letter (CAS, COE, LOA, or equivalent)
            </li>
            <li>Visa Grant Letter / Entry Approval (if applicable)</li>
            <li>Proof of Tuition Fee Payment (receipts / bank swift)</li>
            <li>Flight Tickets (printed + digital copy)</li>
            <li>
              Accommodation Confirmation (hostel, homestay, rental agreement)
            </li>
            <li>Health & Travel Insurance documents</li>
            <li>
              Academic Certificates & Transcripts (originals + photocopies)
            </li>
            <li>Language Test Results (IELTS, TOEFL, PTE – if required)</li>
            <li>
              Vaccination Records (COVID‑19 and other required immunizations)
            </li>
            <li>Police Clearance Certificate (recommended)</li>
            <li>No Objection Letter</li>
            <li>Bank Statements / Financial Proof used for visa</li>
            <li>
              10–12 Passport‑sized Photos (recommended, destination‑specific
              size)
            </li>
            <li>Driver's License / International Driving Permit (optional)</li>
            <li>
              Birth Certificate, Citizenship, other IDs (photocopies
              recommended)
            </li>
            <li>
              Multiple scanned & backed‑up copies of all documents (USB + cloud
              storage)
            </li>
            <li>CVs and Resumes</li>
          </ul>
        </Section>

        <Section title="Finance & Banking">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Carry USD 200–300 (or equivalent) in cash for initial expenses
            </li>
            <li>
              Local currency of destination (small bills for taxis, meals)
            </li>
            <li>International Debit/Credit Card (enabled for overseas use)</li>
            <li>Forex/Prepaid Travel Card (optional but useful)</li>
            <li>Notify your bank about international travel</li>
            <li>
              Research how to open a student bank account in your destination
            </li>
            <li>Keep emergency funds separate from daily expenses</li>
            <li>Save receipts of currency exchange for future reference</li>
            <li>Prepare a personal 3‑month budget plan in advance</li>
          </ul>
        </Section>

        <Section title="Electronics & Gadgets">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Laptop with charger (carry purchase invoice for customs, if
              possible)
            </li>
            <li>Mobile Phone + charger + protective cover</li>
            <li>Universal Travel Adapter (multi‑country recommended)</li>
            <li>Power Bank (within airline watt‑hour limits)</li>
            <li>USB Drive / External HDD or SSD (for backups)</li>
            <li>Headphones / Earphones</li>
            <li>Portable Extension Cord / Multi‑socket board</li>
            <li>Optional: Tablet, Kindle, Camera, Smartwatch</li>
            <li>Any Medical Aid devices (if applicable)</li>
          </ul>
        </Section>

        <Section title="Clothing & Footwear">
          <p>
            Check your destination's weather before packing. Also, don't buy too
            much clothing. It is very likely that what you buy in Nepal may not
            be weather‑appropriate for your destination.
          </p>
          <h3>Winter Wear (if applicable)</h3>
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Waterproof heavy jacket</li>
            <li>2–3 Thermal innerwear sets</li>
            <li>Woolen sweaters/hoodies</li>
            <li>Cap, gloves, scarf</li>
            <li>Raincoat / Umbrella</li>
          </ul>
          <h3>General Clothing</h3>
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>5–7 Casual T‑shirts/Shirts</li>
            <li>3–5 Jeans/Trousers</li>
            <li>2–3 Formal Shirts/Pants</li>
            <li>Sleepwear</li>
            <li>1 Traditional/Cultural Outfit</li>
            <li>Sportswear / Gym clothing</li>
          </ul>
          <h3>Male Students</h3>
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Undergarments (7+ pairs)</li>
            <li>Socks (7+ pairs)</li>
            <li>Belt(s)</li>
            <li>Tie (for formal wear)</li>
          </ul>
          <h3>Female Students</h3>
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Undergarments (7+ pairs)</li>
            <li>Leggings/Stockings (for layering in winter)</li>
            <li>Shawls/Stoles (for layering/modesty)</li>
            <li>Sanitary products (first 2–3 months)</li>
            <li>Hair accessories, clips, styling items</li>
            <li>Makeup and skincare products (basic set)</li>
          </ul>
          <h3>Footwear (for all students)</h3>
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Comfortable casual shoes</li>
            <li>Sports shoes</li>
            <li>Slippers/Flip‑flops</li>
            <li>Formal shoes</li>
          </ul>
        </Section>

        <Section title="Toiletries & Personal Care (100ml cabin rule applies)">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Toothbrush, Toothpaste, Floss</li>
            <li>Shampoo, Conditioner, Soap/Body Wash</li>
            <li>Deodorant / Perfume (travel‑size)</li>
            <li>Comb/Brush, Nail Cutter, Hair products</li>
            <li>Sunscreen, Lip Balm, Moisturizer</li>
            <li>Hand Sanitizer, Face & Wet Wipes</li>
            <li>Towels (quick‑dry), Hand Towels</li>
            <li>Laundry Bag + detergent pods</li>
          </ul>
          <h3>Male Students</h3>
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Shaving Kit / Beard Trimmer</li>
            <li>Aftershave / Grooming Products</li>
          </ul>
          <h3>Female Students</h3>
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Sanitary Pads / Tampons / Menstrual Cup (2–3 months' supply)
            </li>
            <li>Hair ties, clips, styling accessories</li>
            <li>Light Makeup Kit & Cultural Accessories</li>
          </ul>
        </Section>

        <Section title="Medicines & Health Kit">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Basic Medicines: Paracetamol, Antacids, Antihistamines, Cold/Flu
              relief
            </li>
            <li>
              Prescription Medicines (3‑month supply if allowed) + Doctor's
              prescription letter
            </li>
            <li>First Aid Kit: Band‑aids, antiseptic cream, thermometer</li>
            <li>Vitamins/Supplements (if required)</li>
            <li>
              Medical Face Masks (recommended for long flights and crowded
              areas)
            </li>
          </ul>
        </Section>

        <Section title="Miscellaneous Must‑Haves">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Spectacles + extra pair / Contact lenses</li>
            <li>Sunglasses (UV protection)</li>
            <li>Locks for luggage / hostel locker</li>
            <li>Stationery (notebooks, pens, folders)</li>
            <li>Backpack / College Bag</li>
            <li>Ziplock Bags (for small items, documents)</li>
            <li>Sewing Kit, Safety Pins</li>
            <li>Small utensils (plate, bowl, spoon, mug – optional)</li>
            <li>Small packets of local spices/snacks</li>
            <li>Compact pressure cooker (optional, destination dependent)</li>
            <li>Family Photos or souvenirs</li>
          </ul>
        </Section>

        <Section title="Digital Preparation">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Destination Country SIM Card (e‑SIM or buy on arrival)</li>
            <li>
              Download key apps: maps, ride‑sharing, public transport,
              university portal, immigration apps
            </li>
            <li>Offline Maps & Translation Apps</li>
            <li>Enable 2FA (Two‑Factor Authentication) on email & banking</li>
            <li>Update recovery email/phone number</li>
            <li>Scan & backup all important documents to cloud storage</li>
          </ul>
        </Section>

        <Section title="Before You Leave">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Confirm airport transport & check‑in timing</li>
            <li>
              Verify baggage allowance (check extra baggage policies for
              students)
            </li>
            <li>Label all luggage with Name + Address + Contact Number</li>
            <li>
              Carry a printed copy of university address & local contact info
            </li>
            <li>Share flight details with family, friends & university</li>
            <li>Join WhatsApp/Facebook groups for your university or city</li>
            <li>Learn basic emergency phrases in the local language</li>
            <li>Double‑check travel insurance coverage & validity</li>
          </ul>
        </Section>

        <Section title="Other Key Considerations">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>Attend university's and TCS's pre‑departure sessions</li>
            <li>Research public transport from airport to accommodation</li>
            <li>Practice using local payment apps</li>
            <li>Keep embassy/consulate & university helpline numbers handy</li>
            <li>Inform family/agent about your local emergency contact</li>
            <li>Avoid complex layovers if traveling first time abroad</li>
            <li>Travel with a buddy/group if possible</li>
            <li>Arrange an airport pickup when possible</li>
            <li>Never carry items for unknown passengers</li>
            <li>
              Learn cultural etiquette, laws, and do's & don'ts of destination
            </li>
            <li>Prepare for culture shock & homesickness—join communities</li>
            <li>Carry confidence, patience, and adaptability!</li>
          </ul>
        </Section>

        <Section title="Things To Do After Arriving Abroad">
          <ul
            className="benefits-list"
            style={{ listStyle: "disc", paddingLeft: 24 }}
          >
            <li>
              Clear Immigration & Customs — Keep passport, visa, admission
              letter, and proof of funds ready; declare items if required
            </li>
            <li>
              Arrange Airport Transfer — use pre‑booked pickup or safe transport
            </li>
            <li>Notify family/agents once landed safely</li>
            <li>
              Check Into Accommodation — document existing damages; collect
              keys, contracts, and emergency info
            </li>
            <li>
              Buy a Local SIM / Activate eSIM — choose student‑friendly package
            </li>
            <li>Complete any required local registrations</li>
            <li>
              Attend University Orientation — get ID card, portals, class
              schedule
            </li>
            <li>Meet advisors and student support staff</li>
            <li>Get Public Transport & Essentials Sorted</li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default PreDeparture;
